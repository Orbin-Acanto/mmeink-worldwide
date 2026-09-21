"use client";

// Case studies are paused until new case study content is ready.
// import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import FeaturedWork from "@/components/services/FeaturedWork";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WorkHero from "@/components/work/WorkHero";
import FAQ from "@/components/FAQ";
import EntertainmentDivisions from "@/components/services/EntertainmentDivisions";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  // EntertainmentCaseStudiesData,
  EntertainmentData,
  EntertainmentDivisionsData,
  EntertainmentFAQ,
  EntertainmentImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";
import { featuredWork } from "@/data/featuredWork";

export default function EntertainmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/entertainment/hero/hero-video.mp4"
        posterSrc="/services/entertainment/hero/hero-video-poster.jpg"
        title="Experience the"
        highlightedWord="Extraordinary."
        tagline="Entertainment. Performance. Play. Technology. Connection."
        subtitle="Curated experiences designed to captivate, engage, and be remembered."
      />

      <ServiceIntro content={serviceIntros["entertainment"]} />

      <EntertainmentDivisions
        headingPrefix="Discover Our"
        headingPhrases={["Entertainment", "Live Talent", "Guest Experiences"]}
        divisions={EntertainmentDivisionsData}
      />

      <WhatWeOffer
        title={EntertainmentData.title}
        subtitle={EntertainmentData.subtitle}
        topRow={EntertainmentData.topRow}
        bottomRow={EntertainmentData.bottomRow}
        topRowSlots={EntertainmentData.topRowSlots}
        bottomRowSlots={EntertainmentData.bottomRowSlots}
      />
      <ProcessApproach />
      {/* <CaseStudiesSection caseStudies={EntertainmentCaseStudiesData} /> */}
      <FeaturedWork content={featuredWork["entertainment"]} />
      <ImageGallerySection
        title="Entertainment"
        subtitle="Performers, hosts, and interactive experiences produced across activations and celebrations."
        images={EntertainmentImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Perform. Play. Engage. Experience."
        subtitle="Entertainment & Immersive Experiences"
        description="Where extraordinary talent, interactive entertainment, and imaginative experiences come together."
        paragraphs={[
          "From captivating live performers and immersive photo moments to sophisticated casino experiences, elevated carnival attractions, interactive gaming, sports challenges, and next generation technology, MME Worldwide creates experiences that invite guests to become part of the moment.",
          "Designed to captivate. Created to connect. Remembered long after the event ends.",
        ]}
        primaryButton={{
          text: "Create Your Experience",
          href: "/contact",
        }}
      />
      <FAQ faqs={EntertainmentFAQ} />
    </div>
  );
}
