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
        image="/events/conferences-meetings/hero/hero.jpg"
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
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Conferences Done Right"
        subtitle="Expert Planning & Production"
        description="From executive meetings to large scale conferences, we deliver seamless planning, production, and technical execution."
        primaryButton={{
          text: "Plan Your Conference",
          href: "/contact",
        }}
      />
      <FAQ faqs={ConferenceEventFAQ} />
    </div>
  );
}
