import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Episode = {
  slug: string;
  number: number;
  title: string;
};

function getEpisodes(): Episode[] {
  const contentDir = path.join(process.cwd(), 'content/smooth');
  
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const numberMatch = slug.match(/episode-(\d+)/);
    
    return {
      slug,
      number: numberMatch ? parseInt(numberMatch[1]) : 0,
      title: titleMatch?.[1] || slug,
    };
  }).sort((a, b) => a.number - b.number);
}

export default function SmoothPage() {
  const episodes = getEpisodes();
  
  return (
    <main className="min-h-screen py-20 md:py-28">
      <div className="max-w-xl mx-auto px-6 md:px-12">
        <header className="mb-16">
          <h1 className="font-mono text-3xl md:text-4xl tracking-[0.2em] uppercase mb-3 text-white/90">
            Smooth
          </h1>
          <p className="font-mono text-sm tracking-wide text-white/30">
            Scripts & Episodes
          </p>
        </header>
        
        {episodes.length === 0 ? (
          <p className="text-white/40 font-mono">No episodes yet.</p>
        ) : (
          <ul className="space-y-1">
            {episodes.map(ep => (
              <li key={ep.slug}>
                <Link 
                  href={`/smooth/${ep.slug}`}
                  className="group flex items-baseline gap-5 py-4 border-b border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="font-mono text-base text-white/25 group-hover:text-white/50 transition-colors tabular-nums">
                    {String(ep.number).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-lg text-white/70 group-hover:text-white transition-colors">
                    {ep.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
