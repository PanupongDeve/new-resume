
"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Activity, Briefcase, Mail, Cpu, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Portfolio", href: "#projects", icon: Cpu },
  { name: "Live Status", href: "#live-status", icon: Activity },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
            <Terminal className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:inline-block">
            DevOps <span className="text-accent">Nexus</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/ai-tool"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            <LayoutDashboard className="w-3 h-3" />
            Project Lab
          </Link>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Cluster Active</span>
          </div>
        </div>
      </div>
    </header>
  );
}
