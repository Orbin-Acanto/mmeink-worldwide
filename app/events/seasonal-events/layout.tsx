import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { SeasonalEventsFAQ } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Holiday & Seasonal Event Production | MME Worldwide",
  description: "Holiday and seasonal event production. Seasonal décor, entertainment, and catering coordination, with reusable assets built for clients who run the same celebration every year.",
  path: "/events/seasonal-events",
  keywords: [
    "holiday party production",
    "corporate holiday event",
    "seasonal event decor",
    "winter wonderland event",
    "holiday decor installation",
    "annual celebration production",
    "seasonal activation",
    "company holiday party planner",
  ],
});

export default function EventSeasonalEventsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={SeasonalEventsFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Seasonal Events", path: "/events/seasonal-events" },
        ]}
      />
      {children}
    </>
  );
}
