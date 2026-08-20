import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { DesignAndDecorFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Creative Event Design & Décor | MME Worldwide",
  description: "Creative event design and décor. Event design, creative direction, custom décor, floral, lounge environments, tablescapes, draping, and immersive installations from mood board through final styling.",
  path: "/services/design-decor",
  keywords: [
      "event design company",
      "event décor",
      "creative direction events",
      "custom event decor",
      "event floral design",
      "lounge furniture design",
      "tablescape design",
      "specialty draping",
      "immersive installations",
      "gala decor"
  ],
});

export default function DesignDecorServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Creative Design and Décor"
        description={metadata.description as string}
        path="/services/design-decor"
        capabilities={serviceIntros["design-decor"].capabilities}
      />
      <FaqJsonLd faqs={DesignAndDecorFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Creative Design and Décor", path: "/services/design-decor" },
        ]}
      />
      {children}
    </>
  );
}
