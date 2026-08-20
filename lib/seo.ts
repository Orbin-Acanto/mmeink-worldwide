import type { Metadata } from "next";

/**
 * Central SEO configuration.
 *
 * Titles, descriptions and keyword sets live here so that every page draws on
 * the same entity names and phrasing. Consistent naming across pages is what
 * lets search engines and AI assistants resolve "MME Worldwide" to a single
 * business rather than several loosely related ones.
 */

export const SITE_URL = "https://www.mmeink.com";

export const BRAND = {
  /** Legal / primary name. Used everywhere the business is named. */
  name: "MME Worldwide",
  /** Alternates people actually type into search. */
  alternateNames: ["MMEink", "MME Ink Worldwide", "MME Ink"],
  legalName: "MME Worldwide",
  tagline: "Full Service Event Production & Experiential Marketing Agency",
  phone: "+1-877-885-0705",
  email: "info@mmeink.com",
  street: "140 Florida St",
  city: "Farmingdale",
  region: "NY",
  postalCode: "11735",
  country: "US",
  founded: "1995",
  logo: `${SITE_URL}/shared/brand/logo.png`,
  social: [
    "https://www.instagram.com/mmeink",
    "https://www.facebook.com/mmeink",
  ],
  /** Markets served, phrased the way people search for them. */
  areasServed: [
    "New York City",
    "Long Island",
    "Miami",
    "New Jersey",
    "Connecticut",
    "United States",
    "Worldwide",
  ],
};

/** Terms that describe the business as a whole, used on the home page. */
export const CORE_KEYWORDS = [
  "event production company",
  "experiential marketing agency",
  "corporate event production",
  "event management company NYC",
  "brand activation agency",
  "custom event fabrication",
  "full service event production",
  "trade show exhibit builder",
  "event production Long Island",
  "event production Miami",
];

interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Path with leading slash, e.g. "/services/lighting". */
  path: string;
  keywords?: string[];
  image?: string;
}

/**
 * Builds a complete metadata object: canonical URL, OpenGraph and Twitter
 * cards included. Every page should go through this rather than hand-rolling
 * a partial metadata object.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/shared/brand/logo.png",
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    keywords: [...keywords, ...CORE_KEYWORDS].slice(0, 20),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      type: "website",
      locale: "en_US",
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}
