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
    <div className="relative space-y-[-150px] sm:space-y-[-180px] lg:space-y-[-200px]">
      {services.map((service, index) => {
        const alignment = index % 2 === 0 ? "left" : "right";

        return (
          <div
            key={service.id}
            className="relative"
            style={{ zIndex: services.length - index }}
          >
            <ServiceCard
              service={service}
              index={index}
              alignment={alignment}
            />
          </div>
        );
      })}
    </div>
  );
}
