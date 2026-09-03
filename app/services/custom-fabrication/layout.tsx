import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { CustomFabricationFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Custom Fabrication for Brand Experiences | MME Worldwide",
  description: "Custom event fabrication for brands and agencies. MME Worldwide designs, engineers, and builds experiential activations, trade show exhibits, pop ups, and branded environments from concept through installation.",
  path: "/services/custom-fabrication",
  keywords: [
      "custom fabrication",
      "custom event fabrication",
      "experiential fabrication company",
      "brand activation fabrication",
      "trade show exhibit fabrication",
      "pop up shop fabrication",
      "scenic fabrication",
      "branded environments",
      "immersive environment builder",
      "custom booth builder"
  ],
});

export default function CustomFabricationServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Custom Fabrication"
        description={metadata.description as string}
        path="/services/custom-fabrication"
        capabilities={serviceIntros["custom-fabrication"].capabilities}
      />
      <FaqJsonLd faqs={CustomFabricationFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Custom Fabrication", path: "/services/custom-fabrication" },
        ]}
      />
      {children}
    </>
  );
}
