import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ScreenplayRenderer } from '@/components/smooth/ScreenplayRenderer';
import { ReadingProgress } from '@/components/smooth/ReadingProgress';
import { EpisodeNav } from '@/components/smooth/EpisodeNav';

type PageProps = {
  params: Promise<{ episode: string }>;
};

function getEpisodeContent(slug: string): string | null {
  const filePath = path.join(process.cwd(), 'content/smooth', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf-8');
}

function getTotalEpisodes(): number {
  const contentDir = path.join(process.cwd(), 'content/smooth');
  if (!fs.existsSync(contentDir)) return 0;
  return fs.readdirSync(contentDir).filter(f => f.endsWith('.md')).length;
}

function getEpisodeNumber(slug: string): number {
  const match = slug.match(/episode-(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export default async function EpisodePage({ params }: PageProps) {
  const { episode } = await params;
  const content = getEpisodeContent(episode);
  const episodeNumber = getEpisodeNumber(episode);
  const totalEpisodes = getTotalEpisodes();

  if (!content) {
    return (
      <main className="min-h-screen py-32">
        <div className="max-w-3xl mx-auto px-6 text-center font-mono">
          <p className="text-sm text-white/40">Episode not found.</p>
          <Link href="/smooth" className="text-white/50 hover:text-white transition-colors mt-4 inline-block text-sm">
            ← Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <ReadingProgress />
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
            <ScreenplayRenderer content={content} />
          </article>
          
          <EpisodeNav currentEpisode={episodeNumber} totalEpisodes={totalEpisodes} />
        </div>
      </main>
    </>
  );
}
