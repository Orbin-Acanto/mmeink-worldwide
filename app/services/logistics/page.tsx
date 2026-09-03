"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import EventManagementSection from "@/components/services/EventManagementSection";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  EventManagementData,
  LogisticsCaseStudiesData,
  LogisticsData,
  LogisticsFAQ,
  LogisticsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function LogisticsServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/logistics/hero/hero.png"
        title="Logistics"
        subtitle="Event management, white glove logistics, and storage, from the first site visit to the final load out"
      />

      <ServiceIntro content={serviceIntros["logistics"]} />

      <EventManagementSection
        eyebrow={EventManagementData.eyebrow}
        title={EventManagementData.title}
        intro={EventManagementData.intro}
        pillars={EventManagementData.pillars}
        metrics={EventManagementData.metrics}
        image={EventManagementData.image}
        supportImage={EventManagementData.supportImage}
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
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Handled with Care. Delivered with Precision."
        subtitle="Logistics, White Glove Services & Storage"
        description="From white glove delivery and dedicated trucking to warehousing and inventory management, your assets arrive at the right place, at the right time, in presentation ready condition."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={LogisticsFAQ} />
    </div>
  );
}
