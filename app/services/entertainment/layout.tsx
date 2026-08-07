import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entertainment | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function EntertainmentServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
