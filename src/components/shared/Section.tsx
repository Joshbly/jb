import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionLayout = "default" | "split" | "trio" | "narrow";

const LAYOUTS: Record<SectionLayout, string> = {
  default: "max-w-7xl mx-auto px-6",
  split: "max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32",
  trio: "max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr_1fr] gap-16",
  narrow: "max-w-4xl mx-auto px-6",
};

type SectionProps = {
  id?: string;
  layout?: SectionLayout;
  children: ReactNode;
};

export function Section({ id, layout = "default", children }: SectionProps) {
  return (
    <section id={id} className="relative py-32 border-t-2 border-foreground bg-background">
      <div className={LAYOUTS[layout]}>{children}</div>
    </section>
  );
}

type DisplayH2Props = {
  children: ReactNode;
  className?: string;
};

export function DisplayH2({ children, className }: DisplayH2Props) {
  return <h2 className={cn("text-4xl font-display font-normal italic", className)}>{children}</h2>;
}

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeader({ title, eyebrow, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between border-b-2 border-foreground pb-4",
        className,
      )}
    >
      <DisplayH2>{title}</DisplayH2>
      {eyebrow ? (
        <span className="font-mono text-xs uppercase tracking-widest opacity-50">{eyebrow}</span>
      ) : null}
    </div>
  );
}
