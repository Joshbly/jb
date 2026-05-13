import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";

export type Episode = {
  slug: string;
  number: number;
  title: string;
  preview: string;
  readTime: number;
  content: string;
};

const CONTENT_DIR = join(process.cwd(), "content/smooth");
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const WORDS_PER_MINUTE = 200;

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(FRONTMATTER);
  if (!match) {
    return { data: {}, body: raw };
  }

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) {
      continue;
    }
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["'](.+)["']$/, "$1");
    if (key) {
      data[key] = value;
    }
  }

  return { data, body: raw.slice(match[0].length) };
}

function loadEpisode(file: string): Episode {
  const slug = file.replace(/\.md$/, "");
  const raw = readFileSync(join(CONTENT_DIR, file), "utf-8");
  const { data, body } = parseFrontmatter(raw);

  if (!(data.number && data.title)) {
    throw new Error(`Episode ${file} is missing required frontmatter (number, title)`);
  }

  return {
    slug,
    number: Number(data.number),
    title: data.title,
    preview: data.preview ?? "",
    readTime: readingTime(body),
    content: body,
  };
}

export const getEpisodes = cache((): Episode[] => {
  let files: string[];
  try {
    files = readdirSync(CONTENT_DIR);
  } catch {
    return [];
  }
  return files
    .filter((f) => f.endsWith(".md"))
    .map(loadEpisode)
    .sort((a, b) => a.number - b.number);
});

export const getEpisode = cache((slug: string): Episode | null => {
  return getEpisodes().find((e) => e.slug === slug) ?? null;
});
