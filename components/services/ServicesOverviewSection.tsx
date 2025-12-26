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
  title: string;
  highlightedText: string;
  className?: string;
}

export default function ServicesOverviewSection({
  services,
  className = "",
  title,
  highlightedText,
}: ServicesOverviewSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-white min-h-screen py-12 sm:py-14 lg:py-16 px-4 overflow-x-clip ${className}`}
    >
      <motion.div>
        <div className="max-w-7xl mx-auto">
          <h1 className="flex items-center justify-center gap-3 text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black tracking-tight leading-tight drop-shadow-2xl">
            {title} <span className="text-purple">{highlightedText}</span>
          </h1>
        </div>
      </motion.div>

      <div className="max-w-full mx-auto">
        <ServicesOverviewGrid services={services} />
      </div>
    </section>
  );
}
