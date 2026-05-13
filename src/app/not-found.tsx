import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 font-mono uppercase tracking-widest">
        <p className="text-xs text-foreground/40">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-display italic normal-case tracking-tight">
          Page not found
        </h1>
        <Link href="/" className="inline-block text-xs hover:text-accent transition-colors">
          ← Return home
        </Link>
      </div>
    </main>
  );
}
