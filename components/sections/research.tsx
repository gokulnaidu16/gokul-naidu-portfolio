import { BrainCircuit, Eye, MessageSquareText, Network, Sparkles } from "lucide-react";
import { interests } from "@/content/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

const interestIcons = { sparkles: Sparkles, message: MessageSquareText, brain: BrainCircuit, eye: Eye, network: Network };

export function Research() {
  return (
    <section id="research" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="02 / AI & Research Interests" title={<>AI &amp; Research <span className="text-gradient">Interests.</span></>}>
            Areas I&apos;m actively exploring through projects, experimentation, and research-oriented learning.
          </SectionHeading>
        </SectionReveal>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {interests.map((interest, index) => {
            const Icon = interestIcons[interest.icon];
            return (
              <SectionReveal key={interest.title} delay={index * .06} className="h-full">
                <article className="group h-full min-h-64 bg-ink p-6 transition-colors hover:bg-[#0d1627]">
                  <div className="flex items-start justify-between">
                    <Icon className="text-indigo-200 transition-transform duration-300 group-hover:-translate-y-1" size={23} strokeWidth={1.5} />
                    <span className="font-mono text-[10px] text-slate-600">{interest.index}</span>
                  </div>
                  <div className="mt-16">
                    <h3 className="font-display text-xl font-semibold tracking-[-.04em] text-white">{interest.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{interest.description}</p>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
