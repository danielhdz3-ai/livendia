import Link from "next/link";
import { getComprarSinAgenciaBarcelonaDiscoveryLinks } from "@/lib/comprar-sin-agencia-barcelona-discovery-links";

type Props = {
  hubSlug: string;
  cityLabel: string;
};

export function ComprarSinAgenciaBarcelonaDiscoverySection({ hubSlug, cityLabel }: Props) {
  const links = getComprarSinAgenciaBarcelonaDiscoveryLinks(hubSlug);
  if (links.length === 0) return null;

  const districts = links.filter((l) => l.kind === "distrito");
  const metro = links.filter((l) => l.kind === "metro");
  const hub890 = links.find((l) => l.kind === "hub890");

  return (
    <section
      className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-12 sm:px-6"
      aria-labelledby="comprar-barrio-discovery-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Enlazado interno · long tail</p>
        <h2 id="comprar-barrio-discovery-title" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
          Comprar sin agencia en {cityLabel} por distrito y área metropolitana
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base">
          Landing principal para contratar e indexación de ciudad. Las fichas por barrio o municipio tienen títulos y
          copy distintos para long-tail en Google — enlazan aquí sin sustituir esta URL ganadora.
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

        {hub890 ? (
          <p className="mt-8 text-sm text-[#64748b]">
            <Link href={hub890.href} className="font-semibold text-[#1A4FBF] hover:underline">
              {hub890.label}
            </Link>
            {" — "}
            {hub890.description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
