
import React from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg">
                <Terminal className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-headline font-bold text-lg tracking-tight">
                DevOps <span className="text-accent">Nexus</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Crafting reliable infrastructure for the next generation of digital platforms.
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-bold">
          <p>© 2024 DEVOPS NEXUS. ALL SYSTEMS OPERATIONAL.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> using GitOps workflows
          </p>
        </div>
      </div>
    </footer>
  );
}
