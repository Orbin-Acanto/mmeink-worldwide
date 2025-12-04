"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ServicesCTA() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [40, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="relative mx-auto max-w-4xl text-center px-6 py-16 
                  bg-linear-to-b from-white/5 to-white/10 backdrop-blur 
                 border border-white/10 shadow-2xl"
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white mb-4">
        Elevate Your Event Vision
      </h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        From intimate gatherings to large-scale productions, our team turns
        ideas into unforgettable experiences.
      </p>

      <Link href="/contact">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 30px rgba(168, 85, 247, 0.45)",
          }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4  font-semibold text-lg cursor-pointer
                     bg-purple text-white tracking-wide shadow-xl 
                     hover:bg-purple/90 transition-all"
        >
          Start Your Event Journey
        </motion.button>
      </Link>
    </motion.div>
  );
}
