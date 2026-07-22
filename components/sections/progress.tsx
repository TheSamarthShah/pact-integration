export function ProgressSection({ content }: { content: any }) {
  if (!content.progress) return null;

  return (
    <section className="w-full bg-foreground text-background py-24 border-b border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
              02.5 / Active Research Log
            </h2>
            <h3 className="text-3xl font-bold tracking-tight">
              {content.progress.title}
            </h3>
            <p className="text-sm text-background/70 leading-relaxed pr-4">
              {content.progress.desc}
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-background/20 before:to-transparent">
            {content.progress.insights.map((insight: any, index: number) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background/20 bg-foreground text-background/50 group-[.is-active]:text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border border-background/20 p-6 rounded-none bg-foreground shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-background/50 border border-background/20 px-2 py-1">
                      Source // {insight.sourceTag}
                    </span>
                    <time className="font-mono text-xs text-background/40">{insight.date}</time>
                  </div>
                  <div className="font-bold text-background text-lg">{insight.title}</div>
                  <div className="text-sm text-background/70 leading-relaxed mt-2">
                    {insight.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}