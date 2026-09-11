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
  DesignAndDecorFAQ,
  // DesignDecorCaseStudiesData,
  DesignDecorData,
  DesignDecorImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function DesignDecorServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/design-decor/hero/hero-video.mp4"
        posterSrc="/services/design-decor/hero/hero-video-poster.jpg"
        title="Design"
        highlightedWord="& Decor"
        subtitle="Creative design and décor that transforms spaces into immersive environments"
      />

      <ServiceIntro content={serviceIntros["design-decor"]} />
      <WhatWeOffer
        title={DesignDecorData.title}
        subtitle={DesignDecorData.subtitle}
        topRow={DesignDecorData.topRow}
        bottomRow={DesignDecorData.bottomRow}
      />
      <ProcessApproach />
      {/* <CaseStudiesSection caseStudies={DesignDecorCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["design-decor"]} />
      <ImageGallerySection
        title="Design & Décor"
        subtitle="Explore our most memorable design and décor environments crafted for impactful events."
        images={DesignDecorImageGallery}
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Imagine the Vision. Transform the Space."
        subtitle="Creative Design & Décor"
        description="From the first mood board through final styling, we create spaces that do not simply look extraordinary. They make your audience feel something extraordinary."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={DesignAndDecorFAQ} />
    </div>
  );
}
