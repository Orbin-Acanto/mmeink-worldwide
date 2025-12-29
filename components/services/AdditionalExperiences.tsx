"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface AdditionalExperiencesProps {
  projects: Project[];
  title?: string;
  highlightedText?: string;
  subtitle?: string;
  autoPlayInterval?: number;
}

export default function AdditionalExperiences({
  projects,
  title = "Featured",
  subtitle = "Explore more of our exceptional work",
  highlightedText = "Projects",
  autoPlayInterval = 5000,
}: AdditionalExperiencesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [projects.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-6 tracking-tight drop-shadow-2xl"
          >
            {title} <span className="text-purple">{highlightedText}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fadeIn animation-delay-200"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      <div className="relative w-full aspect-square md:aspect-auto md:h-screen md:min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-full"
          >
            <Link
              href={projects[currentIndex].href}
              className="absolute inset-0 z-10 cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/70" />
              </div>

              <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left max-w-2xl"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 lg:mb-6">
                      {projects[currentIndex].title}{" "}
                      {/* <span className="inline-block">→</span> */}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-1 md:mb-2">
                      {projects[currentIndex].venue}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 uppercase tracking-wider">
                      {projects[currentIndex].eventType}
                    </p>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-2 md:gap-4 z-30">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrevious();
            }}
            className="p-2 md:p-3 lg:p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            className="p-2 md:p-3 lg:p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
          </button>
        </div>

        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-3 z-30">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goToSlide(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30">
          <p className="text-white/60 text-xs md:text-sm lg:text-base font-light">
            <span className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
