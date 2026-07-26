import type { ReactNode } from "react";

type ResearchSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export function ResearchSection({ id, title, children }: ResearchSectionProps) {
  return (
    <section id={id} className="scroll-mt-12 pt-8">
      <h2 className="mb-5 font-display text-3xl font-normal italic leading-[1.12] md:text-[2rem]">
        {title}
      </h2>
      <div className="space-y-6 font-body text-[1.0625rem] leading-8 text-foreground/85 md:text-lg [&>p]:max-w-[44rem]">
        {children}
      </div>
    </section>
  );
}

type PullQuoteProps = {
  children: ReactNode;
};

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="my-10 max-w-3xl border-l-4 border-accent bg-foreground/5 px-6 py-6 font-display text-xl italic leading-snug md:px-8 md:text-2xl">
      {children}
    </blockquote>
  );
}

type ResearchNoteProps = {
  label: string;
  children: ReactNode;
};

export function ResearchNote({ label, children }: ResearchNoteProps) {
  return (
    <aside className="my-8 max-w-3xl border border-foreground/25 p-6">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">{label}</p>
      <div className="space-y-3 font-body text-base leading-relaxed text-foreground/70">
        {children}
      </div>
    </aside>
  );
}

type KeyFindingsProps = {
  findings: readonly string[];
};

export function KeyFindings({ findings }: KeyFindingsProps) {
  return (
    <div className="my-10 bg-foreground px-6 py-8 text-background md:px-8">
      <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-background/60">
        Findings at a glance
      </p>
      <ul className="max-w-3xl space-y-4">
        {findings.map((finding) => (
          <li
            key={finding}
            className="flex gap-4 font-body text-base leading-7 md:text-[1.0625rem]"
          >
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
            <span>{finding}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
