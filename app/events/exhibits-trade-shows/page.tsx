"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WhatWeDoSection from "@/components/events/WhatWeDoSection";
import FAQ from "@/components/FAQ";

import {
  ExhibitsTradeShowsCaseStudiesData,
  ExhibitsTradeShowsEventTypeOfferings,
  ExhibitsTradeShowsFaqs,
  ExhibitsTradeShowsImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EventExhibitsTradeShowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/trade-shows/3.jpg"
        title="Exhibits & Trade Shows"
        subtitle="Create standout booths that attract, engage, and convert"
      />
      <WhatWeDoSection offerings={ExhibitsTradeShowsEventTypeOfferings} />
      <CaseStudiesSection caseStudies={ExhibitsTradeShowsCaseStudiesData} />
      <ImageGallerySection
        title="Exhibits & Trade Shows"
        subtitle="Custom booths and show-floor experiences designed to stand out"
        images={ExhibitsTradeShowsImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Make Impact"
        subtitle="At Your Next Show"
        description="From booth design to execution, we help your brand get noticed and remembered."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <FAQ faqs={ExhibitsTradeShowsFaqs} />
    </div>
  );
}
