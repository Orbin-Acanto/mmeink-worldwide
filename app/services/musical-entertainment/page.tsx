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
import EntertainmentDivisions from "@/components/services/EntertainmentDivisions";
import {
  // MusicalEntertainmentCaseStudiesData,
  MusicalEntertainmentData,
  MusicalEntertainmentDivisionsData,
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
        title="Set the Tone."
        highlightedWord="Create the Moment."
        stackHeadline
        tagline="Exceptional Music for Extraordinary Events."
        subtitle="Curated artists. Captivating performances. Unforgettable energy."
        exploreLabel="Explore Musical Entertainment"
      />

      <ServiceIntro content={serviceIntros["musical-entertainment"]} />

      <EntertainmentDivisions
        headingPrefix="Discover Our"
        headingPhrases={["Musical Talent", "Live Music", "Featured Artists"]}
        divisions={MusicalEntertainmentDivisionsData}
      />

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
        title="The Sound. The Atmosphere. The Vibe."
        subtitle="Musical Entertainment"
        description="From the timeless elegance of a string quartet and the sophistication of live jazz to world class vocalists, specialty musicians, and high energy bands, MME Worldwide curates musical entertainment designed to define the atmosphere of every occasion."
        paragraphs={[
          "Every performance is thoughtfully selected to complement the setting, elevate the guest experience, and create an unforgettable connection between music, energy, and celebration.",
          "Exceptional talent. Impeccable presentation. Unforgettable performances.",
        ]}
        primaryButton={{
          text: "Curate Your Experience",
          href: "/contact",
        }}
      />
      <FAQ faqs={MusicalEntertainmentFAQ} />
    </div>
  );
}
