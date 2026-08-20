import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ConferenceEventFAQ } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Conference & Corporate Meeting Production | MME Worldwide",
  description: "Conference and corporate meeting production. General session staging, audio visual, breakout support, registration, and hybrid streaming for executive meetings and multi day conferences.",
  path: "/events/conferences-meetings",
  keywords: [
    "conference production company",
    "corporate meeting production",
    "general session staging",
    "annual meeting production",
    "breakout room AV",
    "conference registration",
    "hybrid conference production",
    "executive meeting planning",
  ],
});

export default function ConferencesMeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={ConferenceEventFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Conferences & Meetings", path: "/events/conferences-meetings" },
        ]}
      />
      {children}
    </>
  );
}
