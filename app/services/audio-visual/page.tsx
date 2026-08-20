"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  AudioVisualCaseStudiesData,
  AudioVisualData,
  AudioVisualFAQ,
  AudioVisualImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function AudioVisualServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/audio-visual/gallery/4.jpg"
        title="Audio Visual"
        subtitle="Audio visual and event technology designed around your message"
      />

      <ServiceIntro content={serviceIntros["audio-visual"]} />
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
        title="Powerful Technology. Flawless Production."
        subtitle="Audio Visual & Event Technology"
        description="From sound systems and LED walls to live streaming and show calling, we deliver flawless performance at every moment that matters."
        primaryButton={{
          text: "Request AV Support",
          href: "/contact",
        }}
      />

      <FAQ faqs={AudioVisualFAQ} />
    </div>
  );
}
