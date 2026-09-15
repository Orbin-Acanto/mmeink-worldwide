"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "../Button";
import { aboutHero } from "@/data";

export default function Hero() {
  const { videoSrc, poster, posterAlt, title, titleHighlight, titleTail, subtitle } =
    aboutHero;

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {/* The reel when it lands, the still until then. Same framing either
            way, so the swap does not move anything on the page. */}
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            aria-label={posterAlt}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={poster}
            alt={posterAlt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-[1.1]"
            >
              <span className="block">{title}</span>
              <span className="block gradient-text">{titleHighlight}</span>
              <span className="block">{titleTail}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-[1.25rem] text-white/90 mb-8 sm:mb-12 max-w-2xl font-light drop-shadow-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button href="/contact" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Let&apos;s Create Together
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-wider">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-purple/10 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
