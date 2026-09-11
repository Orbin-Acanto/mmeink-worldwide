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
  // MusicalEntertainmentCaseStudiesData,
  MusicalEntertainmentData,
  MusicalEntertainmentFAQ,
  MusicalEntertainmentImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function MusicalEntertainmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/musical-entertainment/hero/hero-video.mp4"
        posterSrc="/services/musical-entertainment/hero/hero-video-poster.jpg"
        title="Musical"
        highlightedWord="Entertainment"
        subtitle="Curated musical talent that sets the tone and defines the energy of your event"
      />

      <ServiceIntro content={serviceIntros["musical-entertainment"]} />

      <WhatWeOffer
        title={MusicalEntertainmentData.title}
        subtitle={MusicalEntertainmentData.subtitle}
        topRow={MusicalEntertainmentData.topRow}
        bottomRow={MusicalEntertainmentData.bottomRow}
      />
      <ProcessApproach />
      {/* <CaseStudiesSection caseStudies={MusicalEntertainmentCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["musical-entertainment"]} />
      <ImageGallerySection
        title="Musical Entertainment"
        subtitle="Live bands, DJs, and ensembles performing across galas, celebrations, and corporate events."
        images={MusicalEntertainmentImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="The Sound. The Energy. The Experience."
        subtitle="Musical Entertainment"
        description="From a string quartet at cocktail hour to a full band closing the night, we curate entertainment that does not simply perform for your guests. It connects with them."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={MusicalEntertainmentFAQ} />
    </div>
  );
}
