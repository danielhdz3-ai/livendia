import { RentalIncidentsClient } from "@/components/rental-incidents-client";
import { requireAdmin } from "@/lib/admin-auth";
import { requireAdminMirrorProperty } from "@/lib/admin-rental-client-page";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: { absolute: "Incidencias (vista cliente) — Livendia Admin" } };

export default async function AdminMirrorIncidenciasPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();
  const { activeProperty: property } = await requireAdminMirrorProperty(supabase, clientId);

  const { data: incidents } = await supabase
    .from("incidents")
    .select("id, title, description, status, priority, created_at, estimated_cost")
    .eq("property_id", property!.id)
    .order("created_at", { ascending: false });

  return (
    <RentalIncidentsClient
      propertyId={property!.id}
      propertyAddress={property!.address}
      incidents={(incidents ?? []) as Parameters<typeof RentalIncidentsClient>[0]["incidents"]}
    />
  );
}
