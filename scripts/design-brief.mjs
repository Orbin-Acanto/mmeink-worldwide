/**
 * Writes DESIGN_BRIEF.md, the photography and video request for the design
 * team.
 *
 * Everything in it is read from the repository rather than typed by hand: the
 * slots still waiting on an asset come from `scripts/placeholder-manifest.json`,
 * and the description of each frame comes from the alt text and card titles in
 * `data/index.tsx`, so the brief and the site can never disagree.
 *
 *   npm run assets:brief
 */
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const PUBLIC = path.join(ROOT, "public");
const SITE = "https://mmeink-worldwide-production.up.railway.app";

/* ------------------------------------------------------------------ */
/* Page identity                                                       */
/* ------------------------------------------------------------------ */

/** page key -> [display name, route] */
const PAGES = {
  home: ["Home", "/"],
  about: ["About Us", "/about"],
  "about/sizzle-reel": ["Sizzle Reel", "/about/sizzle-reel"],
  "about/brochure": ["Digital Brochure", "/about/brochure"],
  work: ["Our Work", "/work"],
  "work/project-details": ["Project Detail Template", "/work/work-details"],
  contact: ["Let Us Connect", "/contact"],
  services: ["Services Overview", "/services"],
  "services/custom-fabrication": [
    "Custom Fabrication",
    "/services/custom-fabrication",
  ],
  "services/printing": ["Printing", "/services/printing"],
  "services/audio-visual": ["Audio Visual", "/services/audio-visual"],
  "services/lighting": ["Lighting", "/services/lighting"],
  "services/staging": ["Staging", "/services/staging"],
  "services/design-decor": ["Design and Decor", "/services/design-decor"],
  "services/themes": ["Themes", "/services/themes"],
  "services/props": ["Props", "/services/props"],
  "services/rentals": ["Rentals", "/services/rentals"],
  "services/musical-entertainment": [
    "Musical Entertainment",
    "/services/musical-entertainment",
  ],
  "services/entertainment": ["Entertainment", "/services/entertainment"],
  "services/specialty-entertainment": [
    "Specialty Entertainment",
    "/services/specialty-entertainment",
  ],
  "services/logistics": ["Logistics", "/services/logistics"],
  events: ["Events Overview", "/events"],
  "events/brand-activations": [
    "Brand Activations",
    "/events/brand-activations",
  ],
  "events/product-launches": ["Product Launches", "/events/product-launches"],
  "events/exhibits-trade-shows": [
    "Exhibitions & Trade Shows",
    "/events/exhibits-trade-shows",
  ],
  "events/conferences-meetings": [
    "Conferences and Meetings",
    "/events/conferences-meetings",
  ],
  "events/award-dinners": ["Award Dinners", "/events/award-dinners"],
  "events/galas": ["Galas", "/events/galas"],
  "events/corporate-events": ["Corporate Events", "/events/corporate-events"],
  "events/themed-events": ["Themed Events", "/events/themed-events"],
  "events/seasonal-events": ["Seasonal Events", "/events/seasonal-events"],
  "events/virtual-hybrid-events": [
    "Virtual and Hybrid Events",
    "/events/virtual-hybrid-events",
  ],
};

/** Order the brief walks the site in. */
const PAGE_ORDER = Object.keys(PAGES);

/* ------------------------------------------------------------------ */
/* Slot guidance                                                       */
/* ------------------------------------------------------------------ */

/** What each kind of slot is for, used when no per image note exists. */
const SLOT_GUIDANCE = {
  heroVideo:
    "Background film for the hero at the top of the page. Silent, no captions, no burnt in text.",
  heroImage:
    "Full width hero across the top of the page. Wide establishing shot with the headline sitting over the middle, so keep the centre clear.",
  ctaBackground:
    "Wide banner behind the closing call to action. Mid to dark tone so white type stays readable.",
  gallery: "Gallery frame.",
  caseStudy:
    "Frame in the case study carousel. All frames in this folder should come from the same event.",
  offerCard: "Capability card in the What We Offer strip.",
  offeringTile: "Tile in the What We Do grid.",
  motionLoop:
    "Short animated loop for a capability card. Two to four seconds, seamless, no audio.",
  cardSquare: "Square card on the overview grid.",
  marquee: "Frame in the scrolling band of client projects.",
  workCard: "Tall card in the featured work stack.",
  workGrid: "Project card in the Our Work grid.",
  related: "Card in the related projects row.",
  featuredSlide: "Tall slide in the rotating project showcase.",
  teamPortrait:
    "Head and shoulders portrait, shot straight on, cropped to a square and displayed as a circle.",
  sectionBackground:
    "Wide background behind a section of text. Needs to sit quietly under white type.",
  location: "Photograph of the actual premises, exterior or reception.",
  processStep: "Illustration for one step of the process.",
  introWide:
    "Wide frame at the top of a three picture collage. The strongest of the three.",
  introSquare: "Square frame in a three picture collage.",
  brochurePage:
    "Finished brochure page as flat artwork, one file per page, in reading order.",
  testimonial: "Photograph beside a client testimonial.",
};

/** Plain names for the slot keys, for the ratio table. */
const SLOT_LABEL = {
  heroVideo: "page hero film",
  heroImage: "page hero",
  ctaBackground: "closing call to action",
  gallery: "photo gallery",
  caseStudy: "case study carousel",
  offerCard: "What We Offer card",
  offeringTile: "What We Do tile",
  motionLoop: "animated loop",
  cardSquare: "overview grid card",
  marquee: "project band",
  workCard: "featured work card",
  workGrid: "Our Work grid",
  related: "related project card",
  featuredSlide: "project showcase slide",
  teamPortrait: "team portrait",
  sectionBackground: "section background",
  location: "office photograph",
  processStep: "process illustration",
  introWide: "collage, wide frame",
  introSquare: "collage, square frame",
  brochurePage: "brochure page",
  testimonial: "testimonial photograph",
};
/* ------------------------------------------------------------------ */
/* Reading the intended frame out of data/index.tsx                    */
/* ------------------------------------------------------------------ */

const PATH_KEY =
  /^\s*(?:image|src|poster|heroImage|supportImage):\s*(?:"([^"]+)")?\s*,?\s*$/;
const LABEL_KEY =
  /^\s*(imageAlt|alt|title|headline|city|name|label):\s*(?:"([^"]+)")?\s*,?\s*$/;

/** Which label to trust when an object carries more than one. */
const LABEL_RANK = ["imageAlt", "alt", "title", "headline", "name", "city", "label"];

/**
 * Maps each asset path to the words the site already uses for it: the alt text
 * for a gallery frame, the card title for a capability card. That copy is the
 * description of the shot.
 *
 * Objects are found by brace depth rather than by scanning outwards from the
 * path, because a scan can walk past the end of one object and pick up the
 * label belonging to the next one.
 */
function readFrameNotes() {
  const lines = fs
    .readFileSync(path.join(ROOT, "data", "index.tsx"), "utf8")
    .split(/\r?\n/);
  const notes = new Map();
  const stack = [];

  /** Reads a value that may sit on this line or wrap to the next. */
  const valueAt = (index, inline) =>
    inline ?? (lines[index + 1]?.match(/^\s*"([^"]+)"/) ?? [])[1] ?? null;

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.endsWith("{")) stack.push({ paths: [], labels: {} });

    const current = stack[stack.length - 1];
    if (current) {
      const pathMatch = line.match(PATH_KEY);
      if (pathMatch) {
        const value = valueAt(index, pathMatch[1]);
        if (value && value.startsWith("/")) current.paths.push(value);
      }
      const labelMatch = line.match(LABEL_KEY);
      if (labelMatch) {
        const value = valueAt(index, labelMatch[2]);
        if (value) current.labels[labelMatch[1]] ??= value;
      }
    }

    if (trimmed === "}" || trimmed === "}," || trimmed === "});") {
      const done = stack.pop();
      if (!done) return;
      const label = LABEL_RANK.map((key) => done.labels[key]).find(Boolean);
      if (label) {
        for (const assetPath of done.paths) notes.set(assetPath, label);
      }
      // An object with no label of its own hands its paths to its parent, so a
      // wrapper object can still supply the description.
      const parent = stack[stack.length - 1];
      if (parent && !label) parent.paths.push(...done.paths);
    }
  });

  return notes;
}
/* ------------------------------------------------------------------ */

function ratioOf(width, height) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const d = gcd(width, height);
  return `${width / d}:${height / d}`;
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push("/" + path.relative(PUBLIC, full).split(path.sep).join("/"));
  }
  return out;
}

/** Groups an array by the result of a key function, preserving order. */
function groupBy(items, key) {
  const map = new Map();
  for (const item of items) {
    const k = key(item);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(item);
  }
  return map;
}

/** "gallery-07.png" from "/services/printing/gallery/gallery-07.png". */
function fileName(target) {
  return target.slice(target.lastIndexOf("/") + 1);
}

function folderOf(target) {
  return target.slice(0, target.lastIndexOf("/"));
}

async function main() {
  const manifest = JSON.parse(
    await fsp.readFile(path.join(HERE, "placeholder-manifest.json"), "utf8")
  );
  const notes = readFrameNotes();
  const onDisk = walk(PUBLIC);
  const needed = new Set(manifest.map((entry) => entry.target));

  /**
   * Attributes a file to a page by the longest page key that prefixes it, so
   * a nested route wins over its parent.
   */
  const pageOf = (file) => {
    let best = null;
    for (const key of PAGE_ORDER) {
      if (file.startsWith(`/${key}/`) && (!best || key.length > best.length)) {
        best = key;
      }
    }
    return best;
  };

  /** Real assets already in place, counted per page. */
  const realByPage = new Map();
  const realStillsByPage = new Map();
  for (const file of onDisk) {
    if (needed.has(file)) continue;
    if (file.startsWith("/shared/") || !file.includes("/", 1)) continue;
    const key = pageOf(file);
    if (!key) continue;
    realByPage.set(key, (realByPage.get(key) || 0) + 1);
    if (!/.(mp4|webm|mov|pdf)$/i.test(file)) {
      realStillsByPage.set(key, (realStillsByPage.get(key) || 0) + 1);
    }
  }
  /** Assets still required, per page. */
  const byPage = groupBy(manifest, (entry) => entry.page);

  const videos = manifest.filter((entry) => entry.kind === "video");
  const stills = manifest.filter((entry) => entry.kind !== "video");

  const lines = [];
  const push = (line = "") => lines.push(line);

  const realCountFor = (pageKey) => realByPage.get(pageKey) ?? 0;
  const realStillsFor = (pageKey) => realStillsByPage.get(pageKey) ?? 0;
  /* ---------------- header ---------------- */

  push("# Photography and Video Request");
  push();
  push("**Prepared for:** the design and photography team");
  push("**Site:** " + SITE);
  push();
  push(
    "The website is built and live. Every page works, every route is in place,"
  );
  push(
    "and all of the writing is done. What is missing is photography and film."
  );
  push();
  push(
    "Rather than leave gaps or borrow pictures from other pages, every slot"
  );
  push(
    "that still needs an asset shows a placeholder card with the aspect ratio"
  );
  push(
    "and the pixel size printed on it. Open any page listed below and you can"
  );
  push("see exactly what is wanted and where it goes.");
  push();

  push("## The one rule that matters");
  push();
  push(
    "**Keep the file name and the file extension exactly as listed.** Every path"
  );
  push(
    "below is already wired into the site. Drop your file in at the same name"
  );
  push("and it appears on the page with no code change at all.");
  push();
  push("```");
  push("Slot:      public/services/printing/gallery/gallery-03.png");
  push("Deliver:   gallery-03.png          <- correct");
  push("Not:       printer_running.jpg     <- will not appear");
  push("```");
  push();
  push(
    "If a name genuinely has to change, that is fine, it just needs a developer"
  );
  push("to update one line, so flag it rather than renaming silently.");
  push();

  push("## Delivery notes");
  push();
  push("| | |");
  push("| --- | --- |");
  push(
    "| Sizes | Use the pixel size given for each slot. It is the size the page actually displays at, so anything larger is wasted weight and anything smaller goes soft. |"
  );
  push(
    "| Format | Stills as JPG or PNG, matching the extension in the list. Animated loops as GIF. Film as MP4, H.264. |"
  );
  push("| Colour | sRGB. |");
  push(
    "| Weight | Aim under 400kB per still. Please do not send camera originals straight from the card. |"
  );
  push(
    "| Cropping | Crop to the exact ratio given. The site crops to fill, so anything outside the ratio is cut off and you will not choose where. |"
  );
  push(
    "| Faces and logos | Only send frames you have permission to publish, including client logos and recognisable guests. |"
  );
  push(
    "| Naming | Lower case, exactly as listed. No spaces, no brackets, no capitals. |"
  );
  push();

  /* ---------------- totals ---------------- */

  const pagesNeeding = [...byPage.keys()].length;
  push("## What is outstanding, in one number");
  push();
  push("| | Count |");
  push("| --- | --- |");
  push(`| Still photographs required | ${stills.length} |`);
  push(`| Animated loops required | ${videos.filter((v) => v.slot === "motionLoop").length} |`);
  push(`| Films required | ${videos.filter((v) => v.slot !== "motionLoop").length} |`);
  push(`| Pages affected | ${pagesNeeding} |`);
  push(
    `| Photographs already supplied and in use | ${onDisk.length - manifest.length} |`
  );
  push();

  /* ---------------- priority one, film ---------------- */

  const films = manifest.filter((entry) => entry.slot === "heroVideo");

  push("## Priority one, film");
  push();
  if (films.length === 0) {
    push("Every film slot on the site is filled. Nothing needed here.");
    push();
  } else {
    push(
      `There ${films.length === 1 ? "is" : "are"} ${films.length} film${films.length === 1 ? "" : "s"} outstanding, and ${films.length === 1 ? "it carries" : "they carry"} real weight because`
    );
    push("each one is the first thing a visitor sees on its page.");
    push();
    push("| Deliver as | Size | Length | Where it plays |");
    push("| --- | --- | --- | --- |");
    for (const film of films) {
      const [name, route] = PAGES[film.page] ?? [film.page, "/"];
      const target = film.target.replace(/-poster.png$/, ".mp4");
      const length = film.label === "SIZZLE REEL"
        ? "2 to 3 minutes"
        : "20 to 40 seconds, seamless loop";
      const where = film.label === "SIZZLE REEL"
        ? `The whole point of the [${name} page](${SITE}${route}). A Vimeo or YouTube link works here too`
        : `Full screen behind the headline on [${name}](${SITE}${route})`;
      const code = "`public" + target + "`";
      push(
        `| ${code} | ${film.width} x ${film.height}, ${ratioOf(film.width, film.height)} | ${length} | ${where} |`
      );
    }
    push();
    push("Notes on all of them:");
    push();
    push("- Silent. They play muted and looping with no controls.");
    push(
      "- No burnt in text, titles or lower thirds. Headlines are typeset over the top by the site."
    );
    push(
      "- Keep the centre of frame reasonably calm, because the headline sits there."
    );
    push(
      "- Please also send one still frame from each film at 1920 x 1080, used as the poster while the film loads."
    );
    push(
      "- Under 30MB each if you can. A hero film is the heaviest thing on a page."
    );
    push();
    push(
      "**A developer needs one line for each film**, to point the page at the"
    );
    push(
      "video instead of the still. Send the file and mention it, it is a two"
    );
    push("minute job:");
    push();
    push("```tsx");
    push("// app/work/work-details/page.tsx");
    push('<WorkHero posterSrc="/work/project-details/hero/hero-video-poster.png"');
    push('          videoSrc="/work/project-details/hero/hero-video.mp4" />');
    push("```");
    push();
  }
  /* ---------------- priority two, motion loops ---------------- */

  const motion = videos.filter((entry) => entry.slot === "motionLoop");
  const motionByPage = groupBy(motion, (entry) => entry.page);
  push("## Priority two, animated loops");
  push();
  push(
    `${motion.length} short animated loops sit inside the What We Offer strips on four`
  );
  push(
    "service pages. They are the same idea as an animated GIF on a product card:"
  );
  push("two to four seconds, seamless, silent, no text.");
  push();
  push("| Page | Files | Size |");
  push("| --- | --- | --- |");
  for (const [pageKey, entries] of motionByPage) {
    const [name, route] = PAGES[pageKey] ?? [pageKey, "/"];
    const names = entries.map((entry) => `\`${fileName(entry.target)}\``);
    push(
      `| [${name}](${SITE}${route}) | ${names.join(", ")} in \`public/${folderOf(entries[0].target).slice(1)}/\` | 1200 x 800, 3:2 |`
    );
  }
  push();
  push(
    "The Custom Fabrication page already has six of these and they are the"
  );
  push("reference for tone and length:");
  push(`[${PAGES["services/custom-fabrication"][0]}](${SITE}/services/custom-fabrication).`);
  push();

  /* ---------------- priority three, pages with nothing ---------------- */

  const emptyPages = PAGE_ORDER.filter(
    (pageKey) => byPage.has(pageKey) && realStillsFor(pageKey) === 0
  );

  push("## Priority three, the pages with no photography of their own");
  push();
  push(
    "These pages are written, built and live, and every photograph on them is"
  );
  push(
    "still a placeholder. They are the most visible gap on the site, so they are"
  );
  push("worth shooting first.");
  push();
  push("| Page | Photographs needed |");
  push("| --- | --- |");
  for (const pageKey of emptyPages) {
    const [name, route] = PAGES[pageKey] ?? [pageKey, "/"];
    const count = byPage.get(pageKey).filter((e) => e.kind !== "video").length;
    if (count === 0) continue;
    push(`| [${name}](${SITE}${route}) | ${count} |`);
  }
  push();

  /* ---------------- what is already done ---------------- */

  push("## What is already done");
  push();
  push(
    "These pages already carry real MME photography. Where a count appears in"
  );
  push(
    "the second column, that many pictures are in place and stay as they are."
  );
  push();
  push("| Page | Photographs in use | Still needed |");
  push("| --- | --- | --- |");
  for (const pageKey of PAGE_ORDER) {
    const real = realStillsFor(pageKey);
    if (real === 0) continue;
    const needs = (byPage.get(pageKey) ?? []).length;
    const [name, route] = PAGES[pageKey] ?? [pageKey, "/"];
    push(
      `| [${name}](${SITE}${route}) | ${real} | ${needs === 0 ? "nothing" : needs} |`
    );
  }
  push();
  push("Also complete and needing nothing:");
  push();
  push("- The logo and the two social icons.");
  push("- All 32 client logos on the home page.");
  push("- Five of the six team portraits on the About page.");
  push("- The four process illustrations on the About page.");
  push(
    "- The cover photograph for all twelve client projects on the Our Work page."
  );
  push(
    "- The scrolling Our Event Productions band on the home page, the same band"
  );
  push(
    "  on the events page, and the rotating showcase on the services page. All"
  );
  push(
    "  three now use real client photography, and each takes a different frame"
  );
  push("  from the same shoot so no two pages repeat a picture.");
  push(
    "- The hero films on the Services, Events, Our Work and Entertainment pages."
  );
  push(
    "- The background film on the home page hero, which streams from Vimeo."
  );
  push(
    "- The hero film on the Specialty Entertainment page, supplied and in place."
  );
  push();
  /* ---------------- page by page ---------------- */

  push("## Everything required, page by page");
  push();
  push(
    "Each table is one page. The first column is the file to deliver, relative"
  );
  push(
    "to `public/`. The last column is the frame we are asking for, taken from"
  );
  push("the words already on that page.");
  push();

  for (const pageKey of PAGE_ORDER) {
    const entries = byPage.get(pageKey);
    if (!entries || entries.length === 0) continue;

    const [name, route] = PAGES[pageKey] ?? [pageKey, "/"];
    const real = realCountFor(pageKey);

    push(`### ${name}`);
    push();
    push(`Live page: ${SITE}${route}`);
    push();
    push(
      `Already supplied: ${real} photograph${real === 1 ? "" : "s"}. Still needed: ${entries.length}.`
    );
    push();

    const byFolder = groupBy(entries, (entry) => folderOf(entry.target));

    for (const [folder, group] of byFolder) {
      const first = group[0];
      const guidance =
        SLOT_GUIDANCE[first.slot] ?? "Photograph for this section.";
      push(`**\`public${folder}/\`**  ${guidance}`);
      push();
      push("| File | Size | Ratio | The frame |");
      push("| --- | --- | --- | --- |");
      for (const entry of group) {
        const note =
          notes.get(entry.target) ??
          entry.label
            .toLowerCase()
            .replace(/^\w/, (c) => c.toUpperCase())
            .replace(/(\d+)$/, "number $1");
        push(
          `| \`${fileName(entry.target)}\` | ${entry.width} x ${entry.height} | ${ratioOf(entry.width, entry.height)} | ${note} |`
        );
      }
      push();
    }
  }

  /* ---------------- appendix ---------------- */

  push("## Aspect ratio reference");
  push();
  const sizes = new Map();
  for (const entry of manifest) {
    const key = `${entry.width} x ${entry.height}`;
    if (!sizes.has(key))
      sizes.set(key, {
        ratio: ratioOf(entry.width, entry.height),
        count: 0,
        slots: new Set(),
      });
    const record = sizes.get(key);
    record.count += 1;
    record.slots.add(entry.slot);
  }
  push("| Size | Ratio | Files at this size | Used for |");
  push("| --- | --- | --- | --- |");
  for (const [size, record] of [...sizes.entries()].sort(
    (a, b) => b[1].count - a[1].count
  )) {
    push(
      `| ${size} | ${record.ratio} | ${record.count} | ${[...record.slots].map((slot) => SLOT_LABEL[slot] ?? slot).join(", ")} |`
    );
  }
  push();

  push("## Optional extras");
  push();
  push("Not wired into a slot, so nothing breaks without them, but wanted:");
  push();
  push(
    "- A portrait of Andrea Palacio for the team row on the About page, 600 x 600, 1:1. Her card currently shows her initials in a styled circle, which is a deliberate fallback and looks fine if you would rather leave it."
  );
  push(
    "- A photograph of the Long Island premises. There is one in use already, so this is only if a better frame exists."
  );
  push(
    "- One strong wide frame of a genuinely impressive MME event. It would do a lot of work across the site, because thirty closing banners are still placeholders and a single great picture could serve several of them."
  );
  push();
  push("## Questions");
  push();
  push(
    "Send anything unclear back with the page link and the file name and we will"
  );
  push("answer against the live page.");
  push();
  push(
    "This document is generated from the site itself, so it stays accurate as"
  );
  push("assets arrive. Regenerate it any time with `npm run assets:brief`.");

  await fsp.writeFile(
    path.join(ROOT, "DESIGN_BRIEF.md"),
    lines.join("\n") + "\n",
    "utf8"
  );

  console.log(
    `DESIGN_BRIEF.md written: ${stills.length} stills, ${videos.length} moving image slots, ${byPage.size} pages`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
