import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
