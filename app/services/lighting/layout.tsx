import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lighting | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function LightingServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
