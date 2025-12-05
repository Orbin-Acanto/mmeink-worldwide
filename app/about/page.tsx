"use client";

import Hero from "@/components/about/Hero";
import OurStorySection from "@/components/about/OurStorySection";
import OurTeamSection from "@/components/about/OurTeamSection";
import AboutSection from "@/sections/AboutSection";
import HomeCTA from "@/sections/HomeCTA";
import ProcessSection from "@/sections/ProcessSection";

export default function About() {
  return (
    <>
      <Hero />
      <AboutSection />
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
      <OurStorySection />
      <OurTeamSection />
      <ProcessSection />
    </>
  );
}
