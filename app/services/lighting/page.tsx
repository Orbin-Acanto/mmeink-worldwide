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
  // LightingCaseStudiesData,
  LightingData,
  LightingFAQ,
  LightingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function LightingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/lighting/hero/hero-video.mp4"
        posterSrc="/services/lighting/hero/hero-video-poster.jpg"
        title="Lighting"
        highlightedWord="Design"
        subtitle="Lighting design that creates emotion, defines atmosphere, and transforms the space"
      />

      <ServiceIntro content={serviceIntros["lighting"]} />

      <WhatWeOffer
        title={LightingData.title}
        subtitle={LightingData.subtitle}
        topRow={LightingData.topRow}
        bottomRow={LightingData.bottomRow}
      />
      <ProcessApproach />
      {/* <CaseStudiesSection caseStudies={LightingCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["lighting"]} />
      <ImageGallerySection
        title="Lighting"
        subtitle="Stage washes, architectural uplighting, and custom gobo work across a range of venues."
        images={LightingImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Illuminate. Transform. Experience."
        subtitle="Lighting Design & Production"
        description="Lighting is more than illumination. We use light to shape atmosphere, highlight key moments, and transform how your audience experiences the room."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={LightingFAQ} />
    </div>
  );
}
