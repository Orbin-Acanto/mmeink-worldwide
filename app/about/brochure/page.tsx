"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import FAQ from "@/components/FAQ";
import { brochure, brochurePages } from "@/data";

/**
 * The flip book measures real DOM nodes on mount, so it has to stay off the
 * server render. The skeleton keeps the page height stable while it loads.
 */
const BookReader = dynamic(() => import("@/components/media/BookReader"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[600px] w-full items-center justify-center bg-gray-50">
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Loading brochure
      </p>
    </div>
  ),
});

export default function DigitalBrochurePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[88vh] min-h-150 w-full overflow-hidden lg:min-h-175">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${brochure.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-linear-to-r from-purple/30 via-transparent to-cyan/20" />

        <div className="relative flex h-full items-center justify-center pt-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white sm:text-sm">
                {brochure.eyebrow}
              </span>

              <h1 className="mt-6 text-3xl font-bold uppercase tracking-tight text-white drop-shadow-2xl sm:text-4xl md:text-6xl lg:text-7xl">
                {brochure.title}
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mx-auto mt-6 h-0.5 bg-linear-to-r from-purple to-cyan"
              />

              <p className="mx-auto mt-7 max-w-xl text-sm font-light leading-relaxed text-white/90 drop-shadow-lg sm:text-base md:text-lg">
                {brochure.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reader */}
      <section id="brochure" className="scroll-mt-28">
        <BookReader
          pages={brochurePages}
          title={brochure.readerTitle}
          subtitle={brochure.readerSubtitle}
          downloadUrl={brochure.downloadUrl}
          shareUrl="/about/brochure"
        />
      </section>

      {/* CTA. The same artwork as every other closing band on the site. */}
      <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/shared/backgrounds/cta-background.jpg')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/65" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6"
        >
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white drop-shadow-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {brochure.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-200 drop-shadow-lg sm:text-base md:text-lg">
            {brochure.ctaBody}
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-purple px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-cyan sm:text-sm"
          >
            Book a Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200">
            <a
              href="tel:+18778850705"
              className="flex items-center gap-2 transition-colors hover:text-cyan"
            >
              <Phone className="h-5 w-5 text-cyan" />
              <span className="font-medium">1 877 885 0705</span>
            </a>
            <a
              href="mailto:info@mmeink.com"
              className="flex items-center gap-2 transition-colors hover:text-cyan"
            >
              <Mail className="h-5 w-5 text-cyan" />
              <span className="font-medium">info@mmeink.com</span>
            </a>
          </div>
        </motion.div>
      </section>

      <FAQ faqs={brochure.faqs} />
    </div>
  );
}
