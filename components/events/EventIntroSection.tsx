"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

interface EventIntroSectionProps {
  className?: string;
}

export default function EventIntroSection({
  className = "",
}: EventIntroSectionProps) {
  return (
    <section
      className={`relative bg-gray-100 py-12 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid xl:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-purple text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Event Excellence
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-6 tracking-tight drop-shadow-2xl">
              Creating Unforgettable Moments
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              From intimate gatherings to grand spectacles, we craft experiences
              that resonate. Our team handles every detail with precision and
              creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-purple mb-2">
                  30+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-purple mb-2">
                  1K+
                </div>
                <div className="text-sm text-gray-600">Events Delivered</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-2 relative h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden"
              >
                <Image
                  src="/services/rentals/case-study/2.jpg"
                  alt="Event Production"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative h-[200px] sm:h-[250px] overflow-hidden"
              >
                <Image
                  src="/services/dd/4.jpg"
                  alt="Event Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative h-[200px] sm:h-[250px] overflow-hidden"
              >
                <Image
                  src="/services/cf/10.jpg"
                  alt="Event Setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
