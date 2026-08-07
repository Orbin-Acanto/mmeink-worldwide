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
        image="/events/brand-activations/gallery/22.jpg"
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
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
