import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Virtual & Hybrid Events | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function VirtualHybridEventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
