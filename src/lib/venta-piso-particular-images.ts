/**
 * Venta entre particulares (comprador ya encontrado): imágenes únicas por slug.
 */

import { gestoriaLandingImagePoolFiltered } from "@/lib/gestoria-landing-image-pool";
import { pickUniqueLandingImages } from "@/lib/pick-unique-landing-images";

const POOL = gestoriaLandingImagePoolFiltered();

const STEP_KEYS = ["llamada", "contratar", "documentacion", "arras", "notaria"] as const;

export type VentaPisoParticularStepKey = (typeof STEP_KEYS)[number];

export function getVentaPisoParticularStepImages(slug: string): Record<VentaPisoParticularStepKey, string> {
  const picked = pickUniqueLandingImages(`venta-particular:steps:${slug}`, 5, POOL);
  return {
    llamada: picked[0]!,
    contratar: picked[1]!,
    documentacion: picked[2]!,
    arras: picked[3]!,
    notaria: picked[4]!,
  };
}

/** @deprecated Usar getVentaPisoParticularStepImages(slug) */
export const VENTA_PISO_PARTICULAR_STEP_IMAGES = getVentaPisoParticularStepImages("default");

export function getVentaPisoParticularHeroImage(slug: string): string {
  const steps = Object.values(getVentaPisoParticularStepImages(slug));
  const [hero] = pickUniqueLandingImages(`venta-particular:hero:${slug}`, 1, POOL, steps);
  return hero;
}
