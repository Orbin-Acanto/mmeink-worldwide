import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Conferences & Meetings | MME Ink Worldwide",
  description: "One Stop Event Solution",
};

export default function ConferencesMeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
