import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-types";
import type { PaaArticle, PaaArticleFrontmatter } from "@/lib/paa-types";
import { getPaaRegistryBySlug, getRespuestasRegistryEntries } from "@/lib/paa-registry";

const PAA_DIR = path.join(process.cwd(), "src/content/respuestas");

function isBlogCategory(v: unknown): v is BlogCategory {
  return typeof v === "string" && (BLOG_CATEGORIES as readonly string[]).includes(v);
}

function parseFrontmatter(data: Record<string, unknown>): PaaArticleFrontmatter | null {
  if (typeof data.title !== "string" || !data.title.trim()) return null;
  if (typeof data.description !== "string" || !data.description.trim()) return null;
  if (typeof data.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) return null;

  const modified =
    typeof data.modified === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data.modified)
      ? data.modified
      : data.date;

  if (!isBlogCategory(data.category)) return null;

  const published = data.published !== false;

  return {
    title: data.title.trim(),
    description: data.description.trim(),
    date: data.date,
    modified,
    category: data.category,
    ogImage:
      typeof data.ogImage === "string" && data.ogImage.trim() ? data.ogImage.trim() : undefined,
    published,
  };
}

function readRespuestaFile(slug: string): PaaArticle | null {
  for (const ext of [".mdx", ".md"]) {
    const filePath = path.join(PAA_DIR, `${slug}${ext}`);
    if (!fs.existsSync(filePath)) continue;
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const fm = parseFrontmatter(data as Record<string, unknown>);
    if (!fm) return null;
    return { slug, ...fm, content: content.trim() };
  }
  return null;
}

export function getRespuestaBySlug(slug: string): PaaArticle | undefined {
  const article = readRespuestaFile(slug);
  if (!article?.published) return undefined;
  const registry = getPaaRegistryBySlug(slug);
  if (registry?.blogSlug) return undefined;
  return article;
}

export function getAllRespuestaSlugs(): string[] {
  const slugs = new Set<string>();
  for (const entry of getRespuestasRegistryEntries()) {
    slugs.add(entry.slug);
  }
  if (fs.existsSync(PAA_DIR)) {
    for (const f of fs.readdirSync(PAA_DIR)) {
      const m = f.match(/^(.+)\.mdx?$/i);
      if (m) slugs.add(m[1]!);
    }
  }
  return [...slugs].filter((slug) => getRespuestaBySlug(slug) != null);
}

export function getAllPublishedRespuestas(): PaaArticle[] {
  return getAllRespuestaSlugs()
    .map((slug) => getRespuestaBySlug(slug))
    .filter((a): a is PaaArticle => a != null)
    .sort((a, b) => b.date.localeCompare(a.date) || b.modified.localeCompare(a.modified));
}
