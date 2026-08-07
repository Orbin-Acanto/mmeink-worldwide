import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Themed Events | Events | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function EventThemedEventsPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
