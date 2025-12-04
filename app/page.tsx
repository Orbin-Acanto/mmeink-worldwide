"use client";
import Navbar from "@/components/Navbar";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import StatsSection from "@/components/stats/StatsSection";
import { clientLogos, MarqueWorkItems, services, stats } from "@/data";
import AboutSection from "@/sections/AboutSection";
import ClientLogosSection from "@/sections/ClientLogosSection";
import LandingHero from "@/sections/LandingHero";
import OurWorkMarqueSection from "@/sections/OurWorkMarqueSection";
import OurWorkSection from "@/sections/OurWorkSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero
        title="Creating Unforgettable Experiences"
        subtitle="Premium event planning and production"
      />
      <AboutSection />
      <OurWorkMarqueSection items={MarqueWorkItems} />
      <ServicesOverviewSection services={services} />
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
