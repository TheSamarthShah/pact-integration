import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Pact Integration | The Standard in Structural Reconciliation',
  description: 'Autonomous AI systems bridging the gap between procurement contracts and financial execution.',
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