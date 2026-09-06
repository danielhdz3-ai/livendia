import { createAnonSupabaseClient } from "@/lib/supabase/server";
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

/** Slugs internos/de prueba: no deben listarse en /servicios ni /precios. */
const INTERNAL_ONLY_SERVICE_SLUGS = new Set(["pago-prueba-livendia"]);

function normalizeServiceCategory(service: PublicService): PublicService {
  if (
    service.slug === "revision-documental-post-arras" ||
    service.slug === "gestion-documental-vendedor"
  ) {
    return { ...service, category: "compraventa" };
  }
  if (service.slug === "acompanamiento-alquiler") {
    return { ...service, category: "acompanamiento" };
  }
  if (service.slug === "administracion-alquiler-temporada") {
    return { ...service, category: "administracion_alquiler" };
  }
  return service;
}

async function syncMissingCatalogSeeds(services: PublicService[]): Promise<PublicService[]> {
  const missingSeeds = CATALOG_SERVICE_SEEDS.filter(
    (seed) => !services.some((service) => service.slug === seed.slug),
  );

  // Actualiza metadatos de seeds ya existentes (categoría, nombre, features…) si diverge.
  const existingSeeds = CATALOG_SERVICE_SEEDS.filter((seed) =>
    services.some((service) => service.slug === seed.slug),
  );

  try {
    const admin = createServiceRoleClient();

    for (const seed of missingSeeds) {
      const { error } = await admin.from("services").upsert(toUpsertRow(seed), { onConflict: "slug" });
      if (error) {
        console.error("[catalog] upsert seed failed", seed.slug, error.message);
      }
    }

    for (const seed of existingSeeds) {
      const current = services.find((s) => s.slug === seed.slug);
      if (!current) continue;
      const needsMeta =
        current.category !== seed.category ||
        current.name !== seed.name ||
        current.price_cents !== seed.price_cents;
      if (!needsMeta) continue;
      const { error } = await admin
        .from("services")
        .update({
          category: seed.category,
          name: seed.name,
          description: seed.description,
          price_cents: seed.price_cents,
          features: seed.features,
          badge: seed.badge,
          is_active: true,
        })
        .eq("slug", seed.slug);
      if (error) {
        console.error("[catalog] update seed meta failed", seed.slug, error.message);
      }
    }

    if (missingSeeds.length === 0 && existingSeeds.every((seed) => {
      const current = services.find((s) => s.slug === seed.slug);
      return (
        current &&
        current.category === seed.category &&
        current.name === seed.name &&
        current.price_cents === seed.price_cents
      );
    })) {
      return services;
    }

    const slugs = CATALOG_SERVICE_SEEDS.map((seed) => seed.slug);
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

/** Servicio activo por slug. */
export async function getServiceBySlug(slug: string): Promise<PublicService | null> {
  const supabase = createAnonSupabaseClient();
  const { data } = await supabase
    .from("services")
    .select(SERVICE_SELECT)
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (!data) return null;
  return normalizeServiceCategory(data as PublicService);
}

export async function getPublicServices(): Promise<PublicService[]> {
  // Cliente anónimo (sin cookies()): permite que las ~10 rutas -local/[slug]
  // que consumen este catálogo se prerendericen de forma estática en vez de
  // servirse dinámicamente en cada petición. Rollback de 1 línea si algo
  // falla: volver a `await createServerSupabaseClient()` (importar desde
  // "@/lib/supabase/server").
  const supabase = createAnonSupabaseClient();
  const { data } = await supabase
    .from("services")
    .select(SERVICE_SELECT)
    .eq("is_active", true)
    .order("category", { ascending: true })
    .order("price_cents", { ascending: true });

  const services = ((data ?? []) as PublicService[]).map(normalizeServiceCategory);
  const withSeeds = await syncMissingCatalogSeeds(services);
  const withPrices = await syncFixedCatalogPrices(withSeeds);
  return withPrices
    .map(normalizeServiceCategory)
    .filter((s) => !INTERNAL_ONLY_SERVICE_SLUGS.has(s.slug));
}
