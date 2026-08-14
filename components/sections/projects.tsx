"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/content/portfolio";
import type { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ProjectVisual } from "@/components/visuals/project-visual";

function ProjectCard({ project }: { project: Project }) {
  const flagship = project.variant === "flagship";
  const hasLinks = project.projectUrl || project.githubUrl;

  return (
    <motion.article whileHover={{ y: -5 }} transition={{ duration: .28, ease: "easeOut" }} className={`group overflow-hidden border border-white/10 bg-white/[.025] shadow-[0_20px_70px_rgba(0,0,0,.12)] transition-colors hover:border-indigo-300/25 ${flagship ? "lg:grid lg:grid-cols-[1.04fr_.96fr]" : ""}`}>
      <div className={flagship ? "lg:order-2" : ""}>
        <ProjectVisual project={flagship ? "flagship" : project.id === "kutira-kushala" ? "kutira" : "health"} />
      </div>
      <div className={`flex flex-col p-6 sm:p-8 ${flagship ? "lg:order-1 lg:p-10" : ""}`}>
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] tracking-[.16em] text-cyan-200/70">{project.number}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-slate-400">{project.category}</span>
        </div>
        <h3 className={`font-display font-semibold tracking-[-.045em] text-white ${flagship ? "max-w-xl text-3xl sm:text-4xl" : "text-2xl"}`}>{project.title}</h3>
        <p className={`mt-5 leading-7 text-muted ${flagship ? "max-w-xl text-base sm:text-lg" : "text-[15px]"}`}>{project.description}</p>
        <div className="mt-7 border-t border-white/10 pt-6">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.16em] text-slate-500">Key capabilities</p>
          <ul className={`grid gap-x-4 gap-y-2.5 text-sm text-slate-300 ${flagship ? "sm:grid-cols-2" : ""}`}>
            {project.capabilities.map((capability) => (
              <li key={capability} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan-200/80" />{capability}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="border border-indigo-200/10 bg-indigo-200/[.04] px-2.5 py-1.5 text-xs text-indigo-100/75 transition-colors group-hover:border-indigo-200/20">{technology}</span>
          ))}
        </div>
        {hasLinks ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.projectUrl ? <a href={project.projectUrl} className="button-secondary" target="_blank" rel="noopener noreferrer">View Project</a> : null}
            {project.githubUrl ? <a href={project.githubUrl} className="button-secondary" target="_blank" rel="noopener noreferrer"><Github size={15} />GitHub</a> : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-y border-white/10 bg-[#09111f] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="03 / Selected work" title={<>Built around <span className="text-gradient">real problems.</span></>}>
            A focused collection of AI-powered systems built around practical problems, intelligent workflows, and real-world applications.
          </SectionHeading>
        </SectionReveal>
        <SectionReveal><ProjectCard project={projects[0]} /></SectionReveal>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <SectionReveal key={project.id} delay={index * .08}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
