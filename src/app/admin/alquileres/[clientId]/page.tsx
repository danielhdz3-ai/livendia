import { RentalDashboardHome } from "@/components/rental/rental-dashboard-home";
import { requireAdmin } from "@/lib/admin-auth";
import { rentalAdminClientMirrorPaths } from "@/lib/rental-admin-paths";
import { loadRentalDashboardHomeData } from "@/lib/rental-dashboard-home-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function generateMetadata({ params }: { params: Promise<{ clientId: string }> }) {
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();
  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", clientId).maybeSingle();
  const name = (profile?.full_name as string | null)?.trim() || "Cliente";
  return { title: { absolute: `${name} — Panel alquiler (vista cliente) — Livendia Admin` } };
}

export default async function AdminRentalClientMirrorPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", clientId)
    .maybeSingle();

  const data = await loadRentalDashboardHomeData(
    supabase,
    clientId,
    (profile?.full_name as string | null) ?? null,
  );

  return (
    <RentalDashboardHome
      data={data}
      paths={rentalAdminClientMirrorPaths(clientId)}
      variant="admin"
    />
  );
}
