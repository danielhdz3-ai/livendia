import { buildAggregateRatingSchema } from "@/lib/schema-local-business";

/**
 * Valoración agregada (Google Business Profile) solo donde hay bloque de testimonios visible.
 * Un único AggregateRating referenciando #localbusiness — evita "varias puntuaciones agregadas".
 */
export function TrustRatingStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [buildAggregateRatingSchema()],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
