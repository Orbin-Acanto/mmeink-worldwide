import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothAnchors from "@/components/SmoothAnchors";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { BRAND, SITE_URL, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${BRAND.name} | Event Production & Experiential Marketing Agency`,
    description:
      "MME Worldwide is a full service event production and experiential marketing agency. Custom fabrication, printing, audio visual, lighting, staging, design and décor, rentals, entertainment, and logistics under one production partner.",
    path: "/",
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} | Event Production & Experiential Marketing Agency`,
    template: `%s`,
  },
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationJsonLd />
        <SmoothAnchors />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
