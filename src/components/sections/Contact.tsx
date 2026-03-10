
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, Send, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Transmission Received",
      description: "Inquiry successfully dispatched to the operations center. I'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl italic text-accent">Initiate</h2>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Collaboration</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Looking for a strategic partner to optimize your cloud footprint or automate your delivery pipelines? 
                Whether it's a permanent leadership role or specialized consulting, let's build something resilient together.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "architect@devopsnexus.io" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/devopsarchitect" },
                { icon: Twitter, label: "Twitter", value: "@DevOpsNexus" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border group hover:border-primary/50 transition-colors">
                  <div className="p-2.5 rounded-lg bg-background border border-border group-hover:text-primary transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Project Inquiry Form</CardTitle>
              <CardDescription>Securely transmit your technical requirements.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required className="bg-background/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Infrastructure Service</Label>
                  <select 
                    id="service" 
                    className="w-full h-10 px-3 py-2 text-sm bg-background/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option>Kubernetes Orchestration</option>
                    <option>Cloud Migration (AWS/GCP)</option>
                    <option>CI/CD Implementation</option>
                    <option>Security & Compliance</option>
                    <option>General Consulting</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Context</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your current technical challenges or requirements..." 
                    rows={5}
                    className="bg-background/50"
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2 font-bold py-6 text-lg rounded-xl">
                  Deploy Message <Send className="w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
