import Link from "next/link";
import { notFound } from "next/navigation";
import { RevealRunner } from "@/components/shared/RevealRunner";
import { EpisodeNav } from "@/components/smooth/EpisodeNav";
import { ReadingProgress } from "@/components/smooth/ReadingProgress";
import { ScreenplayRenderer } from "@/components/smooth/ScreenplayRenderer";
import { getEpisode, getEpisodes } from "@/lib/episodes";

export const dynamicParams = false;

type PageProps = { params: Promise<{ episode: string }> };

export function generateStaticParams() {
  return getEpisodes().map((e) => ({ episode: e.slug }));
}

export default async function EpisodePage({ params }: PageProps) {
  const { episode } = await params;
  const current = getEpisode(episode);
  if (!current) {
    notFound();
  }

  const all = getEpisodes();
  const idx = all.findIndex((e) => e.slug === current.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <>
      <ReadingProgress />
      <RevealRunner />
      <main className="min-h-screen py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <nav className="mb-12">
            <Link
              href="/smooth"
              className="font-mono text-sm tracking-wide text-white/30 hover:text-white/60 transition-colors"
            >
              ← All Episodes
            </Link>
          </nav>
          <article>
            <ScreenplayRenderer content={current.content} />
          </article>
          <EpisodeNav current={current} prev={prev} next={next} total={all.length} />
        </div>
      </main>
    </>
  );
}
