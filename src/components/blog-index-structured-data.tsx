import type { BlogPost } from "@/lib/blog-types";
import { getSiteUrl } from "@/lib/site-url";

type BlogIndexStructuredDataProps = {
  posts: BlogPost[];
};

export function BlogIndexStructuredData({ posts }: BlogIndexStructuredDataProps) {
  const base = getSiteUrl().replace(/\/$/, "");
  const blogUrl = `${base}/blog`;

  const blog = {
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    name: "Blog Livendia — Gestoría inmobiliaria",
    description:
      "Artículos y guías sobre contratos de alquiler, compraventa, arras, LAU y administración de alquileres.",
    url: blogUrl,
    inLanguage: "es-ES",
    publisher: { "@id": `${base}/#organization` },
  };

  const itemList = {
    "@type": "ItemList",
    "@id": `${blogUrl}#itemlist`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: `${base}/blog/${post.slug}`,
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [blog, itemList],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
