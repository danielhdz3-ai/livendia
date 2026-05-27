/**
 * Catálogo: tipos y constantes compartidas. Seguro para importar en Client Components.
 */

export type PublicService = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  category: string | null;
  price_cents: number;
  is_recurring: boolean;
  features: string[] | null;
  badge: string | null;
};

/** Servicios que deben existir en BD; se sincronizan en servidor si faltan. */
export type CatalogServiceSeed = Omit<PublicService, "id">;

export const CATALOG_SERVICE_SEEDS: CatalogServiceSeed[] = [
  {
    slug: "revision-documental-post-arras",
    name: "Pack Revisión Documental post-arras",
    description:
      "Verificación documental integral tras firmar arras y antes de escriturar. Revisamos contrato de arras, actas de comunidad, derramas, ITE, nota registral e información urbanística. Informe ejecutivo + llamada de veredicto y asesoramiento telefónico.",
    category: "compraventa",
    price_cents: 16900,
    is_recurring: false,
    features: [
      "Revisión completa de contrato de arras",
      "Revisión de actas de comunidad (últimos 2 años)",
      "Verificación de derramas pendientes y extraordinarias",
      "Análisis del ITE (Inspección Técnica de Edificios)",
      "Obtención y revisión de nota registral actualizada",
      "Consulta de información urbanística y licencias",
      "Informe ejecutivo PDF con hallazgos y recomendaciones",
      "Llamada de veredicto con gestor especializado",
      "Asesoramiento telefónico para dudas durante el proceso",
      "Entrega en 3-5 días · Análisis en 48h",
    ],
    badge: "Pre-escritura",
  },
];

export const CATEGORY_LABEL: Record<string, string> = {
  compraventa: "Compraventa",
  alquiler: "Alquiler",
  pack: "Packs",
  administracion_alquiler: "Administración de alquiler",
  contrato: "Contratos",
  acompanamiento: "Acompañamiento",
  revision: "Revisión",
  otro: "Otros",
};

export const CATEGORY_ORDER = [
  "compraventa",
  "alquiler",
  "pack",
  "administracion_alquiler",
  "contrato",
  "acompanamiento",
  "revision",
  "otro",
];

export function formatEur(cents: number) {
  return `${(cents / 100).toFixed(2).replace(".", ",")} €`;
}

export function groupByCategory(services: PublicService[]) {
  const map = new Map<string, PublicService[]>();
  for (const s of services) {
    const c = s.category ?? "otro";
    if (!map.has(c)) map.set(c, []);
    map.get(c)!.push(s);
  }
  const sortedKeys = [...map.keys()].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  return sortedKeys.map((key) => ({
    key,
    label: CATEGORY_LABEL[key] ?? key,
    items: sortServicesWithinCategory(key, map.get(key)!),
  }));
}

/** Prioridad dentro de la misma categoría (compra completa y packs premium primero). */
function sortServicesWithinCategory(category: string, items: PublicService[]): PublicService[] {
  const rank = (s: PublicService): number => {
    if (category === "compraventa" && s.slug === "servicio-completo-compra") return -100;
    if (category === "compraventa") {
      const order = [
        "contrato-arras-penitenciales",
        "contrato-arras-confirmatorias",
        "revision-documental-post-arras",
        "reserva-de-compra",
      ];
      const i = order.indexOf(s.slug);
      if (i !== -1) return i;
    }
    if (category === "acompanamiento") {
      const order = ["servicio-completo-compra", "acompanamiento-reserva-arras"];
      const i = order.indexOf(s.slug);
      if (i !== -1) return i - 100;
    }
    return s.price_cents;
  };
  return [...items].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name, "es");
  });
}

/** Imagen de portada por slug de servicio */
export const SERVICE_IMAGES: Record<string, string> = {
  "administracion-alquiler": "/images/gestoria.jpg",
  "contrato-alquiler-lau": "/images/contratos.jpg",
  "contrato-alquiler-temporada": "/images/contratos5.jpg",
  "contrato-alquiler-habitacion": "/images/contratos2.jpg",
  "contrato-arras-penitenciales": "/images/contratos1.jpg",
  "contrato-arras-confirmatorias": "/images/contratos7.jpg",
  "reserva-de-compra": "/images/contratos6.jpg",
  "acompanamiento-reserva-arras": "/images/familia1.jpg",
  "servicio-completo-compra": "/images/familia2.jpg",
  "revision-documental-post-arras": "/images/gestoria20.jpg",
  /** Landing informativa (no catálogo DB) — imagen principal de la página dedicada */
  "contrato-de-arras": "/images/contratodearras.jpg",
  "contrato-de-alquiler": "/images/contratodealquiler.jpg",
};
