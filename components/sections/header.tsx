import Link from "next/link";
import Image from "next/image"; // Import the optimized Image component

export function Header() {
  const companyName = "Pact Integration";

  return (
   <header className="w-full bg-background border-b border-border sticky top-0 z-50">
  <div className="container mx-auto px-6 md:px-12 max-w-5xl h-16 flex items-center justify-between">
    
    {/* The Enterprise Logo with Actual Symbol */}
    <Link href="/" className="flex items-center gap-3 group">
      {/* Changed w-6 h-6 to w-9 h-9 (36px). Adjust these values as needed. */}
      <div className="relative w-12 h-12 grayscale group-hover:opacity-80 transition-opacity">
        <Image 
          src="/logo_symbol.png" 
          alt="Pact Integration Symbol" 
          fill
          className="object-contain"
        />
      </div>
      <span className="font-bold uppercase tracking-widest text-foreground text-sm mt-[2px]">
        {companyName}
      </span>
    </Link>

        {/* Professional Navigation / Status */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <span className="hidden sm:inline-block border-r border-border pr-6">
            Research Initiative : Phase 1
          </span>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About the Firm
          </Link>
          <a href="mailto:pactintegration@gmail.com" className="text-foreground hover:underline underline-offset-4">
            Contact
          </a>
        </div>

      </div>
    </header>
  );
}
