"use client";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import StatsSection from "@/components/stats/StatsSection";
import {
  clientLogos,
  homeMarqueeProjects,
  servicesEventsHome,
  stats,
} from "@/data";
import AboutSection from "@/sections/AboutSection";
import ClientLogosSection from "@/sections/ClientLogosSection";
import HomeCTA from "@/sections/HomeCTA";
import LandingHero from "@/sections/LandingHero";
import OurWorkMarqueSection from "@/sections/OurWorkMarqueSection";
import OurWorkSection from "@/sections/OurWorkSection";

export default function Home() {
  return (
    <>
      <LandingHero
        title="Creating Unforgettable Experiences"
        subtitle="Premium event planning and production"
        embedUrl="https://player.vimeo.com/video/1041819066?h=07e5ac4551&background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
        posterSrc="/home/hero/hero-video-poster.png"
      />
      <AboutSection
        label="About Us"
        description="With over 30 years of experience, MME is a full-service event
              management and hospitality agency creating exceptional,
              first-class experiences. We combine creative vision with strategic
              expertise, delivering boutique-level flexibility backed by proven
              leadership. From concept to execution, MME partners with brands
              worldwide to produce authentic, engaging events that align with
              your vision and exceed expectations."
        title="Crafting unforgettable"
        titleHighlight="event experiences"
        graphic="/home/about/anniversary-30-years.png"
      />
      <OurWorkMarqueSection items={homeMarqueeProjects} />
      <ServicesOverviewSection
        services={servicesEventsHome}
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
