import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { EventManagementData, LogisticsFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Event Logistics, Event Management & Storage | MME Worldwide",
  description:
    "Event management and logistics under one team. Planning and budget control, venue and vendor coordination, run of show and show calling, on site management, white glove delivery, dedicated trucking, warehousing, crating, installation, and strike.",
  path: "/services/logistics",
  keywords: [
    "event management company",
    "event manager NYC",
    "event logistics",
    "run of show and show calling",
    "venue and vendor coordination",
    "event budget management",
    "on site event management",
    "white glove delivery",
    "trade show logistics",
    "event asset storage",
    "exhibit warehousing",
    "freight coordination events",
    "packing and crating",
    "multi city activation logistics",
  ],
});

export default function LogisticsServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Logistics, Event Management and White Glove Storage"
        description={metadata.description as string}
        path="/services/logistics"
        capabilities={[
          ...EventManagementData.pillars.flatMap((pillar) => pillar.points),
          ...serviceIntros["logistics"].capabilities,
        ]}
      />
      <FaqJsonLd faqs={LogisticsFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Logistics, Event Management and White Glove Storage",
            path: "/services/logistics",
          },
        ]}
      />
      {children}
    </>
  );
}
