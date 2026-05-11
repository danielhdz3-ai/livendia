import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { LogoutButton } from "./logout-button";
import {
  Home,
  FileText,
  Bell,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
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
  MoreVertical,
} from "lucide-react";

export default async function DashboardPage() {
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

  const { data: allServices } = await supabase
    .from("services")
    .select("id, name, slug, description, price_cents, category, is_recurring")
    .eq("is_active", true)
    .order("price_cents", { ascending: true });

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  // Separate services by type
  const contractServices = (allServices ?? []).filter(s => !s.is_recurring);
  const subscriptionServices = (allServices ?? []).filter(s => s.is_recurring);

  const orderIds = (orders ?? []).map((o) => o.id as string);
  let docCountByOrder: Record<string, number> = {};
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
  const completedOrders = orders?.filter(o => o.status === "delivered").length ?? 0;
  const totalSpent = orders?.reduce((sum, o) => sum + (o.total_cents ?? 0), 0) ?? 0;

  // Service images mapping
  const SERVICE_IMAGES: Record<string, string> = {
    "contrato-alquiler-lau": "/images/contratos1.jpg",
    "contrato-alquiler-temporada": "/images/contratos2.jpg",
    "contrato-alquiler-habitacion": "/images/contratos5.jpg",
    "contrato-arras-penitenciales": "/images/contratos6.jpg",
    "contrato-arras-confirmatorias": "/images/contratos7.jpg",
    "administracion-alquiler": "/images/gestoria.jpg",
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="border-b border-slate-200 p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#1E293B]">Livendia</div>
              <div className="text-xs text-[#64748B]">Gestoría Digital</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl bg-[#1A4FBF]/10 px-4 py-3 text-sm font-semibold text-[#1A4FBF]"
          >
            <Home className="h-5 w-5" />
            <span>Panel principal</span>
          </Link>

          <Link
            href="/mis-pedidos"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B]"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Mis pedidos</span>
            {pendingOrders > 0 && (
              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#06B6D4] text-xs font-bold text-white">
                {pendingOrders}
              </span>
            )}
          </Link>

          <Link
            href="/servicios"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B]"
          >
            <Sparkles className="h-5 w-5" />
            <span>Servicios</span>
          </Link>

          <Link
            href="#documentos"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B]"
          >
            <FileText className="h-5 w-5" />
            <span>Documentos</span>
          </Link>

          <div className="my-4 border-t border-slate-200"></div>

          <Link
            href="#perfil"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B]"
          >
            <User className="h-5 w-5" />
            <span>Mi perfil</span>
          </Link>

          <Link
            href="#pagos"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B]"
          >
            <CreditCard className="h-5 w-5" />
            <span>Métodos de pago</span>
          </Link>

          <Link
            href="#configuracion"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B]"
          >
            <Settings className="h-5 w-5" />
            <span>Configuración</span>
          </Link>
        </nav>

        <div className="border-t border-slate-200 p-4">
          {profile?.role === "admin" && (
            <Link
              href="/admin/pedidos"
              className="mb-3 flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-900 transition hover:bg-amber-100"
            >
              <Building className="h-4 w-4" />
              <span>Panel Admin</span>
            </Link>
          )}
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
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
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg shadow-blue-500/30">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="text-sm font-medium opacity-90">Total pedidos</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{totalOrders}</div>
                <div className="mt-1 text-xs opacity-75">
                  {completedOrders} completados
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 text-white shadow-lg shadow-cyan-500/30">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-medium opacity-90">En proceso</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{pendingOrders}</div>
                <div className="mt-1 text-xs opacity-75">
                  Requieren atención
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg shadow-green-500/30">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium opacity-90">Completados</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{completedOrders}</div>
                <div className="mt-1 text-xs opacity-75">
                  Servicios finalizados
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 p-6 text-white shadow-lg shadow-violet-500/30">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-white/10"></div>
              <div className="relative">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-medium opacity-90">Total invertido</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{(totalSpent / 100).toFixed(0)} €</div>
                <div className="mt-1 text-xs opacity-75">
                  En servicios contratados
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <section className="mt-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1E293B]">Servicios disponibles</h2>
                <p className="text-sm text-[#64748B]">Contrata y gestiona tus servicios inmobiliarios</p>
              </div>
              <Link
                href="/servicios"
                className="flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
              >
                <span>Ver todos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contractServices.slice(0, 6).map((service) => {
                const imageUrl = SERVICE_IMAGES[service.slug as string] || "/images/contratos.jpg";
                return (
                  <div
                    key={service.id}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-[#1A4FBF]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={service.name as string}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="rounded-xl bg-white px-3 py-1.5 text-center">
                          <span className="text-2xl font-bold text-[#1A4FBF]">
                            {(service.price_cents / 100).toFixed(0)} €
                          </span>
                          <span className="ml-1 text-xs text-[#64748B]">IVA incl.</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#1E293B]">{service.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#64748B]">
                        {service.description}
                      </p>

                      <Link
                        href={`/servicios/${service.slug}`}
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"
                      >
                        <span>Ver detalles y contratar</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Recent Orders */}
          <section className="mt-8">
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
                  const statusColors: Record<string, string> = {
                    pending_docs: "bg-amber-100 text-amber-900",
                    in_progress: "bg-blue-100 text-blue-900",
                    delivered: "bg-green-100 text-green-900",
                    cancelled: "bg-red-100 text-red-900",
                  };
                  const statusIcons: Record<string, any> = {
                    pending_docs: Upload,
                    in_progress: Clock,
                    delivered: CheckCircle2,
                    cancelled: AlertCircle,
                  };
                  const StatusIcon = statusIcons[order.status] || FileText;

                  return (
                    <div
                      key={order.id}
                      className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200 transition hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]">
                        <FileSignature className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#1E293B]">{serviceRow?.name ?? "Servicio"}</h3>
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusColors[order.status] || "bg-slate-100 text-slate-900"}`}>
                            <StatusIcon className="mb-0.5 mr-1 inline h-3 w-3" />
                            {ORDER_STATUS_LABEL_ES[order.status] ?? order.status}
                          </span>
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
                        className="flex items-center gap-2 rounded-xl border-2 border-[#1A4FBF] px-4 py-2 text-sm font-semibold text-[#1A4FBF] transition hover:bg-[#1A4FBF] hover:text-white"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Ver expediente</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Quick Actions */}
          <section className="mt-8">
            <h2 className="mb-6 text-xl font-bold text-[#1E293B]">Acciones rápidas</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="#perfil"
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
                href="#pagos"
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
                href="#documentos"
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
                href="/servicios"
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
