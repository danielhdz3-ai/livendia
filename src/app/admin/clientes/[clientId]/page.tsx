import {
  orderGrantsRentalAccess,
  RENTAL_SERVICE_SLUG,
  subscriptionGrantsRentalAccess,
} from "@/lib/rental-access";
import { AdminStorageDocLink } from "@/components/admin-storage-doc-link";
import { ORDER_DOCUMENT_LABEL_ES } from "@/lib/order-document-labels";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  ShoppingCart,
  Euro,
  FileText,
  Clock,
  CheckCircle2,
  Building2,
} from "lucide-react";

export const metadata = { title: { absolute: "Detalle de cliente — Livendia Admin" } };

const statusLabel: Record<string, string> = {
  pending_payment: "Pago pendiente",
  paid: "Pagado",
  pending_docs: "Falta documentación",
  in_review: "En revisión",
  in_progress: "En curso",
  completed: "Completado",
  delivered: "Completado",
  cancelled: "Cancelado",
};

const statusColor: Record<string, string> = {
  pending_payment: "bg-amber-100 text-amber-800",
  paid: "bg-blue-100 text-blue-800",
  pending_docs: "bg-orange-100 text-orange-800",
  in_review: "bg-purple-100 text-purple-800",
  in_progress: "bg-cyan-100 text-cyan-800",
  completed: "bg-green-100 text-green-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default async function AdminClientDetailPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/clientes");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const [{ data: client }, { data: orders }, { data: rentalSubs }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", clientId).maybeSingle(),
    supabase
      .from("orders")
      .select("id, status, total_cents, created_at, updated_at, services(name, slug)")
      .eq("client_id", clientId)
      .order("created_at", { ascending: false }),
    supabase.from("client_subscriptions").select("status, current_period_end, services ( slug )").eq("client_id", clientId),
  ]);

  if (!client) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-xl bg-white p-12 text-center shadow ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-[#1E293B]">Cliente no encontrado</h3>
          <Link
            href="/admin/clientes"
            className="mt-4 inline-block font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
          >
            ← Volver a la lista
          </Link>
        </div>
      </main>
    );
  }

  const hasActiveRentalSub = (rentalSubs ?? []).some((row) => {
    const svc = row.services;
    const slug = Array.isArray(svc) ? svc[0]?.slug : (svc as { slug?: string } | null)?.slug;
    return (
      slug === RENTAL_SERVICE_SLUG &&
      subscriptionGrantsRentalAccess(row.status, row.current_period_end)
    );
  });

  const orderIds = (orders ?? []).map((o) => o.id as string);

  let clientOrderDocs: Array<{
    id: string;
    order_id: string;
    file_name: string;
    file_path: string;
    document_type: string;
    created_at: string;
    serviceName: string;
  }> = [];

  if (orderIds.length > 0) {
    const { data: rawDocs } = await supabase
      .from("documents")
      .select("id, order_id, file_name, file_path, document_type, created_at")
      .in("order_id", orderIds)
      .order("created_at", { ascending: false });

    const orderToName = new Map<string, string>();
    for (const o of orders ?? []) {
      const svc = o.services;
      const serviceName = Array.isArray(svc)
        ? svc[0]?.name
        : (svc as { name?: string } | null)?.name;
      orderToName.set(o.id as string, serviceName ?? "Pedido");
    }

    clientOrderDocs = (rawDocs ?? []).map((d) => ({
      id: d.id as string,
      order_id: d.order_id as string,
      file_name: d.file_name as string,
      file_path: d.file_path as string,
      document_type: d.document_type as string,
      created_at: d.created_at as string,
      serviceName: orderToName.get(d.order_id as string) ?? "Pedido",
    }));
  }

  // Calcular stats
  const totalOrders = orders?.length || 0;
  const completedOrders =
    orders?.filter((o) => o.status === "completed" || o.status === "delivered").length || 0;
  const activeOrders = orders?.filter((o) =>
    ["paid", "pending_docs", "in_review", "in_progress"].includes(o.status)
  ).length || 0;
  const totalSpent = orders?.reduce((sum, o) => sum + (o.total_cents || 0), 0) || 0;

  const hasRentalSubscription =
    hasActiveRentalSub || (orders?.some((o) => orderGrantsRentalAccess(o)) ?? false);

  // Si tiene alquiler, obtener propiedades
  let properties = null;
  if (hasRentalSubscription) {
    const { data } = await supabase
      .from("properties")
      .select("id, address, zone, postal_code")
      .eq("user_id", clientId);
    properties = data;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/clientes"
          className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Clientes
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1E293B]">
              {client.full_name || "Cliente sin nombre"}
            </h1>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#64748B]">
              {client.email && (
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {client.email}
                </span>
              )}
              {client.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {client.phone}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Cliente desde {new Date(client.created_at).toLocaleDateString("es-ES")}
              </span>
            </div>
          </div>

          {hasRentalSubscription && (
            <Link
              href={`/admin/alquileres/${clientId}`}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Ver Panel Alquiler →
            </Link>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-sm text-[#64748B]">Total Pedidos</div>
              <div className="text-2xl font-bold text-[#1E293B]">{totalOrders}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Clock className="h-8 w-8 text-amber-600" />
            <div>
              <div className="text-sm text-[#64748B]">Pedidos Activos</div>
              <div className="text-2xl font-bold text-[#1E293B]">{activeOrders}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-sm text-[#64748B]">Completados</div>
              <div className="text-2xl font-bold text-[#1E293B]">{completedOrders}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Euro className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-sm text-[#64748B]">Total Gastado</div>
              <div className="text-2xl font-bold text-[#1E293B]">
                {(totalSpent / 100).toFixed(2)} €
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Propiedades si tiene alquiler */}
      {hasRentalSubscription && properties && properties.length > 0 && (
        <div className="mb-8">
          <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-200">
            <div className="mb-4 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-emerald-700" />
              <h2 className="text-lg font-bold text-emerald-900">
                Suscripción de Gestión de Alquiler Activa
              </h2>
            </div>
            <div className="space-y-2">
              {properties.map((prop) => (
                <div key={prop.id} className="flex items-center gap-2 text-sm text-emerald-800">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  <span className="font-medium">{prop.address}</span>
                  {prop.zone && <span className="text-emerald-600">• {prop.zone}</span>}
                </div>
              ))}
            </div>
            <Link
              href={`/admin/alquileres/${clientId}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Ver detalles completos →
            </Link>
          </div>
        </div>
      )}

      {/* Documentación subida desde expedientes de contrato */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
        <h2 className="mb-2 text-xl font-bold text-[#1E293B]">Documentación del cliente (contratos)</h2>
        <p className="mb-6 text-sm text-[#64748B]">
          Archivos que el cliente ha subido en <strong>Mis pedidos → Ver expediente</strong>. También están
          en cada pedido en la sección «Documentos».
        </p>
        {!clientOrderDocs.length ? (
          <p className="text-sm text-[#64748B]">
            Todavía no hay archivos enlazados a pedidos de este cliente.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {clientOrderDocs.map((d) => (
              <li key={d.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
                <div className="min-w-0 flex-1">
                  <AdminStorageDocLink path={d.file_path}>{d.file_name}</AdminStorageDocLink>
                  <div className="mt-1 text-xs text-[#64748B]">
                    {ORDER_DOCUMENT_LABEL_ES[d.document_type] ?? d.document_type} · {d.serviceName} ·{" "}
                    {new Date(d.created_at).toLocaleString("es-ES")}
                  </div>
                </div>
                <Link
                  href={`/admin/pedidos/${d.order_id}`}
                  className="shrink-0 text-sm font-semibold text-[#06B6D4] hover:underline"
                >
                  Abrir pedido
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Historial de Pedidos */}
      <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
        <h2 className="mb-4 text-xl font-bold text-[#1E293B]">Historial de Pedidos</h2>

        {!orders?.length ? (
          <div className="py-12 text-center">
            <FileText className="mx-auto h-16 w-16 text-[#64748B]" />
            <p className="mt-4 text-sm text-[#64748B]">Este cliente no ha realizado pedidos</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const svc = order.services;
              const serviceName = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;

              return (
                <Link
                  key={order.id}
                  href={`/admin/pedidos/${order.id}`}
                  className="flex items-start justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:bg-blue-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#1A4FBF]" />
                      <div>
                        <div className="font-semibold text-[#1E293B]">{serviceName || "Servicio"}</div>
                        <div className="mt-1 flex items-center gap-3 text-xs text-[#64748B]">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(order.created_at).toLocaleString("es-ES")}
                          </span>
                          <span>ID: {order.id.slice(0, 8)}...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4 text-right">
                    <div className="font-bold text-[#1E293B]">
                      {((order.total_cents || 0) / 100).toFixed(2)} €
                    </div>
                    <div className="mt-1">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          statusColor[order.status] || "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {statusLabel[order.status] || order.status}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Acciones del Admin */}
      <div className="mt-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
        <h3 className="mb-4 font-bold text-[#1E293B]">Acciones del Administrador</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <button className="rounded-lg bg-white px-4 py-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow">
            <div className="font-semibold text-[#1E293B]">Enviar Email</div>
            <div className="text-xs text-[#64748B]">Contactar al cliente</div>
          </button>
          <button className="rounded-lg bg-white px-4 py-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow">
            <div className="font-semibold text-[#1E293B]">Agregar Nota</div>
            <div className="text-xs text-[#64748B]">Nota interna sobre el cliente</div>
          </button>
          <button className="rounded-lg bg-white px-4 py-3 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow">
            <div className="font-semibold text-[#1E293B]">Ver Actividad</div>
            <div className="text-xs text-[#64748B]">Timeline completo</div>
          </button>
        </div>
      </div>
    </main>
  );
}
