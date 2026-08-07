"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  LightingCaseStudiesData,
  LightingData,
  LightingFAQ,
  LightingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function LightingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/av/9.jpg"
        title="Lighting"
        subtitle="Lighting design that shapes mood, focus, and atmosphere"
      />

      <WhatWeOffer
        title={LightingData.title}
        subtitle={LightingData.subtitle}
        topRow={LightingData.topRow}
        bottomRow={LightingData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={LightingCaseStudiesData} />
      <ImageGallerySection
        title="Lighting"
        subtitle="Stage washes, architectural uplighting, and custom gobo work across a range of venues."
        images={LightingImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Set the Tone."
        subtitle="Lighting Design & Production"
        description="Lighting is the fastest way to transform a room. Our designers build looks that carry your event from load-in through the final toast."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={LightingFAQ} />
    </div>
  );
}
