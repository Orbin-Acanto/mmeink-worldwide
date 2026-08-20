import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Our Work | Event Production Portfolio | MME Worldwide",
  description:
    "A portfolio of events produced by MME Worldwide, spanning brand activations, product launches, conferences, galas, trade shows, and immersive brand environments for leading brands and agencies.",
  path: "/work",
  keywords: [
    "event production portfolio",
    "brand activation case studies",
    "experiential marketing examples",
    "corporate event portfolio",
    "product launch case study",
    "trade show booth examples",
    "event production case studies",
  ],
});

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
        ]}
      />
      {children}
    </>
  );
}
