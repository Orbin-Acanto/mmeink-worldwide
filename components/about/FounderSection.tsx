"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { founder } from "@/data";

export default function FounderSection() {
  return (
    <section
      id="leadership"
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-purple/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Portrait and executive profile */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden border-2 border-gray-200">
              <Image
                src={founder.portrait}
                alt={founder.portraitAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Corner rules, matching the framing on the team cards. */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-purple/40 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-cyan/40 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-label">{founder.label}</p>
            <h2 className="section-heading mb-2">{founder.name}</h2>
            <p className="text-base sm:text-lg font-bold uppercase tracking-wide text-purple">
              {founder.role}
            </p>
            <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-500">
              {founder.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {founder.disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="border border-purple/20 bg-purple/5 px-3 py-1.5 text-[0.65rem] sm:text-xs uppercase tracking-widest text-gray-700"
                >
                  {discipline}
                </span>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
              {founder.profileTitle}
            </h3>
            <div className="space-y-4">
              {founder.profile.map((paragraph) => (
                <p key={paragraph} className="section-body">
                  {paragraph}
                </p>
              ))}
            </div>

            <figure className="mt-8 border-l-4 border-purple bg-gray-50 p-5 sm:p-6">
              <Quote className="w-6 h-6 text-purple/40 mb-3" aria-hidden />
              <blockquote className="text-sm sm:text-base md:text-lg font-light italic leading-relaxed text-gray-800">
                {founder.pullQuote}
              </blockquote>
            </figure>
          </motion.div>
        </div>

        {/* Leadership milestones */}
        <div className="mt-16 lg:mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-black"
          >
            {founder.milestonesTitle}
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {founder.milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-purple/50 hover:shadow-xl"
              >
                <span className="timeline-year">{milestone.year}</span>
                <h4 className="mt-3 mb-3 text-sm sm:text-base font-bold uppercase text-black group-hover:text-purple transition-colors duration-300">
                  {milestone.title}
                </h4>
                <p className="card-body">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise and philosophy */}
        <div className="mt-16 lg:mt-20 grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-5 text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
              {founder.expertiseTitle}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {founder.expertise.map((item) => (
                <li
                  key={item}
                  className="border border-gray-200 bg-gray-50 px-3 py-1.5 text-[0.7rem] sm:text-xs text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="section-body mt-6">{founder.expertiseNote}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-2 border-purple/20 bg-linear-to-br from-purple/5 to-cyan/5 p-6 sm:p-8"
          >
            <h3 className="mb-5 text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
              {founder.philosophyTitle}
            </h3>
            <div className="space-y-4">
              {founder.philosophy.map((paragraph) => (
                <p key={paragraph} className="section-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
