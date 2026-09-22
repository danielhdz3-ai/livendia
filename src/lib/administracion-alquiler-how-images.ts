/**
 * Rutas de imágenes validadas en public/images/ (git) para bloques «Cómo funciona».
 */
export const ADMINISTRACION_ALQUILER_HOW_IMAGES_DEFAULT = [
  "/images/gestoria.jpg",
  "/images/familia2.jpg",
  "/images/equipo1.jpg",
  "/images/gestoria5.jpg",
] as const;

export const ADMINISTRACION_ALQUILER_HOW_IMAGES_SET_B = [
  "/images/gestoria2.jpg",
  "/images/familia1.jpg",
  "/images/equipo4.jpg",
  "/images/modelo3.jpg",
] as const;

export const ADMINISTRACION_ALQUILER_HOW_IMAGES_SET_C = [
  "/images/gestoria1.jpg",
  "/images/familia6.jpg",
  "/images/equipo3.jpg",
  "/images/gestoria4.jpg",
] as const;

/** Cuatro imágenes con foto de zona en el paso 1 (resto: set A pasos 2–4). */
export function adminAlquilerHowImagesWithZone(zoneImage: string): readonly string[] {
  return [
    zoneImage,
    ADMINISTRACION_ALQUILER_HOW_IMAGES_DEFAULT[1],
    ADMINISTRACION_ALQUILER_HOW_IMAGES_DEFAULT[2],
    ADMINISTRACION_ALQUILER_HOW_IMAGES_DEFAULT[3],
  ];
}

/** Dos fotos de zona en pasos 1–2 (resto: familia2 + equipo1). */
export function adminAlquilerHowImagesWithTwoZones(
  zoneA: string,
  zoneB: string,
): readonly string[] {
  return [zoneA, zoneB, "/images/familia2.jpg", "/images/equipo1.jpg"];
}
