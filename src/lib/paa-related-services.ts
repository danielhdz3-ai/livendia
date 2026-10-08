import type { BlogCategory } from "@/lib/blog-types";
import type { GestoriaVerticalServiceKey } from "@/lib/gestoria-city-vertical-hub-enrichment";

/** Cinco apartados tipo hub Inmonest en compraventa. */
export const PAA_COMPRAVENTA_FIVE: readonly GestoriaVerticalServiceKey[] = [
  "arras",
  "revision-post-arras",
  "compra-completa",
  "venta-completa",
  "pack-arras-gestion",
];

/** Cinco apartados en alquiler / administración. */
export const PAA_ALQUILER_FIVE: readonly GestoriaVerticalServiceKey[] = [
  "lau",
  "temporada",
  "habitacion",
  "revision-alquiler",
  "admin",
];

/** Reordenar: servicios más ligados al tema del artículo primero, manteniendo siempre 5. */
const PAA_SLUG_PRIORITY: Partial<Record<string, readonly GestoriaVerticalServiceKey[]>> = {
  "que-pasa-si-desisto-arras": ["arras", "revision-post-arras", "venta-completa", "compra-completa", "pack-arras-gestion"],
  "como-calcular-arras": ["arras", "reserva-arras", "reserva-nacional", "compra-completa", "pack-arras-gestion"],
  "diferencia-reserva-y-arras": ["reserva-nacional", "reserva-arras", "arras", "compra-completa", "revision-post-arras"],
  "revision-documental-post-arras": ["revision-post-arras", "arras", "compra-completa", "venta-completa", "pack-arras-gestion"],
  "que-es-nota-simple": ["revision-post-arras", "arras", "compra-completa", "venta-completa", "pack-arras-gestion"],
  "documentos-comprar-piso-entre-particulares": [
    "revision-post-arras",
    "compra-completa",
    "arras",
    "reserva-arras",
    "pack-arras-gestion",
  ],
  "documentos-vender-piso-entre-particulares": [
    "venta-completa",
    "pack-arras-gestion",
    "arras",
    "revision-post-arras",
    "compra-completa",
  ],
  "servicio-completo-notaria-tasacion": ["compra-completa", "venta-completa", "arras", "revision-post-arras", "pack-arras-gestion"],
  "cuanto-fianza-alquiler-legal": ["lau", "revision-alquiler", "habitacion", "temporada", "admin"],
  "contrato-temporada-o-lau": ["temporada", "lau", "revision-alquiler", "habitacion", "admin"],
  "como-calcular-ipc-alquiler": ["lau", "admin", "revision-alquiler", "temporada", "habitacion"],
  "vender-piso-con-inquilino-dentro": ["admin", "venta-completa", "lau", "revision-alquiler", "arras"],
  "recuperar-vivienda-uso-propio": ["admin", "revision-alquiler", "lau", "temporada", "habitacion"],
  "inventario-contrato-lau": ["lau", "habitacion", "temporada", "revision-alquiler", "admin"],
  "livendia-busca-comprador": ["compra-completa", "venta-completa", "arras", "revision-post-arras", "pack-arras-gestion"],
};

function baseFiveForCategory(category: BlogCategory): readonly GestoriaVerticalServiceKey[] {
  if (category === "alquiler" || category === "administracion" || category === "actualidad") {
    return PAA_ALQUILER_FIVE;
  }
  return PAA_COMPRAVENTA_FIVE;
}

function mergeToFive(
  preferred: readonly GestoriaVerticalServiceKey[],
  pool: readonly GestoriaVerticalServiceKey[],
): GestoriaVerticalServiceKey[] {
  const seen = new Set<GestoriaVerticalServiceKey>();
  const out: GestoriaVerticalServiceKey[] = [];
  for (const key of preferred) {
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(key);
    if (out.length >= 5) return out;
  }
  for (const key of pool) {
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(key);
    if (out.length >= 5) return out;
  }
  return out;
}

export function getPaaRelatedServiceKeys(
  slug: string,
  category: BlogCategory,
): GestoriaVerticalServiceKey[] {
  const base = baseFiveForCategory(category);
  const priority = PAA_SLUG_PRIORITY[slug] ?? base;
  return mergeToFive(priority, base);
}

export function getPaaServiceCatalogCopy(category: BlogCategory): {
  eyebrow: string;
  title: string;
  subtitle: string;
} {
  if (category === "alquiler" || category === "administracion") {
    return {
      eyebrow: "CADA SERVICIO, UN APARTADO",
      title: "Nuestros servicios de contratos inmobiliarios en Livendia",
      subtitle:
        "Contrato LAU, temporada, habitación, revisión de borrador y administración: precio cerrado, panel online y gestor asignado — cinco apartados explicados abajo.",
    };
  }
  return {
    eyebrow: "CADA SERVICIO, UN APARTADO",
    title: "Nuestros servicios de contratos inmobiliarios",
    subtitle:
      "Contrato de arras, revisión post-arras, acompañamiento de compra o venta y pack para vendedores: tarifas publicadas, imágenes reales del servicio y gestor asignado.",
  };
}
