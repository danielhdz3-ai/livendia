import { RentalDashboardHome } from "@/components/rental/rental-dashboard-home";
import { getActivePropertyForUser } from "@/lib/rental-active-property";
import { rentalClientDashboardPaths } from "@/lib/rental-admin-paths";
import { loadRentalDashboardHomeData } from "@/lib/rental-dashboard-home-data";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: "Panel de administración de alquileres" };

export default async function RentalDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const ctx = await getActivePropertyForUser(supabase, user.id);
  const data = await loadRentalDashboardHomeData(supabase, user.id, name, ctx);

  if (data.isSetupComplete && (!ctx.activeProperty || !ctx.activeTenant)) {
    redirect("/dashboard/rental/inmueble");
  }

  return (
    <RentalDashboardHome data={data} paths={rentalClientDashboardPaths()} variant="client" />
  );
}
