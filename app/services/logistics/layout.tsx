import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function LogisticsServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
