"use client";
import Navbar from "@/components/Navbar";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import StatsSection from "@/components/stats/StatsSection";
import { services, stats } from "@/data";
import AboutSection from "@/sections/AboutSection";
import LandingHero from "@/sections/LandingHero";
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

      <ServicesOverviewSection services={services} />
      <StatsSection
        title="Crafting exceptional, well experienced & technology driven strategies to drive impactful results with"
        highlightedText="strategies to drive impactful results with"
        stats={stats}
      />
      <OurWorkSection />
    </>
  );
}
