import { ClientPanelShell } from "@/components/client-panel-shell";
import { ConfiguracionForm } from "@/components/configuracion-form";
import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: "Configuración" };

export default async function ConfiguracionPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("notify_email_orders, notify_email_docs, notify_newsletter")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <ClientPanelShell
      title="Configuración"
      subtitle="Personaliza notificaciones, seguridad y privacidad de tu cuenta Livendia."
      eyebrow="Preferencias"
    >
      <ConfiguracionForm
        initial={{
          notifyEmailOrders: profile?.notify_email_orders ?? true,
          notifyEmailDocs: profile?.notify_email_docs ?? true,
          notifyNewsletter: profile?.notify_newsletter ?? false,
        }}
      />
      <LivendiaGestorCard compact />
    </ClientPanelShell>
  );
}
