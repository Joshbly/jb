'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  currentEpisode: number;
  totalEpisodes: number;
};

export function EpisodeNav({ currentEpisode, totalEpisodes }: Props) {
  const router = useRouter();
  const hasPrev = currentEpisode > 1;
  const hasNext = currentEpisode < totalEpisodes;
  const prevSlug = `episode-${currentEpisode - 1}`;
  const nextSlug = `episode-${currentEpisode + 1}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Arrow keys for episode navigation
      if (e.key === 'ArrowLeft' && hasPrev) {
        router.push(`/smooth/${prevSlug}`);
      } else if (e.key === 'ArrowRight' && hasNext) {
        router.push(`/smooth/${nextSlug}`);
      }
      
      // j/k for scene-by-scene scrolling
      if (e.key === 'j') {
        e.preventDefault();
        scrollToNextScene();
      } else if (e.key === 'k') {
        e.preventDefault();
        scrollToPrevScene();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, hasPrev, hasNext, prevSlug, nextSlug]);

  return (
    <nav className="sp-episode-nav">
      {hasPrev ? (
        <Link href={`/smooth/${prevSlug}`} className="group flex items-center gap-2">
          <span className="text-white/20 group-hover:text-white/60 transition-colors">←</span>
          <span>Episode {currentEpisode - 1}</span>
        </Link>
      ) : (
        <span />
      )}
      
      <span className="text-white/20 text-xs tracking-widest">
        {currentEpisode} / {totalEpisodes}
      </span>
      
      {hasNext ? (
        <Link href={`/smooth/${nextSlug}`} className="group flex items-center gap-2">
          <span>Episode {currentEpisode + 1}</span>
          <span className="text-white/20 group-hover:text-white/60 transition-colors">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

// Helper to scroll to next scene break
function scrollToNextScene() {
  const sceneBreaks = document.querySelectorAll('.sp-scene-break, .my-12');
  const scrollY = window.scrollY + 100;
  
  for (const el of sceneBreaks) {
    const rect = el.getBoundingClientRect();
    const elTop = rect.top + window.scrollY;
    
    if (elTop > scrollY) {
      window.scrollTo({ top: elTop - 100, behavior: 'smooth' });
      return;
    }
  }
  
  // If no next scene, scroll to bottom
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Helper to scroll to previous scene break
function scrollToPrevScene() {
  const sceneBreaks = document.querySelectorAll('.sp-scene-break, .my-12');
  const scrollY = window.scrollY - 50;
  
  const breaks = Array.from(sceneBreaks).reverse();
  for (const el of breaks) {
    const rect = el.getBoundingClientRect();
    const elTop = rect.top + window.scrollY;
    
    if (elTop < scrollY) {
      window.scrollTo({ top: elTop - 100, behavior: 'smooth' });
      return;
    }
  }
  
  // If no prev scene, scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
