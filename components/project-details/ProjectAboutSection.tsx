"use client";

import { motion } from "framer-motion";

interface ProjectAboutProps {
  description: string;
}

export default function ProjectAboutSection({
  description,
}: ProjectAboutProps) {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-neutral-900">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -top-40 -right-40 sm:-top-32 sm:-right-32 md:-top-40  md:-right-40 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]"
        >
          <div className="w-full h-full bg-purple-600/5 dark:bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute top-20 left-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-purple-600/8 dark:bg-purple-400/15 rounded-full blur-2xl" />
        </motion.div>

        <motion.svg
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 0.15, pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-0 top-1/4 w-32 h-64 sm:w-48 sm:h-80 md:w-64 md:h-96 lg:left-0 lg:top-1/4 2xl:block hidden"
          viewBox="0 0 200 400"
        >
          <motion.path
            d="M 0 0 Q 100 100 50 200 T 0 400"
            stroke="#683293"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-purple-400"
          />
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-10 left-4 w-20 h-20 sm:bottom-16 sm:left-8 sm:w-24 sm:h-24 2xl:block hidden md:bottom-20 md:left-10 md:w-32 md:h-32 border-2 border-purple-600/10 dark:border-purple-400/20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-24 left-16 w-14 h-14 sm:bottom-32 sm:left-24 sm:w-16 sm:h-16 md:bottom-40 md:left-32 md:w-20 md:h-20 2xl:block hidden rounded-full border-2 border-purple-600/15 dark:border-purple-400/25"
        />

        <div className="absolute top-20 left-4 sm:top-24 sm:left-12 md:top-32 md:left-20 grid-cols-4 sm:grid-cols-5 md:grid-cols-6 2xl:grid hidden gap-2 sm:gap-2.5 md:gap-3 opacity-20 dark:opacity-30">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
              viewport={{ once: true }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-4 sm:-left-6 md:-left-8 top-0 flex flex-col items-center h-full">
            <div className="w-0.5 sm:w-1 flex-1 bg-linear-to-b from-purple-600/30 via-purple-600/15 to-transparent dark:from-purple-400/30 dark:via-purple-400/15" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 sm:gap-3 absolute top-1/2 -translate-y-1/2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-600 dark:bg-purple-400"
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 0.06, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -top-8 -left-2 sm:-top-10 sm:-left-3 md:-top-12 md:-left-4 text-[120px] sm:text-[160px] md:text-[200px] font-serif text-purple-600 dark:text-purple-400 leading-none select-none pointer-events-none hidden sm:block"
          >
            "
          </motion.div>

          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-neutral-800 dark:text-neutral-200 font-light tracking-tight relative z-10"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 -right-4 w-16 h-16 sm:-bottom-5 sm:-right-5 sm:w-20 sm:h-20 md:-bottom-6 md:-right-6 md:w-24 md:h-24 border-r-2 border-b-2 border-purple-600/20 dark:border-purple-400/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
