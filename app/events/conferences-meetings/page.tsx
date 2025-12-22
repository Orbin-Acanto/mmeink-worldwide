"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  ConferenceCaseStudiesData,
  ConferenceEventFAQ,
  ConferenceEventTypeOfferings,
  ConferenceImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventConferencesMeetingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/conferences/conference_hero.jpg"
        title="Corporate Events"
        subtitle="From conferences to team building, we create impactful experiences"
      />
      <WhatWeDoSection offerings={ConferenceEventTypeOfferings} />
      <CaseStudiesSection caseStudies={ConferenceCaseStudiesData} />
      <ImageGallerySection
        title="Conference"
        subtitle="Explore our most memorable conference experiences"
        images={ConferenceImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Conferences Done Right"
        subtitle="Expert Planning & Production"
        description="From executive meetings to large-scale conferences, we deliver seamless planning, production, and technical execution."
        primaryButton={{
          text: "Plan Your Conference",
          href: "/contact",
        }}
      />
      <FAQ faqs={ConferenceEventFAQ} />
    </div>
  );
}
