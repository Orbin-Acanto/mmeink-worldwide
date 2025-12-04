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
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className={`relative bg-white min-h-screen py-12 sm:py-14 lg:py-16 ${className}`}
    >
      <motion.div>
        <div className="max-w-7xl mx-auto">
          <h1 className="flex items-center justify-center gap-3 text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black tracking-tight leading-tight drop-shadow-2xl">
            OUR <span className="text-purple">SERVICES</span>
          </h1>
        </div>
      </motion.div>

      <div className="max-w-full mx-auto">
        <ServicesOverviewGrid services={services} />
      </div>
    </section>
  );
}
