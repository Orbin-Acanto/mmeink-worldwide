"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  AudioVisualCaseStudiesData,
  AudioVisualData,
  AudioVisualFAQ,
  AudioVisualImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function AudioVisualServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/av/4.jpg"
        title="Audio Visual"
        subtitle="Immersive experiences that bring your brand to life"
      />
      <WhatWeOffer
        title={AudioVisualData.title}
        subtitle={AudioVisualData.subtitle}
        topRow={AudioVisualData.topRow}
        bottomRow={AudioVisualData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={AudioVisualCaseStudiesData} />
      <ImageGallerySection
        title="Audio Visual"
        subtitle="Explore our most memorable Audio Visual experiences"
        images={AudioVisualImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Seamless Audio. Powerful Visuals."
        subtitle="Professional AV Production"
        description="From sound and lighting to video and live streaming, our AV team delivers flawless technical execution for every event."
        primaryButton={{
          text: "Request AV Support",
          href: "/contact",
        }}
      />

      <FAQ faqs={AudioVisualFAQ} />
    </div>
  );
}
