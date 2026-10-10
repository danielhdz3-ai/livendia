/**
 * Imágenes contrato habitación: verticales en hero, apaisadas en pasos (VentaSinAgenciaPasoAPaso).
 * Rutas bajo /public/images — commitear cualquier asset nuevo antes de desplegar.
 */

/** Apaisadas — bloques paso a paso (no reutilizar en admin LAU/temporada ni alquiler integral). */
export const HABITACION_BARCELONA_STEP_IMAGES = {
  llamada: "/images/pexels-tima-miroshnichenko-5439472.jpg",
  contratar: "/images/pexels-silverkblack-23496450.jpg",
  documentacion: "/images/pexels-silverkblack-36729677.jpg",
  redaccion: "/images/pexels-tima-miroshnichenko-5439443.jpg",
  firma: "/images/pexels-tima-miroshnichenko-5439380.jpg",
} as const;

/** Retratos / verticales — hero de landings locales. */
const HABITACION_HERO_BY_SLUG: Record<string, string> = {
  barcelona: "/images/pexels-yankrukov-7693717.jpg",
  "hospitalet-de-llobregat": "/images/pexels-mikhail-nilov-8296981.jpg",
  "cornella-de-llobregat": "/images/pexels-artempodrez-6779333.jpg",
  sabadell: "/images/gestora5.jpg",
  terrassa: "/images/gestora6.jpg",
  madrid: "/images/modelo3.jpg",
  valencia: "/images/pexels-yankrukov-7693743.jpg",
  malaga: "/images/gestora7.jpg",
  sevilla: "/images/gestora8.jpg",
  bilbao: "/images/pexels-yankrukov-7698744.jpg",
  "barcelona-eixample": "/images/pexels-mikhail-nilov-8297043.jpg",
  "barcelona-gracia": "/images/pexels-artempodrez-6779344.jpg",
  "barcelona-poblenou": "/images/pexels-anna-belousova-130658517-10325487.jpg",
  "barcelona-les-corts": "/images/pexels-yankrukov-7693740.jpg",
  "barcelona-sarria-sant-gervasi": "/images/pexels-yankrukov-7693740.jpg",
  "barcelona-sants-montjuic": "/images/pexels-kampus-8463139.jpg",
  "barcelona-ciutat-vella": "/images/pexels-dimkidama-15675799.jpg",
  "barcelona-horta-guinardo": "/images/pexels-dantemunozphoto-16346704.jpg",
  "barcelona-nou-barris": "/images/pexels-cristian-rojas-10041249.jpg",
  "barcelona-sant-andreu": "/images/pexels-kampus-8171201.jpg",
  "barcelona-sant-marti": "/images/pexels-anna-belousova-130658517-10325487.jpg",
};

const HABITACION_HERO_FALLBACK = "/images/modelo3.jpg";

export function getContratoAlquilerHabitacionHeroImage(slug: string): string {
  return HABITACION_HERO_BY_SLUG[slug] ?? HABITACION_HERO_FALLBACK;
}
