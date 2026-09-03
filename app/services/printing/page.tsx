"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  PrintingCaseStudiesData,
  PrintingData,
  PrintingFAQ,
  PrintingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function PrintingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/printing/hero/hero.png"
        title="Printing"
        subtitle="Large format printing, custom signage, and branded graphics produced in house"
      />

      <ServiceIntro content={serviceIntros["printing"]} />

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
        subtitle="Large format graphics, branded signage, and custom print work produced in our own facility."
        images={PrintingImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Print. Brand. Transform."
        subtitle="Large Format Printing & Branded Graphics"
        description="From step and repeats to full environmental branding, we turn every surface into an opportunity to tell your brand story."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={PrintingFAQ} />
    </div>
  );
}
