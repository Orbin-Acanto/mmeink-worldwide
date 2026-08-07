import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Props | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function PropsServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
