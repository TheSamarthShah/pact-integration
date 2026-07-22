import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection({ content }: { content: any }) {
  return (
    <section id="research" className="w-full bg-muted py-24 border-b border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">01 / The Core Disconnect</h2>
            <h3 className="text-3xl font-bold text-foreground tracking-tight">{content.problem.title}</h3>
          </div>
          <div className="md:col-span-2 space-y-8">
            
            {/* 1. Dynamically render ALL paragraphs */}
            <div className="space-y-4">
              {content.problem.paragraphs.map((text: string, index: number) => (
                <p 
                  key={index} 
                  // The first paragraph is slightly larger and darker, the rest are standard text
                  className={`leading-relaxed ${index === 0 ? 'text-lg text-foreground' : 'text-base text-muted-foreground'}`}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* 2. Dynamically render ALL flaws into the grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.problem.flaws.map((flaw: any, index: number) => (
                <Card key={index} className="bg-background border-border rounded-none shadow-none">
                  <CardContent className="pt-6 space-y-2">
                    <div className="text-sm font-bold uppercase tracking-wide text-foreground">{flaw.title}</div>
                    <p className="text-sm text-muted-foreground">{flaw.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}