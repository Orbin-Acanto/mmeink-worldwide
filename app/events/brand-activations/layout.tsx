import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { BrandActivationfaqs } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Brand Activation & Experiential Marketing | MME Worldwide",
  description: "Brand activations and experiential marketing production. We design, fabricate, and produce immersive consumer activations, pop ups, and branded environments that connect audiences to brands.",
  path: "/events/brand-activations",
  keywords: [
    "brand activation agency",
    "experiential marketing agency",
    "consumer activation",
    "pop up activation",
    "immersive brand experience",
    "guerrilla marketing activation",
    "mobile tour activation",
    "branded environment design",
  ],
});

export default function BrandActivationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={BrandActivationfaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Brand Activations", path: "/events/brand-activations" },
        ]}
      />
      {children}
    </>
  );
}
