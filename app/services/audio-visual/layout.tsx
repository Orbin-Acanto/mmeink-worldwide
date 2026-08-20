import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { AudioVisualFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Audio Visual & Event Technology Production | MME Worldwide",
  description: "Corporate audio visual production and event technology. Sound systems, LED video walls, projection, presentation technology, live streaming, show calling, and on site engineering for conferences and launches.",
  path: "/services/audio-visual",
  keywords: [
      "audio visual production",
      "corporate AV company",
      "LED video wall rental",
      "event technology services",
      "conference AV production",
      "live streaming services",
      "projection mapping",
      "event sound system rental",
      "show calling technical direction",
      "hybrid event production"
  ],
});

export default function AudioVisualServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Audio Visual and Event Technology"
        description={metadata.description as string}
        path="/services/audio-visual"
        capabilities={serviceIntros["audio-visual"].capabilities}
      />
      <FaqJsonLd faqs={AudioVisualFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Audio Visual and Event Technology", path: "/services/audio-visual" },
        ]}
      />
      {children}
    </>
  );
}
