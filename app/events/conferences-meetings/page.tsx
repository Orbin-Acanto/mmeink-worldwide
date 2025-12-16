"use client";

import EventTypeHero from "@/components/events/EventTypeHero";
import FAQ from "@/components/FAQ";

import { faqs } from "@/data";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
        title="Corporate Events"
        subtitle="From conferences to team building, we create impactful experiences"
      />
      <FAQ faqs={faqs} />
    </div>
  );
}
