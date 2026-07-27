import type { ResearchStudyNotes } from "@/content/research";

type StudyNotesProps = {
  notes: ResearchStudyNotes;
};

type StudyNoteEntry = {
  text: string;
  url?: string;
};

type StudyNoteRow = {
  label: string;
  entries: readonly StudyNoteEntry[] | undefined;
};

export function StudyNotes({ notes }: StudyNotesProps) {
  const studyNoteRows: readonly StudyNoteRow[] = [
    {
      label: "Dataset",
      entries: notes.dataset?.map((datasetFact) => ({ text: datasetFact })),
    },
    {
      label: "Collection window",
      entries: notes.collectionWindow ? [{ text: notes.collectionWindow }] : undefined,
    },
    {
      label: "Engines and products",
      entries: notes.products?.length ? [{ text: notes.products.join(", ") }] : undefined,
    },
    {
      label: "Sample",
      entries: notes.sample?.map((sampleDefinition) => ({ text: sampleDefinition })),
    },
    {
      label: "Analysis",
      entries: notes.analysis?.map((analysisStep) => ({ text: analysisStep })),
    },
    {
      label: "Contributors",
      entries: notes.contributors?.map((contributor) => ({ text: contributor })),
    },
    {
      label: "Access",
      entries: notes.access?.map((source) => ({
        text: `${source.name} · ${source.publisher}`,
        url: source.url,
      })),
    },
    {
      label: "Limitations",
      entries: notes.limitations?.map((limitation) => ({ text: limitation })),
    },
    {
      label: "Details not published",
      entries: notes.detailsNotPublished ? [{ text: notes.detailsNotPublished }] : undefined,
    },
  ];

  return (
    <section aria-labelledby="study-notes-heading" className="border-t border-foreground/20 pt-8">
      <div className="grid gap-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
        <h2
          id="study-notes-heading"
          className="font-mono text-xs uppercase tracking-widest text-accent"
        >
          Study notes
        </h2>
        <dl className="border-y border-foreground/15">
          {studyNoteRows.map((studyNoteRow) => {
            const noteEntries = studyNoteRow.entries;
            if (!noteEntries?.length) {
              return null;
            }

            return (
              <div
                key={studyNoteRow.label}
                className="grid gap-2 border-b border-foreground/10 py-3 last:border-b-0 sm:grid-cols-[9rem_1fr] sm:gap-4"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  {studyNoteRow.label}
                </dt>
                <dd>
                  <ul className="space-y-1.5">
                    {noteEntries.map((noteEntry) => (
                      <li
                        key={`${studyNoteRow.label}-${noteEntry.text}`}
                        className="flex gap-2 font-body text-sm leading-relaxed text-foreground/75"
                      >
                        {noteEntries.length > 1 ? (
                          <span aria-hidden="true" className="text-accent">
                            ·
                          </span>
                        ) : null}
                        {noteEntry.url ? (
                          <a
                            href={noteEntry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-1 underline-offset-4 hover:text-accent"
                          >
                            {noteEntry.text}
                          </a>
                        ) : (
                          <span>{noteEntry.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
