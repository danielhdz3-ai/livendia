import Link from "next/link";
import {
  getPublishedAcompanamientoReservaArrasLocalCities,
  localAcompanamientoReservaArrasHref,
} from "@/lib/acompanamiento-reserva-arras-local-cities";

type Props = {
  currentSlug?: string;
  className?: string;
};

export function AcompanamientoReservaArrasLocalCityLinks({ currentSlug, className = "" }: Props) {
  const cities = getPublishedAcompanamientoReservaArrasLocalCities();

  return (
    <nav
      aria-label="Acompañamiento reserva hasta arras por ciudad"
      className={`flex flex-wrap justify-center gap-2 ${className}`}
    >
      {cities.map((c) => {
        const active = c.slug === currentSlug;
        return (
          <Link
            key={c.slug}
            href={localAcompanamientoReservaArrasHref(c.slug)}
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
