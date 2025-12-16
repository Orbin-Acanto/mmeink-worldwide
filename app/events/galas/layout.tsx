import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Galas | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function GalasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
