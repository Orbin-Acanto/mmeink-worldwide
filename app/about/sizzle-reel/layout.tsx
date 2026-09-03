import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { sizzleReel } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Event Production Sizzle Reel | MME Worldwide",
  description:
    "Watch the MME Worldwide sizzle reel. Three decades of galas, product launches, brand activations, conferences, and trade show exhibits produced across New York City, Long Island, and Miami.",
  path: "/about/sizzle-reel",
  keywords: [
    "event production sizzle reel",
    "event production showreel",
    "corporate event video",
    "brand activation reel",
    "gala production video",
    "event production portfolio video",
    "MME Worldwide sizzle reel",
    "event production company reel NYC",
  ],
});

export default function SizzleReelPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={sizzleReel.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Sizzle Reel", path: "/about/sizzle-reel" },
        ]}
      />
      {children}
    </>
  );
}
