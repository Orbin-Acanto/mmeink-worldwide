"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  LightingCaseStudiesData,
  LightingData,
  LightingFAQ,
  LightingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function LightingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/lighting/hero/hero.png"
        title="Lighting"
        subtitle="Lighting design that creates emotion, defines atmosphere, and transforms the space"
      />

      <ServiceIntro content={serviceIntros["lighting"]} />

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
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Illuminate. Transform. Experience."
        subtitle="Lighting Design & Production"
        description="Lighting is more than illumination. We use light to shape atmosphere, highlight key moments, and transform how your audience experiences the room."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={LightingFAQ} />
    </div>
  );
}
