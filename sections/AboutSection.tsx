"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  label?: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export default function AboutSection({
  label = "About Us",
  title,
  titleHighlight,
  description,
}: AboutSectionProps) {
  return (
    <section
      id="about-us"
      className="relative bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] mb-12 text-gray-500 uppercase">
          {label}
        </p>
        <div className="grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-5 sm:space-y-6">
            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
              {title}
              <span className="block text-purple">{titleHighlight}</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"></p> */}
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[540px] mt-8 md:mt-0"
          >
            <Image
              src="/MME-30th.png"
              alt="Event production lighting and stage"
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
