"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ServicesOverviewGrid from "./ServicesOverviewGrid";
import ServicesCTA from "./ServicesCTA";

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
    offset: ["start start", "end end"],
  });

  const verticalOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.05, 0.9, 1],
    [0, 1, 1, 0]
  );
  const verticalX = useTransform(scrollYProgress, [0.05, 0.15], [-50, 0]);

  const letters = ["S", "E", "R", "V", "I", "C", "E", "S"];

  return (
    <section
      ref={sectionRef}
      className={`relative bg-black min-h-screen py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <motion.div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 tracking-widest leading-tight drop-shadow-2xl">
            OUR <span className="text-purple">SERVICES</span>
          </h2>
        </div>
      </motion.div>

      <motion.div
        style={{
          opacity: verticalOpacity,
          x: verticalX,
        }}
        className="fixed left-6 sm:left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
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
              className="text-6xl xl:text-7xl font-bold hollow-text"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesOverviewGrid services={services} />
      </div>
      <ServicesCTA />
    </section>
  );
}
