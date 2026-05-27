export const BLOG_CATEGORIES = ["alquiler", "compraventa", "administracion", "legal"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostFrontmatter = {
  title: string;
  description: string;
  date: string;
  modified: string;
  category: BlogCategory;
  city?: string;
  ogImage?: string;
  published: boolean;
};

export type BlogPost = BlogPostFrontmatter & {
  slug: string;
  content: string;
};

export type BlogTocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export const BLOG_CATEGORY_LABEL: Record<BlogCategory, string> = {
  alquiler: "Alquiler",
  compraventa: "Compraventa",
  administracion: "Administración",
  legal: "Legal",
};

export const BLOG_CATEGORY_IMAGES: Record<BlogCategory, string> = {
  alquiler: "/images/contratos.jpg",
  compraventa: "/images/contratodearras.jpg",
  administracion: "/images/gestoria20.jpg",
  legal: "/images/contratos2.jpg",
};

export const BLOG_DEFAULT_OG_IMAGE = "/images/contratos2.jpg";

export const BLOG_POSTS_PER_PAGE = 12;
