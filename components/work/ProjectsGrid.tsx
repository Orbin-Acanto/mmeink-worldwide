"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  venue: string;
  eventType: string;
  category: string;
  image: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const getGridClass = (index: number) => {
    // Medium screens: 2 → 1 → repeat
    const mdPos = index % 3;
    let mdClass = mdPos === 2 ? "md:col-span-12" : "md:col-span-6";

    // Large screens: 3 → 2 → 1 → repeat
    const lgPos = index % 6;
    let lgClass =
      lgPos < 3
        ? "lg:col-span-4"
        : lgPos < 5
        ? "lg:col-span-6"
        : "lg:col-span-12";

    return `${mdClass} ${lgClass}`;
  };

  return (
    <section className="py-16 sm:py-6 lg:py-8">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-6">
        {projects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 lg:gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden bg-gray-900 h-[400px] lg:h-[500px] cursor-pointer ${getGridClass(
                  index
                )}`}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="inline-block px-3 py-1 bg-purple/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-3">
                      {project.eventType}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.venue}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    className="absolute top-6 right-6 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl font-bold text-gray-400 mb-2">
              No projects found
            </p>
            <p className="text-gray-500">Try selecting a different filter</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
