import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pact Integration | The Standard in Structural Reconciliation",
  description: "Autonomous AI systems bridging the gap between procurement contracts and financial execution.",
  icons: {
    // Array of standard icons for diverse layout scaling
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Fallback for standard browser engine queries
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // Standard tab display sizing
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // High-resolution shortcut asset
    ],
    // Optional: Apple touch icon for iPhones
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* The Header now automatically sits above every dynamic page */}
        <Header />
        {children}
      </body>
    </html>
  );
}
