import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { MusicalEntertainmentFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Live Musical Entertainment for Events | MME Worldwide",
  description: "Live musical entertainment booking and production. Bands, DJs, vocalists, jazz ensembles, string quartets, pianists, and orchestras, with staging, audio, lighting, and artist coordination handled for you.",
  path: "/services/musical-entertainment",
  keywords: [
      "live music for events",
      "corporate event band booking",
      "event DJ services",
      "string quartet hire",
      "jazz ensemble events",
      "wedding band booking",
      "gala entertainment",
      "musical entertainment agency",
      "talent booking events",
      "live band production"
  ],
});

export default function MusicalEntertainmentServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Musical Entertainment"
        description={metadata.description as string}
        path="/services/musical-entertainment"
        capabilities={serviceIntros["musical-entertainment"].capabilities}
      />
      <FaqJsonLd faqs={MusicalEntertainmentFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Musical Entertainment", path: "/services/musical-entertainment" },
        ]}
      />
      {children}
    </>
  );
}
