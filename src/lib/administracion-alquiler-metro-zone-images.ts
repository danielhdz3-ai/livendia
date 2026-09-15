/**
 * Imágenes de zona — public/images/zonas barcelona/
 * (fotos locales para heroes de landings metro administración alquiler).
 */
export const METRO_BARCELONA_ZONE_IMAGE_DIR = "/images/zonas barcelona" as const;

export function metroBarcelonaZoneImage(filename: string): string {
  return `${METRO_BARCELONA_ZONE_IMAGE_DIR}/${filename}`;
}

/** Hero por clave segments.join("/") — fallback barcelona2 del mismo directorio. */
export function metroBarcelonaHeroForSegments(segments: readonly string[]): string {
  const key = segments.join("/");
  return METRO_BARCELONA_HERO_BY_SEGMENT_KEY[key] ?? metroBarcelonaZoneImage("barcelona2.jpg");
}

export const METRO_BARCELONA_HERO_BY_SEGMENT_KEY: Record<string, string> = {
  "barcelona/les-corts": metroBarcelonaZoneImage("barcelona2.jpg"),
  "barcelona/gracia": metroBarcelonaZoneImage("gracia.jpg"),
  "barcelona/eixample": metroBarcelonaZoneImage("eixample.jpg"),
  "barcelona/sants-montjuic": metroBarcelonaZoneImage("sants.jpg"),
  "barcelona/sant-marti": metroBarcelonaZoneImage("santmarti.jpg"),
  "barcelona/sarria-sant-gervasi": metroBarcelonaZoneImage("santgervasi.jpg"),
  "barcelona/nou-barris": metroBarcelonaZoneImage("barcelona.jpg"),
  "barcelona/ciutat-vella": metroBarcelonaZoneImage("ciutatvella.jpg"),
  "barcelona/horta-guinardo": metroBarcelonaZoneImage("guinardo.jpg"),
  "barcelona/sant-andreu": metroBarcelonaZoneImage("santandreu.jpg"),
  "l-hospitalet": metroBarcelonaZoneImage("hospitalet.jpg"),
  cornella: metroBarcelonaZoneImage("barcelona.jpg"),
  badalona: metroBarcelonaZoneImage("barcelona2.jpg"),
};
