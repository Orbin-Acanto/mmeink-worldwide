import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ExhibitsTradeShowsFaqs } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Trade Show Exhibits, Exhibitions & Showrooms | MME Worldwide",
  description:
    "Trade show exhibit and brand exhibition design, fabrication, and installation. Custom island, peninsula, and inline booths, showroom environments, immersive exhibits, show services coordination, drayage, and warehousing for travelling programmes.",
  path: "/events/exhibits-trade-shows",
  keywords: [
    "trade show exhibits",
    "trade show booth builder",
    "custom exhibit design",
    "island booth fabrication",
    "trade show graphics",
    "exhibit install and dismantle",
    "show services coordination",
    "trade show drayage",
    "brand exhibition design",
    "showroom design and build",
    "immersive exhibit design",
    "touring exhibition production",
    "convention booth builder NYC",
    "exhibit warehousing",
  ],
});

export default function ExhibitsTradeShowsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={ExhibitsTradeShowsFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Exhibitions & Trade Shows", path: "/events/exhibits-trade-shows" },
        ]}
      />
      {children}
    </>
  );
}
