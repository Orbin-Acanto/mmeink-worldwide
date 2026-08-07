"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  PropsCaseStudiesData,
  PropsData,
  PropsFAQ,
  PropsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function PropsServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/dd/14.jpg"
        title="Props"
        subtitle="Custom-built and curated props from our own inventory"
      />

      <WhatWeOffer
        title={PropsData.title}
        subtitle={PropsData.subtitle}
        topRow={PropsData.topRow}
        bottomRow={PropsData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={PropsCaseStudiesData} />
      <ImageGallerySection
        title="Props"
        subtitle="Custom-fabricated and curated props across themed events, activations, and installations."
        images={PropsImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="The Details People Remember."
        subtitle="Custom & Curated Props"
        description="From oversized statement pieces to the small props that finish a room, we build and source what your concept calls for."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={PropsFAQ} />
    </div>
  );
}
