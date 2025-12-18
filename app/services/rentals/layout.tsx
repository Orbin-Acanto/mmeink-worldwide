import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rentals | Our Service | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function RentalsServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
