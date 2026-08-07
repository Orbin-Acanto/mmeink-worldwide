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
        image="/events/conferences-meetings/gallery/12.jpg"
        title="Corporate Events"
        subtitle="Company-wide moments, produced end to end"
      />
      <WhatWeDoSection offerings={CorporateEventsEventTypeOfferings} />
      <CaseStudiesSection caseStudies={CorporateEventsCaseStudiesData} />
      <ImageGallerySection
        title="Corporate Events"
        subtitle="Corporate events, town halls, and company celebrations produced across the tri-state area and beyond."
        images={CorporateEventsImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Corporate, Not Corporate-Feeling."
        subtitle="Full-Service Corporate Events"
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
