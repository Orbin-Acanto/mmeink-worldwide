import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function PrintingServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
