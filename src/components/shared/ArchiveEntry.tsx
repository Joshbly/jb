import Link from "next/link";

export type ArchiveEntryLink = {
  label: string;
  href: string;
};

type ArchiveEntryProps = {
  source: string;
  sourceDetail?: string;
  date: string;
  dateLabel: string;
  title: string;
  displayTitle?: string;
  description?: string;
  href: string;
  links?: readonly ArchiveEntryLink[];
};

const linkProps = (href: string) =>
  href.startsWith("/") ? {} : { target: "_blank" as const, rel: "noopener noreferrer" };

export function ArchiveEntry({
  source,
  sourceDetail,
  date,
  dateLabel,
  title,
  displayTitle,
  description,
  href,
  links = [],
}: ArchiveEntryProps) {
  const external = !href.startsWith("/");
  const secondaryLinks = links.filter(
    (link, index) => links.findIndex((candidate) => candidate.href === link.href) === index,
  );

  return (
    <article
      data-archive-entry=""
      className="min-w-0 border-t border-foreground/20 py-4 transition-colors hover:bg-foreground/2.5"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 font-mono text-xs uppercase tracking-wider">
        <p className="min-w-0 leading-snug">
          <span className="text-accent">{source}</span>
          {sourceDetail ? <span className="ml-2 text-foreground/40">{sourceDetail}</span> : null}
        </p>
        <time className="text-right text-foreground/40" dateTime={date}>
          {dateLabel}
        </time>
      </div>

      <div className="mt-2.5 min-w-0">
        <Link
          href={href}
          {...linkProps(href)}
          title={title}
          aria-label={
            (displayTitle && displayTitle !== title) || external
              ? `${title}${external ? " (opens in new tab)" : ""}`
              : undefined
          }
          data-archive-title=""
          className="group block min-w-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <h3 className="min-w-0 font-display text-lg font-semibold leading-snug underline decoration-accent/40 decoration-1 underline-offset-4 transition-[text-decoration-color] group-hover:decoration-accent group-focus-visible:decoration-accent sm:text-xl lg:truncate">
            {displayTitle ?? title}
          </h3>
        </Link>

        {description ? (
          <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-foreground/65">
            {description}
          </p>
        ) : null}

        {secondaryLinks.length ? (
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-foreground/50">
            {secondaryLinks.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                {...linkProps(link.href)}
                className="underline decoration-dotted decoration-1 underline-offset-4 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
