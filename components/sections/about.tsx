"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionReveal } from "@/components/ui/section-reveal";

export function About() {
  const reduceMotion = useReducedMotion();

  const imageVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] as [number, number, number, number] }
    }
  };

  const focusAreas = [
    "Generative AI",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Intelligent Systems"
  ];

  return (
    <section id="about" className="border-y border-white/10 bg-white/[.018] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:gap-24 items-start">
          {/* Left Column: Portrait & Focus Block */}
          <div className="flex flex-col gap-8 items-center lg:items-stretch">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative w-full max-w-[380px] lg:max-w-none aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-[#0c1322] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_30px_-15px_rgba(111,140,255,0.08)]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-[2px] grayscale-[10%] contrast-[102%] brightness-[97%]">
                <Image
                  src="/images/gokul-naidu.png"
                  alt="Gokul Naidu M A"
                  fill
                  sizes="(max-w-768px) 380px, 480px"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </motion.div>

            {/* Focus Block */}
            <div className="w-full max-w-[380px] lg:max-w-none rounded-sm border border-white/5 bg-[#090f1d]/30 p-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-cyan-200/70">Focus Areas</span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                    <span className="size-1.5 rounded-full bg-indigo-400/60" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:pt-2">
            <p className="eyebrow mb-6">01 / About</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.18] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              About
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-muted sm:text-lg">
              <p>
                I&apos;m an Information Science graduate focused on Artificial Intelligence and Machine Learning. I enjoy building practical systems using Generative AI, NLP, Computer Vision, and predictive models, while exploring how intelligent systems can solve real-world problems.
              </p>
              <p>
                I&apos;m continually learning through hands-on development, experimentation, and research-oriented exploration, with curiosity guiding each new problem.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
