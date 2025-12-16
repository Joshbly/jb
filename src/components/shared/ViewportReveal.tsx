"use client";

import { useEffect } from "react";

type ViewportRevealProps = {
  selector?: string;
  threshold?: number;
};

export function ViewportReveal({
  selector = "[data-reveal]",
  threshold = 0.2,
}: ViewportRevealProps) {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );
    if (!nodes.length) {
      return;
    }

    const prefersReducedMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (prefersReducedMotion) {
      nodes.forEach((node) => node.setAttribute("data-reveal", "visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "visible");
            observer.unobserve(entry.target);
          } else {
            entry.target.setAttribute("data-reveal", "hidden");
          }
        });
      },
      { threshold }
    );

    nodes.forEach((node) => {
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [selector, threshold]);

  return null;
}

