import Link from "next/link";
import {
  ADMIN_TEMPORADA_BCN_BARRIO_HUB,
  ADMIN_TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS,
} from "@/lib/administracion-alquiler-temporada-bcn-barrios";
import { localAdministracionAlquilerTemporadaHref } from "@/lib/administracion-alquiler-temporada-local-cities";

type Props = {
  currentSlug?: string;
  className?: string;
};

export function AdministracionAlquilerTemporadaBcnBarrioLinks({ currentSlug, className = "" }: Props) {
  const pub = new Set(ADMIN_TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS);
  const links = ADMIN_TEMPORADA_BCN_BARRIO_HUB.filter((z) => pub.has(z.slug));

  return (
    <nav
      aria-label="Administración temporada y habitaciones por distrito en Barcelona"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {links.map((z) => {
        const active = z.slug === currentSlug;
        return (
          <Link
            key={z.slug}
            href={localAdministracionAlquilerTemporadaHref(z.slug)}
            className={
              active
                ? "rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-slate-200 bg-[#FFFBEB] px-4 py-2 text-sm font-semibold text-[#92400E] ring-1 ring-[#D4AF37]/40 hover:bg-[#FEF3C7]"
            }
            aria-current={active ? "page" : undefined}
          >
            {z.shortName} →
          </Link>
        );
      })}
    </nav>
  );
}
