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
        videoSrc="/shared/videos/MME_Worldwide_Entertainment.mp4"
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
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
