"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  CorporateEventsCaseStudiesData,
  CorporateEventsEventTypeOfferings,
  CorporateEventsFAQ,
  CorporateEventsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventCorporateEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/events/corporate-events/hero/hero.png"
        title="Corporate Events"
        subtitle="Company wide moments, produced end to end"
      />
      <WhatWeDoSection offerings={CorporateEventsEventTypeOfferings} />
      <CaseStudiesSection caseStudies={CorporateEventsCaseStudiesData} />
      <ImageGallerySection
        title="Corporate Events"
        subtitle="Corporate events, town halls, and company celebrations produced across the tri state area and beyond."
        images={CorporateEventsImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Corporate, Not Corporate Feeling."
        subtitle="Full Service Corporate Events"
        description="Town halls, celebrations, and kickoffs produced with the same care we bring to our largest galas."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={CorporateEventsFAQ} />
    </div>
  );
}
