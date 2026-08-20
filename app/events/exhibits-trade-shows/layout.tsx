import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ExhibitsTradeShowsFaqs } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Trade Show Exhibits & Booth Fabrication | MME Worldwide",
  description: "Trade show exhibit design, fabrication, and installation. Custom booths, branded graphics, exhibit logistics, storage between shows, and on site labour for exhibitors across the country.",
  path: "/events/exhibits-trade-shows",
  keywords: [
    "trade show exhibit builder",
    "custom trade show booth",
    "exhibit fabrication",
    "trade show booth design",
    "trade show logistics",
    "exhibit storage",
    "convention booth builder",
    "trade show graphics",
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
          { name: "Exhibits & Trade Shows", path: "/events/exhibits-trade-shows" },
        ]}
      />
      {children}
    </>
  );
}
