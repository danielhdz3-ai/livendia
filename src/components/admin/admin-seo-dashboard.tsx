"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { ADMIN_CARD, ADMIN_CARD_PAD } from "@/lib/admin-ui";
import type { AdminSeoLandingEntry, AdminSeoLandingIndex } from "@/lib/admin-seo-landing-types";
import {
  getEntryChipLabel,
  groupEntriesByCity,
  groupLocalEntriesByService,
  isLocalSeoLanding,
} from "@/lib/admin-seo-landing-types";
import { AdminStatCard } from "@/components/admin/admin-page-header";

type ViewMode = "servicio" | "ciudad" | "barcelona";

type Props = {
  index: AdminSeoLandingIndex;
  siteOrigin: string;
};

function CityChip({ entry }: { entry: AdminSeoLandingEntry }) {
  const label = getEntryChipLabel(entry);
  return (
    <Link
      href={entry.path}
      target="_blank"
      rel="noopener noreferrer"
      title={entry.path}
      className="inline-flex items-center gap-1.5 rounded-lg border border-[#FDE68A] bg-[#FFFBEB] px-3 py-2 text-sm font-medium text-[#92400E] transition hover:border-[#F59E0B] hover:bg-[#FEF3C7]"
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
    </Link>
  );
}

function ServiceCard({ serviceLabel, items }: { serviceLabel: string; items: AdminSeoLandingEntry[] }) {
  const cityCount = items.length;
  const barrioCount = items.filter((e) => e.barrioAmb).length;

  return (
    <article className={`${ADMIN_CARD} overflow-hidden`}>
      <div className="border-b border-slate-100 bg-[#FAFAFA] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-base font-bold text-[#1E293B] sm:text-lg">{serviceLabel}</h2>
          <span className="rounded-md bg-[#FEF3C7] px-2 py-0.5 text-xs font-semibold text-[#92400E]">
            {cityCount} {cityCount === 1 ? "landing" : "landings"}
          </span>
          {barrioCount > 0 ? (
            <span className="text-xs text-[#64748B]">({barrioCount} barrio{barrioCount === 1 ? "" : "s"} AMB)</span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-5 sm:p-6">
        {items.map((entry) => (
          <CityChip key={entry.id} entry={entry} />
        ))}
      </div>
    </article>
  );
}

function CityCard({ city, items }: { city: string; items: AdminSeoLandingEntry[] }) {
  return (
    <article className={`${ADMIN_CARD} overflow-hidden`}>
      <div className="border-b border-slate-100 bg-[#FAFAFA] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-base font-bold text-[#1E293B] sm:text-lg">{city}</h2>
          <span className="rounded-md bg-[#EFF6FF] px-2 py-0.5 text-xs font-semibold text-[#1A4FBF]">
            {items.length} servicio{items.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-5 sm:p-6">
        {items.map((entry) => (
          <Link
            key={entry.id}
            href={entry.path}
            target="_blank"
            rel="noopener noreferrer"
            title={entry.path}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[#475569] transition hover:border-[#1A4FBF]/40 hover:bg-[#EFF6FF]"
          >
            {entry.serviceLabel}
            <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
          </Link>
        ))}
      </div>
    </article>
  );
}

const VIEW_TABS: { id: ViewMode; label: string; hint: string }[] = [
  { id: "servicio", label: "Por servicio", hint: "Qué ciudades tienes en cada servicio" },
  { id: "ciudad", label: "Por ciudad", hint: "Qué servicios tienes en cada ciudad" },
  { id: "barcelona", label: "Barcelona AMB", hint: "Distritos, barrios y municipios" },
];

export function AdminSeoDashboard({ index, siteOrigin }: Props) {
  const [view, setView] = useState<ViewMode>("servicio");
  const [query, setQuery] = useState("");
  const [showExtras, setShowExtras] = useState(false);

  const localEntries = useMemo(() => index.entries.filter(isLocalSeoLanding), [index.entries]);

  const filteredLocal = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return localEntries;
    return localEntries.filter(
      (e) =>
        getEntryChipLabel(e).toLowerCase().includes(q) ||
        e.serviceLabel.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.path.toLowerCase().includes(q) ||
        (e.barrioAmb?.toLowerCase().includes(q) ?? false),
    );
  }, [localEntries, query]);

  const byService = useMemo(() => groupLocalEntriesByService(filteredLocal), [filteredLocal]);

  const byCity = useMemo(() => {
    const local = filteredLocal.filter((e) => !e.barrioAmb || view !== "barcelona");
    return groupEntriesByCity(local);
  }, [filteredLocal, view]);

  const barcelonaOnly = useMemo(
    () =>
      filteredLocal
        .filter((e) => e.barrioAmb !== null || e.city.includes("Barcelona"))
        .sort((a, b) => {
          if (a.serviceOrder !== b.serviceOrder) return a.serviceOrder - b.serviceOrder;
          return getEntryChipLabel(a).localeCompare(getEntryChipLabel(b), "es");
        }),
    [filteredLocal],
  );

  const barcelonaByService = useMemo(() => groupLocalEntriesByService(barcelonaOnly), [barcelonaOnly]);

  const extraEntries = useMemo(
    () => index.entries.filter((e) => !isLocalSeoLanding(e)),
    [index.entries],
  );

  const serviceTypeCount = useMemo(() => new Set(localEntries.map((e) => e.serviceLabel)).size, [localEntries]);

  const generatedLabel = new Date(index.generatedAt).toLocaleString("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <div className="space-y-6">
      <div className={`${ADMIN_CARD_PAD} !py-5`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Inventario SEO</p>
            <h2 className="mt-1 text-xl font-bold text-[#1E293B] sm:text-2xl">Landing pages por ciudad</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748B]">
              Todas las páginas locales activas de Livendia: contratos, arras, alquiler LAU, administración, compra,
              venta y barrios del área metropolitana de Barcelona.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <span className="rounded-lg bg-[#FEF3C7] px-4 py-2 text-sm font-bold text-[#92400E]">
              {localEntries.length} páginas locales
            </span>
            <span className="rounded-lg bg-[#EFF6FF] px-4 py-2 text-sm font-bold text-[#1A4FBF]">
              {serviceTypeCount} tipos de servicio
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <AdminStatCard label="Landings locales" value={localEntries.length} hint="Ciudades y barrios publicados" compact />
        <AdminStatCard label="Barrios BCN / AMB" value={index.stats.barcelonaBarrios} hint="Zona metropolitana" compact />
        <AdminStatCard label="Total índice" value={index.stats.total} hint="Incluye hubs, blog, packs" compact />
      </div>

      <div className={`${ADMIN_CARD_PAD} space-y-4`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {VIEW_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setView(tab.id)}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  view === tab.id
                    ? "bg-[#1A4FBF] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-[#475569] hover:border-[#1A4FBF]/30 hover:bg-[#EFF6FF]/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#94A3B8]">Actualizado: {generatedLabel}</p>
        </div>

        <p className="text-sm text-[#64748B]">{VIEW_TABS.find((t) => t.id === view)?.hint}</p>

        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar ciudad, barrio o servicio…"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-[#1E293B] outline-none placeholder:text-[#94A3B8] focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
          />
        </label>

        {view === "servicio" ? (
          <div className="space-y-4">
            {byService.length === 0 ? (
              <p className="py-10 text-center text-sm text-[#64748B]">Ninguna landing coincide con la búsqueda.</p>
            ) : (
              byService.map((group) => (
                <ServiceCard key={group.serviceLabel} serviceLabel={group.serviceLabel} items={group.items} />
              ))
            )}
          </div>
        ) : null}

        {view === "ciudad" ? (
          <div className="space-y-4">
            {byCity.map((group) => (
              <CityCard key={group.city} city={group.city} items={group.items} />
            ))}
          </div>
        ) : null}

        {view === "barcelona" ? (
          <div className="space-y-4">
            <p className="rounded-lg bg-[#EFF6FF] px-4 py-3 text-sm text-[#1A4FBF]">
              Barcelona capital, distritos, barrios finos (Poblenou, Gòtic, Sarrià…) y municipios del AMB (L&apos;Hospitalet,
              Cornellà, Sant Cugat…).
            </p>
            {barcelonaByService.map((group) => (
              <ServiceCard key={group.serviceLabel} serviceLabel={group.serviceLabel} items={group.items} />
            ))}
          </div>
        ) : null}
      </div>

      <div className={`${ADMIN_CARD_PAD}`}>
        <button
          type="button"
          onClick={() => setShowExtras((v) => !v)}
          className="flex w-full items-center justify-between text-left text-sm font-semibold text-[#475569]"
        >
          <span>Hubs nacionales, blog y páginas editoriales ({extraEntries.length})</span>
          <span className="text-[#94A3B8]">{showExtras ? "Ocultar" : "Mostrar"}</span>
        </button>
        {showExtras ? (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
            {extraEntries.map((entry) => (
              <Link
                key={entry.id}
                href={entry.path}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-[#64748B] hover:bg-slate-50"
              >
                {entry.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      <p className="text-center text-xs text-[#94A3B8]">
        URLs completas: {siteOrigin.replace(/^https?:\/\//, "")}/…
      </p>
    </div>
  );
}
