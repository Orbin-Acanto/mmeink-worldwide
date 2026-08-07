"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  MusicalEntertainmentCaseStudiesData,
  MusicalEntertainmentData,
  MusicalEntertainmentFAQ,
  MusicalEntertainmentImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function MusicalEntertainmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/gallery/galas/9.jpg"
        title="Musical Entertainment"
        subtitle="Live music matched to the room and the moment"
      />

      <WhatWeOffer
        title={MusicalEntertainmentData.title}
        subtitle={MusicalEntertainmentData.subtitle}
        topRow={MusicalEntertainmentData.topRow}
        bottomRow={MusicalEntertainmentData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={MusicalEntertainmentCaseStudiesData} />
      <ImageGallerySection
        title="Musical Entertainment"
        subtitle="Live bands, DJs, and ensembles performing across galas, celebrations, and corporate events."
        images={MusicalEntertainmentImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Music That Fits the Room."
        subtitle="Live Musical Entertainment"
        description="From a string quartet at cocktail hour to a full band closing the night, we book and produce music that matches your programme."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={MusicalEntertainmentFAQ} />
    </div>
  );
}
