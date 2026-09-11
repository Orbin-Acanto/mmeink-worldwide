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
  // PrintingCaseStudiesData,
  PrintingData,
  PrintingFAQ,
  PrintingImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function PrintingServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/printing/hero/hero-video.mp4"
        posterSrc="/services/printing/hero/hero-video-poster.jpg"
        title="Printing"
        highlightedWord="& Graphics"
        subtitle="Large format printing, custom signage, and branded graphics produced in house"
      />

      <ServiceIntro content={serviceIntros["printing"]} />

      <WhatWeOffer
        title={PrintingData.title}
        subtitle={PrintingData.subtitle}
        topRow={PrintingData.topRow}
        bottomRow={PrintingData.bottomRow}
      />
      <ProcessApproach />
      {/* <CaseStudiesSection caseStudies={PrintingCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["printing"]} />
      <ImageGallerySection
        title="Printing"
        subtitle="Large format graphics, branded signage, and custom print work produced in our own facility."
        images={PrintingImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Print. Brand. Transform."
        subtitle="Large Format Printing & Branded Graphics"
        description="From step and repeats to full environmental branding, we turn every surface into an opportunity to tell your brand story."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={PrintingFAQ} />
    </div>
  );
}
