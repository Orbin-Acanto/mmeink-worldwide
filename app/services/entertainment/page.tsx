"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WorkHero from "@/components/work/WorkHero";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  EntertainmentCaseStudiesData,
  EntertainmentData,
  EntertainmentFAQ,
  EntertainmentImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function EntertainmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/shared/videos/MME_Worldwide_Entertainment.mp4"
        title="Entertainment"
        highlightedWord="& Experiences"
        subtitle="Performers, hosts, and interactive experiences"
      />

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
        title="Keep Them Talking."
        subtitle="Entertainment & Guest Experience"
        description="Performers, hosts, and interactive moments that turn an event into something guests describe to other people afterwards."
        primaryButton={{
          text: "Plan Your Event",
          href: "/contact",
        }}
      />
      <FAQ faqs={EntertainmentFAQ} />
    </div>
  );
}
