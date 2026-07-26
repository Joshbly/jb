import type { ReactNode } from "react";

type ResearchFigureProps = {
  number: number;
  title: string;
  description?: string;
  source: string;
  children: ReactNode;
};

export function ResearchFigure({
  number,
  title,
  description,
  source,
  children,
}: ResearchFigureProps) {
  return (
    <figure className="my-14">
      <figcaption className="mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Fig. {number}
        </span>
        <h3 className="mt-2 max-w-3xl font-display text-xl font-medium leading-snug">{title}</h3>
        {description ? (
          <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-foreground/70">
            {description}
          </p>
        ) : null}
      </figcaption>
      {children}
      <p className="mt-7 font-mono text-xs tracking-wide text-foreground/45">Source: {source}</p>
    </figure>
  );
}
