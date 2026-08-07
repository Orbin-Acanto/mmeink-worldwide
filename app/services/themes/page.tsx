"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  ThemesCaseStudiesData,
  ThemesData,
  ThemesFAQ,
  ThemesImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function ThemesServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/dd/7.jpg"
        title="Themes"
        subtitle="Fully realised concepts, from mood board to load-out"
      />

      <WhatWeOffer
        title={ThemesData.title}
        subtitle={ThemesData.subtitle}
        topRow={ThemesData.topRow}
        bottomRow={ThemesData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={ThemesCaseStudiesData} />
      <ImageGallerySection
        title="Themes"
        subtitle="Themed environments and immersive concepts designed and built end to end."
        images={ThemesImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="One Idea, Fully Realised."
        subtitle="Themed Event Design"
        description="We take a single concept and carry it through every surface, sightline, and detail — so the room tells one coherent story."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={ThemesFAQ} />
    </div>
  );
}
