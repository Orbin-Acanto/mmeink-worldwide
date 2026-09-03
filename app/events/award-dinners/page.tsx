"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  AwardDinnersCaseStudiesData,
  AwardDinnersEventTypeOfferings,
  AwardDinnersFAQ,
  AwardDinnersImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventAwardDinnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/events/award-dinners/hero/hero.png"
        title="Award Dinners"
        subtitle="Recognition evenings produced with precision and polish"
      />
      <WhatWeDoSection offerings={AwardDinnersEventTypeOfferings} />
      <CaseStudiesSection caseStudies={AwardDinnersCaseStudiesData} />
      <ImageGallerySection
        title="Award Dinners"
        subtitle="Award ceremonies and recognition dinners produced across corporate and nonprofit sectors."
        images={AwardDinnersImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Every Honouree’s Moment."
        subtitle="Award Dinner Production"
        description="Precise show calling, polished staging, and a programme that runs on time from first course to final award."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={AwardDinnersFAQ} />
    </div>
  );
}
