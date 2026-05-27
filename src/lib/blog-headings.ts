import GithubSlugger from "github-slugger";
import type { BlogTocItem } from "@/lib/blog-types";

/** Extrae H2/H3 del markdown para la tabla de contenidos (mismos ids que rehype-slug). */
export function extractTocHeadings(markdown: string): BlogTocItem[] {
  const slugger = new GithubSlugger();
  const items: BlogTocItem[] = [];

  for (const line of markdown.split("\n")) {
    const h2 = /^##\s+(.+?)\s*$/.exec(line);
    if (h2) {
      const text = h2[1].trim();
      items.push({ level: 2, text, id: slugger.slug(text) });
      continue;
    }
    const h3 = /^###\s+(.+?)\s*$/.exec(line);
    if (h3) {
      const text = h3[1].trim();
      items.push({ level: 3, text, id: slugger.slug(text) });
    }
  }

  return items;
}
