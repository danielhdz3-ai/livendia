"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Copy, ExternalLink, Search } from "lucide-react";
import {
  ADMIN_BTN_GHOST,
  ADMIN_CARD_PAD,
  ADMIN_STAT_LABEL,
  ADMIN_TABLE_HEAD,
} from "@/lib/admin-ui";
import type { AdminSeoLandingEntry, AdminSeoLandingIndex } from "@/lib/admin-seo-landing-index";
import {
  getBarcelonaBarrioEntries,
  groupEntriesByCity,
  groupEntriesByService,
} from "@/lib/admin-seo-landing-index";
import { AdminStatCard } from "@/components/admin/admin-page-header";

type ViewMode = "all" | "service" | "city" | "barcelona";

type Props = {
  index: AdminSeoLandingIndex;
  siteOrigin: string;
};

function fullUrl(origin: string, path: string): string {
  return `${origin.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

function CopyUrlButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  return (
    <button type="button" onClick={copy} className={`${ADMIN_BTN_GHOST} !min-h-8 !px-2.5 !text-xs`}>
      <Copy className="h-3.5 w-3.5" aria-hidden />
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}

function LandingRow({ entry, origin }: { entry: AdminSeoLandingEntry; origin: string }) {
  const url = fullUrl(origin, entry.path);

  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80">
      <td className="py-3 pr-4 align-top">
        <p className="text-sm font-semibold text-[#1E293B]">{entry.name}</p>
        {entry.barrioAmb ? (
          <p className="mt-0.5 text-xs text-[#64748B]">Barrio: {entry.barrioAmb}</p>
        ) : null}
      </td>
      <td className="hidden py-3 pr-4 align-top sm:table-cell">
        <p className="text-sm text-[#475569]">{entry.serviceLabel}</p>
      </td>
      <td className="hidden py-3 pr-4 align-top md:table-cell">
        <p className="text-sm text-[#475569]">{entry.city}</p>
      </td>
      <td className="py-3 pr-4 align-top">
        <code className="break-all text-xs text-[#64748B]">{entry.path}</code>
      </td>
      <td className="py-3 align-top">
        <div className="flex flex-wrap justify-end gap-1.5">
          <Link href={entry.path} target="_blank" rel="noopener noreferrer" className={`${ADMIN_BTN_GHOST} !min-h-8 !px-2.5 !text-xs`}>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            Ver
          </Link>
          <CopyUrlButton url={url} />
        </div>
      </td>
    </tr>
  );
}

function LandingTable({ entries, origin }: { entries: AdminSeoLandingEntry[]; origin: string }) {
  if (entries.length === 0) {
    return <p className="py-8 text-center text-sm text-[#64748B]">No hay resultados para este filtro.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left">
        <thead>
          <tr className="border-b border-slate-200">
            <th className={`pb-3 pr-4 ${ADMIN_TABLE_HEAD}`}>Landing</th>
            <th className={`hidden pb-3 pr-4 sm:table-cell ${ADMIN_TABLE_HEAD}`}>Servicio</th>
            <th className={`hidden pb-3 pr-4 md:table-cell ${ADMIN_TABLE_HEAD}`}>Ciudad</th>
            <th className={`pb-3 pr-4 ${ADMIN_TABLE_HEAD}`}>Ruta</th>
            <th className={`pb-3 text-right ${ADMIN_TABLE_HEAD}`}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <LandingRow key={entry.id} entry={entry} origin={origin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const VIEW_TABS: { id: ViewMode; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "service", label: "Por servicio" },
  { id: "city", label: "Por ciudad" },
  { id: "barcelona", label: "Barrios Barcelona" },
];

export function AdminSeoDashboard({ index, siteOrigin }: Props) {
  const [view, setView] = useState<ViewMode>("service");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.entries;
    return index.entries.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.slug.toLowerCase().includes(q) ||
        e.path.toLowerCase().includes(q) ||
        e.serviceLabel.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        (e.barrioAmb?.toLowerCase().includes(q) ?? false),
    );
  }, [index.entries, query]);

  const byService = useMemo(() => groupEntriesByService(filtered), [filtered]);
  const byCity = useMemo(() => groupEntriesByCity(filtered), [filtered]);
  const barcelonaBarrios = useMemo(() => getBarcelonaBarrioEntries(filtered), [filtered]);

  const topServices = useMemo(
    () =>
      Object.entries(index.stats.byService)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6),
    [index.stats.byService],
  );

  const generatedLabel = new Date(index.generatedAt).toLocaleString("es-ES", {
    dateStyle: "short",
    timeStyle: "medium",
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <AdminStatCard label="Total landings" value={index.stats.total} hint="Publicadas e indexables" compact />
        <AdminStatCard label="Por ciudad" value={Object.keys(index.stats.byCity).length} hint="Ciudades / hubs" compact />
        <AdminStatCard label="Por servicio" value={Object.keys(index.stats.byService).length} hint="Tipos de landing" compact />
        <AdminStatCard label="Barrios BCN / AMB" value={index.stats.barcelonaBarrios} hint="Zona metropolitana" compact />
        <AdminStatCard label="Landings locales" value={index.stats.localCiudad} hint="Ciudad capital" compact />
        <AdminStatCard label="Blog" value={index.stats.blog} hint="Artículos publicados" compact />
      </div>

      <div className={`${ADMIN_CARD_PAD} !py-4`}>
        <p className={ADMIN_STAT_LABEL}>Top servicios por volumen</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {topServices.map(([label, count]) => (
            <span
              key={label}
              className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE]"
            >
              {label}: {count}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#94A3B8]">
          Índice generado: {generatedLabel} · Fuente: registros publicados en <code>src/lib/*-local-cities.ts</code> y metro
          Barcelona
        </p>
      </div>

      <div className={`${ADMIN_CARD_PAD} space-y-4`}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {VIEW_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setView(tab.id)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  view === tab.id
                    ? "bg-[#1A4FBF] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-[#475569] hover:border-[#1A4FBF]/30 hover:bg-[#EFF6FF]/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-[#64748B]">
            {filtered.length} de {index.stats.total} landings
          </p>
        </div>

        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar barrio, slug, servicio, ciudad…"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-[#1E293B] outline-none ring-[#1A4FBF]/20 placeholder:text-[#94A3B8] focus:border-[#1A4FBF] focus:ring-2"
          />
        </label>

        {view === "all" ? <LandingTable entries={filtered} origin={siteOrigin} /> : null}

        {view === "service" ? (
          <div className="space-y-8">
            {byService.map((group) => (
              <section key={group.serviceLabel}>
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-2">
                  <h2 className="text-lg font-bold text-[#1E293B]">{group.serviceLabel}</h2>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                    {group.items.length} landing{group.items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <LandingTable entries={group.items} origin={siteOrigin} />
              </section>
            ))}
          </div>
        ) : null}

        {view === "city" ? (
          <div className="space-y-8">
            {byCity.map((group) => (
              <section key={group.city}>
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-2">
                  <h2 className="text-lg font-bold text-[#1E293B]">{group.city}</h2>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                    {group.items.length} landing{group.items.length === 1 ? "" : "s"}
                  </span>
                </div>
                <LandingTable entries={group.items} origin={siteOrigin} />
              </section>
            ))}
          </div>
        ) : null}

        {view === "barcelona" ? (
          <div className="space-y-4">
            <p className="text-sm text-[#64748B]">
              Landings hiperlocales en Barcelona capital (distritos, barrios finos) y municipios del AMB — agrupadas por
              servicio y barrio.
            </p>
            <LandingTable entries={barcelonaBarrios} origin={siteOrigin} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
