/**
 * MME Worldwide placeholder artwork generator.
 *
 * Every asset the site still needs from the design team is rendered as a
 * self documenting placeholder: the aspect ratio and the pixel size the
 * designer should deliver are baked straight into the image, so the file
 * sitting in `public/` doubles as the spec for the file that replaces it.
 *
 * Nothing here runs at request time. Run `npm run assets:placeholders`.
 */
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const BRAND = {
  ink: "#101116",
  inkSoft: "#191b22",
  purple: "#683293",
  purpleLight: "#8b6cba",
  cyan: "#00b5e2",
  sky: "#b4e4f1",
  charcoal: "#54565a",
  grayLight: "#d2d4d2",
  white: "#ffffff",
};

const FONT = "Montserrat, 'Segoe UI', Inter, Arial, Helvetica, sans-serif";

/** Greatest common divisor, so 2400x1350 prints as "16 : 9". */
function ratioLabel(w, h) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const d = gcd(w, h);
  return `${w / d} : ${h / d}`;
}

function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Builds the SVG for one placeholder. Every size is derived from the shorter
 * edge, so a 2520x1080 banner and a 600x600 avatar both stay legible.
 */
function buildSvg({ width, height, eyebrow, slot, kind }) {
  const min = Math.min(width, height);
  const max = Math.max(width, height);

  const ratio = ratioLabel(width, height);
  const ratioSize = Math.round(Math.min(min * 0.2, max * 0.1));
  const dimsSize = Math.round(Math.max(ratioSize * 0.3, min * 0.04));
  const eyebrowSize = Math.round(Math.max(ratioSize * 0.18, min * 0.028));
  const slotSize = Math.round(Math.max(ratioSize * 0.19, min * 0.03));
  const footSize = Math.round(Math.max(min * 0.024, 11));

  const pad = Math.round(min * 0.045);
  const bracket = Math.round(min * 0.09);
  const stroke = Math.max(Math.round(min * 0.004), 1);
  const gridStep = Math.round(max / 18);

  const cx = width / 2;
  const cy = height / 2;

  const gap = Math.round(ratioSize * 0.28);
  const ruleW = Math.round(min * 0.16);
  const yRatio = cy + ratioSize * 0.22;
  const yEyebrow = yRatio - ratioSize * 0.82 - gap;
  const yRule = yRatio + gap * 0.8;
  const yDims = yRule + dimsSize + gap * 0.55;
  const ySlot = yDims + slotSize + gap * 0.5;

  const isVideo = kind === "video";
  const accent = isVideo ? BRAND.cyan : BRAND.sky;

  const playGlyph = isVideo
    ? (() => {
        const r = Math.round(min * 0.075);
        const py = yEyebrow - r * 1.9;
        const t = r * 0.42;
        return `
  <circle cx="${cx}" cy="${py}" r="${r}" fill="none" stroke="${BRAND.cyan}" stroke-width="${stroke * 1.5}" opacity="0.75"/>
  <path d="M ${cx - t * 0.6} ${py - t} L ${cx + t} ${py} L ${cx - t * 0.6} ${py + t} Z" fill="${BRAND.cyan}"/>`;
      })()
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.inkSoft}"/>
      <stop offset="55%" stop-color="${BRAND.ink}"/>
      <stop offset="100%" stop-color="${BRAND.inkSoft}"/>
    </linearGradient>
    <radialGradient id="glowA" cx="12%" cy="8%" r="65%">
      <stop offset="0%" stop-color="${BRAND.purple}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${BRAND.purple}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="92%" cy="96%" r="60%">
      <stop offset="0%" stop-color="${BRAND.cyan}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${BRAND.cyan}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="${gridStep}" height="${gridStep}" patternUnits="userSpaceOnUse">
      <path d="M ${gridStep} 0 L 0 0 0 ${gridStep}" fill="none" stroke="${BRAND.grayLight}" stroke-width="1" opacity="0.06"/>
    </pattern>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  <rect width="${width}" height="${height}" fill="url(#glowA)"/>
  <rect width="${width}" height="${height}" fill="url(#glowB)"/>

  <path d="M 0 0 L ${width} ${height} M ${width} 0 L 0 ${height}" stroke="${BRAND.grayLight}" stroke-width="1" opacity="0.07"/>

  <rect x="${pad}" y="${pad}" width="${width - pad * 2}" height="${height - pad * 2}"
        fill="none" stroke="${BRAND.purpleLight}" stroke-width="${stroke}" opacity="0.4"/>

  <g stroke="${BRAND.cyan}" stroke-width="${stroke * 1.6}" fill="none" opacity="0.9">
    <path d="M ${pad} ${pad + bracket} L ${pad} ${pad} L ${pad + bracket} ${pad}"/>
    <path d="M ${width - pad - bracket} ${pad} L ${width - pad} ${pad} L ${width - pad} ${pad + bracket}"/>
    <path d="M ${pad} ${height - pad - bracket} L ${pad} ${height - pad} L ${pad + bracket} ${height - pad}"/>
    <path d="M ${width - pad - bracket} ${height - pad} L ${width - pad} ${height - pad} L ${width - pad} ${height - pad - bracket}"/>
  </g>
${playGlyph}
  <text x="${cx}" y="${yEyebrow}" font-family="${FONT}" font-size="${eyebrowSize}" font-weight="600"
        letter-spacing="${eyebrowSize * 0.22}" fill="${accent}" text-anchor="middle" opacity="0.95">${esc(eyebrow)}</text>

  <text x="${cx}" y="${yRatio}" font-family="${FONT}" font-size="${ratioSize}" font-weight="800"
        letter-spacing="${ratioSize * 0.02}" fill="${BRAND.white}" text-anchor="middle">${ratio}</text>

  <rect x="${cx - ruleW / 2}" y="${yRule}" width="${ruleW}" height="${Math.max(stroke, 2)}" fill="${BRAND.purpleLight}" opacity="0.8"/>

  <text x="${cx}" y="${yDims}" font-family="${FONT}" font-size="${dimsSize}" font-weight="700"
        letter-spacing="${dimsSize * 0.09}" fill="${BRAND.cyan}" text-anchor="middle">${width} × ${height} px</text>

  <text x="${cx}" y="${ySlot}" font-family="${FONT}" font-size="${slotSize}" font-weight="500"
        letter-spacing="${slotSize * 0.14}" fill="${BRAND.grayLight}" text-anchor="middle" opacity="0.75">${esc(slot)}</text>

  <text x="${pad + bracket * 0.35}" y="${height - pad - footSize * 0.6}" font-family="${FONT}" font-size="${footSize}"
        font-weight="700" letter-spacing="${footSize * 0.28}" fill="${BRAND.purpleLight}" opacity="0.85">MME WORLDWIDE</text>

  <text x="${width - pad - bracket * 0.35}" y="${height - pad - footSize * 0.6}" font-family="${FONT}" font-size="${footSize}"
        font-weight="600" letter-spacing="${footSize * 0.24}" fill="${BRAND.grayLight}" text-anchor="end" opacity="0.6">${isVideo ? "VIDEO PLACEHOLDER" : "IMAGE PLACEHOLDER"}</text>
</svg>`;
}

/**
 * Renders one placeholder to disk. Flat vector artwork palettises well, so a
 * 2400px banner lands around 30kB rather than the megabyte a photo would cost.
 */
export async function writePlaceholder(destination, spec) {
  const svg = buildSvg(spec);
  await fs.mkdir(path.dirname(destination), { recursive: true });

  const pipeline = sharp(Buffer.from(svg));

  // A slot that expects an animated loop keeps a .gif extension, because the
  // extension decides the content type the file is served with. The stand in
  // is a single frame, which is all a GIF needs to be valid.
  if (destination.toLowerCase().endsWith(".gif")) {
    await pipeline.gif({ colors: 16, dither: 0, effort: 10 }).toFile(destination);
    return;
  }

  // A sixteen colour palette with dithering off is what keeps these files
  // small. The artwork is flat vector, so the banding it introduces reads as
  // a deliberate posterised look rather than as compression damage, and a
  // 1920px frame lands around 30kB instead of 200kB.
  await pipeline
    .png({ palette: true, colors: 16, dither: 0, effort: 9 })
    .toFile(destination);
}

export { buildSvg, ratioLabel, BRAND };
