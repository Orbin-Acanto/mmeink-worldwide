"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { steps } from "@/data";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);

      const targetLength = closestIndex / (steps.length - 1);
      setPathLength(targetLength);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
      style={{ minHeight: "200vh" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase mb-4">
              Our Approach
            </p>
            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
              How We Bring Your
              <br />
              <span className="text-purple">Vision to Life</span>
            </h1>
          </motion.div>
        </div>

        <div className="relative space-y-16 lg:space-y-20">
          <div className="absolute left-6 top-0 h-full w-1 lg:hidden">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 w-full bg-gray-300" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-linear-to-b from-purple via-purple-light to-purple origin-top"
                animate={{
                  height: `${pathLength * 100}%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <svg
            className="absolute left-0 right-0 top-0 w-full h-full pointer-events-none hidden lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 1400 1200"
          >
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#683293" />
                <stop offset="50%" stopColor="#8b6cba" />
                <stop offset="100%" stopColor="#683293" />
              </linearGradient>
            </defs>

            <path
              d="M 200 150 L 1200 400 L 200 650 L 1200 900"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 10"
            />
            <motion.path
              d="M 200 150 L 1200 400 L 200 650 L 1200 900"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 10"
              animate={{ pathLength: pathLength }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </svg>

          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`relative journey-card mt-4 lg:mt-0 ${
                index % 2 === 0 ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto lg:mr-0 "
              } w-full lg:w-[45%]`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.3,
                  x: 0,
                  scale: activeStep === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className={`relative overflow-hidden transition-all duration-500 ${
                    activeStep >= index
                      ? "shadow-2xl shadow-purple/20 border-purple/30"
                      : "shadow-lg border-gray-200"
                  } border-2 bg-white`}
                >
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 0 ? "lg:-right-3" : "lg:-left-3"
                    } -left-3 lg:block w-6 h-6 rounded-full transition-all duration-500 ${
                      activeStep >= index
                        ? "bg-purple border-2 border-purple-light shadow-lg shadow-purple/50"
                        : "bg-gray-400 border-2 border-gray-500"
                    }`}
                  />

                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl md:text-3xl font-bold uppercase text-black">
                      {step.title}
                    </h3>
                    <p className="text-purple font-semibold tracking-wide text-lg md:text-xl">
                      {step.subtitle}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 transition-colors duration-500 ${
                      activeStep >= index
                        ? "border-purple/50"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
