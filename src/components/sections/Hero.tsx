
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";

import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/constants";



export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col justify-center items-center text-center">
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4 flex flex-col items-center">
            <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 bg-accent/5 font-code">
              DevOps Engineer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Panupong Chamsomboon
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto">
              Cloud Native & DevOps Engineer dedicated to optimizing software delivery. I leverage my expertise in Kubernetes, Docker, and Terraform across multi-cloud environments to build secure and highly available architectures. With a unique background in full-stack development, I focus on improving developer experience and driving cost-efficient operational growth.
            </p>
            <pre className="font-code bg-muted/10 p-4 rounded-lg border border-border/10 text-sm text-left w-fit mx-auto mt-6">
              <code>
{`while(!dead) {
  code();
}`}
              </code>
            </pre>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full gap-2 px-8" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                Resume <Download className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8" asChild>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
