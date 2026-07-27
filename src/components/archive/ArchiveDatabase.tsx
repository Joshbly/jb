"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  type ArchiveFilters,
  type ArchiveFormat,
  type ArchiveRecord,
  archiveFormatOptions,
  archiveTopicOptions,
  archiveYears,
  defaultArchiveFilters,
  parseArchiveFilters,
} from "@/content/archive-records";

const PAGE_SIZE = 18;
const legacyHashFormats: Record<string, ArchiveFormat> = {
  stages: "stage",
  podcasts: "podcast",
  press: "press",
  writing: "writing",
  decks: "deck",
  recordings: "recording",
  linkedin: "linkedin",
};
const formatLabels = new Map(
  archiveFormatOptions.map((formatOption) => [formatOption.value, formatOption.label]),
);
const topicLabels = new Map(
  archiveTopicOptions.map((topicOption) => [topicOption.value, topicOption.label]),
);

function linkProps(href: string) {
  return href.startsWith("/") ? {} : { target: "_blank" as const, rel: "noopener noreferrer" };
}

function filtersFromLocation() {
  const archiveParams = new URLSearchParams(window.location.search);
  const parsedFilters = parseArchiveFilters((parameterName) => archiveParams.get(parameterName));
  const legacyFormat = legacyHashFormats[window.location.hash.slice(1).toLowerCase()];
  return legacyFormat ? { ...parsedFilters, format: legacyFormat } : parsedFilters;
}

function writeArchiveUrl(filters: ArchiveFilters) {
  const archiveParams = new URLSearchParams();
  if (filters.query.trim()) {
    archiveParams.set("q", filters.query.trim());
  }
  if (filters.format) {
    archiveParams.set("format", filters.format);
  }
  if (filters.year) {
    archiveParams.set("year", filters.year);
  }
  if (filters.topic) {
    archiveParams.set("topic", filters.topic);
  }
  if (filters.ownership) {
    archiveParams.set("source", filters.ownership);
  }
  if (filters.sort === "oldest") {
    archiveParams.set("sort", filters.sort);
  }

  const queryString = archiveParams.toString();
  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${queryString ? `?${queryString}` : ""}`,
  );
}

function recordMatches(archiveRecord: ArchiveRecord, filters: ArchiveFilters) {
  if (filters.format && !archiveRecord.formats.includes(filters.format)) {
    return false;
  }
  if (filters.year && !archiveRecord.date.startsWith(filters.year)) {
    return false;
  }
  if (filters.topic && !archiveRecord.topics.includes(filters.topic)) {
    return false;
  }
  if (filters.ownership && archiveRecord.ownership !== filters.ownership) {
    return false;
  }

  return filters.query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((searchTerm) => archiveRecord.searchText.includes(searchTerm));
}

function ArchiveRecordRow({
  archiveRecord,
  visible,
}: {
  archiveRecord: ArchiveRecord;
  visible: boolean;
}) {
  const opensInNewTab = !archiveRecord.href.startsWith("/");

  return (
    <li
      data-archive-record=""
      data-archive-visible={visible ? "true" : "false"}
      className="border-t border-foreground/20"
    >
      <article className="grid min-w-0 gap-4 py-5 md:grid-cols-[7.5rem_minmax(0,1fr)_minmax(8rem,0.65fr)_9rem] md:gap-6">
        <time
          dateTime={archiveRecord.date}
          className="font-mono text-[11px] uppercase tracking-wider text-foreground/50"
        >
          {archiveRecord.dateLabel}
        </time>

        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-wider text-foreground/50">
            <span className="text-accent">{archiveRecord.source}</span>
            <span className="ml-2">{archiveRecord.sourceDetail}</span>
          </p>
          <Link
            href={archiveRecord.href}
            {...linkProps(archiveRecord.href)}
            title={archiveRecord.title}
            aria-label={`${archiveRecord.title} — ${archiveRecord.source}, ${archiveRecord.dateLabel}${opensInNewTab ? " (opens in new tab)" : ""}`}
            className="group mt-2 block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <h2 className="font-display text-xl font-semibold leading-snug underline decoration-accent/35 decoration-1 underline-offset-4 transition-colors group-hover:text-accent md:text-2xl">
              {archiveRecord.displayTitle ?? archiveRecord.title}
            </h2>
          </Link>

          {archiveRecord.actions.length ? (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-foreground/55">
              {archiveRecord.actions.map((archiveAction) => (
                <Link
                  key={`${archiveAction.label}-${archiveAction.href}`}
                  href={archiveAction.href}
                  {...linkProps(archiveAction.href)}
                  aria-label={`${archiveAction.label} for ${archiveRecord.title} at ${archiveRecord.source}${archiveAction.href.startsWith("/") ? "" : " (opens in new tab)"}`}
                  className="rounded-sm underline decoration-dotted underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {archiveAction.label}
                </Link>
              ))}
            </div>
          ) : null}

          <div className="mt-3 flex flex-wrap gap-1.5 md:hidden">
            {archiveRecord.formats.map((recordFormat) => (
              <span
                key={recordFormat}
                className="border border-foreground/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/60"
              >
                {formatLabels.get(recordFormat)}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-foreground/35 md:hidden">
            Topics
          </p>
          {archiveRecord.topics.length ? (
            <ul className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/55">
              {archiveRecord.topics.map((recordTopic) => (
                <li key={recordTopic}>{topicLabels.get(recordTopic)}</li>
              ))}
            </ul>
          ) : (
            <span className="font-mono text-xs text-foreground/30">—</span>
          )}
        </div>

        <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/50">
          <p>{archiveRecord.ownership === "first-party" ? "First-party" : "Independent"}</p>
          <div className="mt-2 hidden flex-wrap gap-1.5 md:flex">
            {archiveRecord.formats.map((recordFormat) => (
              <span key={recordFormat} className="border border-foreground/20 px-2 py-1">
                {formatLabels.get(recordFormat)}
              </span>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
}

export function ArchiveDatabase({
  records,
  initialFilters,
  linkedinArchiveNote,
}: {
  records: readonly ArchiveRecord[];
  initialFilters: ArchiveFilters;
  linkedinArchiveNote: string;
}) {
  const [filters, setFilters] = useState(initialFilters);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [urlReady, setUrlReady] = useState(false);

  useEffect(() => {
    function readCurrentUrl() {
      setFilters(filtersFromLocation());
      setVisibleCount(PAGE_SIZE);
      setUrlReady(true);
    }

    readCurrentUrl();
    window.addEventListener("popstate", readCurrentUrl);
    window.addEventListener("hashchange", readCurrentUrl);
    return () => {
      window.removeEventListener("popstate", readCurrentUrl);
      window.removeEventListener("hashchange", readCurrentUrl);
    };
  }, []);

  useEffect(() => {
    if (urlReady) {
      writeArchiveUrl(filters);
    }
  }, [filters, urlReady]);

  const orderedRecords = [...records].sort((firstRecord, secondRecord) => {
    const dateOrder = firstRecord.date.localeCompare(secondRecord.date);
    if (dateOrder) {
      return filters.sort === "oldest" ? dateOrder : -dateOrder;
    }
    return firstRecord.title.localeCompare(secondRecord.title);
  });
  const matchingRecords = orderedRecords.filter((archiveRecord) =>
    recordMatches(archiveRecord, filters),
  );
  const matchingRecordIds = new Set(matchingRecords.map((archiveRecord) => archiveRecord.id));
  const visibleRecordIds = new Set(
    matchingRecords.slice(0, visibleCount).map((archiveRecord) => archiveRecord.id),
  );
  const shownCount = Math.min(visibleCount, matchingRecords.length);
  const remainingCount = matchingRecords.length - shownCount;
  const hasActiveFilters =
    Boolean(
      filters.query || filters.format || filters.year || filters.topic || filters.ownership,
    ) || filters.sort !== "newest";

  function updateFilters(changes: Partial<ArchiveFilters>) {
    setFilters((currentFilters) => ({ ...currentFilters, ...changes }));
    setVisibleCount(PAGE_SIZE);
  }

  function backToTop() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    document.getElementById("archive-top")?.focus({ preventScroll: true });
  }

  const selectClass =
    "mt-1.5 w-full border border-foreground/25 bg-background px-2 py-2 font-mono text-[11px] uppercase text-foreground outline-none focus:border-accent";

  return (
    <section aria-labelledby="archive-database-title" className="border-t-2 border-foreground">
      <style>{`
        html.js [data-archive-record][data-archive-visible="false"] {
          display: none;
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(18rem,1.25fr)] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Unified record database
            </p>
            <h2
              id="archive-database-title"
              className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl"
            >
              All public work
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-foreground/65">
              Appearances carry their recordings, slides, and related research. First-party covers
              Josh and Profound publishing, LinkedIn posts, and appearances marked as owned.
            </p>
          </div>

          <div className="border border-foreground/25 bg-background p-4 md:p-5">
            <label
              htmlFor="archive-search"
              className="font-mono text-[10px] uppercase tracking-widest text-foreground/55"
            >
              Search records
            </label>
            <input
              id="archive-search"
              type="search"
              value={filters.query}
              onChange={(searchEvent) => updateFilters({ query: searchEvent.target.value })}
              placeholder="Title, event, outlet, person, or topic"
              className="mt-2 w-full border-b border-foreground/35 bg-transparent px-0 py-2 font-body text-base outline-none placeholder:text-foreground/35 focus:border-accent"
            />

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5">
              <label className="min-w-0">
                <span className="font-mono text-[10px] uppercase text-foreground/45">Format</span>
                <select
                  value={filters.format}
                  onChange={(formatEvent) =>
                    updateFilters({ format: formatEvent.target.value as ArchiveFilters["format"] })
                  }
                  className={selectClass}
                >
                  <option value="">All</option>
                  {archiveFormatOptions.map((formatOption) => (
                    <option key={formatOption.value} value={formatOption.value}>
                      {formatOption.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="min-w-0">
                <span className="font-mono text-[10px] uppercase text-foreground/45">Year</span>
                <select
                  value={filters.year}
                  onChange={(yearEvent) => updateFilters({ year: yearEvent.target.value })}
                  className={selectClass}
                >
                  <option value="">All</option>
                  {archiveYears.map((archiveYear) => (
                    <option key={archiveYear} value={archiveYear}>
                      {archiveYear}
                    </option>
                  ))}
                </select>
              </label>
              <label className="min-w-0">
                <span className="font-mono text-[10px] uppercase text-foreground/45">Topic</span>
                <select
                  value={filters.topic}
                  onChange={(topicEvent) =>
                    updateFilters({ topic: topicEvent.target.value as ArchiveFilters["topic"] })
                  }
                  className={selectClass}
                >
                  <option value="">All</option>
                  {archiveTopicOptions.map((topicOption) => (
                    <option key={topicOption.value} value={topicOption.value}>
                      {topicOption.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="min-w-0">
                <span className="font-mono text-[10px] uppercase text-foreground/45">Source</span>
                <select
                  value={filters.ownership}
                  onChange={(sourceEvent) =>
                    updateFilters({
                      ownership: sourceEvent.target.value as ArchiveFilters["ownership"],
                    })
                  }
                  className={selectClass}
                >
                  <option value="">All</option>
                  <option value="first-party">First-party</option>
                  <option value="independent">Independent</option>
                </select>
              </label>
              <label className="min-w-0">
                <span className="font-mono text-[10px] uppercase text-foreground/45">Sort</span>
                <select
                  value={filters.sort}
                  onChange={(sortEvent) =>
                    updateFilters({ sort: sortEvent.target.value as ArchiveFilters["sort"] })
                  }
                  className={selectClass}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-b-2 border-foreground pb-4">
          <p aria-live="polite" className="font-mono text-xs uppercase tracking-widest">
            {matchingRecords.length} {matchingRecords.length === 1 ? "record" : "records"}
            <span className="ml-3 text-foreground/45">Showing {shownCount}</span>
          </p>
          <button
            type="button"
            onClick={() => {
              setFilters(defaultArchiveFilters);
              setVisibleCount(PAGE_SIZE);
            }}
            disabled={!hasActiveFilters}
            className="font-mono text-xs uppercase tracking-widest underline decoration-dotted underline-offset-4 transition-colors hover:text-accent disabled:cursor-not-allowed disabled:text-foreground/25 disabled:no-underline"
          >
            Clear filters
          </button>
        </div>

        <div
          aria-hidden="true"
          className="hidden grid-cols-[7.5rem_minmax(0,1fr)_minmax(8rem,0.65fr)_9rem] gap-6 border-b border-foreground/20 py-3 font-mono text-[10px] uppercase tracking-widest text-foreground/35 md:grid"
        >
          <span>Date</span>
          <span>Record</span>
          <span>Topics</span>
          <span>Source / format</span>
        </div>

        <ol id="archive-records">
          {orderedRecords.map((archiveRecord) => (
            <ArchiveRecordRow
              key={archiveRecord.id}
              archiveRecord={archiveRecord}
              visible={
                matchingRecordIds.has(archiveRecord.id) && visibleRecordIds.has(archiveRecord.id)
              }
            />
          ))}
        </ol>

        {matchingRecords.length === 0 ? (
          <p className="border-t border-foreground/20 py-16 text-center font-body text-lg text-foreground/60">
            No records match those filters.
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          {remainingCount > 0 ? (
            <button
              type="button"
              aria-controls="archive-records"
              onClick={() => setVisibleCount((currentCount) => currentCount + PAGE_SIZE)}
              className="border border-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:bg-accent hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Show {Math.min(PAGE_SIZE, remainingCount)} more
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={backToTop}
            className="font-mono text-xs uppercase tracking-widest underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
          >
            Back to top
          </button>
        </div>

        <p className="mt-10 border-t border-foreground/15 pt-4 font-mono text-[10px] uppercase tracking-wider text-foreground/40">
          LinkedIn coverage: {linkedinArchiveNote}
        </p>
      </div>
    </section>
  );
}
