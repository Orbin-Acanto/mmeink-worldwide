import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { SpecialtyEntertainmentFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Specialty Entertainment & Performers for Events | MME Worldwide",
  description:
    "Specialty entertainment curated around your event. Aerialists, living art, specialty dancers, fire and LED performers, strolling magicians, live musicians, and custom theatrical productions, cast and directed by MME Worldwide.",
  path: "/services/specialty-entertainment",
  keywords: [
    "specialty entertainment",
    "event performers",
    "aerialists for events",
    "living art performers",
    "LED dancers",
    "fire performers",
    "strolling magicians",
    "interactive entertainment",
    "custom entertainment production",
    "corporate event entertainment NYC",
    "luxury wedding entertainment",
    "gala entertainment",
  ],
});

export default function SpecialtyEntertainmentPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Specialty Entertainment"
        description={metadata.description as string}
        path="/services/specialty-entertainment"
        capabilities={serviceIntros["specialty-entertainment"].capabilities}
      />
      <FaqJsonLd faqs={SpecialtyEntertainmentFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Specialty Entertainment",
            path: "/services/specialty-entertainment",
          },
        ]}
      />
      {children}
    </>
  );
}
