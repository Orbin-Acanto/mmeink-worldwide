import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
