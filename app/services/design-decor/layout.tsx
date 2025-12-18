import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Decor | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function DesignDecorServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
