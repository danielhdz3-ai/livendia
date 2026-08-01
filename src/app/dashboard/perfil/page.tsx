import { ProfileForm } from "@/app/dashboard/perfil/profile-form";
import { ClientPanelShell } from "@/components/client-panel-shell";
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
      subtitle="Actualiza tus datos de contacto y facturación para tus expedientes en Livendia."
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

      <p className="mt-6 text-center text-xs text-[#64748B] sm:text-sm">
        Estos datos se usan en tus contratos y comunicaciones con tu gestor. Si necesitas ayuda, escribe a{" "}
        <a href="mailto:info@livendia.com" className="font-semibold text-[#1A4FBF] hover:underline">
          info@livendia.com
        </a>
        .
      </p>
    </ClientPanelShell>
  );
}
