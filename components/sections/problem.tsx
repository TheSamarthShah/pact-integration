import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection({ content }: { content: any }) {
  return (
    <section className="w-full bg-muted py-24 border-b border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">01 / The Core Disconnect</h2>
            <h3 className="text-3xl font-bold text-foreground tracking-tight">{content.problem.title}</h3>
          </div>
          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-foreground leading-relaxed">{content.problem.p1}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{content.problem.p2}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-background border-border rounded-none shadow-none">
                <CardContent className="pt-6 space-y-2">
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">{content.problem.flaw1.title}</div>
                  <p className="text-sm text-muted-foreground">{content.problem.flaw1.desc}</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border rounded-none shadow-none">
                <CardContent className="pt-6 space-y-2">
                  <div className="text-sm font-bold uppercase tracking-wide text-foreground">{content.problem.flaw2.title}</div>
                  <p className="text-sm text-muted-foreground">{content.problem.flaw2.desc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}