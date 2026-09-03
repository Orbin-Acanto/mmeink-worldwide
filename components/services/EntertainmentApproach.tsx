"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DifferenceBlock {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  statement: string;
  cta: { text: string; href: string };
  image: string;
  imageAlt: string;
}

interface EntertainmentApproachProps {
  difference: DifferenceBlock;
}

/**
 * The band that argues entertainment curated alongside the production reads
 * differently to entertainment booked separately. Image on one side, the
 * argument on the other, closing on a single statement.
 */
export default function EntertainmentApproach({
  difference,
}: EntertainmentApproachProps) {
  return (
    <section className="w-full bg-charcoal-dark">
      <div className="grid lg:grid-cols-2">
        {/* Image half, flush to the edge of the band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-4/3 w-full lg:aspect-auto lg:min-h-136"
        >
          <Image
            src={difference.image}
            alt={difference.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-charcoal-dark/70" />
        </motion.div>

        {/* Copy half */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-light sm:text-sm">
            {difference.eyebrow}
          </span>

          <h2 className="mt-5 text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {difference.title}
            <span className="block gradient-text">
              {difference.titleHighlight}
            </span>
          </h2>

          <div className="mt-7 space-y-5">
            {difference.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-sm leading-relaxed text-gray-300 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-cyan pl-5 text-sm font-bold uppercase tracking-[0.15em] text-cyan sm:text-base">
            {difference.statement}
          </p>

          <Link
            href={difference.cta.href}
            className="group mt-9 inline-flex w-fit items-center gap-3 border border-white/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-cyan hover:bg-purple sm:text-sm"
          >
            {difference.cta.text}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
