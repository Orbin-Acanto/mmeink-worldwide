"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  title: string;
  image: string;
  description: string;
  href: string;
}

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      title: "Corporate Events",
      image: "/corporate.png",
      description:
        "Our seasoned event planning experts collaborate closely with you to craft a bespoke affair that exceeds expectations, leaving an indelible mark on your company and its guests.",
      href: "/services/corporate-events",
    },
    {
      title: "Experiential Marketing",
      image: "/2-771x1024.png",
      description:
        "MME's unparalleled expertise in curating and managing unique brand experiences positions us as your premier partner for planning exceptional marketing events.",
      href: "/services/experiential-marketing",
    },
    {
      title: "Custom Fabrication",
      image: "/customfab.png",
      description:
        "MME is your trusted partner for life's special moments, offering comprehensive solutions for all your social event needs to celebrate yourself or your loved ones in style.",
      href: "/services/custom-fabrication",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-charcoal/5">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-black/90">
            Creating extraordinary experiences across every touchpoint
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col bg-white overflow-hidden shadow-2xl w-full">
                {/* Image Container */}
                <div className="relative h-64 shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col grow p-6 lg:p-8">
                  {/* Description */}
                  <p className="text-charcoal-dark text-base leading-relaxed mb-6 grow">
                    {service.description}
                  </p>

                  {/* Learn More Button - At Bottom */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple text-white uppercase tracking-wider text-sm transition-colors duration-300 hover:bg-purple/90"
                  >
                    Learn More
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
