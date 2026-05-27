export {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_IMAGES,
  BLOG_CATEGORY_LABEL,
  BLOG_DEFAULT_OG_IMAGE,
  BLOG_POSTS_PER_PAGE,
  type BlogCategory,
  type BlogPost,
  type BlogTocItem,
} from "@/lib/blog-types";

export {
  getAdjacentPosts,
  getAllPostSlugs,
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
} from "@/lib/blog-content";

export { getCategoryCta, type BlogCategoryCta } from "@/lib/blog-cta";

export { extractTocHeadings } from "@/lib/blog-headings";

import { getAllPosts as _getAllPosts } from "@/lib/blog-content";

export function sortedBlogPosts() {
  return _getAllPosts();
}
