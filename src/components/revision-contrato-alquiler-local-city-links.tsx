import Link from "next/link";
import {
  getPublishedRevisionContratoAlquilerLocalCities,
  localRevisionContratoAlquilerHref,
} from "@/lib/revision-contrato-alquiler-local-cities";

type Props = {
  currentSlug?: string;
  className?: string;
};

export function RevisionContratoAlquilerLocalCityLinks({ currentSlug, className = "" }: Props) {
  const cities = getPublishedRevisionContratoAlquilerLocalCities();

  return (
    <nav
      aria-label="Revisión de contrato de alquiler por ciudad"
      className={`flex flex-wrap justify-center gap-2 ${className}`}
    >
      {cities.map((c) => {
        const active = c.slug === currentSlug;
        return (
          <Link
            key={c.slug}
            href={localRevisionContratoAlquilerHref(c.slug)}
            className={
              active
                ? "rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:border-[#1A4FBF]/40"
            }
            aria-current={active ? "page" : undefined}
          >
            {c.placeLabel}
          </Link>
        );
      })}
    </nav>
  );
}
