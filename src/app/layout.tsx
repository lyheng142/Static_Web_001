import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "KhmerTaste | Taste of Cambodia",
  description:
    "Discover authentic Cambodian food, traditional Khmer dishes, ingredients and flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}