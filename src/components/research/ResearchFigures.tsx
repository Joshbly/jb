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
    <figure className="my-12 border-y-2 border-foreground py-7">
      <figcaption className="mb-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Fig. {number}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold leading-[1.2] md:text-[1.375rem]">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 max-w-2xl font-body text-[0.9375rem] leading-6 text-foreground/60">
            {description}
          </p>
        ) : null}
      </figcaption>
      {children}
      <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-foreground/50">
        Source: {source}
      </p>
    </figure>
  );
}
