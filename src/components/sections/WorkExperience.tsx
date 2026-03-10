
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const workHistory = [
  {
    company: "Primo World Co., Ltd",
    role: "DevOps Engineer",
    period: "Jan 2020 - May 2022",
    tasks: [
      "Setup CI/CD with Azure Pipeline allow Automate Build and Deployment for DEV, UAT and Production Environment for Primo Platform",
      "Setup Security Pipeline for Vulnerability Scan Node Package Manger, OS, and API Response Headers with npm audit, open-scap, arachni-scanner",
      "Use nodejs and aws-sdk Implement cronjob service auto launch migration instance and shutdown when migration success for cost optimize",
      "Design Solution and implement AWS infrastructure and API Service(WAF53, ALB LoadBalancing, VPC, EC2, Auto Scaling) for High availability, Security and Reliability With Terraform",
      "Design Solution and implement GKE and API Service(Google Kubernetes Engine) for High availability, Security and Reliability",
      "Design Hosting Single Page Application with S3 and Cloudfront",
      "Design Solution AWS Architecture for cost optimize in Dev Environment",
    ],
    technologies: ["AWS", "Azure Pipeline", "Linux Command", "Docker", "Kubernetes(GKE)", "Nodejs", "Python"],
  },
  {
    company: "Sedna System",
    role: "Web Developer",
    period: "Jul 2019 - Dec 2019",
    tasks: [
      "Use React.js and Javascript to implement CMS like Wordpress but about Search engine UI and plugin for website agency to connect api about Sedna yacht rent system.",
      "Backoffice for User disign search engine",
      "Template search engine with configuration's user design for plugin website's agency",
    ],
    technologies: ["React", "Redux", "HTML/CSS/Javascript"],
  },
  {
    company: "YuuZoo Corporation",
    role: "Software Developer",
    period: "Jul 2018 - Feb 2019",
    tasks: [
      "Use React.js Nodejs and Typscript to implement Sandbox Global's Product about Social Media for Sandbox Global' user for Share game about customer playing in SandBlox Global's platform.",
    ],
    technologies: ["React", "Redux", "Nodejs", "Typescript", "HTML/CSS/Javascript"],
  },
];

export function WorkExperience() {
  return (
    <section id="work-experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-9 top-0 h-full w-0.5 bg-border" />

          {workHistory.map((job, index) => (
            <div key={index} className="relative pl-20 mb-12">
              {/* Circle */}
              <div className="absolute left-[29px] top-1 h-2 w-2 rounded-full bg-primary border-2 border-primary-foreground" />

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-muted-foreground font-semibold">{job.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Technologies used:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
