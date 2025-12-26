"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  VirtualHyrbidCaseStudiesData,
  VirtualHyrbidEventTypeOfferings,
  VirtualHyrbidfaqs,
  VirtualHyrbidImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventVirtualHybridPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/virtual-hybrid/7.jpg"
        title="Virtual & Hybrid Event"
        subtitle="Create lasting connections through memorable virtual experiences"
      />
      <WhatWeDoSection offerings={VirtualHyrbidEventTypeOfferings} />
      <CaseStudiesSection caseStudies={VirtualHyrbidCaseStudiesData} />
      <ImageGallerySection
        title="Virtual & Hybrid Events"
        subtitle="Explore our most memorable virtual & hybrid experiences"
        images={VirtualHyrbidImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
        title="Go Virtual Go Live"
        subtitle="Connect Anywhere"
        description="Seamless virtual and hybrid experiences designed to engage audiences wherever they are."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />

      <FAQ faqs={VirtualHyrbidfaqs} />
    </div>
  );
}
