import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { ThemesFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Event Themes & Immersive Experiences | MME Worldwide",
  description:
    "Corporate event themes that turn gatherings into brand experiences. Custom scenic design, immersive décor, specialty props, branded environments, lighting, and floral, from concept through execution.",
  path: "/services/themes",
  keywords: [
    "corporate event themes",
    "themed event design",
    "immersive event concepts",
    "themed party production",
    "custom themed environments",
    "holiday party themes",
    "brand themed activation",
    "themed scenic design",
    "destination inspired event",
    "immersive brand environment",
  ],
});

export default function ThemesServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Corporate Event Themes and Immersive Experiences"
        description={metadata.description as string}
        path="/services/themes"
        capabilities={serviceIntros["themes"].capabilities}
      />
      <FaqJsonLd faqs={ThemesFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Corporate Event Themes and Immersive Experiences",
            path: "/services/themes",
          },
        ]}
      />
      {children}
    </>
  );
}
