import Link from "next/link";
import {
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  PACK_LAU_ADMIN_LANDING_PATH,
} from "@/lib/catalog.public";
import {
  getPackLocalCityLabel,
  getPublishedPackArrasGestionLocalSlugs,
  getPublishedPackLauAdminLocalSlugs,
  localPackArrasGestionHref,
  localPackLauAdminHref,
} from "@/lib/pack-comercial-local-cities";

type PackVariant = "lau-admin" | "arras-gestion";

type Props = {
  variant: PackVariant;
  showTitle?: boolean;
  variantLayout?: "default" | "compact" | "footer";
};

export function PackComercialLocalBlogLinks({
  variant,
  showTitle = true,
  variantLayout = "default",
}: Props) {
  const isLau = variant === "lau-admin";
  const slugs = isLau ? getPublishedPackLauAdminLocalSlugs() : getPublishedPackArrasGestionLocalSlugs();
  const hrefFn = isLau ? localPackLauAdminHref : localPackArrasGestionHref;
  const hub = isLau ? PACK_LAU_ADMIN_LANDING_PATH : PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH;
  const title = isLau
    ? "Pack LAU + administración de alquiler por ciudad"
    : "Pack arras + gestión vendedor por ciudad";

  if (slugs.length === 0) return null;

  const isFooter = variantLayout === "footer";
  const isCompact = variantLayout === "compact" || isFooter;

  const linkClass = isCompact
    ? "text-[11px] text-blue-100 underline-offset-2 hover:text-white hover:underline"
    : "rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1E293B] shadow ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]";

  const wrapClass = isCompact ? "flex flex-wrap gap-x-2 gap-y-1" : "flex flex-wrap gap-2";

  return (
    <div className={isCompact ? "min-w-0 space-y-1.5" : "space-y-3"}>
      {showTitle ? (
        <p
          className={
            isFooter
              ? "text-[10px] font-bold uppercase leading-snug tracking-wide text-cyan-300"
              : variantLayout === "compact"
                ? "text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                : "text-sm font-semibold text-[#1E293B]"
          }
        >
          {title}
        </p>
      ) : null}
      <nav aria-label={title} className={wrapClass}>
        {slugs.map((slug) => (
          <Link key={slug} href={hrefFn(slug)} className={linkClass}>
            {getPackLocalCityLabel(slug)}
          </Link>
        ))}
      </nav>
      <Link
        href={hub}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Índice →" : "Ver pack nacional →"}
      </Link>
    </div>
  );
}
