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
    <div className="relative px-6 sm:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
