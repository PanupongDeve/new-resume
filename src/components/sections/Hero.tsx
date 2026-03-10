
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Shield, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-1 text-accent border-accent/30 bg-accent/5 font-code">
              SYSTEMS ARCHITECT & DEVOPS LEAD
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Scaling <span className="text-primary italic">Business</span> with 
              <span className="text-accent"> Resilient</span> Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Specializing in Kubernetes orchestration, Cloud Native ecosystems, and 
              Automated GitOps workflows. I don't just run commands; I build the backbone 
              of modern digital enterprises.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full gap-2 px-8">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8">
              Contact Me
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="space-y-2">
              <Cloud className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Multi-Cloud</h3>
              <p className="text-sm text-muted-foreground">AWS / GCP / Azure Expertise</p>
            </div>
            <div className="space-y-2">
              <Shield className="w-5 h-5 text-accent" />
              <h3 className="font-bold text-lg">Reliability</h3>
              <p className="text-sm text-muted-foreground">99.99% Uptime SLA focus</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">GitOps</h3>
              <p className="text-sm text-muted-foreground">Fast & Secure Deployments</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
            {heroImg && (
              <Image 
                src={heroImg.imageUrl} 
                alt={heroImg.description}
                fill
                className="object-cover"
                data-ai-hint={heroImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-8">
              <div className="bg-background/40 backdrop-blur-md p-6 rounded-xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-code text-accent">INFRA_VIEWER.SH</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                </div>
                <div className="font-code text-sm text-primary-foreground/90 space-y-1">
                  <p>$ terraform plan</p>
                  <p className="text-green-400">Plan: 42 to add, 0 to change, 0 to destroy.</p>
                  <p>$ kubectl get pods -A</p>
                  <p className="text-blue-300">nexus-gateway-7f45: Running [1/1]</p>
                  <p className="text-blue-300">nexus-api-worker-91b2: Running [1/1]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
