import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Award Dinners | Events | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function EventAwardDinnersPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
