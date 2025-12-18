import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Fabrication | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function CustomFabricationServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
