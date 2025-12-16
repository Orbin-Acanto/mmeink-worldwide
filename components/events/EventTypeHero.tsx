"use client";

import { motion } from "framer-motion";

interface EventTypeHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function EventTypeHero({
  image,
  title,
  subtitle,
}: EventTypeHeroProps) {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 [text-shadow:0_4px_12px_rgb(0_0_0_/80%),0_2px_4px_rgb(0_0_0_/60%)]">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl lg:text-[1.8rem]  text-white/90 mb-12 max-w-4xl mx-auto font-light drop-shadow-lg leading-relaxed xl:leading-tight">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
