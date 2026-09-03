"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Star } from "lucide-react";

const badges = [
  { icon: Award, label: "Years of Excellence", value: "30+" },
  { icon: Users, label: "Events Produced", value: "5,000+" },
  { icon: Star, label: "Industry Awards", value: "20+" },
];

interface AboutSectionProps {
  label?: string;
  title: string;
  titleHighlight: string;
  description: string;
  /**
   * The artwork beside the copy. Passed in per page so each page owns its own
   * copy of the file rather than three pages sharing one path.
   */
  graphic: string;
  graphicAlt?: string;
}

export default function AboutSection({
  label = "About Us",
  title,
  titleHighlight,
  description,
  graphic,
  graphicAlt = "MME Worldwide, thirty years of event production",
}: AboutSectionProps) {
  return (
    <section
      id="about-us"
      className="relative bg-white py-20"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">{label}</p>
        <div className="grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-5 sm:space-y-6">
            <h1 className="section-heading">
              {title}
              <span className="section-heading-highlight">{titleHighlight}</span>
            </h1>

            <p className="section-body">{description}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              {badges.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-purple/20 bg-purple/5 px-4 py-3 rounded-sm"
                >
                  <Icon className="w-5 h-5 text-purple shrink-0" />
                  <div>
                    <p className="text-base font-bold text-gray-900 leading-none">{value}</p>
                    <p className="text-[0.65rem] uppercase tracking-widest text-gray-500 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[540px] mt-8 md:mt-0"
          >
            <Image
              src={graphic}
              alt={graphicAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
