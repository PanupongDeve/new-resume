
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechSkills } from "@/components/sections/TechSkills";
import { Projects } from "@/components/sections/Projects";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WorkExperience />
      <TechSkills />
      <Projects />
      <Certifications />
      <Footer />
      <Toaster />
    </main>
  );
}
