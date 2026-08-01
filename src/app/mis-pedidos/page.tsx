import { createServerSupabaseClient } from "@/lib/supabase/server";
import { OrderStatusBadge } from "@/components/order-status-badge";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileSignature,
  FileText,
  Mail,
  MessageCircle,
  Package,
  TrendingUp,
  Upload,
} from "lucide-react";
import { getWhatsAppHref } from "@/lib/business-nap";

export const metadata = { title: "Mis pedidos" };

export default async function MisPedidosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, created_at, total_cents, services ( name, slug )")
    .order("created_at", { ascending: false });

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

  const pendingOrders =
    orders?.filter((o) =>
      ["pending_payment", "paid", "pending_docs", "in_review", "in_progress"].includes(o.status as string),
    ) ?? [];
  const completedOrders =
    orders?.filter((o) => o.status === "completed" || o.status === "delivered") ?? [];
  const totalSpent = orders?.reduce((sum, o) => sum + (o.total_cents ?? 0), 0) ?? 0;
  const waHref = getWhatsAppHref("Hola, tengo una consulta sobre mis expedientes en Livendia.");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="hidden border-b border-slate-200 bg-white lg:block">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <span>← Volver al panel</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-[#1E293B]">Mis expedientes</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Gestiona y haz seguimiento de todos tus servicios contratados
          </p>
        </div>
      </header>

      <div className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden">
        <h1 className="text-xl font-bold text-[#1E293B]">Mis expedientes</h1>
        <p className="mt-1 text-sm text-[#64748B]">
          Sube documentación en el panel o envíala a{" "}
          <a href="mailto:info@livendia.com" className="font-semibold text-[#1A4FBF]">
            info@livendia.com
          </a>
        </p>
        <div className="mt-3 flex gap-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-placement="mis_pedidos_whatsapp"
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 text-xs font-bold text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <a
            href="mailto:info@livendia.com"
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#EFF6FF] px-3 text-xs font-bold text-[#1A4FBF] ring-1 ring-blue-100"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email
          </a>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 lg:h-12 lg:w-12">
                <Package className="h-5 w-5 text-blue-600 lg:h-6 lg:w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#1E293B] lg:text-2xl">{orders?.length ?? 0}</div>
                <div className="text-[11px] text-[#64748B] lg:text-xs">Total</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 lg:h-12 lg:w-12">
                <Clock className="h-5 w-5 text-amber-600 lg:h-6 lg:w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#1E293B] lg:text-2xl">{pendingOrders.length}</div>
                <div className="text-[11px] text-[#64748B] lg:text-xs">En proceso</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 lg:h-12 lg:w-12">
                <CheckCircle2 className="h-5 w-5 text-green-600 lg:h-6 lg:w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#1E293B] lg:text-2xl">{completedOrders.length}</div>
                <div className="text-[11px] text-[#64748B] lg:text-xs">Completados</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 lg:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 lg:h-12 lg:w-12">
                <TrendingUp className="h-5 w-5 text-violet-600 lg:h-6 lg:w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#1E293B] lg:text-2xl">{(totalSpent / 100).toFixed(0)} €</div>
                <div className="text-[11px] text-[#64748B] lg:text-xs">Invertido</div>
              </div>
            </div>
          </div>
        </div>

        {!orders?.length ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-10 text-center lg:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 lg:h-20 lg:w-20">
              <Package className="h-8 w-8 text-[#64748B] lg:h-10 lg:w-10" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-[#1E293B] lg:text-xl">Aún no tienes pedidos</h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Cuando contrates un servicio, aparecerá aquí con todo el seguimiento
            </p>
            <Link
              href="/dashboard/servicios"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg"
            >
              <FileText className="h-4 w-4" />
              Ver servicios
            </Link>
          </div>
        ) : (
          <div className="space-y-3 lg:space-y-4">
            {orders.map((order) => {
              const svc = order.services;
              const serviceRow = Array.isArray(svc) ? svc[0] : svc;
              const needsDocs = order.status === "pending_docs" || order.status === "paid";
              const docCount = docCountByOrder[order.id as string] ?? 0;

              return (
                <Link
                  key={order.id}
                  href={`/mis-pedidos/${order.id}`}
                  className="block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md active:scale-[0.99]"
                >
                  <div className="flex items-center gap-4 p-4 lg:p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] lg:h-14 lg:w-14">
                      <FileSignature className="h-6 w-6 text-white lg:h-7 lg:w-7" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-bold text-[#1E293B] lg:text-lg">
                        {serviceRow?.name ?? "Servicio"}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <OrderStatusBadge status={order.status as string} size="sm" />
                        {docCount > 0 ? (
                          <span className="text-xs text-[#64748B]">{docCount} doc.</span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-xs text-[#64748B] lg:text-sm">
                        {new Date(order.created_at).toLocaleDateString("es-ES")}
                        {order.total_cents != null
                          ? ` · ${(order.total_cents / 100).toFixed(2)} €`
                          : null}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                          needsDocs ? "bg-[#1A4FBF] text-white" : "bg-slate-100 text-[#475569]"
                        }`}
                      >
                        {needsDocs ? (
                          <span className="inline-flex items-center gap-1">
                            <Upload className="h-3.5 w-3.5" aria-hidden />
                            Subir
                          </span>
                        ) : (
                          "Abrir"
                        )}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#1A4FBF] lg:hidden" aria-hidden />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
