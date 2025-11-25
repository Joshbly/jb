export function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/10 mt-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <a 
            href="mailto:josh@tryprofound.com" 
            className="text-lg font-display hover:text-accent transition-colors text-foreground font-bold italic"
          >
            Get in touch
          </a>
          <div className="flex gap-4 text-sm text-foreground/60 font-serif italic">
            <a href="https://x.com/JBlyskal" className="hover:text-accent transition-colors">Twitter</a>
            <a href="https://linkedin.com/in/joshuablyskal" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div className="text-xs text-foreground/40 text-right font-serif">
          <p>Set in Playfair Display & Inter.</p>
          <p>No trackers. Pure HTML/CSS.</p>
          <p className="mt-2">© 2025 Joshua Blyskal</p>
        </div>
      </div>
    </footer>
  );
}
