import { BRAND, SITE_URL } from "@/lib/seo";
import { clientLogos } from "@/data";

/**
 * Structured data helpers.
 *
 * These render script tags on the server, so the markup is present in the
 * initial HTML where crawlers and AI assistants can read it without running
 * JavaScript. Every schema points at the same @id for the organisation, which
 * ties the pages together into one business entity.
 */

const ORG_ID = `${SITE_URL}/#organization`;

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Sitewide organisation and location data. Rendered once, in the root layout. */
export function OrganizationJsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: BRAND.street,
    addressLocality: BRAND.city,
    addressRegion: BRAND.region,
    postalCode: BRAND.postalCode,
    addressCountry: BRAND.country,
  };

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Organization", "LocalBusiness"],
            "@id": ORG_ID,
            name: BRAND.name,
            alternateName: BRAND.alternateNames,
            legalName: BRAND.legalName,
            description:
              "MME Worldwide is a full service event production and experiential marketing agency providing custom fabrication, large format printing, audio visual, lighting, staging, design and décor, props, event rentals, entertainment, and logistics for brands and agencies.",
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: BRAND.logo },
            image: BRAND.logo,
            telephone: BRAND.phone,
            email: BRAND.email,
            foundingDate: BRAND.founded,
            address,
            sameAs: BRAND.social,
            areaServed: BRAND.areasServed.map((name) => ({
              "@type": "Place",
              name,
            })),
            slogan: BRAND.tagline,
            // Named clients. This is what an assistant reads when asked who
            // MME Worldwide has worked with.
            client: clientLogos.map((logo) => ({
              "@type": "Organization",
              name: logo.name,
            })),
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: BRAND.name,
            publisher: { "@id": ORG_ID },
            inLanguage: "en-US",
          },
        ],
      }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  path: string;
  /** Individual capabilities, listed as an offer catalogue. */
  capabilities: string[];
}

/** Per-service schema. Gives AI assistants an explicit list of what we do. */
export function ServiceJsonLd({
  name,
  description,
  path,
  capabilities,
}: ServiceJsonLdProps) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name,
        serviceType: name,
        description,
        url: `${SITE_URL}${path}`,
        provider: { "@id": ORG_ID },
        areaServed: BRAND.areasServed.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${name} Capabilities`,
          itemListElement: capabilities.map((capability) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: capability },
          })),
        },
      }}
    />
  );
}

/**
 * FAQ schema. Pages carrying FAQPage markup are substantially more likely to
 * be surfaced in AI overviews, and the answers here match the visible copy.
 */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
  );
}

/** Breadcrumb trail. Helps search engines understand the site hierarchy. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}
