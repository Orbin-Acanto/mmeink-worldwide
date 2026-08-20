import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { LogisticsFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Event Logistics, White Glove Services & Storage | MME Worldwide",
  description: "Event logistics, white glove delivery, and storage. Dedicated trucking, freight coordination, receiving, inventory management, warehousing, crating, installation, and strike for multi city programs.",
  path: "/services/logistics",
  keywords: [
      "event logistics",
      "white glove delivery",
      "trade show logistics",
      "event asset storage",
      "exhibit warehousing",
      "freight coordination events",
      "inventory management events",
      "packing and crating",
      "roadshow logistics",
      "multi city activation logistics"
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
        name="Logistics, White Glove Services and Storage"
        description={metadata.description as string}
        path="/services/logistics"
        capabilities={serviceIntros["logistics"].capabilities}
      />
      <FaqJsonLd faqs={LogisticsFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Logistics, White Glove Services and Storage", path: "/services/logistics" },
        ]}
      />
      {children}
    </>
  );
}
