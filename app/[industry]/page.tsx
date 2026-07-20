import { notFound } from "next/navigation";
import { industryContent, IndustryKey } from "@/config/content";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ApplicationSection } from "@/components/sections/application";

// 1. Make the component 'async' and update the type signature to expect a Promise
export default async function IndustryLandingPage({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}) {
  
  // 2. Await the parameters to unwrap the Promise
  const resolvedParams = await params;
  const currentIndustry = resolvedParams.industry as IndustryKey;
  
  // 3. Look it up in our dictionary
  const content = industryContent[currentIndustry];
  
  if (!content) {
    notFound();
  }

  // 4. Render the page
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
      <HeroSection content={content} />
      <ProblemSection content={content} />
      <SolutionSection content={content} />
      <ApplicationSection content={content} />
    </main>
  );
}