/**
 * Venta entre particulares (comprador ya encontrado): verticales en hero, apaisadas en pasos.
 */

export const VENTA_PISO_PARTICULAR_STEP_IMAGES = {
  llamada: "/images/pexels-pavel-danilyuk-5520299.jpg",
  contratar: "/images/pexels-pavel-danilyuk-5520289.jpg",
  documentacion: "/images/pexels-khwanchai-12885860.jpg",
  arras: "/images/contratodearras.jpg",
  notaria: "/images/firma10.jpg",
} as const;

const HERO_BY_SLUG: Record<string, string> = {
  "hospitalet-de-llobregat": "/images/pexels-shkrabaanthony-5816284.jpg",
  "cornella-de-llobregat": "/images/pexels-dimkidama-15675799.jpg",
  "esplugues-de-llobregat": "/images/pexels-dantemunozphoto-16346704.jpg",
  sabadell: "/images/pexels-kampus-8171201.jpg",
  terrassa: "/images/pexels-cristian-rojas-10041249.jpg",
  "barcelona-eixample": "/images/pexels-yankrukov-7693740.jpg",
  "barcelona-gracia": "/images/pexels-mikhail-nilov-8297043.jpg",
  "barcelona-sants-montjuic": "/images/pexels-artempodrez-6779344.jpg",
};

const HERO_FALLBACK = "/images/modelo2.jpg";

export function getVentaPisoParticularHeroImage(slug: string): string {
  return HERO_BY_SLUG[slug] ?? HERO_FALLBACK;
}
