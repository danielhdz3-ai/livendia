import { AdminStorageDocLink } from "@/components/admin-storage-doc-link";
import { ORDER_DOCUMENT_LABEL_ES } from "@/lib/order-document-labels";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { AdminNotifyDeliveredForm } from "./admin-notify-delivered";
import { AdminOrderStatusForm } from "./admin-order-status";

export const metadata = { title: { absolute: "Detalle de pedido — Livendia Admin" } };

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

export default async function AdminPedidoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/admin/pedidos/${id}`);

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const { data: order } = await supabase
    .from("orders")
    .select(
      "id, status, created_at, total_cents, paid_at, stripe_session_id, client_notes, services ( name, slug ), profiles ( full_name, phone, dni_nie )",
    )
    .eq("id", id)
    .maybeSingle();

  if (!order) notFound();

  const { data: docs } = await supabase
    .from("documents")
    .select("id, file_name, file_path, document_type, created_at, file_size")
    .eq("order_id", id)
    .order("created_at", { ascending: false });

  const svc = order.services;
  const sname = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;
  const pr = order.profiles;
  const profile = Array.isArray(pr) ? pr[0] : pr;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Link href="/admin/pedidos" className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
        ← Todos los pedidos
      </Link>

      <div className="mt-4 rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
        <h1 className="text-xl font-bold text-[#1E293B]">{sname ?? "Pedido"}</h1>
        <p className="mt-1 text-sm text-[#64748b]">
          {statusLabel[order.status] ?? order.status} · {new Date(order.created_at).toLocaleString("es-ES")}
          {order.total_cents != null ? ` · ${(order.total_cents / 100).toFixed(2)} €` : null}
        </p>

        <div className="mt-6 border-t border-slate-100 pt-6">
          <h2 className="text-sm font-semibold text-[#1E293B]">Cliente</h2>
          <p className="mt-2 text-sm text-[#475569]">
            {(profile as { full_name?: string } | null)?.full_name ?? "—"}
          </p>
          <p className="text-sm text-[#475569]">
            Tel: {(profile as { phone?: string } | null)?.phone ?? "—"} · DNI/NIE:{" "}
            {(profile as { dni_nie?: string } | null)?.dni_nie ?? "—"}
          </p>
          {order.client_notes ? (
            <p className="mt-3 text-sm italic text-[#64748b]">Notas cliente: {order.client_notes}</p>
          ) : null}
          {order.stripe_session_id ? (
            <p className="mt-2 font-mono text-xs text-[#94a3b8]">Stripe session: {order.stripe_session_id}</p>
          ) : null}
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <AdminOrderStatusForm
            key={order.status as string}
            orderId={order.id as string}
            currentStatus={order.status as string}
          />
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <AdminNotifyDeliveredForm orderId={order.id as string} />
        </div>
      </div>

      <section className="mt-6 rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
        <h2 className="text-lg font-semibold text-[#1E293B]">Documentos</h2>
        {!docs?.length ? (
          <p className="mt-4 text-sm text-[#64748b]">Sin archivos subidos.</p>
        ) : (
          <ul className="mt-4 divide-y divide-slate-100">
            {docs.map((d) => (
              <li key={d.id} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <div>
                  <AdminStorageDocLink path={d.file_path as string}>
                    {d.file_name as string}
                  </AdminStorageDocLink>
                  <span className="ml-2 text-xs text-[#64748b]">
                    {ORDER_DOCUMENT_LABEL_ES[d.document_type as string] ?? d.document_type}
                  </span>
                </div>
                <span className="text-xs text-[#94a3b8]">
                  {new Date(d.created_at as string).toLocaleString("es-ES")}
                  {d.file_size != null ? ` · ${Math.round(Number(d.file_size) / 1024)} KB` : null}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
