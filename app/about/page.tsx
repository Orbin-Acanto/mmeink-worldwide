"use client";

import BrandPartnersSection from "@/components/about/BrandPartnersSection";
import FounderSection from "@/components/about/FounderSection";
import Hero from "@/components/about/Hero";
import OurStorySection from "@/components/about/OurStorySection";
import OurTeamSection from "@/components/about/OurTeamSection";
import CTASection from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import AboutSection from "@/sections/AboutSection";
import HomeCTA from "@/sections/HomeCTA";
import ProcessSection from "@/sections/ProcessSection";

export default function About() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <Hero />
      <AboutSection
        label="About Us"
        description="MME Worldwide is a full service event production and hospitality company specializing in signature, first class luxury lifestyle experiences. Founded in 1995 and led by President Denise Tardi, our innovative and creative team combines the management capabilities of a large agency with the flexibility and efficiency of a boutique shop. We create authentic experiences that connect consumers to brands, engaging and rewarding audiences with unique, memorable events. With three decades of experience and production, warehouse, and operational capabilities spanning New York, Long Island, South Florida, South Carolina, Los Angeles, and the Caribbean, MME delivers exceptional events through an integrated approach that maximizes your brand's outreach."
        title="Our Experience Helps to"
        titleHighlight="Create Yours"
        graphic="/about/intro/anniversary-30-years.png"
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Let's Create Something Extraordinary Together"
        subtitle="Let's Work Together"
        description="Our team brings your vision to life with bold creativity, impeccable execution, and world-class production."
        primaryButton={{
          text: "Let's Create Together",
          href: "/contact",
        }}
      />
      <OurStorySection />
      <FounderSection />
      <OurTeamSection />
      <BrandPartnersSection />
      <CTASection
        primaryButton={{
          href: "/contact",
          text: "Let's Create Together",
        }}
      />
      <ProcessSection />
    </>
  );
}
