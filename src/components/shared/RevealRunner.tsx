"use client";

import { useEffect } from "react";

const SELECTOR =
  '[data-reveal]:not([data-reveal="visible"]), .sp-reveal:not(.revealed), .sp-scene-break:not(.revealed)';

const SCREENPLAY_REVEAL = /\b(sp-reveal|sp-scene-break)\b/;

// Yacht-rock stagger: cascade screenplay blocks top-to-bottom when they enter together.
const STAGGER_MS = 90;

function reveal(el: Element): void {
  if (el instanceof HTMLElement && el.hasAttribute("data-reveal")) {
    el.dataset.reveal = "visible";
  } else {
    el.classList.add("revealed");
  }
}

function isScreenplayReveal(el: Element): el is HTMLElement {
  return el instanceof HTMLElement && SCREENPLAY_REVEAL.test(el.className);
}

export function RevealRunner() {
  useEffect(() => {
    const targets = document.querySelectorAll(SELECTOR);
    if (!targets.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const el of targets) {
        reveal(el);
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        let waveIndex = 0;
        for (const entry of arriving) {
          if (isScreenplayReveal(entry.target)) {
            entry.target.style.setProperty("--sp-reveal-delay", `${waveIndex * STAGGER_MS}ms`);
            waveIndex++;
          }
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    for (const el of targets) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
