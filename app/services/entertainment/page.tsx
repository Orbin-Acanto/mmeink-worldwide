"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WorkHero from "@/components/work/WorkHero";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  EntertainmentCaseStudiesData,
  EntertainmentData,
  EntertainmentFAQ,
  EntertainmentImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import { serviceIntros } from "@/data/serviceIntros";

export default function EntertainmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/entertainment/hero/hero-video.mp4"
        title="Entertainment"
        highlightedWord="& Experiences"
        subtitle="Live entertainment, photo experiences, and interactive activations tailored to your brand"
      />

      <ServiceIntro content={serviceIntros["entertainment"]} />

      <WhatWeOffer
        title={EntertainmentData.title}
        subtitle={EntertainmentData.subtitle}
        topRow={EntertainmentData.topRow}
        bottomRow={EntertainmentData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={EntertainmentCaseStudiesData} />
      <ImageGallerySection
        title="Entertainment"
        subtitle="Performers, hosts, and interactive experiences produced across activations and celebrations."
        images={EntertainmentImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Perform. Play. Capture. Share."
        subtitle="Entertainment & Interactive Experiences"
        description="From specialty performers and photo booths to casino nights and carnival games, we create energy, inspire interaction, and give guests something to remember."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={EntertainmentFAQ} />
    </div>
  );
}
