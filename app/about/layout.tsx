import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

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
  // The breadcrumb for /about itself lives on the page rather than here,
  // because this layout also wraps /about/sizzle-reel and /about/brochure,
  // which each publish their own breadcrumb trail.
  return <>{children}</>;
}
