"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  CustomFabricationData,
  CustomFabricationCaseStudiesData,
  CustomFabricationFAQ,
  CustomFabricationImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function EventBrandActivationPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/custom-fabrication/hero/hero.jpg"
        title="Custom Fabrication"
        subtitle="Custom fabrication for experiential activations, product launches, trade shows, and branded environments"
      />

      <ServiceIntro content={serviceIntros["custom-fabrication"]} />
      <WhatWeOffer
        title={CustomFabricationData.title}
        subtitle={CustomFabricationData.subtitle}
        topRow={CustomFabricationData.topRow}
        bottomRow={CustomFabricationData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={CustomFabricationCaseStudiesData} />
      <ImageGallerySection
        title="Custom Fabrication"
        subtitle="Explore our most memorable Custom Fabrication experiences"
        images={CustomFabricationImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Your Vision. Our Craft."
        subtitle="Custom Fabrication by MME Worldwide"
        description="We design, engineer, and fabricate custom environments that turn brand vision into a real world experience."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <FAQ faqs={CustomFabricationFAQ} />
    </div>
  );
}
