import "./globals.css";
import type { Metadata } from "next";
import { Kantumruy_Pro } from "next/font/google";

// Setup Font Kantumruy Pro
const kantumruy = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food App",
  description: "Welcome to Cambodia Foods",
};

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km" suppressHydrationWarning>
      <body className={kantumruy.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}