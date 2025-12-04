"use client";

import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  name: string;
  image: string;
  href: string;
}

interface ServicesOverviewGridProps {
  services: Service[];
}

export default function ServicesOverviewGrid({
  services,
}: ServicesOverviewGridProps) {
  return (
    <div className="relative px-6 sm:px-10 py-10 space-y-[-140px] sm:-space-y-40 lg:-space-y-[180px]">
      {services.map((service, index) => {
        const alignment = index % 2 === 0 ? "left" : "right";

        return (
          <div
            key={service.id}
            className="relative"
            style={{ zIndex: services.length - index }}
          >
            <div className="mb-28 sm:mb-10 md:mb-2 lg:mb-0 px-2 sm:px-4">
              <ServiceCard
                service={service}
                index={index}
                alignment={alignment}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
