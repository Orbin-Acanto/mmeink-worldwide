import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Events | Events | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function EventCorporateEventsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
