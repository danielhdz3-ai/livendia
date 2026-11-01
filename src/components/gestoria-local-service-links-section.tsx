import Link from "next/link";
import {
  getGestoriaCityVerticalHub,
  getGestoriaLocalServiceLinks,
  localGestoriaCityVerticalHref,
  type GestoriaLocalServiceLinkScope,
} from "@/lib/gestoria-city-vertical-hub";
import { ArrowRight, MapPinned } from "lucide-react";

type Props = {
  citySlug: string;
  city: string;
  scope?: GestoriaLocalServiceLinkScope;
};

export function GestoriaLocalServiceLinksSection({ citySlug, city, scope = "all" }: Props) {
  const links = getGestoriaLocalServiceLinks(citySlug, city, scope);
  if (links.length === 0) return null;

  const alquilerHub = getGestoriaCityVerticalHub(citySlug, "alquiler");
  const compraventaHub = getGestoriaCityVerticalHub(citySlug, "compraventa");

  return (
    <section
      id="landings-locales"
      className="scroll-mt-24 border-b border-slate-200 bg-white px-4 py-14 sm:px-6"
      aria-labelledby="gestoria-local-links-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start gap-3">
          <MapPinned className="mt-1 h-8 w-8 shrink-0 text-[#1A4FBF]" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Enlazado interno · SEO local</p>
            <h2 id="gestoria-local-links-title" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              Guías por servicio en {city}
            </h2>
            <p className="mt-3 max-w-3xl text-[#64748b]">
              Cada enlace lleva a la landing local publicada para {city}: mismo precio nacional, copy y casuística de
              tu zona. Refuerza el hub de gestoría y ayuda a Google a rastrear el clúster completo.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:border-[#1A4FBF]/40 hover:bg-white hover:shadow-md"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">{link.price}</span>
                <span className="mt-2 text-base font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{link.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">{link.description}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF]">
                  Ver landing local
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {scope === "all" && (alquilerHub || compraventaHub) ? (
          <p className="mt-8 text-sm text-[#64748b]">
            Índices verticales:{" "}
            {alquilerHub ? (
              <Link
                href={localGestoriaCityVerticalHref(citySlug, "alquiler")}
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                Alquiler en {city}
              </Link>
            ) : null}
            {alquilerHub && compraventaHub ? " · " : null}
            {compraventaHub ? (
              <Link
                href={localGestoriaCityVerticalHref(citySlug, "compraventa")}
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                Compraventa en {city}
              </Link>
            ) : null}
          </p>
        ) : null}
      </div>
    </section>
  );
}
