
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const devopsTools = [
  {
    name: "Plan",
    icon: "https://images.unsplash.com/photo-1583337130587-24a2b9c6a7e4?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Code",
    icon: "https://images.unsplash.com/photo-1517694712202-1428bc6902b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Build",
    icon: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Test",
    icon: "https://images.unsplash.com/photo-1590402494682-3d84b2a8a81d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Release",
    icon: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Deploy",
    icon: "https://images.unsplash.com/photo-1542621334-a254cf47763b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Operate",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Monitor",
    icon: "https://images.unsplash.com/photo-1551288049-bebda4e28f81?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "CI/CD",
    icon: "https://images.unsplash.com/photo-1579546929518-9e396f3a803a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Hero() {
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
              SOFTWARE ENGINEER
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Panupong Chamsomboon
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Software Engineer with 5 years of experience specializing in Full-stack Development and Cloud Infrastructure. I bridge the gap between UI/UX design and scalable cloud management, leveraging modern technologies to optimize operational efficiency and drive sustainable business growth.
            </p>
            <pre className="font-code bg-muted/10 p-4 rounded-lg border border-border/10 text-sm">
              <code>
              {`                              while(!dead) {
                                code();
                              }
              `}
              </code>
            </pre>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full gap-2 px-8">
              Resume <Download className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8">
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {devopsTools.map((tool) => (
            <div key={tool.name} className="relative aspect-square rounded-lg overflow-hidden border border-border/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image src={tool.icon} alt={tool.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-lg">{tool.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
