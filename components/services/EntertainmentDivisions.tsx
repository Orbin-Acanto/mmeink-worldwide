"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon, Minus, Plus } from "lucide-react";

interface Division {
  id: string;
  icon: LucideIcon;
  blurb: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  featuring: string[];
  footnote?: string;
  cta: string;
  image: string;
}

interface EntertainmentDivisionsProps {
  heading: string;
  divisions: Division[];
  ctaHref?: string;
}

/**
 * The eight talent divisions, as a grid of cards.
 *
 * Each card leads with the blurb, and the detail that a visitor searching for
 * "aerial champagne service" or "LED dancers" needs sits behind a toggle. The
 * detail is rendered in the markup either way rather than fetched on open, so
 * it is crawlable and readable without JavaScript.
 */
export default function EntertainmentDivisions({
  heading,
  divisions,
  ctaHref = "/contact",
}: EntertainmentDivisionsProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Ambient brand wash. Purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-purple/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-8">
        {/* Rule and heading, centred */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-center gap-4 sm:mb-16 sm:gap-6"
        >
          <span
            aria-hidden="true"
            className="h-px w-10 bg-linear-to-r from-transparent to-purple-light/60 sm:w-24"
          />
          <h2 className="text-center text-xl font-bold uppercase tracking-[0.2em] text-white sm:text-2xl md:text-3xl">
            {heading}
          </h2>
          <span
            aria-hidden="true"
            className="h-px w-10 bg-linear-to-l from-transparent to-purple-light/60 sm:w-24"
          />
        </motion.div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const isOpen = openId === division.id;

            return (
              <motion.article
                key={division.id}
                id={division.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 4) * 0.08, duration: 0.55 }}
                className="group flex flex-col border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-purple-light/60"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={division.image}
                    alt={`${division.eyebrow} produced by MME Worldwide`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
                </div>

                {/* The icon straddles the seam between the image and the copy.
                    It lives here rather than inside the image, because that
                    wrapper clips to the crop. */}
                <span className="relative z-10 -mt-6 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-purple-light/70 bg-black transition-colors duration-300 group-hover:border-cyan">
                  <Icon
                    className="h-5 w-5 text-purple-light transition-colors duration-300 group-hover:text-cyan"
                    aria-hidden="true"
                  />
                </span>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-5 text-center">
                  <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-base">
                    {division.eyebrow}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {division.blurb}
                  </p>

                  {/* Detail. Present in the markup always, revealed on demand. */}
                  <div
                    id={`${division.id}-detail`}
                    className={`grid text-left transition-all duration-500 ${
                      isOpen
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-bold uppercase tracking-wide text-cyan">
                        {division.title}
                      </h4>
                      {division.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 32)}
                          className="mt-2.5 text-xs leading-relaxed text-gray-300"
                        >
                          {paragraph}
                        </p>
                      ))}

                      <h5 className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Featuring
                      </h5>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {division.featuring.map((item) => (
                          <li
                            key={item}
                            className="border border-white/15 px-2 py-1 text-[0.7rem] text-gray-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      {division.footnote && (
                        <p className="mt-3 text-[0.7rem] italic leading-relaxed text-gray-500">
                          {division.footnote}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-5">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : division.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${division.id}-detail`}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-purple-light transition-colors duration-300 hover:text-cyan"
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                      {isOpen ? "Show less" : "Learn more"}
                    </button>

                    {isOpen && (
                      <Link
                        href={ctaHref}
                        className="mt-4 flex items-center justify-center gap-2 border border-purple-light/60 bg-purple/25 px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-cyan hover:bg-purple"
                      >
                        {division.cta}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
