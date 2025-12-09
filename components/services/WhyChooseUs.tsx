"use client";

import { motion } from "framer-motion";
import { Award, Building2, Package, Clock } from "lucide-react";
import { HighlightText } from "../ui/shadcn-io/highlight-text";

const differentiators = [
  {
    icon: Award,
    title: "30 Years of Expertise",
    description: "Three decades of creating unforgettable events",
  },
  {
    icon: Building2,
    title: "In-House Capabilities",
    description: "Complete production services under one roof",
  },
  {
    icon: Package,
    title: "Turnkey Solutions",
    description: "End-to-end event management",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-6 tracking-tight drop-shadow-2xl">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-purple">
              <HighlightText
                text="MMEink Services"
                inView={true}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mb-6 inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br from-purple-100 to-purple-200 group-hover:from-purple-600 group-hover:to-purple-800 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/50 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-700 group-hover:text-white transition-colors duration-300 relative z-10" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.2,
                  duration: 0.6,
                }}
                className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-purple-700 transition-colors duration-300"
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + 0.4,
                  duration: 0.6,
                }}
                className="text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
              >
                {item.description}
              </motion.p>

              <motion.div className="mt-4 mx-auto w-0 h-0.5 bg-linear-to-r from-purple-600 to-purple-800 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
