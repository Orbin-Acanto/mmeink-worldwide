import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Galasfaqs } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Gala & Fundraiser Event Production | MME Worldwide",
  description: "Gala and fundraiser production. Décor, lighting, staging, entertainment, and full technical production for nonprofit benefits, black tie dinners, and milestone celebrations.",
  path: "/events/galas",
  keywords: [
    "gala event production",
    "fundraiser event production",
    "nonprofit benefit event",
    "black tie gala planning",
    "gala decor and lighting",
    "charity gala production",
    "gala entertainment",
    "benefit dinner production",
  ],
});

export default function GalasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={Galasfaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Galas", path: "/events/galas" },
        ]}
      />
      {children}
    </>
  );
}
