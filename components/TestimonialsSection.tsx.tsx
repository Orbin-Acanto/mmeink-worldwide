"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsSection({
  testimonials,
  className = "",
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const duplicatedTestimonials = Array(
    Math.max(10, Math.ceil(20 / testimonials.length))
  )
    .fill(testimonials)
    .flat();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      setIsPaused(true);

      const container = scrollRef.current;
      const cardElement = container.querySelector(
        ".testimonial-card"
      ) as HTMLElement;
      const cardWidth = cardElement?.offsetWidth || 0;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsPaused(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const scrollSpeed = 0.5;

    const animate = (currentTime: number) => {
      if (!scrollRef.current || isPaused) return;

      if (lastTimeRef.current !== 0) {
        const deltaTime = currentTime - lastTimeRef.current;
        const scrollAmount = (scrollSpeed * deltaTime) / 16;

        const { scrollLeft, scrollWidth } = scrollRef.current;

        const oneSetWidth =
          scrollWidth / Math.max(10, Math.ceil(20 / testimonials.length));

        if (scrollLeft >= scrollWidth - oneSetWidth) {
          scrollRef.current.scrollLeft = oneSetWidth;
        } else {
          scrollRef.current.scrollLeft += scrollAmount;
        }
      }

      lastTimeRef.current = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isPaused, testimonials.length]);

  return (
    <section
      className={`relative bg-gray-50 py-12 sm:py-14 lg:py-16 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Client Testimonials
          </h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: (index % testimonials.length) * 0.1,
                  duration: 0.6,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="shrink-0 w-[85%] sm:w-[70%] lg:w-[60%] snap-center testimonial-card"
              >
                <div className="relative bg-white rounded-2xl shadow-xl border-l-4 border-purple p-6 sm:p-8 lg:p-10 h-full transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-purple/20" />
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 sm:mb-8 font-light italic pr-8">
                    "{testimonial.quote}"
                  </p>

                  <div>
                    <div className="font-semibold text-black text-base sm:text-lg mb-1">
                      {testimonial.name}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    )}
                    <div className="text-sm text-purple font-medium mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple text-white flex items-center justify-center shadow-lg hover:bg-purple/90 transition-all duration-300 z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple text-white flex items-center justify-center shadow-lg hover:bg-purple/90 transition-all duration-300 z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
