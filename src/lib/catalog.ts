import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/service";
import {
  CATALOG_SERVICE_SEEDS,
  FIXED_CATALOG_PRICE_CENTS,
  type CatalogServiceSeed,
  type PublicService,
} from "@/lib/catalog.public";

export * from "@/lib/catalog.public";

const SERVICE_SELECT =
  "id, slug, name, description, category, price_cents, is_recurring, features, badge";

function normalizeServiceCategory(service: PublicService): PublicService {
  if (service.slug === "revision-documental-post-arras") {
    return { ...service, category: "compraventa" };
  }
  return service;
}

async function syncMissingCatalogSeeds(services: PublicService[]): Promise<PublicService[]> {
  const missingSeeds = CATALOG_SERVICE_SEEDS.filter(
    (seed) => !services.some((service) => service.slug === seed.slug),
  );
  if (missingSeeds.length === 0) return services;

  try {
    const admin = createServiceRoleClient();
    for (const seed of missingSeeds) {
      const { error } = await admin.from("services").upsert(toUpsertRow(seed), { onConflict: "slug" });
      if (error) {
        console.error("[catalog] upsert seed failed", seed.slug, error.message);
      }
    }

    const slugs = missingSeeds.map((seed) => seed.slug);
    const { data, error } = await admin
      .from("services")
      .select(SERVICE_SELECT)
      .in("slug", slugs)
      .eq("is_active", true);

    if (error || !data?.length) return services;

    const bySlug = new Map(services.map((service) => [service.slug, service]));
    for (const row of data as PublicService[]) {
      bySlug.set(row.slug, row);
    }
    return [...bySlug.values()];
  } catch (error) {
    console.error("[catalog] syncMissingCatalogSeeds", error);
    return services;
  }
}

function toUpsertRow(seed: CatalogServiceSeed) {
  return {
    slug: seed.slug,
    name: seed.name,
    description: seed.description,
    category: seed.category,
    price_cents: seed.price_cents,
    is_recurring: seed.is_recurring,
    features: seed.features,
    badge: seed.badge,
    is_active: true,
  };
}

/** Mantiene precios comerciales fijos en BD (compra/venta, revisión, LAU, temporada). */
async function syncFixedCatalogPrices(services: PublicService[]): Promise<PublicService[]> {
  const stale = services.filter(
    (s) => s.slug in FIXED_CATALOG_PRICE_CENTS && s.price_cents !== FIXED_CATALOG_PRICE_CENTS[s.slug],
  );
  if (stale.length === 0) return services;

  try {
    const admin = createServiceRoleClient();
    for (const s of stale) {
      const price_cents = FIXED_CATALOG_PRICE_CENTS[s.slug];
      const { error } = await admin.from("services").update({ price_cents }).eq("slug", s.slug);
      if (error) console.error("[catalog] sync fixed price failed", s.slug, error.message);
    }
  } catch (error) {
    console.error("[catalog] syncFixedCatalogPrices", error);
    return services;
  }

  return services.map((s) =>
    s.slug in FIXED_CATALOG_PRICE_CENTS
      ? { ...s, price_cents: FIXED_CATALOG_PRICE_CENTS[s.slug] }
      : s,
  );
}

export async function getPublicServices(): Promise<PublicService[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("services")
    .select(SERVICE_SELECT)
    .eq("is_active", true)
    .order("category", { ascending: true })
    .order("price_cents", { ascending: true });

  const services = ((data ?? []) as PublicService[]).map(normalizeServiceCategory);
  const withSeeds = await syncMissingCatalogSeeds(services);
  const withPrices = await syncFixedCatalogPrices(withSeeds);
  return withPrices.map(normalizeServiceCategory);
}
