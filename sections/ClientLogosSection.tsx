"use client";

import Image from "next/image";

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
  return (
    <section
      className={`relative w-full bg-black py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-gray-400 uppercase mb-3">
            Trusted Clients
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight drop-shadow-2xl text-white mb-3">
            Brands <span className="text-purple">who trust Us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            From global corporations to visionary creatives, we partner with
            clients who care about impactful, well-executed experiences.
          </p>
        </div>

        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3
          md:grid-cols-4 
          lmd:grid-cols-6
          xl:grid-cols-8
          gap-6 sm:gap-8 lg:gap-10
        "
        >
          {logos.map((logo) => {
            const card = (
              <div
                className="
                  flex items-center justify-center
                  h-20 sm:h-24 md:h-28 xl:h-32
                  bg-white border border-white/10
                  backdrop-blur-sm
                "
              >
                <div className="relative w-32 sm:w-28 md:w-32 xl:w-38 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain opacity-90"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 20vw, 12vw"
                  />
                </div>
              </div>
            );

            return (
              <div key={logo.id} className="flex items-center justify-center">
                {logo.href ? (
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
