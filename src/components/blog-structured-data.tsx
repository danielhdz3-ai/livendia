import type { BlogPost } from "@/lib/blog-types";
import { BLOG_DEFAULT_OG_IMAGE } from "@/lib/blog-types";
import { getSiteUrl } from "@/lib/site-url";

function toIso8601(dateYmd: string): string {
  return `${dateYmd}T12:00:00+01:00`;
}

function absoluteImageUrl(ogImage: string | undefined): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const path = ogImage?.startsWith("/") ? ogImage : `/${ogImage ?? BLOG_DEFAULT_OG_IMAGE}`;
  return path.startsWith("http") ? path : `${base}${path}`;
}

type BlogStructuredDataProps = {
  post: BlogPost;
};

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}/blog/${post.slug}`;
  const imageUrl = absoluteImageUrl(post.ogImage);
  const orgId = `${base}/#organization`;

  const blogPosting = {
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: toIso8601(post.date),
    dateModified: toIso8601(post.modified),
    author: {
      "@type": "Organization",
      "@id": orgId,
      name: "Livendia",
    },
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: "Livendia",
    },
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: "es-ES",
    image: [imageUrl],
    articleSection: post.category,
    ...(post.city ? { contentLocation: { "@type": "Place", name: post.city } } : {}),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: base },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [blogPosting, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
