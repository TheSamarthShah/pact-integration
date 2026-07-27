import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ProgressSection } from "@/components/sections/progress";
import { ApplicationSection } from "@/components/sections/application";


export default async function IndustryLandingPage({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}) {
  
  const resolvedParams = await params;
  const currentIndustry = resolvedParams.industry;
  
  // Fetch specific industry data from Supabase
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('page_id', `industry_${currentIndustry}`)
    .single();
  
  if (error || !data) {
    notFound();
  }

  const content = data.content;

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
      <HeroSection content={content} />
      <ProblemSection content={content} />
      <SolutionSection content={content} />
      <ProgressSection content={content} />
      <ApplicationSection content={content} />
    </main>
  );
}