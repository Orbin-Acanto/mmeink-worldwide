import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Product Launches | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function ProductLaunchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
