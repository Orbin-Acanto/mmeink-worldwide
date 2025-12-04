"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Service {
  id: string;
  name: string;
  image: string;
  href: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group w-full h-full"
    >
      <Link href={service.href} className="block h-full">
        <motion.div
          className="relative w-full aspect-square overflow-hidden bg-zinc-900 shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Image */}
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
          </motion.div>

          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Title */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
              {service.name}
            </h3>
          </motion.div>

          {/* Arrow button */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
