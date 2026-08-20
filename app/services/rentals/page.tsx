"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  RentalCaseStudiesData,
  RentalData,
  RentalFAQ,
  RentalImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function EventBrandActivationPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/rentals/gallery/32.jpg"
        title="Rentals"
        subtitle="Curated event rentals that transform ordinary spaces into extraordinary environments"
      />

      <ServiceIntro content={serviceIntros["rentals"]} />

      <WhatWeOffer
        title={RentalData.title}
        subtitle={RentalData.subtitle}
        topRow={RentalData.topRow}
        bottomRow={RentalData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={RentalCaseStudiesData} />
      <ImageGallerySection
        title="Rentals"
        subtitle="Browse our lounge furniture, bars, tables, staging, décor, and specialty furnishings for events of every scale."
        images={RentalImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Curated for Your Vision."
        subtitle="Premium Event Rentals"
        description="From lounge furniture and bars to staging, décor, and lighting, we curate the pieces that create a cohesive and elevated guest experience."
        primaryButton={{
          text: "View Rental Options",
          href: "/contact",
        }}
      />
      <FAQ faqs={RentalFAQ} />
    </div>
  );
}
