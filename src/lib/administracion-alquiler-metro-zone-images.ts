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
  "barcelona/les-corts": metroBarcelonaZoneImage("lescorts4.jpg"),
  "barcelona/gracia": metroBarcelonaZoneImage("gracia.jpg"),
  "barcelona/eixample": metroBarcelonaZoneImage("eixample1.jpg"),
  "barcelona/sants-montjuic": metroBarcelonaZoneImage("sants4.jpg"),
  "barcelona/sant-marti": metroBarcelonaZoneImage("santmarti3.jpg"),
  "barcelona/sarria-sant-gervasi": metroBarcelonaZoneImage("santgervasi2.jpg"),
  "barcelona/nou-barris": metroBarcelonaZoneImage("noubarris.jpg"),
  "barcelona/ciutat-vella": metroBarcelonaZoneImage("ciutatvella.jpg"),
  "barcelona/horta-guinardo": metroBarcelonaZoneImage("guinardo.jpg"),
  "barcelona/sant-andreu": metroBarcelonaZoneImage("santandreu.jpg"),
  "l-hospitalet": metroBarcelonaZoneImage("hospitalet6.jpg"),
  cornella: metroBarcelonaZoneImage("barcelona2.jpg"),
  esplugues: metroBarcelonaZoneImage("esplugues7.jpg"),
  "sant-joan-despi": metroBarcelonaZoneImage("santjoandespi.jpg"),
  "sant-adria": metroBarcelonaZoneImage("pexels-santiagob-7588154.jpg"),
  castelldefels: metroBarcelonaZoneImage("pexels-blazearth-38317609.jpg"),
  "sant-boi": metroBarcelonaZoneImage("barcelona2.jpg"),
  gava: metroBarcelonaZoneImage("pexels-gabi-39009240.jpg"),
  "mollet-del-valles": metroBarcelonaZoneImage("barcelona.jpg"),
  "sant-cugat": metroBarcelonaZoneImage("pexels-albaladejoart-15978608.jpg"),
  badalona: metroBarcelonaZoneImage("badalona.jpg"),
  "barcelona/poblenou": metroBarcelonaZoneImage("poblenou.jpg"),
  "barcelona/pedralbes": metroBarcelonaZoneImage("lescorts4.jpg"),
  "barcelona/el-raval": metroBarcelonaZoneImage("raval.jpg"),
  "barcelona/sagrada-familia": metroBarcelonaZoneImage("sagradafamila4.jpg"),
  "barcelona/born": metroBarcelonaZoneImage("pexels-fran-34028175.jpg"),
  "barcelona/vila-olimpica": metroBarcelonaZoneImage("santmarti5.jpg"),
  "barcelona/gotic": metroBarcelonaZoneImage("ciutatvella.jpg"),
  "barcelona/barceloneta": metroBarcelonaZoneImage("barcelona.jpg"),
  "barcelona/sarria": metroBarcelonaZoneImage("santgervasi2.jpg"),
  "barcelona/vila-de-gracia": metroBarcelonaZoneImage("gracia3.jpg"),
};
