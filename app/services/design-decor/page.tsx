"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import EventTypeHero from "@/components/events/EventTypeHero";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import FAQ from "@/components/FAQ";
import ProcessApproach from "@/components/services/ProcessApproach";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  DesignAndDecorFAQ,
  DesignDecorCaseStudiesData,
  DesignDecorData,
  DesignDecorImageGallery,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function DesignDecorServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="/services/dd/5.jpg"
        title="Design Decor"
        subtitle="Immersive experiences that bring your brand to life"
      />
      <WhatWeOffer
        title={DesignDecorData.title}
        subtitle={DesignDecorData.subtitle}
        topRow={DesignDecorData.topRow}
        bottomRow={DesignDecorData.bottomRow}
      />
      <ProcessApproach />
      <CaseStudiesSection caseStudies={DesignDecorCaseStudiesData} />
      <ImageGallerySection
        title="Design & Décor"
        subtitle="Explore our most memorable design and décor environments crafted for impactful events."
        images={DesignDecorImageGallery}
      />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Design That Sets the Tone"
        subtitle="Custom Event Décor & Styling"
        description="From concept to execution, our design team creates thoughtfully styled environments that elevate every event."
        primaryButton={{
          text: "Start Planning",
          href: "/contact",
        }}
      />

      <FAQ faqs={DesignAndDecorFAQ} />
    </div>
  );
}
