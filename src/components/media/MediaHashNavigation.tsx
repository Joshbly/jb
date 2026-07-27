"use client";

import { useEffect } from "react";

const HASH_ALIASES: Record<string, string> = {
  recordings: "decks",
};

const ARRIVAL_DURATION_MS = 900;

function sectionForHash(hash: string) {
  const requestedId = decodeURIComponent(hash.replace(/^#/, ""));
  return document.getElementById(HASH_ALIASES[requestedId] ?? requestedId);
}

export function MediaHashNavigation() {
  useEffect(() => {
    let arrivalTimer: number | undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function arrive(hash: string) {
      const section = sectionForHash(hash);
      if (!section) {
        return;
      }

      section.scrollIntoView({ behavior: "auto", block: "start" });
      section.focus({ preventScroll: true });

      if (reducedMotion) {
        return;
      }

      window.clearTimeout(arrivalTimer);
      section.removeAttribute("data-media-arrival");
      void section.offsetWidth;
      section.setAttribute("data-media-arrival", "");

      arrivalTimer = window.setTimeout(() => {
        section.removeAttribute("data-media-arrival");
      }, ARRIVAL_DURATION_MS);
    }

    function handleAnchorClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const clickedElement = event.target;
      if (!(clickedElement instanceof Element)) {
        return;
      }

      const anchor = clickedElement.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!(anchor && sectionForHash(anchor.hash))) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", anchor.hash);
      arrive(anchor.hash);
    }

    function handleHistoryNavigation() {
      if (window.location.hash) {
        arrive(window.location.hash);
      }
    }

    document.addEventListener("click", handleAnchorClick, true);
    window.addEventListener("hashchange", handleHistoryNavigation);
    window.addEventListener("popstate", handleHistoryNavigation);

    if (window.location.hash) {
      requestAnimationFrame(() => arrive(window.location.hash));
    }

    return () => {
      window.clearTimeout(arrivalTimer);
      document.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("hashchange", handleHistoryNavigation);
      window.removeEventListener("popstate", handleHistoryNavigation);
    };
  }, []);

  return (
    <style>{`
      html {
        scroll-behavior: auto !important;
      }

      [data-media-arrival] {
        position: relative;
        isolation: isolate;
      }

      [data-media-arrival]::after {
        position: absolute;
        z-index: 30;
        top: -2px;
        right: 0;
        left: 0;
        height: 2px;
        background: var(--accent);
        content: "";
        pointer-events: none;
        transform-origin: left center;
        animation: media-arrival-rule 850ms var(--ease-strong) both;
      }

      [data-media-arrival] > div {
        animation: media-arrival-content 700ms var(--ease-strong) both;
      }

      [data-media-arrival]:focus {
        outline: none;
      }

      @keyframes media-arrival-content {
        from {
          opacity: 0.15;
          filter: blur(3px);
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }
      }

      @keyframes media-arrival-rule {
        0% {
          opacity: 1;
          transform: scaleX(0);
        }
        70% {
          opacity: 1;
          transform: scaleX(1);
        }
        100% {
          opacity: 0;
          transform: scaleX(1);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        [data-media-arrival]::after,
        [data-media-arrival] > div {
          animation: none;
        }
      }
    `}</style>
  );
}
