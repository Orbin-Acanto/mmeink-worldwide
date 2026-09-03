"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  StagingCaseStudiesData,
  StagingData,
  StagingFAQ,
  StagingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function StagingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/staging/hero/hero.png"
        title="Staging"
        subtitle="Staging and scenic production designed around your brand, audience, and objectives"
      />

      <ServiceIntro content={serviceIntros["staging"]} />

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
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Set the Stage. Own the Moment."
        subtitle="Staging & Scenic Production"
        description="From an intimate executive presentation to a global product reveal, we build stages designed to command attention and elevate your message."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={StagingFAQ} />
    </div>
  );
}
