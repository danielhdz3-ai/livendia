import { RentalIncidentsClient } from "@/components/rental-incidents-client";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = { title: "Portal de incidencias" };

export default async function IncidentsPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>No autenticado</div>;
  }

  const { data: property } = await supabase
    .from("properties")
    .select("id, address")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!property) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
          No se encontró una propiedad registrada. Contacta con tu gestor.
        </div>
      </div>
    );
  }

  const { data: incidents } = await supabase
    .from("incidents")
    .select("id, title, description, status, priority, created_at, estimated_cost")
    .eq("property_id", property.id)
    .order("created_at", { ascending: false });

  return (
    <RentalIncidentsClient
      propertyId={property.id as string}
      propertyAddress={property.address as string}
      incidents={(incidents ?? []) as Parameters<typeof RentalIncidentsClient>[0]["incidents"]}
    />
  );
}
