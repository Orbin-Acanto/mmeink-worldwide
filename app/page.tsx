"use client";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import StatsSection from "@/components/stats/StatsSection";
import { clientLogos, MarqueWorkItems, services, stats } from "@/data";
import AboutSection from "@/sections/AboutSection";
import ClientLogosSection from "@/sections/ClientLogosSection";
import HomeCTA from "@/sections/HomeCTA";
import LandingHero from "@/sections/LandingHero";
import OurWorkMarqueSection from "@/sections/OurWorkMarqueSection";
import OurWorkSection from "@/sections/OurWorkSection";
import ProcessSection from "@/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <LandingHero
        title="Creating Unforgettable Experiences"
        subtitle="Premium event planning and production"
      />
      <AboutSection />
      <OurWorkMarqueSection items={MarqueWorkItems} />
      <ServicesOverviewSection services={services} />
      <ProcessSection />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Ready to Create Magic?"
        subtitle="Let's Work Together"
        description="Transform your vision into an unforgettable experience. Our team is ready to bring your event to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
      <ClientLogosSection logos={clientLogos} />
      <StatsSection
        title="Crafting exceptional, well experienced & technology driven strategies to drive impactful results with"
        highlightedText="strategies to drive impactful results with"
        stats={stats}
      />
      <OurWorkSection />
    </>
  );
}
