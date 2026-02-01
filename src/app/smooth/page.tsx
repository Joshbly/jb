import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Episode = {
  slug: string;
  number: number;
  episodeTitle: string;
  subtitle: string;
  preview: string;
  readTime: number;
};

function getEpisodes(): Episode[] {
  const contentDir = path.join(process.cwd(), 'content/smooth');
  
  if (!fs.existsSync(contentDir)) return [];
  
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  
  return files.map(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const numberMatch = slug.match(/episode-(\d+)/);
    
    // Extract episode subtitle like "The Danger Zone" from **Episode I: "The Danger Zone"**
    const subtitleMatch = content.match(/\*\*Episode\s+[IVXLCDM]+:\s*"([^"]+)"\*\*/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : '';
    
    // Extract the first action line as preview (first italic paragraph after the opening)
    const previewMatch = content.match(/\*([A-Z][^*]{30,150})/);
    const preview = previewMatch ? previewMatch[1].trim() : '';
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    // Episode title like "Episode 1"
    const episodeNum = numberMatch ? parseInt(numberMatch[1]) : 0;
    const episodeTitle = `Episode ${episodeNum}`;
    
    return {
      slug,
      number: episodeNum,
      episodeTitle,
      subtitle,
      preview,
      readTime,
    };
  }).sort((a, b) => a.number - b.number);
}

export default function SmoothPage() {
  const episodes = getEpisodes();
  
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        {/* Series Header */}
        <header className="mb-20 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-amber-200/40 mb-4">
            A Screenplay Series
          </p>
          <h1 className="font-mono text-4xl md:text-5xl tracking-[0.15em] uppercase text-white/90 mb-3">
            Yacht Rock
          </h1>
          <p className="font-mono text-lg tracking-widest text-white/40 italic">
            Smooth
          </p>
        </header>
        
        {episodes.length === 0 ? (
          <p className="text-white/40 font-mono text-center">No episodes yet.</p>
        ) : (
          <ul className="space-y-6">
            {episodes.map(ep => (
              <li key={ep.slug}>
                <Link 
                  href={`/smooth/${ep.slug}`}
                  className="group block p-6 -mx-6 rounded-sm hover:bg-white/2 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    {/* Episode Number */}
                    <span className="font-mono text-2xl text-white/15 group-hover:text-white/30 transition-colors tabular-nums pt-1">
                      {String(ep.number).padStart(2, '0')}
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      {/* Subtitle / Title */}
                      <h2 className="font-mono text-xl text-white/80 group-hover:text-white transition-colors mb-2">
                        {ep.subtitle ? `"${ep.subtitle}"` : ep.episodeTitle}
                      </h2>
                      
                      {/* Preview */}
                      {ep.preview && (
                        <p className="font-mono text-sm text-white/35 leading-relaxed mb-3 line-clamp-2">
                          {ep.preview}...
                        </p>
                      )}
                      
                      {/* Meta */}
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
        
        {/* Footer hint */}
        <footer className="mt-20 text-center">
          <p className="font-mono text-xs text-white/20 tracking-wide">
            Use ← → to navigate • j/k to scroll scenes
          </p>
        </footer>
      </div>
    </main>
  );
}
