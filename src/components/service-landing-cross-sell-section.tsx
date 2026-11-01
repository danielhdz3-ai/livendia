import Link from "next/link";
import {
  isGestoriaInmobiliariaLocalSlugPublished,
  localGestoriaInmobiliariaHref,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { citySlugFromLocalLandingSlug } from "@/lib/service-landing-module-profile-utils";
import { ArrowRight } from "lucide-react";

type CrossSellItem = { slug: string; label: string };

type Props = {
  items: readonly CrossSellItem[];
  city?: string;
  /** Slug de landing local (p. ej. madrid, barcelona-les-corts) para enlace a hub gestoría. */
  localLandingSlug?: string;
};

export function ServiceLandingCrossSellSection({ items, city, localLandingSlug }: Props) {
  if (items.length === 0) return null;

  const gestoriaSlug = localLandingSlug ? citySlugFromLocalLandingSlug(localLandingSlug) : undefined;
  const gestoriaHref =
    gestoriaSlug && isGestoriaInmobiliariaLocalSlugPublished(gestoriaSlug)
      ? localGestoriaInmobiliariaHref(gestoriaSlug)
      : "/gestoria";

  return (
    <section className="border-b border-slate-200 bg-[#EFF6FF] px-4 py-10 sm:px-6" aria-labelledby="cross-sell-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="cross-sell-title" className="text-lg font-bold text-[#1E293B] sm:text-xl">
          Servicios relacionados{city ? ` en ${city}` : ""}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/servicios/${item.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-[#1A4FBF]/30 bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
              >
                {item.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={gestoriaHref}
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#475569] hover:bg-slate-50"
            >
              Hub gestoría{city ? ` ${city}` : ""}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
