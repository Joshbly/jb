"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Episode } from "@/lib/episodes";

type Props = {
  current: Episode;
  prev: Episode | null;
  next: Episode | null;
  total: number;
};

const SCENE_SELECTOR = ".sp-scene-break";

function scrollToScene(direction: 1 | -1) {
  const breaks = Array.from(document.querySelectorAll<HTMLElement>(SCENE_SELECTOR));
  if (!breaks.length) {
    return;
  }
  const current = window.scrollY;
  const offset = direction === 1 ? 100 : -50;
  const ordered = direction === 1 ? breaks : breaks.reverse();

  for (const el of ordered) {
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (direction === 1 ? top > current + offset : top < current + offset) {
      window.scrollTo({ top: top - 100, behavior: "smooth" });
      return;
    }
  }
  window.scrollTo({
    top: direction === 1 ? document.body.scrollHeight : 0,
    behavior: "smooth",
  });
}

const episodeHref = (slug: string) => `/smooth/${slug}`;

export function EpisodeNav({ current, prev, next, total }: Props) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "ArrowLeft" && prev) {
        router.push(episodeHref(prev.slug));
      } else if (e.key === "ArrowRight" && next) {
        router.push(episodeHref(next.slug));
      } else if (e.key === "j") {
        e.preventDefault();
        scrollToScene(1);
      } else if (e.key === "k") {
        e.preventDefault();
        scrollToScene(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [router, prev, next]);

  return (
    <nav className="sp-episode-nav">
      {prev ? (
        <Link href={episodeHref(prev.slug)} className="group flex items-center gap-2">
          <span className="text-white/20 group-hover:text-white/60 transition-colors">←</span>
          <span>Episode {prev.number}</span>
        </Link>
      ) : (
        <span />
      )}

      <span className="text-white/20 text-xs tracking-widest">
        {current.number} / {total}
      </span>

      {next ? (
        <Link href={episodeHref(next.slug)} className="group flex items-center gap-2">
          <span>Episode {next.number}</span>
          <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
