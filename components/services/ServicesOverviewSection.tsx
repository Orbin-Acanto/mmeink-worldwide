"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ServicesOverviewGrid from "./ServicesOverviewGrid";

interface Service {
  id: string;
  name: string;
  image: string;
  href: string;
}

interface ServicesOverviewSectionProps {
  services: Service[];
  className?: string;
}

export default function ServicesOverviewSection({
  services,
  className = "",
}: ServicesOverviewSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const verticalOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const verticalX = useTransform(scrollYProgress, [0.1, 0.25], [-50, 0]);

  const letters = ["S", "E", "R", "V", "I", "C", "E", "S"];

  return (
    <section
      ref={sectionRef}
      className={`relative bg-black min-h-screen py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <motion.div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 tracking-widest leading-tight drop-shadow-2xl">
            OUR SERVICES
          </h2>
        </div>
      </motion.div>

      <motion.div
        style={{
          opacity: verticalOpacity,
          x: verticalX,
        }}
        className="fixed left-6 sm:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
      >
        <div className="flex flex-col gap-1 lg:gap-2 leading-none">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              style={{
                opacity: verticalOpacity,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold hollow-text"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none md:hidden">
        <div className="flex flex-col gap-0.5 leading-none">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-3xl sm:text-4xl font-bold hollow-text"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesOverviewGrid services={services} />
      </div>
    </section>
  );
}
