import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { StagingFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Event Staging & Scenic Production | MME Worldwide",
  description: "Custom event staging and scenic production. Branded stage sets, presentation platforms, runways, risers, LED integrated staging, and scenic fabrication engineered for the room and the run of show.",
  path: "/services/staging",
  keywords: [
      "event staging",
      "custom stage design",
      "scenic production",
      "branded stage set",
      "runway staging",
      "stage riser rental",
      "LED integrated staging",
      "conference stage design",
      "product launch stage",
      "stage decking"
  ],
});

export default function StagingServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Staging and Scenic Production"
        description={metadata.description as string}
        path="/services/staging"
        capabilities={serviceIntros["staging"].capabilities}
      />
      <FaqJsonLd faqs={StagingFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Staging and Scenic Production", path: "/services/staging" },
        ]}
      />
      {children}
    </>
  );
}
