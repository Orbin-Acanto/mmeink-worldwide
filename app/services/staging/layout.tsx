import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staging | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function StagingServicePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
