
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const workHistory = [
  {
    company: "CloudScale Systems",
    role: "Senior Cloud Architect",
    period: "2021 - Present",
    description: "Leading a team of 10 DevOps engineers in maintaining high-availability multi-cloud infrastructure for Fortune 500 clients.",
    achievements: [
      "Reduced AWS spend by $1.2M annually through automated rightsizing.",
      "Architected a global K8s control plane supporting 15,000+ nodes.",
      "Implemented zero-trust security architecture for all production environments."
    ],
    skills: ["Architecture", "Leadership", "FinOps", "AWS"]
  },
  {
    company: "DevOps Dynamics",
    role: "Lead DevOps Engineer",
    period: "2018 - 2021",
    description: "Spearheaded the transition from monolithic applications to microservices for high-growth FinTech startups.",
    achievements: [
      "Built a CI/CD platform that handled 200+ deployments daily.",
      "Standardized IaC using Terraform for 3 independent startups.",
      "Improved system reliability from 99.5% to 99.99% uptime."
    ],
    skills: ["CI/CD", "Terraform", "FinTech", "SRE"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 sticky top-32 space-y-6">
            <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30">
              CAREER LOG
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">Professional <span className="text-primary">Lifecycle</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A timeline of engineering leadership and operational excellence. 
              Focused on delivering measurable business value through technical innovation.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-accent/10 p-3 rounded-xl border border-accent/20">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Clouds Deployed</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-8">
            {workHistory.map((job, index) => (
              <Card key={index} className="border-none bg-background shadow-none relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
                <div className="absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-primary" />
                <CardContent className="pt-6 pb-2">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{job.company}</h3>
                      <p className="text-lg text-primary font-medium">{job.role}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">{job.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 items-start group">
                        <ChevronRight className="w-5 h-5 text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-foreground/90">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-xs font-code px-2 py-1 rounded bg-muted/50 text-muted-foreground uppercase tracking-wider font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
