import { socialLinks } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-display font-semibold tracking-[-.035em] text-white">Gokul Naidu M A</p>
          <p className="mt-1 text-sm text-slate-500">AI/ML Researcher &amp; Developer</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
          {socialLinks.github ? <a href={socialLinks.github} className="transition-colors hover:text-slate-200" target="_blank" rel="noopener noreferrer">GitHub</a> : null}
          {socialLinks.linkedin ? <a href={socialLinks.linkedin} className="transition-colors hover:text-slate-200" target="_blank" rel="noopener noreferrer">LinkedIn</a> : null}
          <a href="#contact" className="transition-colors hover:text-slate-200">Contact</a>
        </div>
        <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Gokul Naidu M A</p>
      </div>
    </footer>
  );
}
