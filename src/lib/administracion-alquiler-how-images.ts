/**
 * Rutas de imágenes validadas en public/images/ (git) para bloques «Cómo funciona».
 */

import { gestoriaLandingImagePoolFiltered } from "@/lib/gestoria-landing-image-pool";
import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";

/** Cuatro imágenes distintas por landing de administración metro (opcional foto de zona en paso 1). */
export function resolveAdministracionAlquilerHowImages(
  landingKey: string,
  zoneImage?: string,
): readonly string[] {
  const pool = gestoriaLandingImagePoolFiltered();
  const picked = pickUniqueLandingImages(`admin-alquiler-metro:how:${landingKey}`, 4, pool);
  if (zoneImage && zoneImage.startsWith("/images/")) {
    const rest = pickUniqueLandingImages(`admin-alquiler-metro:how:${landingKey}:rest`, 3, pool, [
      zoneImage,
    ]);
    return [zoneImage, ...rest];
  }
  return picked;
}

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
