"use client";

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
        description="MMEink is a full service Event Management & Hospitality agency specializing in creating signature, first class luxury lifestyle experiences. Led by CEO Michael Tardi, our innovative and creative team combines the management capabilities of a large agency with the flexibility and efficiency of a boutique shop. We create authentic experiences that connect consumers to brands, engaging and rewarding audiences with unique, memorable events. With three decades of experience serving clients worldwide and offices in New York City, Long Island, and Miami, MMEink delivers exceptional events through our integrated marketing approach to maximize your brand's outreach."
        title="Our Experience Helps to"
        titleHighlight="Create Yours"
        graphic="/about/intro/anniversary-30-years.png"
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Contact Us Today to Get Started"
        subtitle="Let's Work Together"
        description="Transform your vision into an unforgettable experience. Our team is ready to bring your event to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <OurStorySection />
      <OurTeamSection />
      <CTASection
        primaryButton={{
          href: "/contact",
          text: "Get Started",
        }}
      />
      <ProcessSection />
    </>
  );
}
