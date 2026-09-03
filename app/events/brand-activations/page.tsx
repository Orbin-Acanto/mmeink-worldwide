"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";
import {
  BrandActivationCaseStudiesData,
  BrandActivationEventTypeOfferings,
  BrandActivationfaqs,
  BrandActivationImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventBrandActivationPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/events/brand-activations/hero/hero.jpg"
        title="Brand Activations"
        subtitle="Immersive experiences that bring your brand to life"
      />
      <WhatWeDoSection offerings={BrandActivationEventTypeOfferings} />
      <CaseStudiesSection caseStudies={BrandActivationCaseStudiesData} />
      <ImageGallerySection
        title="Brand Activation"
        subtitle="Explore our most memorable brand experiences"
        images={BrandActivationImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Activate Your Brand"
        subtitle="Experiential Marketing"
        description="We design immersive brand activations that engage audiences and create lasting impact."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />

      <FAQ faqs={BrandActivationfaqs} />
    </div>
  );
}
