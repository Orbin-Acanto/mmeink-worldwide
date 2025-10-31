"use client";
import Navbar from "@/component/Navbar";
import AboutSection from "@/sections/AboutSection";
import LandingHero from "@/sections/LandingHero";
import ServicesSection from "@/sections/Servicessection";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingHero
        title="Creating Unforgettable Experiences"
        subtitle="Premium event planning and production"
      />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
