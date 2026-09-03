/**
 * Regenerates every placeholder image in `public/`.
 *
 * `scripts/placeholder-manifest.json` is the spec: one entry per asset the
 * design team still owes us, giving the page it belongs to, the slot it fills,
 * and the pixel size it should be delivered at. This script renders each entry
 * to disk, so the file sitting in `public/` always states its own requirement.
 *
 *   npm run assets:placeholders           regenerate everything
 *   npm run assets:placeholders -- --check report which entries are missing
 *   npm run assets:placeholders -- home    only entries under public/home
 *
 * Real photography is never touched. An entry whose file on disk is no longer
 * a placeholder (because the real asset has been dropped in) is skipped unless
 * you pass --force, which is what makes this safe to run at any point.
 */
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writePlaceholder } from "./lib/placeholder.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const MANIFEST = path.join(HERE, "placeholder-manifest.json");
const PUBLIC = path.join(ROOT, "public");

/**
 * A generated placeholder is a palettised PNG in a narrow size band. Anything
 * much larger is a real asset that has been delivered, and we leave it alone.
 */
const PLACEHOLDER_MAX_BYTES = 400 * 1024;

function eyebrowFor(page) {
  return page.split("/").join(" / ").toUpperCase();
}

async function main() {
  const argv = process.argv.slice(2);
  const check = argv.includes("--check");
  const force = argv.includes("--force");
  const filters = argv.filter((arg) => !arg.startsWith("--"));

  const entries = JSON.parse(await fsp.readFile(MANIFEST, "utf8")).filter(
    (entry) =>
      filters.length === 0 ||
      filters.some((filter) => entry.target.includes(filter))
  );

  let written = 0;
  let skipped = 0;
  let missing = 0;

  for (const entry of entries) {
    const destination = path.join(PUBLIC, entry.target.replace(/^\//, ""));
    const exists = fs.existsSync(destination);

    if (!exists) missing += 1;

    if (check) continue;

    if (exists && !force) {
      const { size } = await fsp.stat(destination);
      const generated = /\.(png|gif)$/i.test(destination);
      if (!generated || size > PLACEHOLDER_MAX_BYTES) {
        // A real asset has landed here. Leave it be.
        skipped += 1;
        continue;
      }
    }

    await writePlaceholder(destination, {
      width: entry.width,
      height: entry.height,
      eyebrow: eyebrowFor(entry.page),
      slot: entry.label,
      kind: entry.kind,
    });
    written += 1;
  }

  if (check) {
    console.log(
      `${entries.length} placeholder slots in the manifest, ${missing} not on disk`
    );
    if (missing > 0) process.exitCode = 1;
    return;
  }

  console.log(
    `placeholders written: ${written}\nleft alone (real asset present): ${skipped}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
