import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="py-24 border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-xs uppercase tracking-widest">
        <div className="space-y-6">
          <a
            href={`mailto:${site.email}`}
            className="text-2xl font-display font-normal normal-case italic hover:text-accent transition-colors block mb-8"
          >
            {site.email}
          </a>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {site.footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-foreground/30 pb-0.5 transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                rel="me"
                className="hover:text-accent border-b border-foreground/30 hover:border-accent transition-colors pb-0.5"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-foreground/50 md:text-right">
          <p>
            {site.role} at {site.employer.name}
          </p>
          <p className="pt-4 text-foreground">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
