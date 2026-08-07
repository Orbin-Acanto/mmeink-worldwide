import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Musical Entertainment | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function MusicalEntertainmentServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
