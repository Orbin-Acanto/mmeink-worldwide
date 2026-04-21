"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function CTASection({
  primaryButton,
  title = "Ready to Create Something Amazing?",
  subtitle = "Let's bring your vision to life",
}: {
  primaryButton: { href: string; text: string };
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative w-full h-[40vh] min-h-80 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/abstract-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="absolute inset-0 bg-linear-to-r from-purple/50 via-black/20 to-cyan/40"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-label"
          >
            {subtitle}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="cta-heading"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button href={primaryButton.href} variant="primary">
              {primaryButton.text}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
