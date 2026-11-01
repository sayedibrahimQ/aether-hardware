import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AETHER // LABS - Hardware Checkout",
  description: "Aether Labs Precision Hardware Checkout Storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07080A] text-[#EDEDED] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

