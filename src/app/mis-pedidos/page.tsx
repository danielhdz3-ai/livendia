import { createServerSupabaseClient } from "@/lib/supabase/server";
import { MisPedidosListHero } from "@/components/mis-pedidos-list-hero";
import { MisPedidosOrderCard } from "@/components/mis-pedidos-order-card";
import { ClientPanelEmptyState } from "@/components/client-panel-empty-state";
import { MisPedidosPullRefresh } from "@/components/mis-pedidos-pull-refresh";
import { PanelContentEnter } from "@/components/panel-content-enter";
import { calculateOrderProgress } from "@/lib/order-progress";
import { PANEL_CARD, PANEL_PAGE_BG, PANEL_SECTION_TITLE } from "@/lib/client-panel-ui";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FileText, Package } from "lucide-react";

export const metadata = { title: "Mis expedientes" };

export default async function MisPedidosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [{ data: profile }, { data: orders }] = await Promise.all([
    supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle(),
    supabase
      .from("orders")
      .select("id, status, created_at, total_cents, services ( name, slug )")
      .order("created_at", { ascending: false }),
  ]);

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  const orderIds = (orders ?? []).map((o) => o.id as string);
  const docCountByOrder: Record<string, number> = {};
  const uploadedTypesByOrder: Record<string, string[]> = {};

  if (orderIds.length > 0) {
    const { data: allDocs } = await supabase
      .from("documents")
      .select("order_id, document_type")
      .in("order_id", orderIds);

    for (const d of allDocs ?? []) {
      const oid = d.order_id as string;
      docCountByOrder[oid] = (docCountByOrder[oid] ?? 0) + 1;
      if (!uploadedTypesByOrder[oid]) uploadedTypesByOrder[oid] = [];
      uploadedTypesByOrder[oid].push(d.document_type as string);
    }
  }

  const enrichedOrders =
    orders?.map((order) => {
      const svc = order.services;
      const serviceRow = Array.isArray(svc) ? svc[0] : svc;
      const serviceSlug = (serviceRow?.slug as string | undefined) ?? null;
      const docCount = docCountByOrder[order.id as string] ?? 0;
      const progress = calculateOrderProgress({
        status: order.status as string,
        serviceSlug,
        uploadedTypes: uploadedTypesByOrder[order.id as string] ?? [],
        docCount,
      });

      return {
        id: order.id as string,
        serviceName: (serviceRow?.name as string | undefined) ?? "Servicio",
        status: order.status as string,
        createdAt: order.created_at as string,
        totalCents: order.total_cents as number | null,
        docCount,
        progressPercent: progress.percent,
        progressLabel: progress.label,
        isActive: ["pending_payment", "paid", "pending_docs", "in_review", "in_progress"].includes(
          order.status as string,
        ),
      };
    }) ?? [];

  const activeOrders = enrichedOrders.filter((o) => o.isActive);
  const completedOrders = enrichedOrders.filter(
    (o) => o.status === "completed" || o.status === "delivered",
  );
  const totalSpent = orders?.reduce((sum, o) => sum + (o.total_cents ?? 0), 0) ?? 0;

  const heroFocus =
    enrichedOrders.find((o) => o.status === "pending_docs" || o.status === "paid") ??
    enrichedOrders[0] ??
    null;

  return (
    <MisPedidosPullRefresh>
    <div className={`min-h-screen pb-24 lg:pb-8 ${PANEL_PAGE_BG}`}>
      <MisPedidosListHero
        firstName={firstName}
        stats={{
          total: enrichedOrders.length,
          active: activeOrders.length,
          completed: completedOrders.length,
          invested: `${(totalSpent / 100).toFixed(0)} €`,
        }}
        focus={
          heroFocus
            ? {
                id: heroFocus.id,
                serviceName: heroFocus.serviceName,
                docCount: heroFocus.docCount,
                progressPercent: heroFocus.progressPercent,
              }
            : null
        }
      />

      <PanelContentEnter>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8 xl:px-8">
          {!enrichedOrders.length ? (
            <ClientPanelEmptyState
              icon={Package}
              title="Aún no tienes expedientes"
              description="Cuando contrates un servicio, aparecerá aquí con seguimiento, progreso y subida de documentación."
              actionHref="/dashboard/servicios"
              actionLabel="Contratar servicio"
              secondaryHref="/contacto"
              secondaryLabel="Hablar con Daniel, tu gestor"
            />
          ) : (
          <div className="space-y-8">
            {activeOrders.length > 0 ? (
              <section>
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className={PANEL_SECTION_TITLE}>Expedientes activos</h2>
                    <p className="mt-1 text-sm text-[#64748B]">
                      {activeOrders.length} trámite(s) en curso · sube documentación o consulta el estado
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 xl:grid-cols-2">
                  {activeOrders.map((order) => (
                    <MisPedidosOrderCard key={order.id} {...order} />
                  ))}
                </div>
              </section>
            ) : null}

            {completedOrders.length > 0 ? (
              <section>
                <div className="mb-4">
                  <h2 className={PANEL_SECTION_TITLE}>Expedientes cerrados</h2>
                  <p className="mt-1 text-sm text-[#64748B]">
                    {completedOrders.length} servicio(s) completado(s)
                  </p>
                </div>
                <div className="grid gap-4 xl:grid-cols-2">
                  {completedOrders.map((order) => (
                    <MisPedidosOrderCard key={order.id} {...order} />
                  ))}
                </div>
              </section>
            ) : null}

            <section className={`${PANEL_CARD} bg-gradient-to-br from-[#EFF6FF] to-white`}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1A4FBF] text-white">
                    <FileText className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-bold text-[#1E293B]">¿Necesitas otro servicio?</h2>
                    <p className="mt-1 text-sm text-[#64748B]">
                      Contratos LAU, arras, revisión registral y más desde tu panel.
                    </p>
                  </div>
                </div>
                <Link
                  href="/dashboard/servicios"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] px-6 text-sm font-bold text-white hover:bg-[#2563EB]"
                >
                  Ver catálogo
                </Link>
              </div>
            </section>
          </div>
        )}
        </main>
      </PanelContentEnter>
    </div>
    </MisPedidosPullRefresh>
  );
}
