export function Footer() {
  return (
    <footer className="py-24 border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-xs uppercase tracking-widest">
        
        <div className="space-y-6">
          <a 
            href="mailto:josh@tryprofound.com" 
            className="text-2xl font-display font-normal normal-case italic hover:text-accent transition-colors block mb-8"
          >
            josh@tryprofound.com
          </a>
          
          <div className="flex gap-8">
            <a href="https://x.com/JBlyskal" rel="me" className="hover:text-accent border-b border-foreground/30 hover:border-accent transition-colors pb-0.5">Twitter</a>
            <a href="https://linkedin.com/in/joshuablyskal" rel="me" className="hover:text-accent border-b border-foreground/30 hover:border-accent transition-colors pb-0.5">LinkedIn</a>
          </div>
        </div>
        
        <div className="text-right text-foreground/50 space-y-2">
          <p>Optimized for AI Search & Answer Engines</p>
          <p>Leading AI Strategy & Research at Profound</p>
          <p className="pt-4 text-foreground">© 2025 Josh Blyskal</p>
        </div>

      </div>
    </footer>
  );
}
