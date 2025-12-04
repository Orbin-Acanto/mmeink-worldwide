"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  alignment: "left" | "right";
}

export default function ServiceCard({
  service,
  index,
  alignment,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yOffset = index % 2 === 0 ? [120, -120] : [100, -100];
  const y = useTransform(scrollYProgress, [0, 1], yOffset);

  const alignmentClasses = {
    left: "justify-start",
    right: "justify-end",
  };

  const widthClasses = {
    left: "w-full sm:w-[50%] lg:w-[45%]",
    right: "w-full sm:w-[50%] lg:w-[45%]",
  };

  return (
    <div className={`flex ${alignmentClasses[alignment]}`}>
      <motion.div
        ref={cardRef}
        style={{ y }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group ${widthClasses[alignment]}`}
      >
        <Link href={service.href} className="block">
          <motion.div
            className="relative h-[300px] sm:h-[380px] lg:h-[450px] xl:h-[500px] overflow-hidden bg-zinc-900"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                priority={index < 2}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center leading-tight">
                {service.name}
              </h3>
            </motion.div>

            <motion.div
              className="absolute top-4 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6"
              initial={{ opacity: 0, x: -15, y: 15 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -15,
                y: isHovered ? 0 : 15,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                <ArrowUpRight
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-black"
                  strokeWidth={2.5}
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                boxShadow: isHovered
                  ? "0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                  : "0 0 0 0 rgba(0, 0, 0, 0)",
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
