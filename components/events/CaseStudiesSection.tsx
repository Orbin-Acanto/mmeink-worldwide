"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudy {
  id: string;
  clientName: string;
  projectTitle: string;
  challenge: string;
  solution: string;
  impact: string;
  gallery: string[];
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({
  caseStudies,
}: CaseStudiesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-gray-100 relative overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
          }}
          className="absolute top-[15%] -left-20 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [100, -100]),
            rotate: useTransform(scrollYProgress, [0, 1], [360, 0]),
          }}
          className="absolute top-[50%] -right-20 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0, 1], [-80, 80]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
          }}
          className="absolute top-[80%] -left-24 w-96 h-96 bg-purple-600/6 rounded-full blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(104, 50, 147, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(104, 50, 147, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
          }}
          className="absolute top-[20%] right-32 w-32 h-32 border-2 border-purple-600/15 hidden md:block"
        />
        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180]),
          }}
          className="absolute top-[60%] left-32 w-24 h-24 rounded-full border-2 border-purple-600/15 hidden md:block"
        />

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
          }}
          className="absolute top-[40%] right-40 hidden md:block"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-600/15"
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
          className="absolute top-[75%] left-40 hidden md:block"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-600/15"
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
            rotate: useTransform(scrollYProgress, [0, 1], [0, 90]),
          }}
          className="absolute top-[35%] left-28 hidden md:block"
        >
          <div className="relative w-10 h-10">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-600/15 -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-purple-600/15 -translate-x-1/2"></div>
          </div>
        </motion.div>

        <motion.div
          style={{
            rotate: useTransform(scrollYProgress, [0, 1], [0, -120]),
          }}
          className="absolute top-[85%] right-32 w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-b-35 border-b-purple-600/15 hidden md:block"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-6 tracking-tight drop-shadow-2xl">
          Case<span className="text-purple"> Studies</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 mb-6 max-w-2xl mx-auto">
          Real results from real events
        </p>
      </motion.div>

      <div className="relative space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (caseStudy.gallery.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) =>
        prev === caseStudy.gallery.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [caseStudy.gallery.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? caseStudy.gallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) =>
      prev === caseStudy.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <motion.div ref={cardRef} style={{ opacity }} className="relative w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video overflow-hidden mb-10 sm:mb-12 md:mb-16 group"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 150, damping: 40 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0"
            >
              <Image
                src={caseStudy.gallery[currentImageIndex]}
                alt={`${caseStudy.projectTitle} - Image ${
                  currentImageIndex + 1
                }`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={index === 0 && currentImageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 right-6 sm:right-8 md:right-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-purple-400 text-sm sm:text-base font-semibold uppercase tracking-wider mb-2">
                {caseStudy.clientName}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {caseStudy.projectTitle}
              </h3>
            </motion.div>
          </div>

          {caseStudy.gallery.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-900" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-900" />
              </button>
            </>
          )}

          {caseStudy.gallery.length > 1 && (
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-2 bg-black/70 backdrop-blur-sm text-white text-sm font-medium z-10">
              {currentImageIndex + 1} / {caseStudy.gallery.length}
            </div>
          )}

          {caseStudy.gallery.length > 1 && (
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex gap-2 z-10">
              {caseStudy.gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-6 left-6 right-6 h-0.5 bg-neutral-300">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-purple-600 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 relative">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 relative"
            >
              <div className="flex flex-col items-center lg:items-start gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-purple-600 flex items-center justify-center relative z-10"
                >
                  <span className="text-white text-xl font-bold">01</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-1 bg-purple-600 lg:hidden"
                />
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase text-center lg:text-left">
                  Challenge
                </h4>
              </div>
              <div>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 relative"
            >
              <div className="flex flex-col items-center lg:items-start gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-purple-600 flex items-center justify-center relative z-10"
                >
                  <span className="text-white text-xl font-bold">02</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="h-1 bg-purple-600 lg:hidden"
                />
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase text-center lg:text-left">
                  Solution
                </h4>
              </div>
              <div>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 relative"
            >
              <div className="flex flex-col items-center lg:items-start gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-purple-600 flex items-center justify-center relative z-10"
                >
                  <span className="text-white text-xl font-bold">03</span>
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-purple-600 lg:hidden"
                />
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 uppercase text-center lg:text-left">
                  Impact
                </h4>
              </div>
              <div>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {caseStudy.impact}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
