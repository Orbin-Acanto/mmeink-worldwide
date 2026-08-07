import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Themes | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function ThemesServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
