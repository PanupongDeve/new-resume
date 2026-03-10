
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

import { githubRepo } from "@/lib/constants";

const projects = [
  {
    id: "gitops-with-compose-deployer",
    year: "2022",
    title: "gitops-with-compose-deployer",
    description: "Repository for deploy application and manage version application with git branch.",
    tags: ["GitOps", "Docker Compose", "Shell", "CI/CD"],
    githubUrl: githubRepo("gitops-with-compose-deployer"),
    liveUrl: null,
  },
  {
    id: "gitops-with-compose-builder",
    year: "2022",
    title: "gitops-with-compose-builder",
    description: "Template bash script for push docker and generate docker-compose file for deploy application with gitops process.",
    tags: ["Bash", "Docker", "GitOps", "Shell"],
    githubUrl: githubRepo("gitops-with-compose-builder"),
    liveUrl: null,
  },
  {
    id: "pw-web-solution",
    year: "2022",
    title: "PW Web Solution",
    description: "Next.js building landing page.",
    tags: ["Next.js", "React", "Landing Page"],
    githubUrl: githubRepo("pw-web-solution"),
    liveUrl: null,
  },
  {
    id: "k8s-pod-research",
    year: "2021",
    title: "k8s-pod-research",
    description: "Learning and understanding that how k8s work and how to setup in production.",
    tags: ["Kubernetes", "DevOps", "Research"],
    githubUrl: githubRepo("k8s-pod-research"),
    liveUrl: null,
  },
  {
    id: "application-platform",
    year: "2021",
    title: "application-platform",
    description: "Project for my learning Devops, infrastructure, Micro-Service.",
    tags: ["DevOps", "Infrastructure", "Microservices"],
    githubUrl: githubRepo("application-platform"),
    liveUrl: null,
  },
  {
    id: "condo-thai-scrapper",
    year: "2021",
    title: "condo-thai-scrapper",
    description: "Read Data for condominium and using facebook sdk to auto post.",
    tags: ["Web Scraping", "Facebook API", "Node.js"],
    githubUrl: githubRepo("condo-thai-scrapper"),
    liveUrl: null,
  },
  {
    id: "linux-monitor-utility",
    year: "2021",
    title: "linux-monitor-utility",
    description: "Utility shell script help people monitor resource in linux server.",
    tags: ["Shell", "Linux", "Monitoring"],
    githubUrl: githubRepo("linux-monitor-utility"),
    liveUrl: null,
  },
  {
    id: "linux-swap-memory-service",
    year: "2020",
    title: "linux-swap-memory-service",
    description: "Startup script swap linux memory.",
    tags: ["Linux", "Shell", "System"],
    githubUrl: githubRepo("linux-swap-memory-service"),
    liveUrl: null,
  },
  {
    id: "line-shop-store",
    year: "2019",
    title: "line-shop-store",
    description: "Clone react-demo-store and add feature firebase and Line LIFF.",
    tags: ["React", "Firebase", "LINE LIFF"],
    githubUrl: githubRepo("line-shop-store"),
    liveUrl: null,
  },
  {
    id: "react-kdr",
    year: "2019",
    title: "react-kdr",
    description: "Use React and Firebase library to build E-commerce client.",
    tags: ["React", "Firebase", "E-commerce"],
    githubUrl: githubRepo("react-kdr"),
    liveUrl: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30">
            PROJECTS
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group flex flex-col h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{project.year}</p>
                <CardTitle className="text-base group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex gap-4 bg-card/50 pb-4">
                <Button asChild variant="outline" size="sm" className="flex-1 gap-2 rounded-full font-bold">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
