import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ThemedEventsFAQ } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Themed Event Design & Production | MME Worldwide",
  description: "Themed event production. We choreograph the guest experience from arrival through departure, with custom scenic, props, and décor carrying one concept through the entire environment.",
  path: "/events/themed-events",
  keywords: [
    "themed event production",
    "themed party planning",
    "immersive themed environment",
    "custom scenic themed event",
    "themed corporate party",
    "concept driven event design",
    "themed entrance experience",
    "themed event decor",
  ],
});

export default function EventThemedEventsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={ThemedEventsFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Themed Events", path: "/events/themed-events" },
        ]}
      />
      {children}
    </>
  );
}
