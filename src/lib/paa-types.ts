import type { BlogCategory } from "@/lib/blog-types";

export type PaaArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
  modified: string;
  category: BlogCategory;
  ogImage?: string;
  published: boolean;
};

export type PaaArticle = PaaArticleFrontmatter & {
  slug: string;
  content: string;
};

export type PaaRegistryEntry = {
  /** Slug canónico (carpeta respuestas o clave del registro). */
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  /** Si el contenido largo ya está en el blog, enlazamos allí. */
  blogSlug?: string;
  matchers: RegExp[];
  ogImage?: string;
};
