import { Button } from "@/components/ui/button";

export function HeroSection({ content }: { content: any }) {
  return (
    <section className="w-full bg-background py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col items-start space-y-6">
          <div className="inline-block border border-border bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {content.hero.label}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight max-w-4xl">
            {content.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {content.hero.subhead}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            {/* Primary CTA jumps to the form */}
            <a href="#application">
              <Button className="rounded-none px-8 py-6 text-lg font-medium transition-colors">
                Apply for the Advisory Panel
              </Button>
            </a>
            
            {/* Secondary CTA jumps to the problem statement */}
            <a href="#research">
              <Button variant="outline" className="rounded-none px-8 py-6 text-lg font-medium transition-colors bg-background">
                Read the Research Brief
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}