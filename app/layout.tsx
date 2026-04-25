import "./globals.css";

export const metadata = {
  title: "Shubham Singh | Data Analyst Portfolio",
  description: "Data Analyst Portfolio of Shubham Singh",
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
