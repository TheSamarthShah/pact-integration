"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";

export function ApplicationSection({ content }: { content: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    role: content.application.targetRole,
    company_name: "",
    contact_info: "",
    software_stack: "",
    pain_point: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('research_leads')
        .insert([
          {
            industry: content.hero.label, // Tags it as Manufacturing, Logistics, or Jewelry
            name: formData.name,
            role: formData.role,
            company_name: formData.company_name,
            contact_info: formData.contact_info,
            software_stack: formData.software_stack,
            pain_point: formData.pain_point
          }
        ]);

      if (error) throw error;
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="application" className="w-full bg-muted py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="bg-background border border-border p-8 md:p-12 shadow-sm text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Submission Received.</h3>
            <p className="text-muted-foreground">
              Thank you. If your operational profile matches our 2026 research parameters, our architecture team will reach out directly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="w-full bg-muted py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="bg-background border border-border p-8 md:p-12 shadow-sm">
          
          <div className="space-y-4 mb-8 border-b border-border pb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              03 / Research Participation
            </h2>
            <h3 className="text-2xl font-bold text-foreground">
              Submit your operational bottleneck.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are selecting 5 businesses in this sector for our 2026 architectural audit. If your workflow challenges align with our research, we will reach out to schedule a 15-minute site visit.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
                <Input 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Rajesh Patel" 
                  className="rounded-none border-border bg-muted/50 focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</label>
                <Input 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="rounded-none border-border bg-muted/50 focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
                <Input 
                  value={formData.company_name}
                  onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                  placeholder="Company Name" 
                  className="rounded-none border-border bg-muted/50 focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground">Direct Email or Mobile *</label>
                <Input 
                  required
                  value={formData.contact_info}
                  onChange={(e) => setFormData({...formData, contact_info: e.target.value})}
                  placeholder="How should we contact you?" 
                  className="rounded-none border-border bg-background focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Current Software Stack</label>
              <Input 
                value={formData.software_stack}
                onChange={(e) => setFormData({...formData, software_stack: e.target.value})}
                placeholder={content.application.softwarePlaceholder} 
                className="rounded-none border-border bg-muted/50 focus-visible:ring-1 focus-visible:ring-foreground"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Operational Bottleneck</label>
              <Textarea 
                value={formData.pain_point}
                onChange={(e) => setFormData({...formData, pain_point: e.target.value})}
                placeholder={content.application.painpointPlaceholder}
                className="min-h-[120px] rounded-none border-border bg-muted/50 focus-visible:ring-1 focus-visible:ring-foreground resize-y"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 h-12 font-bold tracking-wide uppercase text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit For Review"}
            </Button>
            
          </form>

        </div>
      </div>
    </section>
  );
}