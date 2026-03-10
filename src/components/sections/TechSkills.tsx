
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = {
  Languages: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  "Frameworks / Libraries": ["React", "Next.js", "Tailwind CSS", "Prisma", "Express", "Genkit", "Firebase"],
  "Tools / Others": ["Git", "Docker", "Google Cloud Platform"],
};

export function TechSkills() {
  return (
    <section id="tech-skills" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30">
            SKILLS
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mt-4">My Technical Skills</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto">
            Here are some of the technologies I'm proficient in, ranging from programming languages to modern web development tools and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="bg-background/70 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary text-2xl font-bold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <Badge key={item} variant="secondary" className="text-sm font-medium">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
