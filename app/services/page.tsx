"use client";

import WorkHero from "@/components/work/WorkHero";
import HomeCTA from "@/sections/HomeCTA";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import { faqs, services, servicesFeaturedProjects } from "@/data";
import AdditionalExperiences from "@/components/services/AdditionalExperiences";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import FAQ from "@/components/FAQ";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/services/hero/hero-video.mp4"
        title="Exceptional"
        highlightedWord="Services"
        subtitle="Crafted with precision, delivered with passion"
      />
      <WhyChooseUs />
      <ServicesOverviewSection
        services={services}
        title="OUR"
        highlightedText="SERVICES"
      />
      <HomeCTA
        backgroundImage="/shared/backgrounds/cta-background.jpg"
        title="Ready to Create Magic?"
        subtitle="Let's Work Together"
        description="Transform your vision into an unforgettable experience. Our team is ready to bring your event to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <AdditionalExperiences
        projects={servicesFeaturedProjects}
        title="Featured"
        highlightedText="Projects"
        subtitle="A showcase of our most memorable events and experiences"
        autoPlayInterval={4000}
      />
      <FAQ faqs={faqs} />
    </div>
  );
}
