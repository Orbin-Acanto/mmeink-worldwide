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
        image="/services/rentals/hero/hero.jpg"
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
        backgroundImage="/shared/backgrounds/cta-background.jpg"
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
