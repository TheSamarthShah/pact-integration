import Link from "next/link";
import Image from "next/image"; // Import the optimized Image component

export function Header() {
  const companyName = "Pact Integration";

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl h-16 flex items-center justify-between">
        
        {/* The Enterprise Logo with Actual Symbol */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Replace src with your actual file name (e.g., .svg or .png) */}
          <div className="relative w-6 h-6 grayscale group-hover:opacity-80 transition-opacity">
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
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pactintegration@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:underline underline-offset-4"
          >
            Contact
          </a>
        </div>

      </div>
    </header>
  );
}