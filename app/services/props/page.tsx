"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  PropsCaseStudiesData,
  PropsData,
  PropsFAQ,
  PropsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function PropsServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/props/hero/hero.png"
        title="Props"
        subtitle="Event props and scenic elements that transform a space into an experience"
      />

      <ServiceIntro content={serviceIntros["props"]} />

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
        subtitle="Custom fabricated and curated props across themed events, activations, and installations."
        images={PropsImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Imagine It. Create It. Experience It."
        subtitle="Event Props & Immersive Environments"
        description="From a single statement piece to an entire immersive environment, we combine an extensive rental inventory with custom fabrication."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={PropsFAQ} />
    </div>
  );
}
