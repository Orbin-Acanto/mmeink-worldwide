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
        image="/events/seasonal-events/hero/hero.png"
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
        backgroundImage="/shared/backgrounds/cta-background.jpg"
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
