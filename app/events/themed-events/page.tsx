"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  ThemedEventsCaseStudiesData,
  ThemedEventsEventTypeOfferings,
  ThemedEventsFAQ,
  ThemedEventsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventThemedEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/events/themed-events/hero/hero.png"
        title="Themed Events"
        subtitle="One concept, carried through every detail"
      />
      <WhatWeDoSection offerings={ThemedEventsEventTypeOfferings} />
      <CaseStudiesSection caseStudies={ThemedEventsCaseStudiesData} />
      <ImageGallerySection
        title="Themed Events"
        subtitle="Themed events and immersive environments designed, fabricated, and installed by our team."
        images={ThemedEventsImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Build the World."
        subtitle="Fully Themed Event Production"
        description="From concept and renderings through fabrication and install, we deliver themed events that hold together in every direction guests look."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={ThemedEventsFAQ} />
    </div>
  );
}
