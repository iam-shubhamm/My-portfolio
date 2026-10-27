import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Singh | Data, AI & Full-Stack Developer",
  description:
    "Explore Shubham Singh's projects across data analytics, AI and machine learning, and full-stack development.",
  openGraph: {
    title: "Shubham Singh | Data, AI & Full-Stack Developer",
    description:
      "Data analytics, AI/ML projects, and full-stack development by Shubham Singh.",
    siteName: "Shubham Singh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
