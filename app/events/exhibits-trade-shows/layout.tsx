import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Exhibits & Trade Shows | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function ExhibitsTradeShowsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
