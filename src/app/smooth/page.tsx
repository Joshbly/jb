import Link from "next/link";
import { getEpisodes } from "@/lib/episodes";

export default function SmoothPage() {
  const episodes = getEpisodes();

  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <header className="mb-20 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-200/40 mb-4">
            A Screenplay Series
          </p>
          <h1 className="font-mono text-4xl md:text-5xl tracking-[0.15em] uppercase text-white/90 mb-3">
            Yacht Rock
          </h1>
          <p className="font-mono text-lg tracking-widest text-white/40 italic">Smooth</p>
        </header>

        {episodes.length === 0 ? (
          <p className="text-white/40 font-mono text-center">No episodes yet.</p>
        ) : (
          <ul className="space-y-6">
            {episodes.map((ep) => (
              <li key={ep.slug}>
                <Link
                  href={`/smooth/${ep.slug}`}
                  className="group block p-6 -mx-6 rounded-sm hover:bg-white/2 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-2xl text-white/15 group-hover:text-white/30 transition-colors tabular-nums pt-1">
                      {String(ep.number).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-mono text-xl text-white/80 group-hover:text-white transition-colors mb-2">
                        "{ep.title}"
                      </h2>
                      {ep.preview ? (
                        <p className="font-mono text-sm text-white/35 leading-relaxed mb-3 line-clamp-2">
                          {ep.preview}...
                        </p>
                      ) : null}
                      <p className="font-mono text-xs text-white/25 tracking-wide">
                        {ep.readTime} min read
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <footer className="mt-20 text-center">
          <p className="font-mono text-xs text-white/20 tracking-wide">
            Use ← → to navigate • j/k to scroll scenes
          </p>
        </footer>
      </div>
    </main>
  );
}
