"use client";

import Hero from "@/components/about/Hero";
import OurStorySection from "@/components/about/OurStorySection";
import OurTeamSection from "@/components/about/OurTeamSection";
import AboutSection from "@/sections/AboutSection";
import ProcessSection from "@/sections/ProcessSection";

export default function About() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurStorySection />
      <OurTeamSection />
      <ProcessSection />
    </>
  );
}
