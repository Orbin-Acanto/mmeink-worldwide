import type { Metadata } from "next";
import { buildMetadata, BRAND, SITE_URL } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact MME Worldwide | Request a Proposal",
  description:
    "Request a proposal for your next event. Call 1-877-885-0705 or send us your brief. MME Worldwide produces corporate events, brand activations, and experiential campaigns nationwide.",
  path: "/contact",
  keywords: [
    "contact event production company",
    "request event proposal",
    "event RFP submission",
    "event production quote",
    "hire event production company",
    "event agency contact",
  ],
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            mainEntity: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: BRAND.name,
              telephone: BRAND.phone,
              email: BRAND.email,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: BRAND.phone,
                email: BRAND.email,
                contactType: "sales",
                areaServed: "US",
                availableLanguage: "English",
              },
            },
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
