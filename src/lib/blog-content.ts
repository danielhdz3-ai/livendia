import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  BLOG_CATEGORIES,
  type BlogCategory,
  type BlogPost,
  type BlogPostFrontmatter,
} from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function isBlogCategory(v: unknown): v is BlogCategory {
  return typeof v === "string" && (BLOG_CATEGORIES as readonly string[]).includes(v);
}

function parseFrontmatter(data: Record<string, unknown>, slug: string): BlogPostFrontmatter | null {
  if (typeof data.title !== "string" || !data.title.trim()) return null;
  if (typeof data.description !== "string" || !data.description.trim()) return null;
  if (typeof data.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) return null;

  const modified = typeof data.modified === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data.modified)
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
    city: typeof data.city === "string" && data.city.trim() ? data.city.trim() : undefined,
    ogImage: typeof data.ogImage === "string" && data.ogImage.trim() ? data.ogImage.trim() : undefined,
    published,
  };
}

function readPostFile(filename: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx?$/i, "");
  const fm = parseFrontmatter(data as Record<string, unknown>, slug);
  if (!fm) return null;
  return { slug, ...fm, content: content.trim() };
}

function listBlogFilenames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/i.test(f));
}

/** Todos los posts publicados, ordenados por fecha descendente. */
export function getAllPosts(): BlogPost[] {
  return listBlogFilenames()
    .map(readPostFile)
    .filter((p): p is BlogPost => p != null && p.published)
    .sort((a, b) => b.date.localeCompare(a.date) || b.modified.localeCompare(a.modified));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  for (const ext of [".mdx", ".md"]) {
    const file = `${slug}${ext}`;
    if (!fs.existsSync(path.join(BLOG_DIR, file))) continue;
    const post = readPostFile(file);
    if (post?.published) return post;
  }
  return undefined;
}

export function getPostsByCategory(category: BlogCategory | "all"): BlogPost[] {
  const all = getAllPosts();
  if (category === "all") return all;
  return all.filter((p) => p.category === category);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const sorted = getAllPosts();
  const idx = sorted.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < sorted.length - 1 ? sorted[idx + 1]! : null,
    next: idx > 0 ? sorted[idx - 1]! : null,
  };
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
