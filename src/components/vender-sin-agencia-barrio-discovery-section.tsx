import Link from "next/link";
import { getVenderSinAgenciaBarrioDiscoveryLinks } from "@/lib/vender-sin-agencia-barrio-discovery-links";

type Props = {
  venderCitySlug: string;
  cityLabel: string;
};

export function VenderSinAgenciaBarrioDiscoverySection({ venderCitySlug, cityLabel }: Props) {
  const links = getVenderSinAgenciaBarrioDiscoveryLinks(venderCitySlug);
  if (links.length === 0) return null;

  const districts = links.filter((l) => l.kind === "distrito");
  const metro = links.filter((l) => l.kind === "metro");
  const pilar = links.find((l) => l.kind === "pilar");

  return (
    <section
      className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-12 sm:px-6"
      aria-labelledby="vender-barrio-discovery-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Enlazado interno · long tail</p>
        <h2 id="vender-barrio-discovery-title" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
          Vender sin agencia en {cityLabel} por barrio y área metropolitana
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base">
          Estás en la landing principal para contratar e indexación de ciudad. Si buscas copy orientado a un distrito o
          municipio concreto, estas guías complementarias enlazan aquí — no las eliminamos del sitio.
        </p>

        {districts.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Distritos (Barcelona capital)</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {districts.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#1A4FBF]/40 hover:shadow-sm"
                  >
                    <span className="font-semibold text-[#1E293B]">{link.label}</span>
                    <span className="mt-2 text-xs leading-relaxed text-[#64748b]">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {metro.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Área metropolitana</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {metro.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#1A4FBF]/40 hover:shadow-sm"
                  >
                    <span className="font-semibold text-[#1E293B]">{link.label}</span>
                    <span className="mt-2 text-xs leading-relaxed text-[#64748b]">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {pilar ? (
          <p className="mt-8 text-sm text-[#64748b]">
            <Link href={pilar.href} className="font-semibold text-[#1A4FBF] hover:underline">
              {pilar.label}
            </Link>
            {" — "}
            {pilar.description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
