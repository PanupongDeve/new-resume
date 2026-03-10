
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectSummaryGenerator } from "@/components/ai/ProjectSummaryGenerator";
import { Toaster } from "@/components/ui/toaster";
import { LayoutDashboard, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AiToolPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="space-y-2">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Nexus
              </Link>
              <h1 className="text-4xl font-bold flex items-center gap-3">
                <LayoutDashboard className="w-10 h-10 text-primary" />
                Project Synthesis Lab
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                An internal tool built for cloud architects to bridge the gap between technical implementation and business value.
              </p>
            </div>
          </div>

          <ProjectSummaryGenerator />
        </div>
      </div>

      <Footer />
      <Toaster />
    </main>
  );
}
