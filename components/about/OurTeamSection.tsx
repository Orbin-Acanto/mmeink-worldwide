"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { team } from "@/data";

export default function OurTeamSection() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/about/team/team-background.png"
          alt="Team Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">The Dream Team</p>
            <h2 className="section-heading">
              Our <span className="text-purple">Team</span>
            </h2>
            <p className="section-body-center animate-fadeIn animation-delay-200">
              Meet the crew that makes magic happen
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-purple/50 hover:shadow-2xl">
                <div className="relative h-80 bg-linear-to-br from-purple/10 to-cyan/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                    >
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-purple/20 to-cyan/20 text-4xl font-bold tracking-wider text-purple">
                          {member.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple/30 group-hover:border-purple transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan/30 group-hover:border-cyan transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="card-heading mb-1 group-hover:text-purple transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple font-semibold text-xs tracking-wider uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="card-body mb-6">{member.bio}</p>

                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="p-2 bg-gray-100 hover:bg-purple hover:text-white text-gray-600 transition-all duration-300 group/icon"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-100 hover:bg-cyan hover:text-white text-gray-600 transition-all duration-300 group/icon"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-block p-6 sm:p-8 md:p-12 bg-linear-to-br from-purple/5 to-cyan/5 border-2 border-purple/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-black mb-3">Want to Join Our Team?</h3>
            <p className="card-body max-w-xl mx-auto text-center mb-8 animate-fadeIn animation-delay-200">
              We're always looking for talented individuals who share our
              passion for creating unforgettable experiences.
            </p>
            <a
              href="https://www.indeed.com/cmp/Mmeink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-purple text-white font-medium text-sm tracking-wider uppercase hover:bg-purple/70 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
