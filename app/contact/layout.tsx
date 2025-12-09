import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
