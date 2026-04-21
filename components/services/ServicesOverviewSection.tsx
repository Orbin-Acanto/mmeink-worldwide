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
      className={`relative bg-white min-h-screen py-20 px-4 overflow-x-clip ${className}`}
    >
      <motion.div>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-heading">
            {title} <span className="gradient-text">{highlightedText}</span>
          </h2>
        </div>
      </motion.div>

      <div className="max-w-full mx-auto">
        <ServicesOverviewGrid services={services} />
      </div>
    </section>
  );
}
