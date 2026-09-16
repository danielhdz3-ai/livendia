import Link from "next/link";

type Props = {
  title: string;
  hubHref: string;
  hubLinkLabel: string;
  ariaLabel: string;
  items: { slug: string; label: string; href: string }[];
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

/** Listado estándar de landings locales en la sección /blog#guías-por-ciudad. */
export function BlogLocalCityLinksCard({
  title,
  hubHref,
  hubLinkLabel,
  ariaLabel,
  items,
  showTitle = true,
  variant = "default",
}: Props) {
  if (items.length === 0) return null;

  const isFooter = variant === "footer";
  const isCompact = variant === "compact" || isFooter;

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
              : variant === "compact"
                ? "text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                : "text-sm font-semibold text-[#1E293B]"
          }
        >
          {title}
        </p>
      ) : null}
      <nav aria-label={ariaLabel} className={wrapClass}>
        {items.map((item) => (
          <Link key={item.slug} href={item.href} className={linkClass}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href={hubHref}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {hubLinkLabel}
      </Link>
    </div>
  );
}
