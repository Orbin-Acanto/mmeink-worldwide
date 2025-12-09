import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
