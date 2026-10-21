import { AdminRentalMirrorNav } from "@/components/admin/admin-rental-mirror-nav";
import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function AdminRentalClientLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", clientId)
    .maybeSingle();

  if (!profile || profile.role === "admin") {
    notFound();
  }

  const clientLabel = (profile.full_name as string | null)?.trim() || "Cliente";

  return (
    <div>
      <AdminRentalMirrorNav clientId={clientId} clientLabel={clientLabel} />
      {children}
    </div>
  );
}
