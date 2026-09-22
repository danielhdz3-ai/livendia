import Link from "next/link";
import { getAlquilerLocalRelatedLinks } from "@/lib/local-discoverability-links";

type Props = {
  slug: string;
  cityName: string;
  currentPath?: string;
  className?: string;
};

/** Enlaces cruzados entre landings LAU, redactar y revisión del mismo mercado. */
export function AlquilerLocalRelatedServiceLinks({ slug, cityName, currentPath, className = "" }: Props) {
  const links = getAlquilerLocalRelatedLinks(slug, cityName).filter((l) => l.href !== currentPath);
  if (links.length === 0) return null;

  return (
    <nav
      aria-label={`Otros servicios de alquiler en ${cityName}`}
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      <span className="text-sm text-[#64748b]">También en {cityName}:</span>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:border-[#1A4FBF]/40"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
