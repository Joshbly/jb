import { appearances } from "./appearances";
import { linkedinArchiveNote, linkedinPosts } from "./linkedin";
import { pressRecords } from "./press";
import type { DeckRecord, RecordingRecord } from "./types";
import { writtenWorks } from "./writing";

const podcastKinds = new Set(["podcast", "interview"]);

const featuredPodcastIds = new Set([
  "2026-03-12-media-copilot",
  "2026-01-06-marketing-architects",
  "2026-01-05-voices-of-search",
  "2025-09-24-long-game",
  "2025-06-30-siege-media",
  "2025-06-17-aive-got-questions",
]);

export type {
  Appearance,
  AppearanceKind,
  DeckRecord,
  LinkedInPost,
  LinkedInPostKind,
  MediaLink,
  PressKind,
  PressRecord,
  RecordingRecord,
  WrittenWork,
  WrittenWorkKind,
} from "./types";
export { appearances, linkedinArchiveNote, linkedinPosts, pressRecords, writtenWorks };

export const stageAppearances = appearances.filter(
  (appearance) => !podcastKinds.has(appearance.kind),
);

export const podcastAppearances = appearances.filter((appearance) =>
  podcastKinds.has(appearance.kind),
);

export const featuredStageAppearances = stageAppearances.filter(
  (appearance) => appearance.featuredOnHome,
);

export const featuredPodcastAppearances = podcastAppearances.filter((appearance) =>
  featuredPodcastIds.has(appearance.id),
);

export const featuredPressRecords = pressRecords.filter((record) => record.featuredOnHome);

export const featuredWrittenWorks = writtenWorks.filter((work) => work.featuredOnHome);

export const decks: readonly DeckRecord[] = Array.from(
  appearances.reduce((deckMap, appearance) => {
    if (!appearance.slides) {
      return deckMap;
    }

    const existingDeck = deckMap.get(appearance.slides);
    if (existingDeck) {
      existingDeck.relatedAppearances.push(appearance.id);
      return deckMap;
    }

    deckMap.set(appearance.slides, {
      id: `deck-${appearance.id}`,
      date: appearance.date,
      title: appearance.title,
      event: appearance.event,
      href: appearance.slides,
      relatedAppearances: [appearance.id],
    });
    return deckMap;
  }, new Map<string, Omit<DeckRecord, "relatedAppearances"> & { relatedAppearances: string[] }>()),
).map(([, deck]) => deck);

export const recordings: readonly RecordingRecord[] = Array.from(
  appearances.reduce((recordingMap, appearance) => {
    if (!appearance.recording || recordingMap.has(appearance.recording)) {
      return recordingMap;
    }

    recordingMap.set(appearance.recording, {
      id: `recording-${appearance.id}`,
      date: appearance.date,
      title: appearance.title,
      source: appearance.event,
      href: appearance.recording,
      appearanceId: appearance.id,
    });
    return recordingMap;
  }, new Map<string, RecordingRecord>()),
).map(([, recording]) => recording);

const archiveDates = [
  ...appearances
    .filter((appearance) => appearance.status !== "upcoming")
    .map((appearance) => appearance.date),
  ...writtenWorks.map((work) => work.date),
  ...linkedinPosts.map((post) => post.date),
  ...pressRecords.map((record) => record.date),
];

export const latestMediaDate = new Date(
  Math.max(...archiveDates.map((date) => new Date(date).getTime())),
);
