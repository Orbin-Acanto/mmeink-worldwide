"use client";

import CaseStudiesSection from "@/components/events/CaseStudiesSection";
import ImageGallerySection from "@/components/events/ImageGallerySection";
import WorkHero from "@/components/work/WorkHero";
import FAQ from "@/components/FAQ";
import EntertainmentApproach from "@/components/services/EntertainmentApproach";
import EntertainmentDivisions from "@/components/services/EntertainmentDivisions";
import ServiceIntro from "@/components/services/ServiceIntro";
import WhatWeOffer from "@/components/services/WhatWeOffer";
import {
  SpecialtyEntertainmentApproach,
  SpecialtyEntertainmentCaseStudiesData,
  SpecialtyEntertainmentData,
  SpecialtyEntertainmentDivisions,
  SpecialtyEntertainmentFAQ,
  SpecialtyEntertainmentImageGallery,
} from "@/data";
import { serviceIntros } from "@/data/serviceIntros";
import HomeCTA from "@/sections/HomeCTA";

export default function SpecialtyEntertainmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/specialty-entertainment/hero/hero-video.mp4"
        title="Specialty"
        highlightedWord="Entertainment"
        subtitle="Extraordinary talent. Unexpected moments. Unforgettable experiences."
      />

      <ServiceIntro content={serviceIntros["specialty-entertainment"]} />

      <EntertainmentDivisions
        heading="Discover Our Entertainment"
        divisions={SpecialtyEntertainmentDivisions}
      />

      <WhatWeOffer
        title={SpecialtyEntertainmentData.title}
        subtitle={SpecialtyEntertainmentData.subtitle}
        topRow={SpecialtyEntertainmentData.topRow}
        bottomRow={SpecialtyEntertainmentData.bottomRow}
      />

      <EntertainmentApproach
        difference={SpecialtyEntertainmentApproach.difference}
      />

      <CaseStudiesSection caseStudies={SpecialtyEntertainmentCaseStudiesData} />

      <ImageGallerySection
        title="Specialty Entertainment"
        subtitle="Aerialists, living art, specialty dancers, and custom productions staged across galas, launches, and activations."
        images={SpecialtyEntertainmentImageGallery}
      />

      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Your Event Deserves a Wow Moment."
        subtitle="Let Us Create Something Unforgettable"
        description="Tell us the room, the theme, and the moment you want to land, and we will cast the talent, direct the show, and run it on the night."
        primaryButton={{
          text: "Speak With Our Creative Team",
          href: "/contact",
        }}
      />

      <FAQ faqs={SpecialtyEntertainmentFAQ} />
    </div>
  );
}
