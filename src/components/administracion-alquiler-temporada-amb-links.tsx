import Link from "next/link";
import {
  ADMIN_TEMPORADA_AMB_HUB,
  ADMIN_TEMPORADA_AMB_PUBLISHED_SLUGS,
} from "@/lib/administracion-alquiler-temporada-amb-batch";
import { localAdministracionAlquilerTemporadaHref } from "@/lib/administracion-alquiler-temporada-local-cities";

type Props = {
  currentSlug?: string;
  className?: string;
};

export function AdministracionAlquilerTemporadaAmbLinks({ currentSlug, className = "" }: Props) {
  const pub = new Set(ADMIN_TEMPORADA_AMB_PUBLISHED_SLUGS);
  const links = ADMIN_TEMPORADA_AMB_HUB.filter((z) => pub.has(z.slug));

  return (
    <nav
      aria-label="Administración temporada y habitaciones por municipio AMB"
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
                : "rounded-full border border-slate-200 bg-[#F0FDF4] px-4 py-2 text-sm font-semibold text-[#166534] ring-1 ring-emerald-200/80 hover:bg-emerald-50"
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
