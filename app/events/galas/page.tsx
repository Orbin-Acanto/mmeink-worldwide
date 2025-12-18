"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  BrandActivationImageGallery,
  CaseStudiesData,
  EventTypeOfferings,
  faqs,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventGalasPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="https://images.unsplash.com/photo-1519167758481-83f29da8c2b9?w=1920&q=80"
        title="Private Galas"
        subtitle="Celebrate life's special moments with unforgettable gatherings"
      />
      <WhatWeDoSection offerings={EventTypeOfferings} />
      <CaseStudiesSection caseStudies={CaseStudiesData} />
      <ImageGallerySection
        title="Brand Activation Gallery"
        subtitle="Explore our most memorable brand experiences"
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
