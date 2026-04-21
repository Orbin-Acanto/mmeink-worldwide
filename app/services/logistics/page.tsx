"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  LogisticsCaseStudiesData,
  LogisticsData,
  LogisticsFAQ,
  LogisticsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function LogisticsServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/logistics/1.jpg"
        title="Logistics"
        subtitle="Seamless coordination from first call to final breakdown"
      />

      <WhatWeOffer
        title={LogisticsData.title}
        subtitle={LogisticsData.subtitle}
        topRow={LogisticsData.topRow}
        bottomRow={LogisticsData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={LogisticsCaseStudiesData} />
      <ImageGallerySection
        title="Logistics"
        subtitle="A look at how we coordinate, execute, and deliver flawless production logistics at every scale."
        images={LogisticsImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Every Detail, Handled."
        subtitle="Precision Logistics. Zero Surprises."
        description="From freight and crew to permits and run-of-show, our logistics team ensures your event runs flawlessly — on time, on budget, every time."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={LogisticsFAQ} />
    </div>
  );
}
