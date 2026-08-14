import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/content/portfolio";
import { SignalField } from "@/components/visuals/signal-field";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Contact() {
  const hasAnySocial = socialLinks.github || socialLinks.linkedin || socialLinks.email;

  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
      <SignalField />
      <SectionReveal className="relative mx-auto max-w-7xl">
        <p className="eyebrow">06 / Contact</p>
        <h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-.065em] text-white sm:text-7xl lg:text-8xl">
          Let&apos;s build something <span className="text-gradient">intelligent.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
          Interested in AI, intelligent systems, or meaningful technology? Let&apos;s connect.
        </p>
        {hasAnySocial ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.email ? <a href={`mailto:${socialLinks.email}`} className="button-primary"><Mail size={16} />Email</a> : null}
            {socialLinks.linkedin ? <a href={socialLinks.linkedin} className="button-secondary" target="_blank" rel="noopener noreferrer"><Linkedin size={16} />LinkedIn</a> : null}
            {socialLinks.github ? <a href={socialLinks.github} className="button-secondary" target="_blank" rel="noopener noreferrer"><Github size={16} />GitHub</a> : null}
          </div>
        ) : null}
      </SectionReveal>
    </section>
  );
}
