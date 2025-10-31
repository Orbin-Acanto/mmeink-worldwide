"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLogoVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Logo/Image */}
          <div className="flex justify-center lg:justify-start">
            <div
              ref={logoRef}
              className={`relative w-full max-w-2xl transition-all duration-1000 ease-out ${
                logoVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/MME-30th.png"
                  alt="MME Worldwide Logo"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Title with Purple Underline */}
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
                About Us
              </h2>
              <svg
                viewBox="0 0 200 10"
                className="w-full -mt-1"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="#6b4c9a"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-charcoal-dark">
              <p className="text-base leading-relaxed">
                With over 30 years of excellence, MME is a full-service Event
                Management and Hospitality agency known for creating
                extraordinary, first-class experiences. Operating with a
                boutique approach, we combine creativity, innovation, and
                strategic expertise to deliver exceptional events. Under the
                leadership of CEO Michael Tardi, our team blends the managerial
                strength of a large firm with the flexibility of a boutique
                agency, now proudly serving clients worldwide from our
                headquarters in Manhattan, Long Island, and Miami.
              </p>

              <p className="text-base leading-relaxed">
                Expanding globally, MME continues to be a trusted partner in
                event production and hospitality. From concept to completion, we
                craft authentic, engaging experiences that align with your
                brand, ensuring every detail exceeds expectations.
              </p>
            </div>

            {/* Optional CTA Button */}
            <div className="pt-4">
              <a
                href="/about"
                className="inline-block px-8 py-4 bg-purple text-white font-semibold uppercase tracking-wider hover:bg-purple-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Angled Bottom Cut - Like Image 2 */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-48 bg-white">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,120 L1440,120 L1440,60 L0,0 Z"
            className="fill-charcoal"
          />
        </svg>
      </div> */}

      <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-48 bg-white">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="image-fill"
              patternUnits="userSpaceOnUse"
              width="1440"
              height="120"
            >
              <image
                href="/private2.jpg"
                width="1440"
                height="120"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          <path
            d="M0,0 L0,120 L1440,120 L1440,60 L0,0 Z"
            fill="url(#image-fill)"
          />
        </svg>
      </div>
    </section>
  );
}
