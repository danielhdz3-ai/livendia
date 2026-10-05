import type { PaaArticle } from "@/lib/paa-types";
import { getSiteUrl } from "@/lib/site-url";

export function PaaStructuredData({ article }: { article: PaaArticle }) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}/respuestas/${article.slug}`;
  const imagePath = article.ogImage ?? "/images/contratos2.jpg";
  const imageUrl = `${base}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.modified,
        inLanguage: "es-ES",
        isPartOf: { "@id": `${base}/#website` },
        author: { "@id": `${base}/#organization` },
        publisher: { "@id": `${base}/#organization` },
        mainEntityOfPage: pageUrl,
        image: imageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          { "@type": "ListItem", position: 2, name: "Respuestas", item: `${base}/respuestas` },
          { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
