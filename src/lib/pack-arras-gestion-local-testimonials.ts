import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";

type T = NonNullable<PackCommercialLocalSeoContent["testimonials"]>[number];

/** Testimonios únicos por slug (solo si la landing no los define ya en SEO). */
const PACK_ARRAS_GESTION_TESTIMONIALS_BY_SLUG: Record<string, readonly T[]> = {
  "barcelona-les-corts": [
    {
      quote:
        "Vendí en Pedralbes con plaza de parking incluida. Las arras reflejaron anexo y cláusula 621-49 — el comprador no pidió rebaja en notaría.",
      author: "Elena V.",
      role: "Vendedora particular · Les Corts",
    },
    {
      quote:
        "Desde Zurich seguí todo en el panel: certificado de comunidad en un bloque de la Zona Universitària tardó 18 días, pero el gestor lo persiguió.",
      author: "Marc T.",
      role: "Propietario no residente · Pedralbes",
    },
  ],
  "barcelona-eixample": [
    {
      quote:
        "Terraza no inscrita en Dreta de l'Eixample: lo detectaron en la semana 1 y lo dejamos reflejado en arras antes de la señal.",
      author: "Silvia R.",
      role: "Vendedora entre particulares · Eixample",
    },
    {
      quote:
        "Derrama de fachada aprobada en junta: el informe semáforo evitó sorpresa el día de la firma en Esquerra.",
      author: "Joan M.",
      role: "Vendedor particular · Barcelona",
    },
  ],
  "hospitalet-de-llobregat": [
    {
      quote:
        "Comprador de Barcelona capital, piso en Collblanc: recalibraron plazos de comunidad en arras — 495 € y sin comisión.",
      author: "Rosa P.",
      role: "Vendedora particular · L'Hospitalet",
    },
    {
      quote:
        "Bellvitge, bloque grande: certificado de deuda a las tres semanas, pero la escritura se mantuvo gracias al seguimiento del gestor.",
      author: "Iván G.",
      role: "Vendedor entre particulares · L'Hospitalet",
    },
  ],
  madrid: [
    {
      quote:
        "Venta en Chamberí con ITE pendiente: el gestor coordinó deficiencias menores antes de que el banco del comprador pidiera más papeles.",
      author: "Lucía F.",
      role: "Vendedora particular · Madrid",
    },
    {
      quote:
        "Ya tenía comprador por Idealista. 495 € frente a ~10.000 € de comisión — arras equilibradas en Salamanca.",
      author: "Diego A.",
      role: "Vendedor entre particulares · Madrid",
    },
  ],
  barcelona: [
    {
      quote:
        "Herencia en Barcelona ciudad: pack arras + gestión desde el panel sin ir a tres gestorías distintas.",
      author: "Núria C.",
      role: "Vendedora particular · Barcelona",
    },
    {
      quote:
        "Cèdula caducada detectada antes de firmar arras — en Catalunya eso puede tumbar la operación.",
      author: "Oriol B.",
      role: "Vendedor entre particulares · Barcelona",
    },
  ],
  valencia: [
    {
      quote:
        "Vendí en Campanar con comprador de la zona. Comunidad lenta pero arras bien redactadas — cero rebaja tardía.",
      author: "Marina L.",
      role: "Vendedora particular · Valencia",
    },
    {
      quote:
        "Segunda residencia en la Malvarrosa: todo por WhatsApp hasta notaría en Valencia capital.",
      author: "Carlos H.",
      role: "Propietario no residente · Valencia",
    },
  ],
  malaga: [
    {
      quote:
        "Comprador británico en Teatinos: documentación en castellano claro y arras con plazos realistas — 495 € IVA incl.",
      author: "Patricia S.",
      role: "Vendedora particular · Málaga",
    },
    {
      quote:
        "Cancelación hipotecaria alineada con lo pactado en arras. El gestor persiguió al banco mientras yo cerraba mudanza.",
      author: "Francisco J.",
      role: "Vendedor entre particulares · Málaga",
    },
  ],
  "barcelona-poblenou": [
    {
      quote:
        "Loft en 22@ vendido entre particulares: parking anexo en arras y terraza comunitaria descrita — pack Livendia.",
      author: "Aina D.",
      role: "Vendedora particular · Poblenou",
    },
  ],
  "barcelona-born": [
    {
      quote:
        "Finca en El Born con inquilino turístico en planta baja: el gestor separó qué transmitía y qué no en el contrato de arras.",
      author: "Quim S.",
      role: "Vendedor particular · El Born",
    },
  ],
  "barcelona-sarria-sant-gervasi": [
    {
      quote:
        "Operación de importe alto en Sarrià: señal calibrada conforme CCCat — mucho más barato que una agencia.",
      author: "Montse V.",
      role: "Vendedora particular · Sarrià",
    },
  ],
  "cornella-de-llobregat": [
    {
      quote:
        "Sant Ildefons, venta a vecino del edificio: arras en una semana y comunidad en paralelo — 495 €.",
      author: "Javier N.",
      role: "Vendedor entre particulares · Cornellà",
    },
  ],
  sabadell: [
    {
      quote:
        "Creu Alta, comprador con hipoteca: cláusula suspensiva bien redactada y certificado de comunidad a tiempo.",
      author: "Mireia O.",
      role: "Vendedora particular · Sabadell",
    },
  ],
  terrassa: [
    {
      quote:
        "Venta familiar en Terrassa centre: varios vendedores en herencia — el gestor alineó titularidad antes de arras.",
      author: "Albert R.",
      role: "Vendedor entre particulares · Terrassa",
    },
  ],
  "barcelona-sant-marti": [
    {
      quote:
        "Piso en Diagonal Mar con trastero: todo reflejado en precio y arras. Gestor Livendia hasta notaría.",
      author: "Clara W.",
      role: "Vendedora particular · Sant Martí",
    },
  ],
};

export function withPackArrasGestionTestimonials(
  slug: string,
  seo: PackCommercialLocalSeoContent,
): PackCommercialLocalSeoContent {
  if (seo.testimonials?.length) return seo;
  const extra = PACK_ARRAS_GESTION_TESTIMONIALS_BY_SLUG[slug];
  if (!extra?.length) return seo;
  return { ...seo, testimonials: extra };
}
