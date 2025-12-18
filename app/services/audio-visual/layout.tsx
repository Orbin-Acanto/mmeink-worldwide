import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audio Visual | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function AudioVisualServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
