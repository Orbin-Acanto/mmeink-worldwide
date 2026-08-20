import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { VirtualHyrbidfaqs } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Virtual & Hybrid Event Production | MME Worldwide",
  description: "Virtual and hybrid event production. Broadcast quality streaming, studio staging, presenter support, and audience engagement tools so remote and in room attendees share one experience.",
  path: "/events/virtual-hybrid-events",
  keywords: [
    "virtual event production",
    "hybrid event production",
    "live streaming event company",
    "broadcast studio event",
    "webcast production",
    "virtual conference platform",
    "hybrid meeting AV",
    "remote presenter support",
  ],
});

export default function VirtualHybridEventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={VirtualHyrbidfaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Virtual & Hybrid Events", path: "/events/virtual-hybrid-events" },
        ]}
      />
      {children}
    </>
  );
}
