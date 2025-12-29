"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface Offering {
  id: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  image: string;
}

interface WhatWeDoSectionProps {
  offerings: Offering[];
}

export default function WhatWeDoSection({ offerings }: WhatWeDoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-white relative overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          }}
          className="absolute top-[10%] -left-20 w-72 h-72 lg:w-96 lg:h-96 bg-purple-600/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [100, -100]),
            rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
          }}
          className="absolute top-[30%] -right-20 w-64 h-64 lg:w-80 lg:h-80 bg-purple-600/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-80, 80]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
          }}
          className="absolute top-[60%] -left-24 w-80 h-80 lg:w-96 lg:h-96 bg-purple-600/4 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [80, -80]),
            rotate: useTransform(scrollYProgress, [0, 1], [-360, 0]),
          }}
          className="absolute top-[85%] -right-24 w-72 h-72 lg:w-88 lg:h-88 bg-purple-600/4 rounded-full blur-3xl"
        />

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,200 Q400,100 800,200 T1600,200"
            stroke="#683293"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,400 Q400,500 800,400 T1600,400"
            stroke="#683293"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,800 Q400,700 800,800 T1600,800"
            stroke="#683293"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
          }}
          className="absolute top-[15%] right-20 lg:right-40 w-24 h-24 lg:w-32 lg:h-32 border-2 border-purple-600/10"
        />
        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
          }}
          className="absolute top-[45%] left-20 lg:left-40 w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-purple-600/10"
        />

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
          }}
          className="absolute top-[70%] right-32 lg:right-48"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-600/10"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]),
          }}
          className="absolute top-[25%] left-24 lg:left-32"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-600/10"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, -120]),
          }}
          className="absolute top-[55%] right-16 lg:right-28 w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-b-35 border-b-purple-600/10"
        />

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 90]),
          }}
          className="absolute top-[90%] left-28 lg:left-44"
        >
          <div className="relative w-8 h-8 lg:w-10 lg:h-10">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-600/10 -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-purple-600/10 -translate-x-1/2"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h1 className="uppercase mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
          What <span className=" text-purple">We Do</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Transforming visions into unforgettable experiences
        </p>
      </motion.div>

      <div className="relative space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {offerings.map((offering, index) => (
          <OfferingSlide key={offering.id} offering={offering} index={index} />
        ))}
      </div>
    </section>
  );
}

function OfferingSlide({
  offering,
  index,
}: {
  offering: Offering;
  index: number;
}) {
  const slideRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["-20%", "0%", "0%"]
  );
  const contentX = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["20%", "0%", "0%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={slideRef}
      style={{ opacity: opacity }}
      className="relative w-full flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <motion.div
            style={{
              x:
                typeof window !== "undefined" && window.innerWidth >= 1024
                  ? imageX
                  : 0,
            }}
            className={`lg:col-span-6 relative z-10 ${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative aspect-4/3 w-full group">
              <div className="absolute -inset-2 bg-linear-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 hidden md:block" />

              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={offering.image}
                  alt={offering.headline}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                {/* <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:block">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-6xl sm:text-7xl md:text-8xl font-bold text-white/10"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>
                </div> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              x:
                typeof window !== "undefined" && window.innerWidth >= 1024
                  ? contentX
                  : 0,
            }}
            className={`lg:col-span-6 space-y-4 sm:space-y-5 ${
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 flex items-center justify-center relative overflow-hidden group">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-white hidden md:block"
                />
                <offering.icon
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10"
                  strokeWidth={1.5}
                />
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -right-16 top-1/2 w-12 h-0.5 bg-purple-600 origin-left hidden md:block"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                {offering.headline}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                {offering.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-20 sm:w-24 h-1 bg-linear-to-r from-purple-600 to-purple-400 origin-left"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
