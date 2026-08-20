import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { LightingFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Event Lighting Design & Production | MME Worldwide",
  description: "Event lighting design and production. Architectural and intelligent lighting, LED systems, uplighting, stage and scenic lighting, custom gobo and logo projection, programmed and operated by our technicians.",
  path: "/services/lighting",
  keywords: [
      "event lighting design",
      "architectural lighting",
      "intelligent moving lighting",
      "event uplighting",
      "stage lighting design",
      "gobo logo projection",
      "LED lighting rental",
      "corporate event lighting",
      "gala lighting design",
      "lighting programming"
  ],
});

export default function LightingServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Lighting Design and Production"
        description={metadata.description as string}
        path="/services/lighting"
        capabilities={serviceIntros["lighting"].capabilities}
      />
      <FaqJsonLd faqs={LightingFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Lighting Design and Production", path: "/services/lighting" },
        ]}
      />
      {children}
    </>
  );
}
