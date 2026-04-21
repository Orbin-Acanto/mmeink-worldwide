"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { locations, timeline } from "@/data";

export default function OurStorySection() {
  return (
    <section className="relative w-full pt-20 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan/5 blur-3xl rounded-full" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-7xl mx-auto flex-col">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label">Our Journey</p>
              <h1 className="section-heading">
                Our <span className="text-purple">Story</span>
              </h1>
              <p className="section-body-center animate-fadeIn animation-delay-200">
                Three decades of innovation, creativity, and unforgettable
                moments
              </p>
            </motion.div>
          </div>
          {/* Timeline  */}
          <div className="relative mb-16">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-purple via-purple-light to-purple transform -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full lg:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="group p-5 sm:p-6 lg:p-8 bg-white border-2 border-gray-200 hover:border-purple/50 transition-all duration-300 hover:shadow-xl">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0
                            ? "lg:justify-end"
                            : "lg:justify-start"
                        } justify-start`}
                      >
                        <div className="p-3 bg-purple/10 text-purple rounded-full group-hover:bg-purple group-hover:text-white transition-colors duration-300">
                          {item.icon}
                        </div>
                        <span className="timeline-year">{item.year}</span>
                      </div>
                      <h3 className="timeline-heading">{item.title}</h3>
                      <p className="timeline-body">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple border-4 border-white rounded-full shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Location Area  */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 bg-black">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="cta-heading">
              Our <span className="gradient-text">Locations</span>
            </h1>
            <p className="cta-body animate-fadeIn animation-delay-200">
              Serving clients across three iconic cities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-gray-900 border-2 border-gray-700 hover:border-purple/50 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-light" />
                    <h4 className="text-lg sm:text-xl font-bold uppercase">
                      {location.city}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300">{location.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
