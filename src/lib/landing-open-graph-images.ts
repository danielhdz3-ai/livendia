import type { Metadata } from "next";

/** Imagen Open Graph / Twitter por landing de servicio (1200×630 recomendado; usar fotos horizontales del pack Pexels). */
export const LANDING_OPEN_GRAPH_IMAGES = {
  "servicio-alquiler-integral": {
    path: "/images/og/servicio-alquiler-integral.jpg",
    width: 1200,
    height: 630,
    alt: "Servicio de alquiler integral Livendia: captación de inquilino, solvencia y contrato LAU",
  },
  "servicio-completo-venta": {
    path: "/images/servicio-completo-venta-hero.jpg",
    width: 1200,
    height: 1600,
    alt: "Acuerdo de venta de vivienda con gestoría Livendia",
  },
  "administracion-alquiler-temporada": {
    path: "/images/og/administracion-alquiler-temporada.jpg",
    width: 1200,
    height: 630,
    alt: "Administración de alquiler por temporada o habitaciones Livendia",
  },
} as const satisfies Record<
  string,
  { path: string; width: number; height: number; alt: string }
>;

export type LandingOpenGraphSlug = keyof typeof LANDING_OPEN_GRAPH_IMAGES;

export function getLandingOpenGraphImage(slug: LandingOpenGraphSlug) {
  return LANDING_OPEN_GRAPH_IMAGES[slug];
}

/** Fragmento metadata.openGraph + twitter para una landing de servicio. */
export function landingSocialMetadata(
  slug: LandingOpenGraphSlug,
  partial: Pick<Metadata, "openGraph" | "twitter">["openGraph"],
): Pick<Metadata, "openGraph" | "twitter"> {
  const img = getLandingOpenGraphImage(slug);
  const imageEntry = {
    url: img.path,
    width: img.width,
    height: img.height,
    alt: img.alt,
  };
  return {
    openGraph: {
      ...partial,
      images: [imageEntry],
    },
    twitter: {
      card: "summary_large_image",
      title: partial?.title ?? undefined,
      description: partial?.description ?? undefined,
      images: [img.path],
    },
  };
}

/** Fotos del pack Pexels reservadas al servicio de alquiler integral (no reutilizar en otras landings). */
export const SERVICIO_ALQUILER_INTEGRAL_STEP_IMAGES = {
  valoracion: "/images/pexels-artempodrez-5715856.jpg",
  cualificacion: "/images/servicio-alquiler-integral-hero.jpg",
  visitas: "/images/pexels-rdne-9034770.jpg",
  contrato: "/images/pexels-mikhail-nilov-8297355.jpg",
  firma: "/images/pexels-pavel-danilyuk-5520299.jpg",
  documentacionInquilino: "/images/pexels-n-voitkevich-8062296.jpg",
} as const;
