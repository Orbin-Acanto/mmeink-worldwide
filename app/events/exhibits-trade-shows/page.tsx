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
        image="/events/exhibits-trade-shows/hero/hero.jpg"
        title="Exhibitions & Trade Shows"
        subtitle="Custom booths, brand exhibitions, and showrooms engineered, shipped, and installed by one team"
      />
      <WhatWeDoSection offerings={ExhibitsTradeShowsEventTypeOfferings} />
      <CaseStudiesSection caseStudies={ExhibitsTradeShowsCaseStudiesData} />
      <ImageGallerySection
        title="Exhibitions & Trade Shows"
        subtitle="Island, peninsula, and inline booths, brand exhibitions, and showroom environments built in our own shop and installed on show floors across the country."
        images={ExhibitsTradeShowsImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Own the Show Floor."
        subtitle="Trade Show Exhibits & Brand Exhibitions"
        description="Send us the exhibitor kit and the deadline, or the story you want people to walk through. We handle the design, the build, the paperwork, the freight, and the crew on the floor."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <FAQ faqs={ExhibitsTradeShowsFaqs} />
    </div>
  );
}
