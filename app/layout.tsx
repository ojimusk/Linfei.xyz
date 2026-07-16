import "./globals.css";

export const metadata = {
  title: "LinFei",
  description: "Perpetual DEX built on Hyperliquid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
