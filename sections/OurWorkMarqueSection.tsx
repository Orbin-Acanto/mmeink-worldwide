"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { Project } from "@/types";

interface OurWorkMarqueSectionProps {
  items: Project[];
  className?: string;
}

export default function OurWorkMarqueSection({
  items,
  className = "",
}: OurWorkMarqueSectionProps) {
  const marqueeItems = [...items, ...items];

  return (
    <section
      className={`relative bg-black py-16 sm:py-20 lg:py-24 overflow-hidden w-full ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-center">
          <h2 className="flex items-center justify-center gap-3 text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white tracking-tight leading-tight drop-shadow-2xl">
            <span className="text-white">Our</span>
            <span className="inline-block min-w-5 text-center">
              <TypingText
                text={[
                  "Creative Vision",
                  "Event Productions",
                  "Project Highlights",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-purple"
                variableSpeed={{ min: 50, max: 120 }}
              />
            </span>
          </h2>
        </div>
      </div>

      <div className="relative group overflow-hidden w-full">
        <div
          className="
            flex gap-4 sm:gap-6 animate-marquee
            group-hover:paused
            w-max
          "
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="
                relative group/card
                min-w-[80vw] sm:min-w-[55vw] lg:min-w-[33vw]
                aspect-3/2 overflow-hidden bg-black/40
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

              <Link
                href={item.href}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20"
              >
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-black shadow-lg hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight strokeWidth={2.4} className="h-4 w-4" />
                </button>
              </Link>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                {item.eventType && (
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-emerald-100 mb-2">
                    {item.eventType}
                  </span>
                )}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow">
                  {item.title}
                </h3>
              </div>

              <Link
                href={item.href}
                className="absolute inset-0"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
