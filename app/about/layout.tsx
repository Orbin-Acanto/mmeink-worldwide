import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
