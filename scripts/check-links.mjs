#!/usr/bin/env node
/**
 * Link checker.
 *
 * Audits every link and asset path in the codebase and reports anything that
 * cannot resolve. Three categories are checked:
 *
 *   internal routes  – href="/services/printing" must map to an app/ route
 *   asset paths      – src="/events/galas/gallery/1.jpg" must exist in public/
 *   external URLs    – https://... are fetched (HEAD, falling back to GET)
 *
 * mailto: and tel: links are validated for format only. Anchors (#rfp) are
 * checked against ids declared in the same file.
 *
 * Usage:
 *   npm run check:links                 # internal + assets only (fast, offline)
 *   npm run check:links -- --external   # also verify external URLs over network
 *   npm run check:links -- --json
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const APP_DIR = path.join(ROOT, 'app');

const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);
const CHECK_EXTERNAL = has('external');
const AS_JSON = has('json');

const SRC_DIRS = ['app', 'components', 'sections', 'data', 'lib'];
const CODE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs']);

const rel = (abs) => path.relative(ROOT, abs).split(path.sep).join('/');

async function walk(dir, filter) {
  const out = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full, filter)));
    else if (!filter || filter(e.name)) out.push(full);
  }
  return out;
}

/** Collect every route the App Router will serve. */
async function collectRoutes() {
  const routes = new Set();
  const files = await walk(APP_DIR, (n) => n === 'page.tsx' || n === 'page.ts');
  for (const f of files) {
    let r = path.relative(APP_DIR, path.dirname(f)).split(path.sep).join('/');
    // strip route groups like (marketing)
    r = r
      .split('/')
      .filter((seg) => !(seg.startsWith('(') && seg.endsWith(')')))
      .join('/');
    routes.add('/' + r === '/' ? '/' : '/' + r);
  }
  routes.add('/');
  return routes;
}

/** Does a route match, allowing for dynamic [param] segments? */
function routeMatches(target, routes) {
  if (routes.has(target)) return true;
  const tSeg = target.split('/').filter(Boolean);
  for (const r of routes) {
    const rSeg = r.split('/').filter(Boolean);
    if (rSeg.length !== tSeg.length) continue;
    if (rSeg.every((s, i) => s.startsWith('[') || s === tSeg[i])) return true;
  }
  return false;
}

async function main() {
  const routes = await collectRoutes();

  const srcFiles = [];
  for (const d of SRC_DIRS) {
    srcFiles.push(
      ...(await walk(path.join(ROOT, d), (n) => CODE_EXTS.has(path.extname(n))))
    );
  }

  const problems = [];
  const warnings = [];
  const external = new Map(); // url -> [locations]
  let checkedInternal = 0;
  let checkedAssets = 0;

  // Collect every id="..." declared anywhere. An anchor link usually points at
  // a section rendered by a sibling component on the same page, not by the file
  // containing the link, so anchors are validated against the whole project.
  const textByFile = new Map();
  const allIds = new Set();
  for (const f of srcFiles) {
    const t = await fs.readFile(f, 'utf8');
    textByFile.set(f, t);
    [...t.matchAll(/\bid=["']([^"']+)["']/g)].forEach((m) => allIds.add(m[1]));
  }

  const ASSET_RE = /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ico|pdf|woff2?)$/i;

  for (const f of srcFiles) {
    const text = textByFile.get(f);
    const lines = text.split('\n');

    lines.forEach((line, i) => {
      const loc = `${rel(f)}:${i + 1}`;

      // href="..." | src="..." | videoSrc="..." | image="..." | avatar: "..."
      const re =
        /(?:href|src|videoSrc|image|backgroundImage|avatar|poster)\s*[=:]\s*["'`]([^"'`]+)["'`]/g;
      let m;
      while ((m = re.exec(line))) {
        const url = m[1].trim();
        if (!url || url.startsWith('${') || url.includes('${')) continue; // dynamic

        if (url.startsWith('http://') || url.startsWith('https://')) {
          if (!external.has(url)) external.set(url, []);
          external.get(url).push(loc);
          continue;
        }
        if (url.startsWith('mailto:')) {
          const addr = url.slice(7);
          if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr))
            problems.push({ type: 'mailto', url, loc, why: 'malformed address' });
          continue;
        }
        if (url.startsWith('tel:')) {
          if (!/^tel:[+0-9(). -]+$/.test(url))
            problems.push({ type: 'tel', url, loc, why: 'malformed number' });
          continue;
        }
        if (url.startsWith('#')) {
          const id = url.slice(1);
          if (id && !allIds.has(id))
            problems.push({ type: 'anchor', url, loc, why: `no id="${id}" declared anywhere` });
          continue;
        }
        if (!url.startsWith('/')) continue; // relative import or non-URL

        const clean = url.split('#')[0].split('?')[0];

        if (ASSET_RE.test(clean)) {
          // Existence is verified in the async pass below.
          checkedAssets++;
        } else {
          checkedInternal++;
          if (!routeMatches(clean, routes))
            problems.push({ type: 'route', url: clean, loc, why: 'no matching page in app/' });
        }
      }
    });
  }

  // Asset existence needs await, which the synchronous scan above cannot do.
  const assetProblems = [];
  for (const f of srcFiles) {
    const text = textByFile.get(f);
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const re =
        /(?:href|src|videoSrc|image|backgroundImage|avatar|poster)\s*[=:]\s*["'`]([^"'`]+)["'`]/g;
      let m;
      while ((m = re.exec(lines[i]))) {
        const url = m[1].trim();
        if (!url.startsWith('/') || url.includes('${')) continue;
        const clean = url.split('#')[0].split('?')[0];
        if (!ASSET_RE.test(clean)) continue;
        try {
          await fs.access(path.join(PUBLIC_DIR, decodeURI(clean)));
        } catch {
          assetProblems.push({
            type: 'asset',
            url: clean,
            loc: `${rel(f)}:${i + 1}`,
            why: 'file not found in public/',
          });
        }
      }
    }
  }
  problems.push(...assetProblems);

  // ---- external ----
  // Some hosts block automated requests outright. A 403 from these is
  // anti-bot protection rather than a dead link, so it is reported as a
  // warning instead of a failure.
  const BOT_BLOCKED = [/(^|\.)indeed\.com$/i, /(^|\.)linkedin\.com$/i, /(^|\.)facebook\.com$/i, /(^|\.)instagram\.com$/i];
  const externalResults = [];
  if (CHECK_EXTERNAL) {
    for (const [url, locs] of external) {
      let status = 0;
      let err = '';
      try {
        let res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
        if (res.status === 405 || res.status === 403 || res.status === 501) {
          res = await fetch(url, { method: 'GET', redirect: 'follow' });
        }
        status = res.status;
      } catch (e) {
        err = e.message;
      }
      let host = '';
      try {
        host = new URL(url).hostname;
      } catch {
        /* leave blank */
      }
      const botBlocked =
        status === 403 && BOT_BLOCKED.some((re) => re.test(host));

      const ok = (status >= 200 && status < 400) || botBlocked;
      externalResults.push({ url, status, err, ok, botBlocked, locs });

      if (botBlocked) {
        warnings.push({
          type: 'external',
          url,
          loc: locs[0],
          why: `HTTP 403 from ${host} (anti-bot, link is likely fine — verify by hand)`,
        });
      } else if (!ok) {
        problems.push({
          type: 'external',
          url,
          loc: locs[0],
          why: err || `HTTP ${status}`,
        });
      }
    }
  }

  if (AS_JSON) {
    console.log(JSON.stringify({ problems, warnings, externalResults }, null, 2));
    return;
  }

  console.log(`\n  Link checker\n`);
  console.log(`  routes found:     ${routes.size}`);
  console.log(`  internal links:   ${checkedInternal}`);
  console.log(`  asset paths:      ${checkedAssets}`);
  console.log(`  external urls:    ${external.size}${CHECK_EXTERNAL ? '' : '  (not checked — pass --external)'}`);

  if (warnings.length) {
    console.log(`\n  ── WARNINGS (${warnings.length}) ──`);
    warnings.forEach((w) => console.log(`     ! ${w.url}\n         ${w.loc}  ${w.why}`));
  }

  const byType = {};
  problems.forEach((p) => (byType[p.type] = (byType[p.type] || []).concat(p)));

  if (!problems.length) {
    console.log(`\n  No broken links found.\n`);
    return;
  }

  for (const [type, list] of Object.entries(byType)) {
    console.log(`\n  ── ${type.toUpperCase()} (${list.length}) ──`);
    list.forEach((p) => console.log(`     x ${p.url}\n         ${p.loc}  ${p.why}`));
  }

  console.log(`\n  ${problems.length} problem(s) found.\n`);
  process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
