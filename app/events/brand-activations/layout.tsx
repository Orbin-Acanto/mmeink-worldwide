import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Brand Activations | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function BrandActivationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
