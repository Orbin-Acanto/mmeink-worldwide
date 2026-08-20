import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About MME Worldwide | Event Production Since 1995",
  description:
    "MME Worldwide is a full service event management and hospitality agency led by CEO Michael Tardi. Three decades of experience, with offices in New York City, Long Island, and Miami.",
  path: "/about",
  keywords: [
    "about MME Worldwide",
    "event management agency New York",
    "event production company Long Island",
    "event agency Miami",
    "Michael Tardi MME",
    "experiential agency team",
    "event production since 1995",
  ],
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      {children}
    </>
  );
}
