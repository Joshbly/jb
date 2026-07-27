import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type SubpageNavProps = {
  activeHref?: string;
};

export function SubpageNav({ activeHref }: SubpageNavProps) {
  return (
    <nav
      aria-label="Primary"
      className="flex items-center justify-between gap-0 font-mono text-[9px] uppercase tracking-normal min-[360px]:gap-1 min-[360px]:text-[10px] sm:gap-2 sm:text-xs sm:tracking-widest"
    >
      <Link href="/" className="shrink-0 transition-colors hover:text-accent">
        <span className="sm:hidden">JB</span>
        <span className="hidden sm:inline">{site.name}</span>
      </Link>
      <div className="flex shrink-0 items-center gap-0 min-[360px]:gap-1 sm:gap-[clamp(8px,2.5vw,24px)]">
        {site.nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.href === activeHref ? "page" : undefined}
            className={cn(
              "nav-bracket whitespace-nowrap transition-colors hover:text-accent",
              link.href === activeHref && "text-accent",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
