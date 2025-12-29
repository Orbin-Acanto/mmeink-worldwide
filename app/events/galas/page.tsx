"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  GalasCaseStudiesData,
  GalasEventTypeOfferings,
  Galasfaqs,
  GalasImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventGalasPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/galas/13.jpg"
        title="Private Galas"
        subtitle="Elegant, immersive galas designed to inspire and impress"
      />
      <WhatWeDoSection offerings={GalasEventTypeOfferings} />
      <CaseStudiesSection caseStudies={GalasCaseStudiesData} />
      <ImageGallerySection
        title="Private Galas"
        subtitle="Explore our most memorable gala celebrations and elegant event experiences."
        images={GalasImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Timeless Evenings"
        subtitle="Elegant Gala Experiences"
        description="From black-tie celebrations to fundraising galas, we design and produce refined events that leave a lasting impression."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={Galasfaqs} />
    </div>
  );
}
