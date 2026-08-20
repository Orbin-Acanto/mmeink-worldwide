"use client";

import { usePathname } from "next/navigation";
import { BreadcrumbJsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/seo";

interface IndexItem {
  name: string;
  href: string;
}

interface ServicesIndexJsonLdProps {
  /** "/services" or "/events". */
  basePath: string;
  /** Label used in the breadcrumb trail. */
  label: string;
  /** Name given to the ItemList. */
  listName: string;
  items: IndexItem[];
}

/**
 * Index-page schema for the services and events sections.
 *
 * These layouts also wrap every detail page beneath them, and a detail page
 * emits its own breadcrumb and Service schema. Rendering the index schema there
 * too would give the page two competing BreadcrumbLists, so this component
 * checks the path and renders only on the index itself.
 */
export default function ServicesIndexJsonLd({
  basePath,
  label,
  listName,
  items,
}: ServicesIndexJsonLdProps) {
  const pathname = usePathname();

  const normalised = pathname?.replace(/\/$/, "") || "";
  if (normalised !== basePath) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: listName,
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              url: `${SITE_URL}${item.href}`,
            })),
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: label, path: basePath },
        ]}
      />
    </>
  );
}
