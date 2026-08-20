import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { RentalFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Premium Event Rentals | Furniture, Bars & Décor | MME Worldwide",
  description: "Premium event rentals including lounge furniture, bars, cocktail and dining tables, specialty seating, staging, linens, décor, backdrops, red carpets, and lighting, with delivery, install, and strike.",
  path: "/services/rentals",
  keywords: [
      "event rentals",
      "lounge furniture rental",
      "corporate event furniture rental",
      "bar rental events",
      "cocktail table rental",
      "specialty seating rental",
      "event linens rental",
      "red carpet stanchion rental",
      "backdrop rental",
      "party rental company"
  ],
});

export default function RentalsServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Event Rentals"
        description={metadata.description as string}
        path="/services/rentals"
        capabilities={serviceIntros["rentals"].capabilities}
      />
      <FaqJsonLd faqs={RentalFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Event Rentals", path: "/services/rentals" },
        ]}
      />
      {children}
    </>
  );
}
