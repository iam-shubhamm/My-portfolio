import "./globals.css";

export const metadata = {
  title: "Shubham Singh | Data Analyst Portfolio",
  description: "3D Animated Data Analyst Portfolio",
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
