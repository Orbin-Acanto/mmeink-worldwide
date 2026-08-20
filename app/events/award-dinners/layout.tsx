import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { AwardDinnersFAQ } from "@/data";

export const metadata: Metadata = buildMetadata({
  title: "Award Dinner & Ceremony Production | MME Worldwide",
  description: "Award dinner and ceremony production. Staging, lighting, presentation graphics, and cue to cue rehearsal so the programme runs to the second and every honouree gets their moment.",
  path: "/events/award-dinners",
  keywords: [
    "award dinner production",
    "awards ceremony production",
    "corporate awards night",
    "gala awards staging",
    "presentation graphics",
    "award show lighting",
    "honoree recognition event",
    "black tie event production",
  ],
});

export default function EventAwardDinnersPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FaqJsonLd faqs={AwardDinnersFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
          { name: "Award Dinners", path: "/events/award-dinners" },
        ]}
      />
      {children}
    </>
  );
}
