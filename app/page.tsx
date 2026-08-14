import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Research } from "@/components/sections/research";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

import fs from "fs";
import path from "path";

export default function Home() {
  const resumePath = path.join(process.cwd(), "public", "resume.pdf");
  const resumeAvailable = fs.existsSync(resumePath);

  return (
    <main id="top" className="overflow-hidden bg-ink text-slate-200">
      <Navigation />
      <Hero resumeAvailable={resumeAvailable} />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
