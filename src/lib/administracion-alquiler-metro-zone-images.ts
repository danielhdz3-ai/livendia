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
  esplugues: metroBarcelonaZoneImage("esplugues.jpg"),
  "sant-joan-despi": metroBarcelonaZoneImage("santjoandespi.jpg"),
  "sant-adria": metroBarcelonaZoneImage("barcelona2.jpg"),
  castelldefels: metroBarcelonaZoneImage("barcelona.jpg"),
  "sant-boi": metroBarcelonaZoneImage("barcelona2.jpg"),
  gava: metroBarcelonaZoneImage("barcelona.jpg"),
  "mollet-del-valles": metroBarcelonaZoneImage("barcelona2.jpg"),
  "sant-cugat": metroBarcelonaZoneImage("pexels-albaladejoart-15978608.jpg"),
  badalona: metroBarcelonaZoneImage("barcelona2.jpg"),
  "barcelona/poblenou": metroBarcelonaZoneImage("poblenou.jpg"),
  "barcelona/pedralbes": metroBarcelonaZoneImage("barcelona2.jpg"),
  "barcelona/el-raval": metroBarcelonaZoneImage("rabal.jpg"),
  "barcelona/sagrada-familia": metroBarcelonaZoneImage("sagradafamilia.jpg"),
  "barcelona/born": metroBarcelonaZoneImage("ciutatvella.jpg"),
  "barcelona/vila-olimpica": metroBarcelonaZoneImage("santmarti.jpg"),
  "barcelona/gotic": metroBarcelonaZoneImage("ciutatvella.jpg"),
  "barcelona/barceloneta": metroBarcelonaZoneImage("barcelona.jpg"),
  "barcelona/sarria": metroBarcelonaZoneImage("santgervasi2.jpg"),
  "barcelona/vila-de-gracia": metroBarcelonaZoneImage("gracia2.jpg"),
};
