import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ApplicationSection({ content }: { content: any }) {
  return (
    <section className="w-full bg-muted py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ... keeping the left column text the same for brevity ... */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">03 / The Initiative</h2>
            <h3 className="text-3xl font-bold text-foreground tracking-tight">Apply for the 2026 Advisory Panel.</h3>
            <p className="text-lg text-foreground leading-relaxed">
              We are actively selecting 5 operators from high-volume firms to guide our architectural phase. 
            </p>
            {/* List omitted here to save space, keep your existing list! */}
          </div>

          <div className="bg-background border border-border p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="rounded-none border-border bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Job Title</label>
                  <Input placeholder={content.application.targetRole} className="rounded-none border-border bg-background" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Company Name</label>
                  <Input placeholder="Acme Corp" className="rounded-none border-border bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Current Software</label>
                  <Input placeholder={content.application.softwarePlaceholder} className="rounded-none border-border bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">What is your most manual process?</label>
                <Textarea placeholder={content.application.painpointPlaceholder} className="rounded-none border-border bg-background min-h-[100px] resize-none" />
              </div>
              <Button type="button" className="w-full rounded-none px-8 py-6 text-lg font-medium">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}