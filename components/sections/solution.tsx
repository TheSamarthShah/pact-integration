export function SolutionSection({ content }: { content: any }) {
  return (
    <section className="w-full bg-background py-24 border-b border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">02 / Targeted Audit Areas</h2>
            <h3 className="text-3xl font-bold text-foreground tracking-tight">{content.audit.title}</h3>
            <p className="text-lg text-muted-foreground max-w-2xl">{content.audit.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Dynamically render ALL audit areas */}
            {content.audit.areas.map((area: any, index: number) => (
              <div key={index} className="border-t border-border pt-6 space-y-4">
                <div className="text-xs font-mono font-bold text-muted-foreground">
                  {/* This automatically generates 01, 02, 03, 04... */}
                  FOCUS // {(index + 1).toString().padStart(2, '0')}
                </div>
                <h4 className="text-xl font-bold text-foreground">{area.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}