import Link from "next/link";
import { HeaderScript } from "./HeaderScript";

const navLinks = [
  { href: "#speaking", label: "[ Speaking ]" },
  { href: "#writing", label: "[ Writing ]" },
  { href: "#now", label: "[ Bio ]" },
];

export function Header() {
  return (
    <header
      id="site-header"
      data-scrolled="false"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="header-bg absolute inset-0 bg-background border-b-2 border-foreground"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="header-inner max-w-7xl mx-auto px-6 flex items-center justify-between font-mono uppercase tracking-widest w-full">
          <div className="header-title shrink-0 text-[clamp(6px,2.5vw,12px)] pr-4 md:pr-0">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Josh Blyskal <span className="opacity-40 hidden sm:inline">/ Research</span>
            </Link>
          </div>

          <nav className="flex items-center justify-end shrink-0">
            <div className="contents">
              <div className="header-links flex gap-[clamp(4px,3vw,32px)] transition-colors duration-300 text-[clamp(6px,2.5vw,12px)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-accent transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <HeaderScript />
    </header>
  );
}
