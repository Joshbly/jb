import type { ReactNode } from "react";

type ResearchSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export function ResearchSection({ id, title, children }: ResearchSectionProps) {
  return (
    <section id={id} className="scroll-mt-12">
      <h2 className="mb-6 max-w-3xl font-display text-3xl font-normal italic leading-tight md:text-4xl">
        {title}
      </h2>
      <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90 [&>p]:max-w-176">
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
    <blockquote className="my-12 max-w-2xl border-l-2 border-accent pl-6 font-display text-xl italic leading-relaxed md:pl-8">
      {children}
    </blockquote>
  );
}
