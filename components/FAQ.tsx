"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  defaultOpenIndex?: number | null;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services",
  defaultOpenIndex = 0,
  showCTA = true,
  ctaText = "Contact Us",
  ctaHref = "/contact",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm md:text-base text-purple-600 uppercase tracking-wider mb-3 font-semibold">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 pr-8 group-hover:text-purple-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-5 md:pb-6">
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
