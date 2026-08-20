"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ServiceIntroContent } from "@/data/serviceIntros";

interface ServiceIntroProps {
  content: ServiceIntroContent;
  className?: string;
}

/**
 * Long-form service copy.
 *
 * Rendered as plain, crawlable prose rather than a carousel or accordion so
 * that search engines and AI assistants can lift whole passages out of the
 * page. The capability list is visible for the same reason.
 */
export default function ServiceIntro({
  content,
  className = "",
}: ServiceIntroProps) {
  const {
    eyebrow,
    headline,
    paragraphs,
    blocks,
    closing,
    capabilitiesHeading,
    capabilities,
  } = content;

  return (
    <section
      className={`bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-purple text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {eyebrow}
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-black tracking-tight">
                {headline}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 space-y-6"
            >
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {blocks?.map((block, index) => (
              <motion.div
                key={block.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="mt-10"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-purple mb-4">
                  {block.heading}
                </h3>
                <div className="space-y-6">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-10 border-l-4 border-purple pl-6 text-xl sm:text-2xl md:text-3xl font-bold text-black leading-snug"
            >
              {closing}
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-gray-50 border-t-4 border-purple p-6 sm:p-8 lg:sticky lg:top-28">
              <h3 className="text-lg sm:text-xl font-bold uppercase text-black tracking-tight mb-6">
                {capabilitiesHeading}
              </h3>
              <ul className="space-y-3">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                  >
                    <Check
                      className="w-5 h-5 text-purple shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
