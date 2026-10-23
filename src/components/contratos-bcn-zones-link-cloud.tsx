import type { BarcelonaZoneLink } from "@/lib/contratos-inmobiliarios-barcelona-zones";
import Link from "next/link";

const GROUP_ORDER: BarcelonaZoneLink["areaLabel"][] = [
  "Ciudad · Cataluña",
  "Distrito · Barcelona",
  "Barrio · Barcelona",
  "Área metropolitana · Cataluña",
  "Cataluña",
];

const GROUP_TITLES: Record<BarcelonaZoneLink["areaLabel"], string> = {
  "Ciudad · Cataluña": "Barcelona capital",
  "Distrito · Barcelona": "Distritos de Barcelona",
  "Barrio · Barcelona": "Barrios de Barcelona",
  "Área metropolitana · Cataluña": "Área metropolitana y Vallès",
  Cataluña: "Cataluña",
};

export function ContratosBcnZonesLinkCloud({ zones }: { zones: readonly BarcelonaZoneLink[] }) {
  const byLabel = new Map<BarcelonaZoneLink["areaLabel"], BarcelonaZoneLink[]>();
  for (const z of zones) {
    const list = byLabel.get(z.areaLabel) ?? [];
    list.push(z);
    byLabel.set(z.areaLabel, list);
  }

  return (
    <nav
      aria-label="Mapa de enlaces por barrios y municipios de Cataluña"
      className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
    >
      <h3 className="text-lg font-extrabold text-[#1E293B]">Todos los barrios y municipios enlazados</h3>
      <p className="mt-2 text-sm text-[#64748B]">
        Acceso directo a landings locales de contratos inmobiliarios — LAU, arras, habitación, temporada y gestión de
        alquiler en Cataluña.
      </p>
      <div className="mt-8 space-y-8">
        {GROUP_ORDER.map((label) => {
          const items = byLabel.get(label);
          if (!items?.length) return null;
          return (
            <div key={label}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{GROUP_TITLES[label]}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((z) => (
                  <li key={`${z.slug}-${z.href}`}>
                    <Link
                      href={z.href}
                      className="inline-flex rounded-full border border-[#1A4FBF]/20 bg-[#EFF6FF]/80 px-3.5 py-1.5 text-sm font-semibold text-[#1A4FBF] transition hover:border-[#1A4FBF]/40 hover:bg-[#EFF6FF]"
                    >
                      {z.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
