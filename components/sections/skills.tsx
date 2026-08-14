import { Braces } from "lucide-react";
import { skillGroups } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="04 / Technical capabilities" title={<>A practical <span className="text-gradient">toolkit.</span></>}>
            Technologies and concepts that support my current AI/ML exploration and software development.
          </SectionHeading>
        </SectionReveal>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_.9fr_.9fr]">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.name} delay={index * .08}>
              <article className={`h-full border p-7 ${group.emphasis ? "border-indigo-300/25 bg-[radial-gradient(circle_at_85%_0%,rgba(98,114,255,.17),transparent_30%),#0d1525]" : "border-white/10 bg-white/[.025]"}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-.04em] text-white">{group.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p>
                  </div>
                  <Braces className="text-indigo-200/60" size={20} />
                </div>
                <div className="mt-9 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`px-3 py-2 text-sm ${group.emphasis ? "border border-indigo-200/15 bg-indigo-200/[.06] text-indigo-50" : "border border-white/10 text-slate-300"}`}>{skill}</span>
                  ))}
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
