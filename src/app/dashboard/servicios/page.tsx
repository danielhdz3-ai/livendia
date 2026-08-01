import { ClientPanelShell } from "@/components/client-panel-shell";
import { ClientPanelEmptyState } from "@/components/client-panel-empty-state";
import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getPublicServices, groupByCategory } from "@/lib/catalog";
import { ServiceCardsClient } from "@/app/servicios/service-cards-client";
import { PANEL_SECTION_TITLE } from "@/lib/client-panel-ui";
import { ShoppingBag, Sparkles } from "lucide-react";

export const metadata = { title: "Contratar servicios" };

export default async function ServiciosInternosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const services = await getPublicServices();
  const groups = groupByCategory(services);

  return (
    <ClientPanelShell
      wide
      title="Servicios disponibles"
      subtitle="Contrata con pago seguro Stripe. Mismo catálogo premium que en la web pública."
      eyebrow="Catálogo Livendia"
      backLabel="Volver al panel"
    >
      {groups.length === 0 ? (
        <ClientPanelEmptyState
          icon={Sparkles}
          title="Catálogo en preparación"
          description="Estamos actualizando los servicios disponibles. Vuelve pronto o contacta con tu gestor."
          actionHref="/contacto"
          actionLabel="Contactar con Livendia"
        />
      ) : (
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.key}>
              <h2 className={PANEL_SECTION_TITLE}>{group.label}</h2>
              <div className="mt-4">
                <ServiceCardsClient services={group.items} />
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <ClientPanelEmptyState
          icon={ShoppingBag}
          title="¿No sabes qué contratar?"
          description="Tu gestor Daniel te orienta sobre contratos LAU, arras, revisión registral y más."
          actionHref="/contacto"
          actionLabel="Pedir asesoramiento"
        />
        <LivendiaGestorCard compact />
      </div>
    </ClientPanelShell>
  );
}
