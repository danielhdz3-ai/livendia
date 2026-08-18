import Link from "next/link";
import {
  getPublishedPackArrasGestionLocalSlugs,
  getPublishedPackLauAdminLocalSlugs,
  localPackArrasGestionHref,
  localPackLauAdminHref,
} from "@/lib/pack-comercial-local-cities";

const CITY_LABELS: Record<string, string> = {
  madrid: "Madrid",
  barcelona: "Barcelona",
  valencia: "Valencia",
};

type Props = {
  variant: "lau-admin" | "arras-gestion";
};

export function PackComercialLocalCityLinks({ variant }: Props) {
  const slugs =
    variant === "lau-admin"
      ? getPublishedPackLauAdminLocalSlugs()
      : getPublishedPackArrasGestionLocalSlugs();
  const hrefFn = variant === "lau-admin" ? localPackLauAdminHref : localPackArrasGestionHref;
  const title =
    variant === "lau-admin"
      ? "Pack LAU + administración por ciudad"
      : "Pack arras + gestión vendedor por ciudad";

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-bold text-[#1E293B]">{title}</h2>
        <p className="mt-2 text-sm text-[#64748b]">
          Landings locales con normativa, barrios, casuística y FAQ específicos de cada mercado.
        </p>
        <nav aria-label={title} className="mt-4 flex flex-wrap gap-2">
          {slugs.map((slug) => (
            <Link
              key={slug}
              href={hrefFn(slug)}
              className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] hover:bg-[#DBEAFE]"
            >
              {CITY_LABELS[slug] ?? slug}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
