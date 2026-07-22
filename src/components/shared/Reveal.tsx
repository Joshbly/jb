import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "article";
  /** Position in a staggered list; drives the entrance delay. */
  index?: number;
  /** Explicit entrance delay in ms. Overrides `index`. */
  delay?: number;
  className?: string;
};

const STAGGER_MS = 80;

export function Reveal({ children, as: Tag = "div", index, delay, className }: RevealProps) {
  const computed = delay ?? (index === undefined ? 0 : index * STAGGER_MS);
  const style: CSSProperties | undefined =
    computed > 0 ? { transitionDelay: `${computed}ms` } : undefined;
  return (
    <Tag data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  );
}
