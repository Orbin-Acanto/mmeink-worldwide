import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasonal Events | Events | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function EventSeasonalEventsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
