import "./globals.css";

export const metadata = {
  title: "LinFei",
  description: "Perpetual DEX on Hyperliquid",
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
