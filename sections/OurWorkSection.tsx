"use client";

import { workItems } from "@/data";
import { WorkItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OurWorkSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 xl:px-12">
        <div className="text-center xl:mb-4 mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">
            Stories We&apos;ve Brought to Life
          </p>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-black tracking-tight">
            OUR <span className="text-purple">CREATIVITY</span> HAS NO LIMITS
          </h2>
        </div>

        <div className="hidden xl:block relative h-[600px]">
          <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center mx-auto">
            {workItems.map((item, index) => (
              <WorkCard
                key={item.id}
                item={item}
                index={index}
                isHovered={hoveredId === item.id}
                onHover={() => setHoveredId(item.id)}
                onLeave={() => setHoveredId(null)}
                totalItems={workItems.length}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid xl:hidden grid-cols-2 gap-6">
          {workItems.map((item) => (
            <MobileWorkCard key={item.id} item={item} />
          ))}
        </div>

        <div className="grid md:hidden grid-cols-1 gap-6">
          {workItems.map((item) => (
            <MobileWorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorkCardProps {
  item: WorkItem;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  totalItems: number;
}

function WorkCard({
  item,
  index,
  isHovered,
  onHover,
  onLeave,
  totalItems,
}: WorkCardProps) {
  const calculateOffset = () => {
    const spacing = 320;
    const totalWidth = (totalItems - 1) * spacing;
    const startOffset = -totalWidth / 2;
    return startOffset + index * spacing;
  };

  const rotation = (index - 1.5) * 2.5;

  return (
    <Link
      href={item.href}
      className="absolute w-[360px] h-[480px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer"
      style={{
        left: `calc(50% + ${calculateOffset()}px)`,
        transform: isHovered
          ? "translateX(-50%) translateY(-40px) scale(1.08) rotate(0deg)"
          : `translateX(-50%) translateY(0) scale(0.92) rotate(${rotation}deg)`,
        zIndex: isHovered ? 100 : 10 + index,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 bg-black/40 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/95 to-transparent p-8 transition-transform duration-500"
        style={{
          transform: isHovered ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <p className="text-white/70 text-xs uppercase tracking-[0.25em] mb-2 font-medium">
          {item.category}
        </p>
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 text-white/90 text-sm">
          <span className="uppercase tracking-wider">View Project</span>
          <svg
            className="w-4 h-4 transition-transform duration-300"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function MobileWorkCard({ item }: { item: WorkItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      className="group relative h-[400px] overflow-hidden shadow-xl transition-all duration-500 cursor-pointer hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60" />

      {/* Title Container */}
      <div
        className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/95 to-transparent p-6 transition-transform duration-500"
        style={{
          transform: isHovered ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <p className="text-white/70 text-xs uppercase tracking-[0.25em] mb-2 font-medium">
          {item.category}
        </p>
        <h3 className="text-white text-2xl font-bold mb-3">{item.title}</h3>
        <div className="flex items-center gap-2 text-white/90 text-sm">
          <span className="uppercase tracking-wider">View Project</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
