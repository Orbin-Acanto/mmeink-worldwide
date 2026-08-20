import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ProductLaunchesFaqs } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Product Launch Event Production | MME Worldwide",
  description: "Product launch production. Reveal moments, custom fabrication, staging, audio visual, and press ready environments designed to put a new product in front of the right audience.",
  path: "/events/product-launches",
  keywords: [
    "product launch event",
    "product reveal production",
    "launch event production company",
    "press event production",
    "product launch activation",
    "unveiling event staging",
    "product launch fabrication",
    "media launch event",
  ],
});

export default function ProductLaunchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={ProductLaunchesFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Product Launches", path: "/events/product-launches" },
        ]}
      />
      {children}
    </>
  );
}
