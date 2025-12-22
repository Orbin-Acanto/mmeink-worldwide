"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  ProductLaunchesCaseStudiesData,
  ProductLaunchesEventTypeOfferings,
  ProductLaunchesFaqs,
  ProductLaunchesImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventProductLaunchesPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/product-launches/20.jpg"
        title="Product Launches"
        subtitle="Create powerful first impressions that drive excitement, engagement, and impact"
      />

      <WhatWeDoSection offerings={ProductLaunchesEventTypeOfferings} />
      <CaseStudiesSection caseStudies={ProductLaunchesCaseStudiesData} />
      <ImageGallerySection
        title="Product Launches"
        subtitle="Explore our most memorable product launches experiences"
        images={ProductLaunchesImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Launch Boldly"
        subtitle="Bring Your Product to Life"
        description="From first reveal to lasting impact, we create product launches that captivate and convert."
        primaryButton={{
          text: "Start Your Launch",
          href: "/contact",
        }}
      />

      <FAQ faqs={ProductLaunchesFaqs} />
    </div>
  );
}
