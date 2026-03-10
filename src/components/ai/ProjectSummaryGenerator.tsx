
"use client";

import React from "react";
import { generateProjectSummary, type GenerateProjectSummaryOutput } from "@/ai/flows/generate-project-summary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, Copy, Check, RotateCcw } from "lucide-react";

export function ProjectSummaryGenerator() {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<GenerateProjectSummaryOutput | null>(null);
  const [copied, setCopied] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const input = {
      projectName: formData.get("projectName") as string,
      technicalDetails: formData.get("technicalDetails") as string,
      challenge: formData.get("challenge") as string,
      solutionsImplemented: formData.get("solutions") as string,
      measurableImpact: formData.get("impact") as string,
    };

    try {
      const output = await generateProjectSummary(input);
      setResult(output);
    } catch (error) {
      console.error("Failed to generate summary:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.businessSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <Card className="border-border bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Engineering Lab
          </CardTitle>
          <CardDescription>
            Input technical specs to generate business-oriented value propositions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" name="projectName" required placeholder="e.g. Global K8s Migration" className="bg-background/50" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="technicalDetails">Technical Stack & Context</Label>
              <Textarea 
                id="technicalDetails" 
                name="technicalDetails" 
                required 
                placeholder="List technologies (Terraform, Argo CD), architectural patterns, and environments used."
                className="bg-background/50"
                rows={4}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="challenge">Core Challenge (Optional)</Label>
                <Input id="challenge" name="challenge" placeholder="Scaling bottlenecks..." className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="impact">Measurable Impact (Optional)</Label>
                <Input id="impact" name="impact" placeholder="30% cost reduction..." className="bg-background/50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="solutions">Solutions Implemented (Optional)</Label>
              <Textarea 
                id="solutions" 
                name="solutions" 
                placeholder="Automated canary deployments via Argo CD..."
                className="bg-background/50"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full gap-2 rounded-xl h-12">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {loading ? "Analyzing Architecture..." : "Generate Business Case"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {result ? (
          <Card className="border-accent/30 bg-accent/5 animate-in fade-in slide-in-from-right-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-xl">Business Summary</CardTitle>
                <CardDescription>Generated for non-technical stakeholders</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={copyToClipboard} className="text-accent hover:bg-accent/10">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90 italic">
                "{result.businessSummary}"
              </p>
              
              <div className="space-y-2">
                <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Strategic Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {result.keywords.map((kw, i) => (
                    <Badge key={i} variant="secondary" className="bg-background border-border text-xs">
                      {kw}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" onClick={() => setResult(null)} className="w-full gap-2 text-muted-foreground">
                <RotateCcw className="w-4 h-4" /> Reset Lab
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="h-full border border-dashed border-border rounded-xl flex flex-col items-center justify-center p-12 text-center space-y-4">
            <div className="p-4 bg-muted/50 rounded-full">
              <Sparkles className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-lg text-muted-foreground">No data synthesized yet</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Fill out the technical specifications form to generate a professional business narrative for your portfolio.
              </p>
            </div>
          </div>
        )}

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-widest font-bold text-primary">Why use this tool?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>• Translates raw CLI outputs and YAML configs into ROI-focused language.</p>
            <p>• Highlights reliability and scalability over syntax and scripting.</p>
            <p>• Perfect for updating LinkedIn descriptions and resume bullet points.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
