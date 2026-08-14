"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/content/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navigation.map(({ href }) => document.querySelector(href)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const point = window.scrollY + 150;
      const current = sections.findLast((section) => section.offsetTop <= point);
      setActive(current ? `#${current.id}` : "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${scrolled ? "border border-white/10 bg-ink/80 shadow-[0_12px_40px_rgba(0,0,0,.2)] backdrop-blur-xl" : "border border-transparent bg-transparent"}`} aria-label="Main navigation">
        <a href="#top" className="px-4 py-3 font-display text-sm font-bold tracking-[-0.04em] text-white sm:px-5">Gokul Naidu M A</a>
        <div className="hidden items-center gap-1 pr-2 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={`relative px-3 py-3 text-sm transition-colors ${active === item.href ? "text-white" : "text-slate-400 hover:text-slate-200"}`}>
              {item.label}
              {active === item.href ? <motion.span layoutId="nav-indicator" className="absolute inset-x-3 bottom-1 h-px bg-signal" transition={{ type: "spring", stiffness: 380, damping: 32 }} /> : null}
            </a>
          ))}
        </div>
        <button type="button" className="m-1 grid size-10 place-items-center text-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto max-w-7xl border border-white/10 bg-[#0b1120]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            {navigation.map((item) => <a key={item.href} href={item.href} className="block px-4 py-3 text-base text-slate-200 hover:bg-white/[.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal" onClick={close}>{item.label}</a>)}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
