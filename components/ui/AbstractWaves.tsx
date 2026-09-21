/**
 * A drifting abstract backdrop: three wave bands under two slow colour swells,
 * in the brand purple and cyan.
 *
 * Decoration only. It is absolutely positioned and pointer-transparent, so it
 * drops into any `relative overflow-hidden` section as the first child without
 * touching that section's layout. Motion is CSS, not framer-motion, because it
 * runs forever rather than on scroll and has no business re-rendering React.
 *
 * `tone="dark"` is for a section that sits over photography or black;
 * `tone="light"` is the same figure pulled back far enough to read as texture
 * on white.
 */

/**
 * Four periods of a sine-ish wave, drawn across a 2880 wide box and closed to
 * the bottom edge. Four rather than two because the band is laid out at 200%
 * and travels half its width: the phase at x=1440 has to match the phase at
 * x=0 or the seam shows every cycle.
 */
const WAVE_PATH =
  "M0,160 C120,100 240,100 360,160 S600,220 720,160 S960,100 1080,160 " +
  "S1320,220 1440,160 S1680,100 1800,160 S2040,220 2160,160 " +
  "S2400,100 2520,160 S2760,220 2880,160 L2880,320 L0,320 Z";

type Tone = "light" | "dark";

/** Per band: vertical seat, height, colour, opacity and how long a pass takes. */
const BANDS: {
  className: string;
  duration: string;
  fill: Record<Tone, string>;
  opacity: Record<Tone, number>;
}[] = [
  {
    className: "bottom-0 h-[55%] animate-wave",
    duration: "28s",
    fill: { dark: "#683293", light: "#683293" },
    opacity: { dark: 0.22, light: 0.05 },
  },
  {
    className: "bottom-0 h-[42%] animate-wave-reverse",
    duration: "22s",
    fill: { dark: "#00b5e2", light: "#00b5e2" },
    opacity: { dark: 0.16, light: 0.055 },
  },
  {
    className: "bottom-0 h-[30%] animate-wave",
    duration: "16s",
    fill: { dark: "#b4e4f1", light: "#683293" },
    opacity: { dark: 0.12, light: 0.04 },
  },
];

export default function AbstractWaves({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Colour swells. They sit behind the bands and are what keeps the
          backdrop from looking like three flat ribbons. */}
      <div
        className="animate-aurora absolute -top-1/4 -left-[10%] h-[70%] w-[55%] rounded-full bg-purple blur-3xl"
        style={{
          animationDuration: "19s",
          opacity: tone === "dark" ? 0.28 : 0.06,
        }}
      />
      <div
        className="animate-aurora absolute -right-[10%] -bottom-1/4 h-[70%] w-[55%] rounded-full bg-cyan blur-3xl"
        style={{
          animationDuration: "24s",
          animationDelay: "-8s",
          opacity: tone === "dark" ? 0.24 : 0.06,
        }}
      />

      {BANDS.map((band) => (
        <svg
          key={band.className}
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          className={`absolute left-0 w-[200%] ${band.className}`}
          style={{ animationDuration: band.duration }}
        >
          <path d={WAVE_PATH} fill={band.fill[tone]} opacity={band.opacity[tone]} />
        </svg>
      ))}
    </div>
  );
}
