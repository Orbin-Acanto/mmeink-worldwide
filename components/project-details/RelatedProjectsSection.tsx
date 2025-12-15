"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedProject {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

interface RelatedProjectsProps {
  projects: RelatedProject[];
}

export default function RelatedProjectsSection({
  projects,
}: RelatedProjectsProps) {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 px-4">
      <div className="absolute inset-0 z-0">
        <img
          src="/abstract-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-1 bg-linear-to-l from-black via-black/40 to-transparent" />

      <div className="absolute inset-0 z-2 bg-black/35" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="mb-2 uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-widest">
            <span
              style={{
                textShadow: `
                  2px 0   0 rgba(255,255,255,1),
                  -2px 0   0 rgba(255,255,255,1),
                  0   2px 0 rgba(255,255,255,1),
                  0  -2px 0 rgba(255,255,255,1),
                  1.5px 1.5px 0 rgba(255,255,255,1),
                  -1.5px 1.5px 0 rgba(255,255,255,1),
                  1.5px -1.5px 0 rgba(255,255,255,1),
                  -1.5px -1.5px 0 rgba(255,255,255,1)
                `,
                display: "inline-block",
              }}
            >
              More Work
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300">
            Explore our portfolio of memorable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={project.href} className="group block">
                <div className="relative">
                  <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="absolute top-4 right-4 w-11 h-11 border border-white/70 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-purple-400 mb-1 font-semibold">
                      {project.category}
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-white text-base sm:text-lg font-semibold group"
          >
            <span className="border-b border-white/50 group-hover:border-purple-400 group-hover:text-purple-400 transition-all pb-1">
              View All Projects
            </span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
