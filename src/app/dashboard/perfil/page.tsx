import { ProfileForm } from "@/app/dashboard/perfil/profile-form";
import { ClientPanelShell } from "@/components/client-panel-shell";
import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: "Mi perfil" };

export default async function PerfilPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, phone, dni_nie, fiscal_address")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <ClientPanelShell
      title="Mi perfil"
      subtitle="Tus datos de contacto y facturación para contratos y comunicaciones con tu gestor."
      eyebrow="Datos personales"
    >
      <ProfileForm
        initial={{
          fullName: profile?.full_name ?? "",
          email: user.email ?? "",
          phone: profile?.phone ?? "",
          dniNie: profile?.dni_nie ?? "",
          fiscalAddress: profile?.fiscal_address ?? "",
          role: profile?.role ?? "client",
        }}
      />
      <LivendiaGestorCard compact />
    </ClientPanelShell>
  );
}
