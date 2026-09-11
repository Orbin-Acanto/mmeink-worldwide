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
  // AudioVisualCaseStudiesData,
  AudioVisualData,
  AudioVisualFAQ,
  AudioVisualImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function AudioVisualServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/audio-visual/hero/hero-video.mp4"
        posterSrc="/services/audio-visual/hero/hero-video-poster.jpg"
        title="Audio"
        highlightedWord="Visual"
        subtitle="Audio visual and event technology designed around your message"
      />

      <ServiceIntro content={serviceIntros["audio-visual"]} />
      <WhatWeOffer
        title={AudioVisualData.title}
        subtitle={AudioVisualData.subtitle}
        topRow={AudioVisualData.topRow}
        bottomRow={AudioVisualData.bottomRow}
      />
      <ProcessApproach />
      {/* <CaseStudiesSection caseStudies={AudioVisualCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["audio-visual"]} />
      <ImageGallerySection
        title="Audio Visual"
        subtitle="Explore our most memorable Audio Visual experiences"
        images={AudioVisualImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Powerful Technology. Flawless Production."
        subtitle="Audio Visual & Event Technology"
        description="From sound systems and LED walls to live streaming and show calling, we deliver flawless performance at every moment that matters."
        primaryButton={{
          text: "Request AV Support",
          href: "/contact",
        }}
      />

      <FAQ faqs={AudioVisualFAQ} />
    </div>
  );
}
