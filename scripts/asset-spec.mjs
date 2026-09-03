/**
 * Writes ASSET_SPEC.md from what is actually on disk.
 *
 * The document is the brief for the design team: every folder in `public/`,
 * what each file in it is for, the size it should be delivered at, and whether
 * the file currently sitting there is a real asset or a placeholder waiting to
 * be replaced.
 *
 *   npm run assets:spec
 */
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const PUBLIC = path.join(ROOT, "public");
const MANIFEST = path.join(HERE, "placeholder-manifest.json");

/** Human labels for the top level folders. */
const AREAS = {
  home: "Home page",
  about: "About, sizzle reel and brochure",
  work: "Our Work and the project detail template",
  services: "Services overview and the thirteen service pages",
  events: "Events overview and the eleven event type pages",
  contact: "Let us connect",
  shared: "Brand furniture used in the navigation and footer",
};

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function toPosix(file) {
  return "/" + path.relative(PUBLIC, file).split(path.sep).join("/");
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} kB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function main() {
  const placeholders = new Map(
    JSON.parse(await fsp.readFile(MANIFEST, "utf8")).map((entry) => [
      entry.target,
      entry,
    ])
  );

  const files = walk(PUBLIC)
    .map((file) => {
      const target = toPosix(file);
      const { size } = fs.statSync(file);
      return { target, size, spec: placeholders.get(target) ?? null };
    })
    .sort((a, b) => a.target.localeCompare(b.target));

  /** Group by the folder holding the file, so one row is one delivery batch. */
  const folders = new Map();
  for (const file of files) {
    const folder = file.target.slice(0, file.target.lastIndexOf("/")) || "/";
    if (!folders.has(folder)) folders.set(folder, []);
    folders.get(folder).push(file);
  }

  const placeholderCount = files.filter((file) => file.spec).length;
  const realCount = files.length - placeholderCount;
  const placeholderBytes = files
    .filter((file) => file.spec)
    .reduce((sum, file) => sum + file.size, 0);
  const realBytes = files
    .filter((file) => !file.spec)
    .reduce((sum, file) => sum + file.size, 0);

  const lines = [];
  const push = (line = "") => lines.push(line);

  push("# Asset specification");
  push();
  push(
    "This is the brief for the design team, and it is generated from what is"
  );
  push(
    "actually on disk. Run `npm run assets:spec` to refresh it after adding or"
  );
  push("replacing anything in `public/`.");
  push();

  push("## How `public/` is organised");
  push();
  push("One folder per page. Nothing is shared between two pages.");
  push();
  push("```");
  push("public/");
  for (const [area, label] of Object.entries(AREAS)) {
    push(`  ${area}/`.padEnd(14) + `# ${label}`);
  }
  push("```");
  push();
  push(
    "Inside a page folder the subfolder names match the section of the page"
  );
  push("they feed:");
  push();
  push("| Subfolder | Section it feeds |");
  push("| --- | --- |");
  push("| `hero/` | The hero at the top of the page, image or video |");
  push("| `what-we-offer/` | The scrolling capability cards on a service page |");
  push("| `what-we-do/` | The offering tiles on an event type page |");
  push("| `case-study/` | The case study carousel |");
  push("| `gallery/` | The masonry photo gallery |");
  push("| `cta/` | The background of the closing call to action |");
  push("| `divisions/` | The talent bands on Specialty Entertainment |");
  push("| `event-management/` | The Event Management band on Logistics |");
  push("| `index/cards/` | The square cards on an overview page |");
  push("| `work-marquee/` | The scrolling band of client projects |");
  push("| `featured-work/`, `featured-projects/` | Project showcases |");
  push("| `team/`, `locations/`, `process/`, `intro/` | About page sections |");
  push("| `pages/` | Brochure page spreads |");
  push();

  push("## Replacing a placeholder");
  push();
  push(
    "Every placeholder states its own requirement. The artwork carries the"
  );
  push(
    "aspect ratio, the pixel size, the page it belongs to and the slot it fills,"
  );
  push("so the file in `public/` is the spec for the file that replaces it.");
  push();
  push(
    "Drop the real asset in at the same path and the same filename and nothing"
  );
  push(
    "in the code changes. Keep the extension, because the path is referenced"
  );
  push("literally:");
  push();
  push("```bash");
  push("# wrong: the code is looking for gallery-03.png");
  push("cp ~/shoot/printer-running.jpg public/services/printing/gallery/");
  push();
  push("# right");
  push(
    "cp ~/shoot/printer-running.jpg public/services/printing/gallery/gallery-03.png"
  );
  push("```");
  push();
  push(
    "A real file larger than 400kB is left alone by `npm run assets:placeholders`,"
  );
  push(
    "so regenerating placeholders never overwrites artwork that has been delivered."
  );
  push();
  push("### Video slots");
  push();
  push(
    "A hero that still needs a film shows a still labelled VIDEO PLACEHOLDER."
  );
  push("Two components read these:");
  push();
  push(
    "- `WorkHero` and `LandingHero` take `posterSrc` while the film is missing"
  );
  push(
    "  and `videoSrc` once it exists. Pass both and the poster becomes the video's"
  );
  push("  poster frame.");
  push(
    "- `VideoFrame` on the sizzle reel page takes a Vimeo or YouTube link, or a"
  );
  push("  path to an MP4, in `sizzleReel.videoSrc` in `data/index.tsx`.");
  push();

  push("## Where the real photography lives");
  push();
  push(
    `${realCount} files in \`public/\` are real assets (${formatBytes(realBytes)}).`
  );
  push(
    `${placeholderCount} are placeholders (${formatBytes(placeholderBytes)}) waiting on the design team.`
  );
  push();
  push(
    "Real photography and video that no page displays is preserved outside"
  );
  push(
    "`public/` in `asset-archive/`, at the path it used to occupy. See the README"
  );
  push("in that folder.");
  push();

  push("## Every folder, and what it still needs");
  push();

  const areasSeen = new Set();
  for (const [folder, entries] of [...folders.entries()].sort()) {
    const area = folder.split("/")[1] || "root";
    if (!areasSeen.has(area)) {
      if (areasSeen.size > 0) push();
      areasSeen.add(area);
      push(`### ${area === "root" ? "public root" : `public/${area}`}`);
      push();
      push("| Folder | Files | Delivery size | Status |");
      push("| --- | --- | --- | --- |");
    }

    const needed = entries.filter((entry) => entry.spec);
    const sizes = new Set(
      needed.map((entry) => `${entry.spec.width} x ${entry.spec.height}`)
    );
    const ratios = new Set(
      needed.map((entry) => {
        const gcd = (a, b) => (b ? gcd(b, a % b) : a);
        const d = gcd(entry.spec.width, entry.spec.height);
        return `${entry.spec.width / d}:${entry.spec.height / d}`;
      })
    );

    const size =
      needed.length === 0
        ? "n/a"
        : [...sizes]
            .map((value, index) => `${value} (${[...ratios][index] ?? ""})`)
            .join("<br>");

    const status =
      needed.length === 0
        ? `real, ${entries.length} file(s)`
        : needed.length === entries.length
          ? `**${needed.length} placeholder(s) needed**`
          : `${entries.length - needed.length} real, **${needed.length} needed**`;

    push(`| \`${folder}/\` | ${entries.length} | ${size} | ${status} |`);
  }

  push();
  push("## Placeholder artwork");
  push();
  push(
    "Generated by `scripts/lib/placeholder.mjs` from `scripts/placeholder-manifest.json`."
  );
  push(
    "Flat vector artwork in the brand palette, palettised to sixteen colours so a"
  );
  push("1920px frame costs about 30kB rather than 200kB.");
  push();
  push("```bash");
  push("npm run assets:placeholders            # regenerate every placeholder");
  push("npm run assets:placeholders -- --check # report which slots are empty");
  push("npm run assets:placeholders -- printing");
  push("npm run assets:spec                    # regenerate this document");
  push("```");
  push();

  await fsp.writeFile(
    path.join(ROOT, "ASSET_SPEC.md"),
    lines.join("\n") + "\n",
    "utf8"
  );
  console.log(
    `ASSET_SPEC.md written: ${folders.size} folders, ${realCount} real, ${placeholderCount} placeholders`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
