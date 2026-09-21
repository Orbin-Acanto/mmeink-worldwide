"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandPartnerLogos, brandPartners } from "@/data";
import { ClientLogo } from "@/types";

/**
 * The About page partner wall.
 *
 * The logos arrive as transparent PNGs of wildly different weights and colours
 * — a red banner next to a navy serif wordmark next to a purple square. Left
 * as-is the wall reads as noise, so the resting state is desaturated and the
 * colour comes back on hover. That also stops any one brand from dominating
 * the row.
 */

/** Marks the marquee travels through before it repeats. */
const COPIES = [0, 1, 2, 3];

const LogoTile = ({ logo }: { logo: ClientLogo }) => (
  <div className="shrink-0 px-3 sm:px-4">
    <div
      className="
        group/tile relative flex h-24 w-44 items-center justify-center
        border-2 border-gray-200 bg-white px-6
        transition-all duration-300
        hover:-translate-y-1 hover:border-purple/40 hover:shadow-xl
        sm:h-28 sm:w-52 lg:h-32 lg:w-60
      "
    >
      <div className="relative h-14 w-full sm:h-16 lg:h-20">
        {/* The wall is decorative: every row is the same set repeated four
            times, so the brand names are carried once by the visually hidden
            list below rather than four times by alt text. */}
        <Image
          src={logo.src}
          alt=""
          title={logo.name}
          fill
          loading="lazy"
          sizes="240px"
          className="
            object-contain opacity-80 grayscale
            transition-all duration-500
            group-hover/tile:opacity-100 group-hover/tile:grayscale-0
          "
        />
      </div>
    </div>
  </div>
);

/**
 * One marquee row, laid out four times over.
 *
 * The shared `animate-scroll-*` utilities travel exactly a quarter of the track
 * per cycle, so the row has to be repeated four times for the loop to close
 * without a seam.
 */
const MarqueeRow = ({
  logos,
  direction,
}: {
  logos: ClientLogo[];
  direction: "left" | "right";
}) => (
  <div
    className={`flex w-max ${
      direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
    }`}
  >
    {COPIES.flatMap((copy) =>
      logos.map((logo) => <LogoTile key={`${copy}-${logo.id}`} logo={logo} />)
    )}
  </div>
);

export default function BrandPartnersSection() {
  const half = Math.ceil(brandPartnerLogos.length / 2);
  const topRow = brandPartnerLogos.slice(0, half);
  const bottomRow = brandPartnerLogos.slice(half);

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white via-gray-50 to-white py-20">
      <div className="absolute top-0 left-0 h-1/3 w-1/3 rounded-full bg-purple/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-1/3 w-1/3 rounded-full bg-cyan/5 blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
        >
          <p className="section-label">{brandPartners.label}</p>
          <h2 className="section-heading">
            {brandPartners.title}{" "}
            <span className="gradient-text block sm:inline">
              {brandPartners.titleHighlight}
            </span>
          </h2>

          {brandPartners.intro.map((paragraph) => (
            <p key={paragraph} className="section-body-center">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* The line the whole section turns on, so it is given the weight of a
            heading rather than sitting inside the body copy. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mb-16 flex max-w-3xl items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:px-8"
        >
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-purple/40" />
          <p className="text-center text-base font-bold tracking-tight text-gray-900 uppercase sm:text-xl md:text-2xl">
            {brandPartners.pullQuote}{" "}
            <span className="gradient-text">
              {brandPartners.pullQuoteHighlight}
            </span>
          </p>
          <span className="h-px flex-1 bg-linear-to-l from-transparent to-cyan/40" />
        </motion.div>

        {/* Logo wall */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label mb-8 text-center"
        >
          {brandPartners.wallLabel}
        </motion.p>

        {/*
          The logos are images, so the brand names would otherwise exist only in
          alt attributes. Repeating them as real text gives search engines and
          AI assistants something to read when answering questions about who
          MME Worldwide has worked with.
        */}
        <p className="sr-only">
          MME Worldwide has partnered with{" "}
          {brandPartnerLogos.map((logo) => logo.name).join(", ")}.
        </p>

        {/* The band carries its own white ground rather than sitting on the
            section gradient, so the feathered edges inside it fade to an exact
            match instead of an approximate one. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative space-y-4 overflow-hidden border-y-2 border-gray-100 bg-white py-8 sm:space-y-6 sm:py-10"
          aria-hidden="true"
        >
          <MarqueeRow logos={topRow} direction="left" />
          <MarqueeRow logos={bottomRow} direction="right" />

          {/* Feathered edges so tiles arrive and leave rather than being cut
              off against the section gutter. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent sm:w-24 lg:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent sm:w-24 lg:w-40" />
        </motion.div>
      </div>
    </section>
  );
}
