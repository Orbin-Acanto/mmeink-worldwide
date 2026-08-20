import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesIndexJsonLd from "@/components/seo/ServicesIndexJsonLd";
import { services } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Event Production Services | MME Worldwide",
  description:
    "Twelve event production services under one partner: custom fabrication, large format printing, audio visual, lighting, staging, design and décor, themes, props, rentals, music, entertainment, and logistics.",
  path: "/services",
  keywords: [
    "event production services",
    "full service event production",
    "event production company services",
    "experiential production services",
    "one stop event production",
    "corporate event services",
    "in house event fabrication",
  ],
});

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServicesIndexJsonLd
        basePath="/services"
        label="Services"
        listName="Event Production Services"
        items={services.map((service) => ({
          name: service.name,
          href: service.href,
        }))}
      />
      {children}
    </>
  );
}
