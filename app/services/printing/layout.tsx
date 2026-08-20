import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { PrintingFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Large Format Printing & Branded Event Graphics | MME Worldwide",
  description: "Large format printing and branded graphics produced in house. Step and repeats, custom signage, backdrops, wall, window and floor graphics, banners, and event branding, installed and removed by our team.",
  path: "/services/printing",
  keywords: [
      "large format printing",
      "event graphics",
      "step and repeat backdrop",
      "custom event signage",
      "trade show graphics",
      "branded backdrops",
      "wall and window graphics",
      "floor graphics",
      "vinyl banners",
      "exhibition graphics"
  ],
});

export default function PrintingServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Large Format Printing and Branded Graphics"
        description={metadata.description as string}
        path="/services/printing"
        capabilities={serviceIntros["printing"].capabilities}
      />
      <FaqJsonLd faqs={PrintingFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Large Format Printing and Branded Graphics", path: "/services/printing" },
        ]}
      />
      {children}
    </>
  );
}
