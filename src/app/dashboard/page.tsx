import { DashboardPostPaymentBanner } from "@/components/dashboard-post-payment-banner";
import { DashboardMobileQuickActions } from "@/components/dashboard-mobile-quick-actions";
import { ClientPanelKpiStrip, ClientPanelPremiumHero } from "@/components/client-panel-premium";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { PANEL_PAGE_BG } from "@/lib/client-panel-ui";
import { calculateOrderProgress } from "@/lib/order-progress";
import {
  orderGrantsRentalAccess,
  RENTAL_SERVICE_SLUG,
  subscriptionGrantsRentalAccess,
} from "@/lib/rental-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "./logout-button";
import {
  Home,
  FileText,
  Bell,
  Settings,
  Clock,
  CheckCircle2,
  ShoppingBag,
  User,
  CreditCard,
  ArrowRight,
  FileSignature,
  Building,
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
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("full_name, role").eq("id", user.id).maybeSingle();

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, created_at, total_cents, services ( name, slug )")
    .order("created_at", { ascending: false });

  const { data: rentalSubs, error: subsErr } = await supabase
    .from("client_subscriptions")
    .select("status, current_period_end, services ( slug )")
    .eq("client_id", user.id);

  if (subsErr) {
    console.error("client_subscriptions:", subsErr.message);
  }

  const hasActiveRentalSub = (rentalSubs ?? []).some((row) => {
    const svc = row.services;
    const slug = Array.isArray(svc) ? svc[0]?.slug : (svc as { slug?: string } | null)?.slug;
    return (
      slug === RENTAL_SERVICE_SLUG &&
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

  const navBase =
    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white";
  const navActive =
    "flex items-center gap-3 rounded-lg bg-white/[0.17] px-3 py-2 text-sm font-semibold text-white shadow-[inset_4px_0_0_0_#06B6D4]";
  const sidebarQuickLink =
    "block rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-white/85 transition hover:bg-white/15 hover:text-white";

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

  const uploadFocusOrder =
    orders?.find((o) => o.status === "pending_docs" || o.status === "paid") ??
    orders?.[0];
  const mobileUploadHref = uploadFocusOrder
    ? `/mis-pedidos/${uploadFocusOrder.id as string}`
    : "/mis-pedidos";

  const heroFocus =
    (highlightOrderId ? mobileOrders.find((o) => o.id === highlightOrderId) : null) ??
    mobileOrders.find((o) => o.status === "pending_docs" || o.status === "paid") ??
    mobileOrders[0] ??
    null;

  return (
    <div className={`flex min-h-screen ${PANEL_PAGE_BG}`}>
      {/* Sidebar — mismo estilo que administración de alquiler */}
      <aside className="hidden w-64 shrink-0 border-r border-[#1547a8]/80 bg-[#1A4FBF] shadow-xl shadow-slate-900/15 lg:flex">
        <div className="flex h-full min-h-screen w-full flex-col">
          <div className="border-b border-white/15 p-6">
            <Link href="/dashboard" className="block outline-none ring-white/40 focus-visible:ring-2">
              <span className="text-3xl font-extrabold leading-tight tracking-tight text-white">Livendia</span>
              <span className="mt-1.5 block text-sm font-semibold text-white/80">Gestoría Digital</span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            <Link href="/dashboard" className={navActive}>
              <Home className="h-5 w-5 shrink-0 text-white" />
              <span>Panel principal</span>
            </Link>

            <Link href="/mis-pedidos" className={navBase}>
              <ShoppingBag className="h-5 w-5 shrink-0 opacity-95" />
              <span>Mis pedidos</span>
              {pendingOrders > 0 && (
                <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#06B6D4] px-1 text-xs font-bold text-white">
                  {pendingOrders}
                </span>
              )}
            </Link>

            <Link href="/dashboard/servicios" className={navBase}>
              <Sparkles className="h-5 w-5 shrink-0 opacity-95" />
              <span>Servicios</span>
            </Link>

            <Link href="/mis-pedidos" className={navBase}>
              <FileText className="h-5 w-5 shrink-0 opacity-95" />
              <span>Documentos</span>
            </Link>

            <div className="my-4 border-t border-white/15" />

            <Link href="/dashboard/perfil" className={navBase}>
              <User className="h-5 w-5 shrink-0 opacity-95" />
              <span>Mi perfil</span>
            </Link>

            <Link href="/dashboard/pagos" className={navBase}>
              <CreditCard className="h-5 w-5 shrink-0 opacity-95" />
              <span>Métodos de pago</span>
            </Link>

            <Link href="/dashboard/configuracion" className={navBase}>
              <Settings className="h-5 w-5 shrink-0 opacity-95" />
              <span>Configuración</span>
            </Link>
          </nav>

          <div className="border-t border-white/15 p-4">
            <div className="mb-4 space-y-2">
              <div className="text-xs font-semibold uppercase text-white/50">Acciones rápidas</div>
              <Link href="/dashboard/servicios" className={sidebarQuickLink}>
                Contratar contratos
              </Link>
              <Link href="/dashboard/perfil" className={sidebarQuickLink}>
                Editar perfil
              </Link>
            </div>

            {profile?.role === "admin" && (
              <Link
                href="/admin/pedidos"
                className="mb-3 flex items-center gap-2 rounded-lg bg-amber-400/20 px-3 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-400/30"
              >
                <Building className="h-4 w-4" />
                <span>Panel Admin</span>
              </Link>
            )}

            <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/[0.1] p-3 ring-1 ring-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-bold text-white">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-white">{firstName}</div>
                <div className="text-xs text-white/65">Contratos y servicios</div>
              </div>
            </div>

            <LogoutButton variant="on-brand" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="hidden border-b border-slate-200 bg-white lg:block">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-[#1E293B]">¡Hola, {firstName}! 👋</h1>
              <p className="text-sm text-[#64748B]">Bienvenido a tu panel de gestión inmobiliaria</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative rounded-xl border border-slate-200 p-2.5 transition hover:bg-slate-50">
                <Bell className="h-5 w-5 text-[#64748B]" />
                {pendingOrders > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#06B6D4] text-[10px] font-bold text-white">
                    {pendingOrders}
                  </span>
                )}
              </button>

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

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 pb-6 lg:p-8">
          <Suspense fallback={null}>
            <DashboardPostPaymentBanner orderId={highlightOrderId ?? null} serviceName={highlightServiceName} />
          </Suspense>

          <ClientPanelPremiumHero
            firstName={firstName}
            focus={heroFocus}
            stats={{ total: totalOrders, active: pendingOrders, completed: completedOrders }}
          />

          <DashboardMobileQuickActions uploadHref={mobileUploadHref} />

          <div className="mb-6 hidden sm:grid">
            <ClientPanelKpiStrip
              items={[
                { label: "Total pedidos", value: totalOrders, hint: `${completedOrders} completados`, tone: "blue" },
                { label: "En proceso", value: pendingOrders, hint: "Requieren atención", tone: "amber" },
                { label: "Completados", value: completedOrders, hint: "Servicios finalizados", tone: "green" },
                { label: "Servicios", value: "Ver", hint: "Contratar contratos online", tone: "violet" },
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
              <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                  <Package className="h-8 w-8 text-[#64748B]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">Aún no tienes pedidos</h3>
                <p className="mt-2 text-sm text-[#64748B]">
                  Cuando contrates un servicio, aparecerá aquí con todo el seguimiento
                </p>
                <Link
                  href="/servicios"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2563EB]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Explorar servicios</span>
                </Link>
              </div>
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
              <Link
                href="/dashboard/perfil"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200 transition hover:shadow-lg hover:ring-[#1A4FBF]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Editar perfil</div>
                  <div className="text-xs text-[#64748B]">Datos personales</div>
                </div>
              </Link>

              <Link
                href="/dashboard/pagos"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200 transition hover:shadow-lg hover:ring-[#1A4FBF]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition group-hover:bg-green-100">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Métodos de pago</div>
                  <div className="text-xs text-[#64748B]">Gestionar tarjetas</div>
                </div>
              </Link>

              <Link
                href="/mis-pedidos"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200 transition hover:shadow-lg hover:ring-[#1A4FBF]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 transition group-hover:bg-violet-100">
                  <FileText className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Mis documentos</div>
                  <div className="text-xs text-[#64748B]">Historial completo</div>
                </div>
              </Link>

              <Link
                href="/dashboard/servicios"
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F4E4A6] p-5 shadow-lg transition hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition group-hover:bg-white/30">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Contratar servicio</div>
                  <div className="text-xs text-amber-100">Ver catálogo</div>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
