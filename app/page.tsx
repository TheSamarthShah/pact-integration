import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://pactintegration.com"),

  title: {
    default: "Pact Integration | AI-Powered B2B Operations & Enterprise Systems",
    template: "%s | Pact Integration",
  },

  description:
    "Pact Integration researches and develops AI-powered enterprise software, custom ERP systems, procurement automation, financial reconciliation, logistics platforms, manufacturing solutions, and business process automation for modern B2B organizations.",

  keywords: [
    "Pact Integration",
    "AI enterprise software",
    "Enterprise AI",
    "Custom ERP",
    "ERP development",
    "ERP modernization",
    "Business process automation",
    "Workflow automation",
    "B2B software",
    "Enterprise software development",
    "AI workflow automation",
    "Business automation",
    "Procurement automation",
    "Purchase order automation",
    "Purchase order reconciliation",
    "Contract reconciliation",
    "Financial reconciliation",
    "Invoice reconciliation",
    "Accounts payable automation",
    "Supply chain software",
    "Supply chain optimization",
    "Supply chain automation",
    "Industrial manufacturing software",
    "Manufacturing ERP",
    "Manufacturing operations",
    "Freight software",
    "Logistics software",
    "Transportation management",
    "POD reconciliation",
    "Inventory management",
    "Warehouse automation",
    "Business intelligence",
    "Operational intelligence",
    "Digital transformation",
    "Enterprise architecture",
    "System integration",
    "Business systems",
    "Custom software development",
    "Research driven software",
    "Operational software",
    "AI consulting",
    "Enterprise consulting",
    "Business operations platform",
    "Legacy ERP replacement",
    "Scalable enterprise applications",
    "Cloud enterprise software",
    "Business technology",
    "B2B operations",
    "Enterprise solutions",
    "AI solutions"
  ],

  authors: [
    {
      name: "Pact Integration",
      url: "https://pactintegration.com",
    },
  ],

  creator: "Pact Integration",

  publisher: "Pact Integration",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Pact Integration | AI-Powered B2B Operations & Enterprise Systems",
    description:
      "Custom enterprise software, AI-powered automation, ERP modernization, procurement systems, logistics platforms, and manufacturing solutions.",

    url: "https://pactintegration.com",

    siteName: "Pact Integration",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pact Integration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pact Integration | AI-Powered B2B Operations",
    description:
      "Research-driven enterprise software for procurement, logistics, manufacturing, ERP modernization, and AI automation.",
    images: ["/og-image.png"],
  },

  category: "Technology",
};

export default function Home() {
  // Your existing component code...
}
