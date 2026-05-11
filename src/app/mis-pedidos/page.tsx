import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Home,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Upload,
  Eye,
  ArrowLeft,
  Package,
  TrendingUp,
  Calendar,
  FileSignature,
} from "lucide-react";

export const metadata = { title: "Mis Pedidos — Livendia" };

export default async function MisPedidosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle();

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, created_at, total_cents, services ( name, slug )")
    .order("created_at", { ascending: false });

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

  const name = profile?.full_name?.trim() || user.email || "Cliente";

  const pendingOrders = orders?.filter(o => o.status === "pending_docs" || o.status === "in_progress") ?? [];
  const completedOrders = orders?.filter(o => o.status === "delivered") ?? [];
  const totalSpent = orders?.reduce((sum, o) => sum + (o.total_cents ?? 0), 0) ?? 0;

  const statusColors: Record<string, string> = {
    pending_docs: "bg-amber-100 text-amber-900 border-amber-200",
    in_progress: "bg-blue-100 text-blue-900 border-blue-200",
    delivered: "bg-green-100 text-green-900 border-green-200",
    cancelled: "bg-red-100 text-red-900 border-red-200",
  };

  const statusIcons: Record<string, any> = {
    pending_docs: Upload,
    in_progress: Clock,
    delivered: CheckCircle2,
    cancelled: AlertCircle,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al panel</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-[#1E293B]">Mis Pedidos</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Gestiona y haz seguimiento de todos tus servicios contratados
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E293B]">{orders?.length ?? 0}</div>
                <div className="text-xs text-[#64748B]">Total pedidos</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E293B]">{pendingOrders.length}</div>
                <div className="text-xs text-[#64748B]">En proceso</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E293B]">{completedOrders.length}</div>
                <div className="text-xs text-[#64748B]">Completados</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                <TrendingUp className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E293B]">{(totalSpent / 100).toFixed(0)} €</div>
                <div className="text-xs text-[#64748B]">Total invertido</div>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {!orders?.length ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100">
              <Package className="h-10 w-10 text-[#64748B]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#1E293B]">Aún no tienes pedidos</h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Cuando contrates un servicio, aparecerá aquí con todo el seguimiento
            </p>
            <Link
              href="/servicios"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            >
              <FileText className="h-4 w-4" />
              <span>Explorar servicios</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const svc = order.services;
              const serviceRow = Array.isArray(svc) ? svc[0] : svc;
              const StatusIcon = statusIcons[order.status] || FileText;

              return (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-2xl bg-white shadow ring-1 ring-slate-200 transition hover:shadow-lg"
                >
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]">
                        <FileSignature className="h-7 w-7 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-[#1E293B]">
                            {serviceRow?.name ?? "Servicio"}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${
                              statusColors[order.status] || "bg-slate-100 text-slate-900 border-slate-200"
                            }`}
                          >
                            <StatusIcon className="h-3 w-3" />
                            {ORDER_STATUS_LABEL_ES[order.status] ?? order.status}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(order.created_at).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}</span>
                          </div>
                          
                          {order.total_cents != null && (
                            <div className="font-semibold text-[#1A4FBF]">
                              {(order.total_cents / 100).toFixed(2)} € IVA incl.
                            </div>
                          )}

                          {docCountByOrder[order.id as string] && (
                            <div className="flex items-center gap-1.5">
                              <FileText className="h-4 w-4" />
                              <span>{docCountByOrder[order.id as string]} documento(s)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/mis-pedidos/${order.id}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2563EB]"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Ver expediente</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
