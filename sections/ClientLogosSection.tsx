"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ClientLogo {
  id: string;
  name: string;
  src: string;
  href?: string;
}

interface ClientLogosSectionProps {
  logos: ClientLogo[];
  className?: string;
}

export default function ClientLogosSection({
  logos,
  className = "",
}: ClientLogosSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const logosPerPage = 8;
  const totalPages = Math.ceil(logos.length / logosPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const currentLogos = logos.slice(
    currentPage * logosPerPage,
    (currentPage + 1) * logosPerPage
  );

  const LogoCard = ({ logo }: { logo: ClientLogo }) => {
    const card = (
      <div
        className="
          flex items-center justify-center
          h-20 sm:h-24 md:h-28 xl:h-32
          bg-white border border-gray-200
          shadow-md hover:shadow-xl
          transition-all duration-300
          hover:scale-105
          rounded-lg
        "
      >
        <div className="relative w-32 sm:w-28 md:w-32 xl:w-38 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16 px-4">
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 20vw, 12vw"
          />
        </div>
      </div>
    );

    return logo.href ? (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        {card}
      </a>
    ) : (
      card
    );
  };

  return (
    <section
      className={`relative w-full bg-white py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-gray-600 uppercase mb-3">
            Trusted Clients
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight text-black mb-3">
            Brands{" "}
            <span className="text-purple block sm:inline">who trust Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
            From global corporations to visionary creatives, we partner with
            clients who care about impactful, well-executed experiences.
          </p>
        </div>

        <div className="sm:hidden">
          <div className="grid grid-cols-2 gap-4 min-h-[400px]">
            {currentLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center animate-fadeIn"
              >
                <LogoCard logo={logo} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentPage ? "w-8 bg-purple" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className="
          hidden sm:grid
          grid-cols-3
          sm:grid-cols-4
          lmd:grid-cols-6
          xl:grid-cols-8
          gap-6 sm:gap-8 lg:gap-10
        "
        >
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <LogoCard logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
