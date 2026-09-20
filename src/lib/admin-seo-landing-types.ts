/** Tipos y utilidades puras del índice SEO — seguras para componentes cliente. */

export type AdminSeoLandingKind =
  | "local-ciudad"
  | "barrio-amb"
  | "hub-servicio"
  | "hub-ciudad"
  | "pillar"
  | "blog"
  | "pack";

export type AdminSeoLandingEntry = {
  id: string;
  serviceId: string;
  serviceLabel: string;
  serviceOrder: number;
  city: string;
  citySortKey: string;
  barrioAmb: string | null;
  kind: AdminSeoLandingKind;
  name: string;
  slug: string;
  path: string;
};

export type AdminSeoLandingIndex = {
  generatedAt: string;
  entries: AdminSeoLandingEntry[];
  stats: {
    total: number;
    byService: Record<string, number>;
    byCity: Record<string, number>;
    barcelonaBarrios: number;
    localCiudad: number;
    hubs: number;
    blog: number;
  };
};

export function groupEntriesByService(
  entries: AdminSeoLandingEntry[],
): { serviceLabel: string; items: AdminSeoLandingEntry[] }[] {
  const map = new Map<string, AdminSeoLandingEntry[]>();
  for (const e of entries) {
    const list = map.get(e.serviceLabel) ?? [];
    list.push(e);
    map.set(e.serviceLabel, list);
  }
  return [...map.entries()]
    .map(([serviceLabel, items]) => ({
      serviceLabel,
      items: [...items].sort((a, b) => {
        if (a.citySortKey !== b.citySortKey) return a.citySortKey.localeCompare(b.citySortKey, "es");
        return (a.barrioAmb ?? "").localeCompare(b.barrioAmb ?? "", "es");
      }),
    }))
    .sort((a, b) => {
      const orderA = a.items[0]?.serviceOrder ?? 999;
      const orderB = b.items[0]?.serviceOrder ?? 999;
      return orderA - orderB || a.serviceLabel.localeCompare(b.serviceLabel, "es");
    });
}

export function groupEntriesByCity(
  entries: AdminSeoLandingEntry[],
): { city: string; items: AdminSeoLandingEntry[] }[] {
  const map = new Map<string, AdminSeoLandingEntry[]>();
  for (const e of entries) {
    const list = map.get(e.city) ?? [];
    list.push(e);
    map.set(e.city, list);
  }
  return [...map.entries()]
    .map(([city, items]) => ({
      city,
      items: [...items].sort((a, b) => {
        if (a.serviceOrder !== b.serviceOrder) return a.serviceOrder - b.serviceOrder;
        return (a.barrioAmb ?? a.name).localeCompare(b.barrioAmb ?? b.name, "es");
      }),
    }))
    .sort((a, b) => a.city.localeCompare(b.city, "es"));
}

export function getBarcelonaBarrioEntries(entries: AdminSeoLandingEntry[]): AdminSeoLandingEntry[] {
  return entries
    .filter((e) => e.barrioAmb !== null)
    .sort((a, b) => {
      if (a.serviceOrder !== b.serviceOrder) return a.serviceOrder - b.serviceOrder;
      return (a.barrioAmb ?? "").localeCompare(b.barrioAmb ?? "", "es");
    });
}
