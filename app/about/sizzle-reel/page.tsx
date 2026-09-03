"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VideoFrame from "@/components/media/VideoFrame";
import FAQ from "@/components/FAQ";
import HomeCTA from "@/sections/HomeCTA";
import { sizzleReel } from "@/data";

export default function SizzleReelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Full screen hero */}
      <section className="relative h-screen min-h-150 w-full overflow-hidden">
        <Image
          src={sizzleReel.heroImage}
          alt={sizzleReel.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-linear-to-r from-purple/25 via-transparent to-cyan/20" />

        <div className="relative flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-block bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
              {sizzleReel.eyebrow}
            </span>

            <h1 className="mt-7 text-4xl font-bold uppercase tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-7xl lg:text-8xl">
              {sizzleReel.title}{" "}
              <span className="gradient-text">{sizzleReel.titleHighlight}</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto mt-7 h-0.5 bg-linear-to-r from-purple to-cyan"
            />

            <p className="mt-7 text-sm font-light uppercase tracking-[0.2em] text-white/90 drop-shadow-lg sm:text-base md:text-lg">
              {sizzleReel.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs uppercase tracking-[0.3em]">Watch</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* The reel, on white so the film is the only dark thing in view */}
      <section className="relative w-full overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-40 top-0 h-136 w-136 rounded-full bg-purple/8 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-120 w-120 rounded-full bg-cyan/8 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8"
        >
          <VideoFrame
            src={sizzleReel.videoSrc}
            poster={sizzleReel.poster}
            title={sizzleReel.videoLabel}
            className="shadow-[0_40px_100px_-30px_rgba(104,50,147,0.45)]"
          />

          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
            <h2 className="text-base font-bold uppercase tracking-tight text-black sm:text-lg">
              {sizzleReel.videoLabel}
            </h2>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple transition-colors duration-300 hover:text-cyan sm:text-sm"
            >
              See the full portfolio
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Divider CTA. The same band, and the same artwork, as every other
          page's closing call to action. */}
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Let Us Produce Yours Next"
        subtitle="Ready When You Are"
        description="Tell us the date, the room, and what you want people to remember, and we will show you how we would build it."
        primaryButton={{
          text: "Start a Conversation",
          href: "/contact",
        }}
      />

      <FAQ faqs={sizzleReel.faqs} />
    </div>
  );
}
