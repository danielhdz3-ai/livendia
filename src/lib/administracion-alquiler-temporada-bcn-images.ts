/**
 * Admin. temporada / habitaciones · distritos Barcelona
 * Hero: fotos locales en public/images/zonas barcelona/
 */
import { getTemporadaBcnBarrioHeroImage } from "@/lib/contrato-alquiler-temporada-bcn-images";

export function getAdminTemporadaBcnBarrioHeroImage(slug: string): string {
  return getTemporadaBcnBarrioHeroImage(slug);
}

export function getAdminTemporadaBcnBarrioHeroAlt(zoneShort: string): string {
  return `Administración alquiler temporada y habitaciones en ${zoneShort}, Barcelona — Livendia`;
}
