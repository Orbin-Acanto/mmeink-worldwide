"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    id: 1,
    name: "Michael Tardi",
    role: "Founder & CEO",
    bio: "Visionary leader with 30 years of experience transforming events into unforgettable experiences.",
    avatar: "https://avatar.iran.liara.run/public/1",
    linkedin: "#",
    email: "michael@mmeink.com",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    role: "Creative Director",
    bio: "Award-winning designer specializing in immersive event experiences and brand activations.",
    avatar: "https://avatar.iran.liara.run/public/2",
    linkedin: "#",
    email: "sarah@mmeink.com",
  },
  {
    id: 3,
    name: "James Chen",
    role: "Production Manager",
    bio: "Technical expert ensuring flawless execution of complex events with precision and care.",
    avatar: "https://avatar.iran.liara.run/public/3",
    linkedin: "#",
    email: "james@mmeink.com",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Client Relations",
    bio: "Dedicated to building lasting partnerships and exceeding client expectations every time.",
    avatar: "https://avatar.iran.liara.run/public/4",
    linkedin: "#",
    email: "emily@mmeink.com",
  },
  {
    id: 5,
    name: "David Park",
    role: "Technical Lead",
    bio: "Audio-visual specialist with expertise in cutting-edge technology and innovative solutions.",
    avatar: "https://avatar.iran.liara.run/public/5",
    linkedin: "#",
    email: "david@mmeink.com",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Operations Director",
    bio: "Logistics mastermind coordinating seamless events from concept to completion.",
    avatar: "https://avatar.iran.liara.run/public/6",
    linkedin: "#",
    email: "lisa@mmeink.com",
  },
];

export default function OurTeamSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-purple uppercase mb-4">
              The Dream Team
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-black mb-6">
              Our <span className="text-purple">Team</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
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
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple/30 group-hover:border-purple transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan/30 group-hover:border-cyan transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold uppercase text-black mb-1 group-hover:text-purple transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple font-semibold text-sm tracking-wider uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="p-2 bg-gray-100 hover:bg-purple hover:text-white text-gray-600 transition-all duration-300 group/icon"
                    >
                      <Linkedin className="w-5 h-5" />
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
          <div className="inline-block p-8 md:p-12 bg-linear-to-br from-purple/5 to-cyan/5 border-2 border-purple/20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for creating unforgettable experiences.
            </p>
            <a
              href="/careers"
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
