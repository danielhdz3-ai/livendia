import { ClientNotificationCenter } from "@/components/client-notification-center";
import { DashboardPostPaymentBanner } from "@/components/dashboard-post-payment-banner";
import { ClientPanelKpiStrip, ClientPanelPremiumHero } from "@/components/client-panel-premium";
import { ClientPanelEmptyState } from "@/components/client-panel-empty-state";
import { PanelContentEnter } from "@/components/panel-content-enter";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { PANEL_ACTION_CARD, PANEL_ACTION_ICON } from "@/lib/client-panel-ui";
import { calculateOrderProgress } from "@/lib/order-progress";
import {
  isRentalAdminServiceSlug,
  orderGrantsRentalAccess,
  subscriptionGrantsRentalAccess,
} from "@/lib/rental-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getCachedAuthUser } from "@/lib/supabase/auth-cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FileText,
  ShoppingBag,
  User,
  CreditCard,
  ArrowRight,
  FileSignature,
  Sparkles,
  Package,
  Upload,
  Eye,
} from "lucide-react";
import { Suspense } from "react";

type DashboardPageProps = {
  searchParams: Promise<{ pedido?: string }>;
};

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const { pedido: highlightOrderId } = await searchParams;
  const user = await getCachedAuthUser();
  if (!user) redirect("/login");

  const supabase = await createServerSupabaseClient();

  const [profileResult, ordersResult, rentalSubsResult] = await Promise.all([
    supabase.from("profiles").select("full_name, role").eq("id", user.id).maybeSingle(),
    supabase
      .from("orders")
      .select("id, status, created_at, total_cents, services ( name, slug )")
      .order("created_at", { ascending: false }),
    supabase
      .from("client_subscriptions")
      .select("status, current_period_end, services ( slug )")
      .eq("client_id", user.id),
  ]);

  const profile = profileResult.data;
  const orders = ordersResult.data;
  const rentalSubs = rentalSubsResult.data;
  const subsErr = rentalSubsResult.error;

  if (subsErr) {
    console.error("client_subscriptions:", subsErr.message);
  }

  const hasActiveRentalSub = (rentalSubs ?? []).some((row) => {
    const svc = row.services;
    const slug = Array.isArray(svc) ? svc[0]?.slug : (svc as { slug?: string } | null)?.slug;
    return (
      isRentalAdminServiceSlug(slug) &&
      subscriptionGrantsRentalAccess(row.status, row.current_period_end)
    );
  });

  const hasRentalViaOrder = orders?.some((o) => orderGrantsRentalAccess(o)) ?? false;

  // Check if user has active rental management subscription
  const hasRentalSubscription = hasActiveRentalSub || hasRentalViaOrder;

  // If user has rental subscription, redirect to rental dashboard
  if (hasRentalSubscription) {
    redirect("/dashboard/rental");
  }

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  const orderIds = (orders ?? []).map((o) => o.id as string);
  const docCountByOrder: Record<string, number> = {};
  if (orderIds.length > 0) {
    const { data: allDocs } = await supabase
      .from("documents")
      .select("order_id")
      .in("order_id", orderIds);
    for (const d of allDocs ?? []) {
      const oid = d.order_id as string;
      docCountByOrder[oid] = (docCountByOrder[oid] ?? 0) + 1;
    }
  }

  // Stats
  const totalOrders = orders?.length ?? 0;
  const pendingOrders = orders?.filter(o => o.status === "pending_docs" || o.status === "in_progress").length ?? 0;
  const completedOrders = orders?.filter((o) => o.status === "completed" || o.status === "delivered").length ?? 0;

  let highlightServiceName: string | null = null;
  if (highlightOrderId) {
    const highlighted = orders?.find((o) => o.id === highlightOrderId);
    if (highlighted) {
      const svc = highlighted.services;
      const row = Array.isArray(svc) ? svc[0] : svc;
      highlightServiceName = (row?.name as string | undefined) ?? null;
    }
  }

  const mobileOrders =
    orders?.map((order) => {
      const svc = order.services;
      const serviceRow = Array.isArray(svc) ? svc[0] : svc;
      const serviceSlug = (serviceRow?.slug as string | undefined) ?? null;
      const docCount = docCountByOrder[order.id as string] ?? 0;
      const { percent } = calculateOrderProgress({
        status: order.status as string,
        serviceSlug,
        uploadedTypes: [],
        docCount,
      });
      return {
        id: order.id as string,
        status: order.status as string,
        serviceName: (serviceRow?.name as string | undefined) ?? "Servicio",
        docCount,
        progressPercent: percent,
      };
    }) ?? [];

  const heroFocus =
    (highlightOrderId ? mobileOrders.find((o) => o.id === highlightOrderId) : null) ??
    mobileOrders.find((o) => o.status === "pending_docs" || o.status === "paid") ??
    mobileOrders[0] ??
    null;

  return (
    <>
      <header className="hidden border-b border-slate-200 bg-white lg:block">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1E293B]">¡Hola, {firstName}!</h1>
            <p className="text-sm text-[#64748B]">Bienvenido a tu panel de gestión inmobiliaria</p>
          </div>

          <div className="flex items-center gap-3">
            <ClientNotificationCenter />

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-sm font-bold text-white">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-[#1E293B]">{name}</div>
                <div className="text-xs text-[#64748B]">
                  {profile?.role === "admin" ? "Administrador" : "Cliente"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <PanelContentEnter>
        <main className="flex-1 overflow-y-auto p-4 pb-6 lg:p-8">
          <Suspense fallback={null}>
            <DashboardPostPaymentBanner orderId={highlightOrderId ?? null} serviceName={highlightServiceName} />
          </Suspense>

          <ClientPanelPremiumHero
            firstName={firstName}
            focus={heroFocus}
            stats={{ total: totalOrders, active: pendingOrders, completed: completedOrders }}
          />

          <div className="mb-6 hidden sm:grid">
            <ClientPanelKpiStrip
              items={[
                { label: "Total pedidos", value: totalOrders, hint: `${completedOrders} completados` },
                { label: "En proceso", value: pendingOrders, hint: "Requieren atención" },
                { label: "Completados", value: completedOrders, hint: "Servicios finalizados" },
                { label: "Servicios", value: "Ver", hint: "Contratar online", href: "/dashboard/servicios" },
              ]}
            />
          </div>

          {/* Recent Orders — escritorio */}
          <section className="mt-2 hidden lg:block">
            <Link
              href="/dashboard/servicios"
              className="group block overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition hover:shadow-xl hover:ring-[#1A4FBF]"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4 lg:items-center lg:gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#1A4FBF]">
                    <ShoppingBag className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1E293B]">Servicios disponibles</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#475569] lg:text-base">
                      Contrata contratos de alquiler, arras, administración de propiedades y más servicios
                      inmobiliarios
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 rounded-xl bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white transition group-hover:bg-[#2563EB] lg:flex-shrink-0">
                  <span>Ver catálogo</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </section>

          {/* Recent Orders — escritorio */}
          <section className="mt-8 hidden lg:block">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1E293B]">Pedidos recientes</h2>
                <p className="text-sm text-[#64748B]">Seguimiento y gestión de tus contratos</p>
              </div>
              {orders && orders.length > 3 && (
                <Link
                  href="/mis-pedidos"
                  className="flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
                >
                  <span>Ver todos</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>

            {!orders?.length ? (
              <ClientPanelEmptyState
                icon={Package}
                title="Aún no tienes pedidos"
                description="Cuando contrates un servicio, aparecerá aquí con seguimiento y progreso de tu expediente."
                actionHref="/dashboard/servicios"
                actionLabel="Explorar servicios"
              />
            ) : (
              <div className="space-y-4">
                {orders.slice(0, 5).map((order) => {
                  const svc = order.services;
                  const serviceRow = Array.isArray(svc) ? svc[0] : svc;

                  const needsDocsUpload =
                    order.status === "pending_docs" || order.status === "paid";

                  return (
                    <div
                      key={order.id}
                      id={`pedido-${order.id}`}
                      className={`flex flex-col gap-4 rounded-2xl bg-white p-5 shadow ring-1 transition hover:shadow-lg sm:flex-row sm:items-center ${
                        highlightOrderId === order.id
                          ? "ring-2 ring-[#1A4FBF] shadow-lg"
                          : "ring-slate-200"
                      }`}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]">
                        <FileSignature className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-[#1E293B]">{serviceRow?.name ?? "Servicio"}</h3>
                          <OrderStatusBadge status={order.status as string} size="sm" />
                        </div>
                        <div className="mt-1 flex items-center gap-4 text-xs text-[#64748B]">
                          <span>{new Date(order.created_at).toLocaleDateString("es-ES")}</span>
                          {order.total_cents != null && (
                            <span className="font-semibold text-[#1A4FBF]">
                              {(order.total_cents / 100).toFixed(2)} €
                            </span>
                          )}
                          {docCountByOrder[order.id as string] && (
                            <span>{docCountByOrder[order.id as string]} documento(s)</span>
                          )}
                        </div>
                      </div>

                      <Link
                        href={`/mis-pedidos/${order.id}`}
                        className={`flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                          needsDocsUpload
                            ? "bg-[#1A4FBF] text-white hover:bg-[#2563EB]"
                            : "border-2 border-[#1A4FBF] text-[#1A4FBF] hover:bg-[#1A4FBF] hover:text-white"
                        }`}
                      >
                        {needsDocsUpload ? (
                          <>
                            <Upload className="h-4 w-4" />
                            <span>Subir documentación</span>
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4" />
                            <span>Ver expediente</span>
                          </>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Quick Actions — escritorio */}
          <section className="mt-8 hidden lg:block">
            <h2 className="mb-6 text-xl font-bold text-[#1E293B]">Acciones rápidas</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/dashboard/perfil" className={PANEL_ACTION_CARD}>
                <div className={PANEL_ACTION_ICON}>
                  <User className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Editar perfil</div>
                  <div className="text-xs text-[#64748B]">Datos personales</div>
                </div>
              </Link>

              <Link href="/dashboard/pagos" className={PANEL_ACTION_CARD}>
                <div className={PANEL_ACTION_ICON}>
                  <CreditCard className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Métodos de pago</div>
                  <div className="text-xs text-[#64748B]">Gestionar tarjetas</div>
                </div>
              </Link>

              <Link href="/mis-pedidos" className={PANEL_ACTION_CARD}>
                <div className={PANEL_ACTION_ICON}>
                  <FileText className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Mis documentos</div>
                  <div className="text-xs text-[#64748B]">Historial completo</div>
                </div>
              </Link>

              <Link href="/dashboard/servicios" className={PANEL_ACTION_CARD}>
                <div className={PANEL_ACTION_ICON}>
                  <Sparkles className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Contratar servicio</div>
                  <div className="text-xs text-[#64748B]">Ver catálogo</div>
                </div>
              </Link>
            </div>
          </section>
        </main>
        </PanelContentEnter>
    </>
  );
}
