"use client";

import EventIntroSection from "@/components/events/EventIntroSection";
import FAQ from "@/components/FAQ";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import TestimonialsSection from "@/components/TestimonialsSection.tsx";
import WorkHero from "@/components/work/WorkHero";
import {
  events,
  eventsMarqueeProjects,
  faqs,
  testimonials,
} from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import OurWorkMarqueSection from "@/sections/OurWorkMarqueSection";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="/events/hero/hero-video.mp4"
        title="Every Event"
        highlightedWord="An Experience"
        subtitle="Three decades of unforgettable events, exceptional experiences, and lasting impressions"
      />
      <EventIntroSection
        images={[
          "/events/intro/intro-01.jpg",
          "/events/intro/intro-02.jpg",
          "/events/intro/intro-03.jpg",
        ]}
      />
      <ServicesOverviewSection
        services={events}
        title="OUR"
        highlightedText="EVENTS"
      />
      <OurWorkMarqueSection items={eventsMarqueeProjects} />
      <TestimonialsSection testimonials={testimonials} />
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
      <FAQ faqs={faqs} />
    </div>
  );
}
