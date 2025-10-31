"use client";

import Link from "next/link";

interface LandingHeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

export default function LandingHero({
  title = "Creating Unforgettable Experiences",
  subtitle = "Premium event planning and production services that bring your vision to life",
  showCTA = true,
}: LandingHeroProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div
          style={{
            padding: "56.25% 0 0 0",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1041819066?h=07e5ac4551&background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "100vh",
              minWidth: "177.78vh",
              minHeight: "56.25vw",
              transform: "translate(-50%, -50%)",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="pointer-events-none"
            title="Background Video"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/70 z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="max-w-6xl text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light drop-shadow-lg">
            {subtitle}
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-purple text-white font-medium text-sm tracking-wider uppercase hover:bg-purple/70  transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Enquire
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer">
          <span className="text-sm uppercase tracking-widest font-light">
            Scroll
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
