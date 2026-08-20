import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { CorporateEventsFAQ } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Event Planning & Production | MME Worldwide",
  description: "Corporate event production for all hands meetings, town halls, company celebrations, anniversaries, and holiday parties, with staging, audio visual, décor, and entertainment handled throughout.",
  path: "/events/corporate-events",
  keywords: [
    "corporate event production",
    "corporate event planning company",
    "all hands meeting production",
    "town hall event production",
    "company holiday party",
    "corporate anniversary event",
    "employee engagement event",
    "corporate event management NYC",
  ],
});

export default function EventCorporateEventsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={CorporateEventsFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Corporate Events", path: "/events/corporate-events" },
        ]}
      />
      {children}
    </>
  );
}
