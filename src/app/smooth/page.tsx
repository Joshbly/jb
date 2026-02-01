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
    <main className="min-h-screen py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="font-mono text-4xl md:text-5xl tracking-[0.3em] uppercase mb-4">
            Smooth
          </h1>
          <p className="font-mono text-xs tracking-[0.2em] text-[#555]">
            SCRIPTS & EPISODES
          </p>
        </header>
        
        {episodes.length === 0 ? (
          <p className="text-[#555] font-mono text-sm text-center">No episodes yet.</p>
        ) : (
          <ul className="space-y-0">
            {episodes.map(ep => (
              <li key={ep.slug}>
                <Link 
                  href={`/smooth/${ep.slug}`}
                  className="group flex items-center gap-6 py-5 border-b border-[#222] hover:border-[#444] transition-colors"
                >
                  <span className="font-mono text-sm text-[#444] group-hover:text-[#888] transition-colors w-8">
                    {String(ep.number).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-lg tracking-wide group-hover:text-white transition-colors">
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
