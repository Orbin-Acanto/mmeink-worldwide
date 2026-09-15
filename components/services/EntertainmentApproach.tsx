"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface DifferenceBlock {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  statement: string;
  cta: { text: string; href: string };
  /** Full bleed clip behind the copy. */
  video: string;
  /** First frame, painted while the clip loads. */
  videoPoster?: string;
}

interface EntertainmentApproachProps {
  difference: DifferenceBlock;
}

/**
 * The band that argues entertainment curated alongside the production reads
 * differently to entertainment booked separately.
 *
 * It runs the full height of the screen with the footage behind it, so the
 * argument lands as a single held moment rather than another row of content.
 * Everything above the footage sits in one centred column.
 */
export default function EntertainmentApproach({
  difference,
}: EntertainmentApproachProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  /* A full screen clip playing on loop is a lot of motion to put in front of
     someone who has asked the OS for less of it. They get the poster frame. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (media.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        video.play().catch(() => {
          /* Autoplay refused. The poster stands in, which is the point of it. */
        });
      }
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden bg-charcoal-dark">
      {/* Footage, full bleed behind everything */}
      <div aria-hidden="true" className="absolute inset-0">
        <video
          ref={videoRef}
          src={difference.video}
          poster={difference.videoPoster}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Scrim, in two layers.

            The footage is a three panel split screen, and the copy lands on
            the middle panel. One flat wash either drowns all three panels or
            loses the copy against the busy one, so instead: a light overall
            tint that lets the outer panels read, then an ellipse that darkens
            only the middle where the words actually sit. */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_45%,rgba(0,0,0,0.12)_78%,transparent_100%)]" />
        {/* Feathered edges, so the band meets the sections above and below. */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-center [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] sm:px-8 sm:py-24 lg:px-10"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-light sm:text-sm">
          {difference.eyebrow}
        </span>

        <h2 className="mt-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {difference.title}
          <span className="block gradient-text">
            {difference.titleHighlight}
          </span>
        </h2>

        <div className="mx-auto mt-8 max-w-2xl space-y-5">
          {difference.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-sm leading-relaxed text-gray-200 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Closing statement, ruled on both sides so it reads as the pull
            quote it is. The rules collapse away on a narrow screen. */}
        <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6">
          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-linear-to-r from-transparent to-cyan/70 sm:block sm:w-16"
          />
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan sm:text-base">
            {difference.statement}
          </p>
          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-linear-to-l from-transparent to-cyan/70 sm:block sm:w-16"
          />
        </div>

        <Link
          href={difference.cta.href}
          className="group mt-10 inline-flex items-center gap-3 border border-white/25 bg-black/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-cyan hover:bg-purple focus-visible:border-cyan focus-visible:outline-hidden sm:text-sm"
        >
          {difference.cta.text}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
