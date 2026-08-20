import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { events, services } from "@/data";

/**
 * Generated from the same arrays that render the navigation, so a new service
 * or event type appears in the sitemap automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: `${SITE_URL}/`, priority: 1, changeFrequency: "weekly" },
      { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" },
      { url: `${SITE_URL}/events`, priority: 0.9, changeFrequency: "monthly" },
      { url: `${SITE_URL}/work`, priority: 0.8, changeFrequency: "monthly" },
      { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: "yearly" },
      { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: "yearly" },
    ] satisfies MetadataRoute.Sitemap
  ).map((route) => ({ ...route, lastModified }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}${service.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}${event.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...eventRoutes];
}
