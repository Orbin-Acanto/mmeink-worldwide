"use client";

import EventTypeHero from "@/components/events/EventTypeHero";
import FAQ from "@/components/FAQ";

import { faqs } from "@/data";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-white">
      <EventTypeHero
        image="https://images.unsplash.com/photo-1519167758481-83f29da8c2b9?w=1920&q=80"
        title="Private Events"
        subtitle="Celebrate life's special moments with unforgettable gatherings"
      />
      <FAQ faqs={faqs} />
    </div>
  );
}
