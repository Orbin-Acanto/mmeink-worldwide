"use client";

import EventIntroSection from "@/components/events/EventIntroSection";
import FAQ from "@/components/FAQ";
import ServicesOverviewSection from "@/components/services/ServicesOverviewSection";
import TestimonialsSection from "@/components/TestimonialsSection.tsx";
import WorkHero from "@/components/work/WorkHero";
import { events, faqs, projects, testimonials } from "@/data";
import HomeCTA from "@/sections/HomeCTA";
import OurWorkMarqueSection from "@/sections/OurWorkMarqueSection";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkHero
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        title="Every Event"
        highlightedWord="An Experience"
        subtitle="Three decades of unforgettable events, exceptional experiences, and lasting impressions"
      />
      <EventIntroSection />
      <ServicesOverviewSection
        services={events}
        title="OUR"
        highlightedText="EVENTS"
      />
      <OurWorkMarqueSection items={projects} />
      <TestimonialsSection testimonials={testimonials} />
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
      <FAQ faqs={faqs} />
    </div>
  );
}
