"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  StagingCaseStudiesData,
  StagingData,
  StagingFAQ,
  StagingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function StagingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/av/13.jpg"
        title="Staging"
        subtitle="Stages, risers, and scenic structures built to spec"
      />

      <WhatWeOffer
        title={StagingData.title}
        subtitle={StagingData.subtitle}
        topRow={StagingData.topRow}
        bottomRow={StagingData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={StagingCaseStudiesData} />
      <ImageGallerySection
        title="Staging"
        subtitle="Custom stages, risers, runways, and scenic structures built for events of every scale."
        images={StagingImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Built to Spec."
        subtitle="Custom Staging & Scenic"
        description="Every stage we build is engineered for the room, the programme, and the crowd — safe, level, and on schedule."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={StagingFAQ} />
    </div>
  );
}
