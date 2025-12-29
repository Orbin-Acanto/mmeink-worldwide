"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  RentalCaseStudiesData,
  RentalData,
  RentalFAQ,
  RentalImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventBrandActivationPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/rentals/32.jpg"
        title="Rentals"
        subtitle="Premium event rentals for seamless production"
      />

      <WhatWeOffer
        title={RentalData.title}
        subtitle={RentalData.subtitle}
        topRow={RentalData.topRow}
        bottomRow={RentalData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={RentalCaseStudiesData} />
      <ImageGallerySection
        title="Rentals"
        subtitle="Browse our professional audio, lighting, video, and staging rentals used to support events of every scale."
        images={RentalImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Reliable Rentals"
        subtitle="Professional Event Rentals"
        description="From audio and lighting to staging and video, we provide reliable rentals backed by expert support for seamless events."
        primaryButton={{
          text: "View Rental Options",
          href: "/contact",
        }}
      />
      <FAQ faqs={RentalFAQ} />
    </div>
  );
}
