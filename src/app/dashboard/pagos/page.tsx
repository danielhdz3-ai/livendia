import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { ClientPanelShell } from "@/components/client-panel-shell";
import { PaymentsBillingCard } from "@/components/payments-billing-card";
import { PaymentsHistoryList } from "@/components/payments-history-list";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: "Pagos y facturación" };

export default async function PagosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .maybeSingle();

  const hasStripeCustomer =
    typeof profile?.stripe_customer_id === "string" && profile.stripe_customer_id.trim().length > 0;

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, total_cents, paid_at, created_at, services ( name )")
    .eq("client_id", user.id)
    .not("paid_at", "is", null)
    .order("paid_at", { ascending: false });

  const historyRows =
    orders?.map((order) => {
      const svc = order.services;
      const serviceRow = Array.isArray(svc) ? svc[0] : svc;
      return {
        id: order.id as string,
        serviceName: (serviceRow?.name as string | undefined) ?? "Servicio",
        status: order.status as string,
        totalCents: order.total_cents as number | null,
        paidAt: (order.paid_at as string | null) ?? null,
        createdAt: order.created_at as string,
      };
    }) ?? [];

  return (
    <ClientPanelShell
      title="Pagos y facturación"
      subtitle="Consulta tu historial de cobros y gestiona métodos de pago de forma segura con Stripe."
      eyebrow="Facturación"
    >
      <PaymentsBillingCard hasStripeCustomer={hasStripeCustomer} />
      <PaymentsHistoryList rows={historyRows} />
      <LivendiaGestorCard compact />
    </ClientPanelShell>
  );
}
