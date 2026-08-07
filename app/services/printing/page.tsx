"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  PrintingCaseStudiesData,
  PrintingData,
  PrintingFAQ,
  PrintingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function PrintingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/cf/12.jpg"
        title="Printing"
        subtitle="Large-format graphics and branded print, produced in-house"
      />

      <WhatWeOffer
        title={PrintingData.title}
        subtitle={PrintingData.subtitle}
        topRow={PrintingData.topRow}
        bottomRow={PrintingData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={PrintingCaseStudiesData} />
      <ImageGallerySection
        title="Printing"
        subtitle="Large-format graphics, branded signage, and custom print work produced in our own facility."
        images={PrintingImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Print That Performs."
        subtitle="In-House Large-Format Printing"
        description="From step-and-repeats to full environmental wraps, our in-house print shop delivers colour-accurate graphics on deadline."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={PrintingFAQ} />
    </div>
  );
}
