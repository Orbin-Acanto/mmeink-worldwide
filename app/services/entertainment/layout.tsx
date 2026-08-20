import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/JsonLd";
import { EntertainmentFAQ } from "@/data";
import { serviceIntros } from "@/data/serviceIntros";

export const metadata: Metadata = buildMetadata({
  title: "Event Entertainment & Interactive Experiences | MME Worldwide",
  description: "Event entertainment and interactive experiences. Specialty performers, aerialists, magicians, 360 photo booths, AI photo experiences, casino nights, carnival and arcade games, VR, and team building.",
  path: "/services/entertainment",
  keywords: [
      "event entertainment",
      "interactive experiences events",
      "360 photo booth rental",
      "AI photo booth",
      "casino night party rental",
      "carnival games rental",
      "specialty performers",
      "aerialists and acrobats",
      "corporate team building activities",
      "virtual reality event activation"
  ],
});

export default function EntertainmentServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServiceJsonLd
        name="Entertainment and Interactive Experiences"
        description={metadata.description as string}
        path="/services/entertainment"
        capabilities={serviceIntros["entertainment"].capabilities}
      />
      <FaqJsonLd faqs={EntertainmentFAQ} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Entertainment and Interactive Experiences", path: "/services/entertainment" },
        ]}
      />
      {children}
    </>
  );
}
