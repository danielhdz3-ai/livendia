import { getAllPublishedRespuestas } from "@/lib/paa-content";
import { getSiteUrl } from "@/lib/site-url";

export function RespuestasIndexStructuredData() {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}/respuestas`;
  const articles = getAllPublishedRespuestas();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        name: "Respuestas a preguntas frecuentes (PAA)",
        description:
          "Micro-guías sobre alquiler, arras, compraventa entre particulares y administración de alquileres.",
        url: pageUrl,
        inLanguage: "es-ES",
        isPartOf: { "@id": `${base}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: articles.map((a) => ({
          "@type": "Question",
          name: a.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: a.description,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          { "@type": "ListItem", position: 2, name: "Respuestas", item: pageUrl },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
