
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers, Server, Workflow } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-k8s",
    title: "Global E-Commerce K8s Migration",
    description: "Architected a zero-downtime migration of a legacy monolithic stack to a distributed Kubernetes microservices architecture.",
    tags: ["Kubernetes", "EKS", "Istio", "Terraform"],
    impact: "40% reduction in cloud costs & 5x faster deployment cycles",
    techIcon: Server,
  },
  {
    id: "project-terraform",
    title: "IaC Multi-Cloud Hub",
    description: "Developed a standardized Terraform module library for AWS, Azure, and GCP, ensuring consistent security and compliance across regions.",
    tags: ["Terraform", "Terragrunt", "Sentinel", "Azure"],
    impact: "90% improvement in infrastructure provisioning speed",
    techIcon: Workflow,
  },
  {
    id: "project-argocd",
    title: "GitOps Continuous Delivery",
    description: "Implemented Argo CD and GitHub Actions for a 200+ microservice environment with automated canary releases.",
    tags: ["Argo CD", "GitOps", "GitHub Actions", "Helm"],
    impact: "Rollback time reduced from 15 minutes to 30 seconds",
    techIcon: Layers,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Engineering Solutions</h2>
          <p className="text-lg text-muted-foreground">
            A selection of architectural transformations where automation meets business efficiency. 
            Each project is built with reliability as the primary design principle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const img = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="group flex flex-col h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  {img && (
                    <Image 
                      src={img.imageUrl} 
                      alt={img.description} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <project.techIcon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-code text-[10px] uppercase tracking-wider font-bold">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-xs uppercase font-bold text-primary mb-1 tracking-widest">Business Impact</p>
                    <p className="text-sm font-medium text-foreground">{project.impact}</p>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-full font-bold">
                    <Github className="w-4 h-4" /> Code
                  </Button>
                  <Button size="sm" className="flex-1 gap-2 rounded-full font-bold">
                    <ExternalLink className="w-4 h-4" /> Architecture
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
