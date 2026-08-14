"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin } from "lucide-react";
import { SignalField } from "@/components/visuals/signal-field";
import { socialLinks } from "@/content/portfolio";

export function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  const reduceMotion = useReducedMotion();
  const stagger = { animate: { transition: { staggerChildren: .12, delayChildren: .15 } } };
  const item: Variants = { initial: { opacity: 0, y: reduceMotion ? 0 : 18 }, animate: { opacity: 1, y: 0, transition: { duration: .65, ease: "easeOut" } } };

  const hasSocial = socialLinks.github || socialLinks.linkedin;

  return (
    <section className="relative flex min-h-[44rem] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-[48rem] lg:px-12">
      <SignalField />
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div variants={stagger} initial="initial" animate="animate" className="max-w-4xl">
          <motion.p variants={item} className="eyebrow mb-7">
            <span className="mr-2 inline-block size-1.5 rounded-full bg-cyan-200 align-middle" />
            Independent exploration / AI &amp; intelligent systems
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl font-semibold leading-[.96] tracking-[-.065em] text-white sm:text-7xl lg:text-[7.6rem]">
            Gokul<br /><span className="text-gradient">Naidu M A</span>
          </motion.h1>
          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-signal" />
            <p className="text-sm font-medium tracking-[.02em] text-indigo-100 sm:text-base">AI/ML Researcher &amp; Developer</p>
          </motion.div>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Exploring Generative AI, Machine Learning, NLP, Computer Vision, and intelligent systems through practical projects and research-oriented learning.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">View Projects <ArrowDownRight size={17} /></a>
            {resumeAvailable ? (
              <a href="/resume.pdf" className="button-secondary" download>Download Resume <Download size={16} /></a>
            ) : null}
          </motion.div>
          {hasSocial ? (
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              {socialLinks.github ? <a href={socialLinks.github} className="button-secondary" target="_blank" rel="noopener noreferrer"><Github size={15} />GitHub</a> : null}
              {socialLinks.linkedin ? <a href={socialLinks.linkedin} className="button-secondary" target="_blank" rel="noopener noreferrer"><Linkedin size={15} />LinkedIn</a> : null}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.2em] text-slate-500 sm:flex">
        <span className="h-px w-7 bg-slate-700" />Scroll to explore<span className="h-px w-7 bg-slate-700" />
      </div>
    </section>
  );
}
