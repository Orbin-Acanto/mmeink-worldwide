"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase">
              About Us
            </p>

            <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
              Crafting unforgettable
              <span className="block text-purple">event experiences</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              With over 30 years of excellence, MME is a full-service Event
              Management and Hospitality agency known for creating
              extraordinary, first-class experiences. Operating with a boutique
              approach, we combine creativity, innovation, and strategic
              expertise to deliver exceptional events. Under the leadership of
              CEO Michael Tardi, our team blends the managerial strength of a
              large firm with the flexibility of a boutique agency, now proudly
              serving clients worldwide from our headquarters in Manhattan, Long
              Island, and Miami.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Expanding globally, MME continues to be a trusted partner in event
              production and hospitality. From concept to completion, we craft
              authentic, engaging experiences that align with your brand,
              ensuring every detail exceeds expectations.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[540px] mt-8 md:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80"
              alt="Event production lighting and stage"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
