import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesIndexJsonLd from "@/components/seo/ServicesIndexJsonLd";
import { events } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Event Types We Produce | MME Worldwide",
  description:
    "Brand activations, product launches, trade shows, conferences, award dinners, galas, corporate events, themed and seasonal celebrations, and virtual and hybrid events, produced end to end.",
  path: "/events",
  keywords: [
    "types of corporate events",
    "event production by event type",
    "brand activation production",
    "conference and gala production",
    "trade show event production",
    "corporate event types",
    "experiential event formats",
  ],
});

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServicesIndexJsonLd
        basePath="/events"
        label="Events"
        listName="Event Types Produced by MME Worldwide"
        items={events.map((event) => ({
          name: event.name,
          href: event.href,
        }))}
      />
      {children}
    </>
  );
}
