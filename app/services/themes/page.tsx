"use client";

// Case studies are paused until new case study content is ready.
// import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import FeaturedWork from "@/components/services/FeaturedWork";
import WorkHero from "@/components/work/WorkHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  // ThemesCaseStudiesData,
  ThemesData,
  ThemesFAQ,
  ThemesImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function ThemesServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/themes/hero/hero-video.mp4"
        posterSrc="/services/themes/hero/hero-video-poster.jpg"
        title="Event"
        highlightedWord="Themes"
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
      {/* <CaseStudiesSection caseStudies={ThemesCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["themes"]} />
      <ImageGallerySection
        title="Themes"
        subtitle="Themed environments and immersive concepts designed, fabricated, and installed end to end."
        images={ThemesImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
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
