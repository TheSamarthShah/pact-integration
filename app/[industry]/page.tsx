import { notFound } from "next/navigation";
import { industryContent, IndustryKey } from "@/config/content";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { ProgressSection } from "@/components/sections/progress";
import { ApplicationSection } from "@/components/sections/application";

export function generateStaticParams() {
  return [
    { industry: 'manufacturing' },
    { industry: 'jewelry' },
    { industry: 'logistics' },
  ];
}

export default async function IndustryLandingPage({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}) {
  
  const resolvedParams = await params;
  const currentIndustry = resolvedParams.industry as IndustryKey;
  
  const content = industryContent[currentIndustry];
  
  if (!content) {
    notFound();
  }

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