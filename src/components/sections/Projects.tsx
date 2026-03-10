
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "line-bot-manager",
    title: "Line Bot Application",
    description: "A web application for managing LINE bots, including features like rich menu creation and management. Built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "LINE API"],
    imageUrl: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/PanupongDev/line-bot-manager",
    liveUrl: null,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase my projects and skills, built with modern web technologies.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit"],
    imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c20?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/PanupongDev/panupong-dev",
    liveUrl: "https://panupong-dev.vercel.app/",
  },
  {
    id: "discord-bot",
    title: "Discord Bot",
    description: "A multi-purpose Discord bot featuring music playback, server moderation, and fun mini-games.",
    tags: ["Discord.js", "Node.js", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/PanupongDev/Panu-Bot",
    liveUrl: null,
  },
  {
    id: "food-ordering",
    title: "Food Ordering Website",
    description: "A full-stack web application for browsing restaurants and ordering food, built with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/PanupongDev/food-ordering-app",
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
          <h2 className="text-4xl font-bold tracking-tight">My Recent Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are a few projects I've worked on recently. They showcase my skills in web development and my ability to work with various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group flex flex-col h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
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
                {project.liveUrl && (
                  <Button asChild size="sm" className="flex-1 gap-2 rounded-full font-bold">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
