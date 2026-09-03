import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { brochure } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Digital Brochure & Capabilities Guide | MME Worldwide",
  description:
    "Read the MME Worldwide digital brochure. Custom fabrication, large format printing, audio visual, lighting, staging, design and decor, props, rentals, entertainment, and logistics, with case studies and specifications. Download the PDF.",
  path: "/about/brochure",
  keywords: [
    "event production brochure",
    "event production capabilities guide",
    "event company brochure PDF",
    "custom fabrication capabilities",
    "event services brochure NYC",
    "experiential marketing capabilities deck",
    "MME Worldwide brochure",
    "digital brochure event production",
  ],
});

export default function DigitalBrochurePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={brochure.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Digital Brochure", path: "/about/brochure" },
        ]}
      />
      {children}
    </>
  );
}
