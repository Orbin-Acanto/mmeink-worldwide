"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-center">
          <div className="space-y-6 md:sticky md:top-28">
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
              About Us
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Crafting unforgettable
              <span className="block text-purple mt-1">event experiences.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We are a full-service event management company bringing visions to
              life through thoughtful design, seamless production, and immersive
              guest experiences. From large-scale corporate events to intimate
              gatherings, our team ensures every detail is executed beautifully.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our expertise includes concept development, staging, decor,
              lighting, sound, logistics, and full event-day coordination. All
              under one roof.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-1 text-xs font-medium text-purple bg-purple/5 rounded-full">
                Corporate Events
              </span>
              <span className="px-4 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                Brand Activations
              </span>
              <span className="px-4 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                Weddings & Socials
              </span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[540px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80"
              alt="Event production lighting and stage"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
