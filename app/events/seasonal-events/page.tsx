"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  SeasonalEventsCaseStudiesData,
  SeasonalEventsEventTypeOfferings,
  SeasonalEventsFAQ,
  SeasonalEventsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventSeasonalEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/galas/27.jpg"
        title="Seasonal Events"
        subtitle="Holiday and seasonal experiences, designed to return"
      />
      <WhatWeDoSection offerings={SeasonalEventsEventTypeOfferings} />
      <CaseStudiesSection caseStudies={SeasonalEventsCaseStudiesData} />
      <ImageGallerySection
        title="Seasonal Events"
        subtitle="Seasonal and holiday events, installations, and activations produced throughout the year."
        images={SeasonalEventsImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Make the Season Yours."
        subtitle="Seasonal & Holiday Events"
        description="Holiday parties, winter installations, and seasonal activations designed, built, and installed by one team."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={SeasonalEventsFAQ} />
    </div>
  );
}
