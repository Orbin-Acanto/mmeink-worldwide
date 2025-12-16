"use client";

import EventTypeHero from "@/components/events/EventTypeHero";
import FAQ from "@/components/FAQ";

import { faqs } from "@/data";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
        title="Experiential Marketing"
        subtitle="Create lasting connections through memorable brand experiences"
      />
      <FAQ faqs={faqs} />
    </div>
  );
}
