"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  audioVisualData,
  BrandActivationImageGallery,
  CaseStudiesData,
  faqs,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function AudioVisualServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
        title="Audio Visual"
        subtitle="Immersive experiences that bring your brand to life"
      />
      <WhatWeOffer
        title={audioVisualData.title}
        subtitle={audioVisualData.subtitle}
        topRow={audioVisualData.topRow}
        bottomRow={audioVisualData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={CaseStudiesData} />
      <ImageGallerySection
        title="Audio Visual"
        subtitle="Explore our most memorable Audio Visual experiences"
        images={BrandActivationImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Ready to Create Magic?"
        subtitle="Let's Work Together"
        description="Transform your vision into an unforgettable experience. Our team is ready to bring your event to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <FAQ faqs={faqs} />
    </div>
  );
}
