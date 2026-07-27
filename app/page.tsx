import { Metadata } from "next"; // 1. Import Metadata types
import Link from "next/link";

// 2. Add your targeted SEO keywords and metadata here
export const metadata: Metadata = {
  title: "B2B Operations Re-Engineering | Pact Integration",
  description: "Custom, scalable architectural research mapping supply chain friction, ERP bottlenecks, and logistical realities for high-volume operators.",
  keywords: [
    "B2B operations",
    "supply chain mapping",
    "ERP bottleneck analysis",
    "Pact Integration",
    "industrial manufacturing logistics",
    "freight audit automation",
    "dual-ledger tracking jewelry"
  ],
};

export default function Home() {
  const sectors = [
    {
      title: "Industrial Manufacturing",
      desc: "Supply chain mapping, GRN reconciliation, and ERP bottleneck analysis.",
      href: "/manufacturing"
    },
    {
      title: "Freight & Logistics",
      desc: "Proof of delivery (POD) reconciliation and unstructured dispatch audits.",
      href: "/logistics"
    },
    {
      title: "Specialized Retail (Jewelry)",
      desc: "Dual-ledger tracking, fluctuating metal rates, and artisan (Karigar) workflows.",
      href: "/jewelry"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
      
      {/* Global Manifesto Section */}
      <section className="w-full bg-background py-24 md:py-32 border-b border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-block border border-border bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              2026 Architectural Research
            </div>
            
            {/* SEO Strategy: Google heavily weighs this exact H1 text for rankings */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight max-w-4xl">
              Re-engineering the reality of B2B operations.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We partner with high-volume operators to map the exact friction points legacy ERPs ignore. We build custom, scalable architectures based on the realities of the physical world.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Self-Selection Grid */}
      <section className="w-full bg-muted py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Active Research Verticals
            </h2>
            <h3 className="text-2xl font-bold text-foreground">
              Select your sector to view current initiatives.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Link 
                key={sector.href} 
                href={sector.href}
                className="group block bg-background border border-border p-8 hover:border-foreground transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:bg-foreground transition-colors">
                    <span className="text-foreground group-hover:text-background text-lg font-bold block pb-1">→</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {sector.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <footer className="border-t border-slate-200 py-12 px-8 lg:px-16 text-center text-sm text-slate-500">
        <div className="flex justify-center gap-8 mb-4">
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <span className="cursor-not-allowed">Privacy Policy</span>
          <span className="cursor-not-allowed">Terms of Service</span>
        </div>
        <p>© {new Date().getFullYear()} Pact Integration. All rights reserved.</p>
      </footer>

    </main>
  );
}
