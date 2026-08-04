import { ClientPanelShell } from "@/components/client-panel-shell";
import { ConfiguracionForm } from "@/components/configuracion-form";
import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { getCachedAuthUser, getCachedUserProfile } from "@/lib/supabase/auth-cache";
import { redirect } from "next/navigation";
export const metadata = { title: "Configuración" };

export default async function ConfiguracionPage() {
  const user = await getCachedAuthUser();
  if (!user) redirect("/login");

  const profile = await getCachedUserProfile(user.id);

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
