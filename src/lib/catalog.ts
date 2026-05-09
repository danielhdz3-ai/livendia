import { createServerSupabaseClient } from "@/lib/supabase/server";

export type PublicService = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  category: string | null;
  price_cents: number;
  is_recurring: boolean;
};

export async function getPublicServices(): Promise<PublicService[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("services")
    .select("id, slug, name, description, category, price_cents, is_recurring")
    .eq("is_active", true)
    .order("category", { ascending: true })
    .order("price_cents", { ascending: true });

  return (data ?? []) as PublicService[];
}

export const CATEGORY_LABEL: Record<string, string> = {
  compraventa: "Compraventa",
  alquiler: "Alquiler",
  pack: "Packs",
  administracion_alquiler: "Administración de alquiler",
  contrato: "Contratos",
  acompanamiento: "Acompañamiento",
  revision: "Revisión",
  otro: "Otros",
};

export const CATEGORY_ORDER = [
  "compraventa",
  "alquiler",
  "pack",
  "administracion_alquiler",
  "contrato",
  "acompanamiento",
  "revision",
  "otro",
];

export function formatEur(cents: number) {
  return `${(cents / 100).toFixed(2).replace(".", ",")} €`;
}

export function groupByCategory(services: PublicService[]) {
  const map = new Map<string, PublicService[]>();
  for (const s of services) {
    const c = s.category ?? "otro";
    if (!map.has(c)) map.set(c, []);
    map.get(c)!.push(s);
  }
  const sortedKeys = [...map.keys()].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  return sortedKeys.map((key) => ({ key, label: CATEGORY_LABEL[key] ?? key, items: map.get(key)! }));
}
