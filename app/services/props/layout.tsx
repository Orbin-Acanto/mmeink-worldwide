import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { PropsFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Event Props & Immersive Environments | MME Worldwide",
  description: "Event props and immersive environments. Statement props, themed installations, oversized objects, photo moments, and custom built scenic elements, available from inventory or fabricated for your brand.",
  path: "/services/props",
  keywords: [
      "event props",
      "custom props fabrication",
      "themed event props",
      "oversized props",
      "photo moment installation",
      "prop rental",
      "immersive environments",
      "holiday decor props",
      "scenic elements",
      "branded displays"
  ],
});

export default function PropsServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Event Props and Immersive Environments"
        description={metadata.description as string}
        path="/services/props"
        capabilities={serviceIntros["props"].capabilities}
      />
      <FaqJsonLd faqs={PropsFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Event Props and Immersive Environments", path: "/services/props" },
        ]}
      />
      {children}
    </>
  );
}
