"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  ThemesCaseStudiesData,
  ThemesData,
  ThemesFAQ,
  ThemesImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function ThemesServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/design-decor/gallery/7.jpg"
        title="Themes"
        subtitle="Distinctive event themes that turn corporate gatherings into memorable brand experiences"
      />

      <ServiceIntro content={serviceIntros["themes"]} />

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
        subtitle="Themed environments and immersive concepts designed, fabricated, and installed end to end."
        images={ThemesImageGallery}
      />

      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Brand. Your Theme."
        subtitle="Corporate Event Themes & Immersive Experiences"
        description="From timeless elegance to an immersive branded world, we manage every creative detail from concept and design through production, installation, and execution."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={ThemesFAQ} />
    </div>
  );
}
