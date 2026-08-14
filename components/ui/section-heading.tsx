import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-7 text-muted sm:text-lg">{children}</div> : null}
    </div>
  );
}
