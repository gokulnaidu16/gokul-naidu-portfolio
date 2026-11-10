"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience, education } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[.018] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="05 / Experience & education" title={<>Learning by <span className="text-gradient">building.</span></>} />
        </SectionReveal>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <SectionReveal key={exp.company} delay={index * .1}>
                <article className="relative border-l border-indigo-300/35 pl-7 before:absolute before:-left-[4px] before:top-0 before:size-[7px] before:rounded-full before:bg-cyan-200">
                  <motion.span
                    className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-200 via-indigo-300 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: index * .1, ease: "easeOut" }}
                  />
                  <p className="eyebrow">Experience</p>
                  {exp.period ? <p className="mt-1 text-xs text-slate-500">{exp.period}</p> : null}
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-.045em] text-white">{exp.company}</h3>
                  <p className="mt-2 text-base text-indigo-100">{exp.role}</p>
                  <p className="mt-5 max-w-xl leading-7 text-muted">{exp.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((item) => (
                      <span key={item} className="border border-white/10 px-2.5 py-1.5 text-xs text-slate-300">{item}</span>
                    ))}
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <SectionReveal key={edu.degree} delay={(experience.length + index) * .1}>
                <article className="relative border-l border-indigo-300/35 pl-7 before:absolute before:-left-[4px] before:top-0 before:size-[7px] before:rounded-full before:bg-cyan-200">
                  <motion.span
                    className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-200 via-indigo-300 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8, delay: (experience.length + index) * .1, ease: "easeOut" }}
                  />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="eyebrow">Education</p>
                    {edu.status ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[.12em] text-cyan-200">
                        <span className="size-1.5 rounded-full bg-cyan-300 animate-pulse" />
                        {edu.status}
                      </span>
                    ) : null}
                  </div>
                  {edu.period ? <p className="mt-1 text-xs text-slate-500">{edu.period}</p> : null}
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-.045em] text-white sm:text-3xl">{edu.degree}</h3>
                  <p className="mt-2 text-base text-indigo-100">{edu.institution}{edu.affiliation ? ` · ${edu.affiliation}` : ""}</p>
                  {edu.location ? (
                    <p className="mt-2.5 flex items-center gap-1.5 font-mono text-xs text-slate-400">
                      <MapPin size={13} className="shrink-0 text-cyan-200/70" />
                      <span>{edu.location}</span>
                    </p>
                  ) : null}
                  {edu.cgpa ? (
                    <div className="mt-7 inline-flex items-baseline gap-3 border-y border-white/10 py-4">
                      <span className="font-mono text-[11px] uppercase tracking-[.14em] text-slate-500">CGPA</span>
                      <span className="font-display text-3xl font-semibold text-white">{edu.cgpa}</span>
                    </div>
                  ) : null}
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
