import { AdminDocumentCard } from "@/components/admin/admin-document-card";
import { AdminNotifyDeliveredForm } from "@/app/admin/pedidos/[id]/admin-notify-delivered";
import { AdminOrderStatusForm } from "@/app/admin/pedidos/[id]/admin-order-status";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { formatEuros } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ORDER_STATUS_LABEL } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = { title: { absolute: "Expediente — Livendia Admin" } };

export default async function AdminExpedienteOrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdmin(`/admin/expedientes/${id}`);
  const supabase = await createServerSupabaseClient();

  const { data: order } = await supabase
    .from("orders")
    .select(
      "id, status, created_at, total_cents, paid_at, stripe_session_id, client_notes, notes, client_id, services ( name, slug ), profiles ( full_name, phone, dni_nie )",
    )
    .eq("id", id)
    .maybeSingle();

  if (!order) notFound();

  const [{ data: docs }, emailResult] = await Promise.all([
    supabase
      .from("documents")
      .select("id, file_name, file_path, document_type, created_at, file_size")
      .eq("order_id", id)
      .order("created_at", { ascending: false }),
    (async () => {
      try {
        const admin = createServiceRoleClient();
        const { data } = await admin.auth.admin.getUserById(order.client_id as string);
        return data.user?.email ?? null;
      } catch {
        return null;
      }
    })(),
  ]);

  const svc = order.services;
  const sname = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;
  const pr = order.profiles;
  const profile = Array.isArray(pr) ? pr[0] : pr;

  return (
    <>
      <AdminPageHeader
        title={sname ?? "Expediente"}
        subtitle={`${ORDER_STATUS_LABEL[order.status as string] ?? order.status} · ${new Date(order.created_at as string).toLocaleString("es-ES")}`}
        actions={
          <Link href={`/admin/expedientes/cliente/${order.client_id}`} className="text-sm font-semibold text-[#1A4FBF] hover:underline">
            Ver expediente unificado →
          </Link>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-6">
          <div className={ADMIN_CARD_PAD}>
            <h2 className="text-sm font-bold text-[#1E293B]">Cliente</h2>
            <p className="mt-2 text-sm text-[#475569]">{(profile as { full_name?: string } | null)?.full_name ?? "—"}</p>
            <p className="text-sm text-[#64748B]">{emailResult ?? "—"}</p>
            <p className="mt-1 text-sm text-[#64748B]">
              Tel: {(profile as { phone?: string } | null)?.phone ?? "—"} · DNI/NIE:{" "}
              {(profile as { dni_nie?: string } | null)?.dni_nie ?? "—"}
            </p>
            {order.total_cents != null ? (
              <p className="mt-3 text-lg font-bold text-[#1A4FBF]">{formatEuros(order.total_cents as number)}</p>
            ) : null}
            {order.notes ? <p className="mt-2 text-sm italic text-[#64748B]">Notas: {order.notes as string}</p> : null}
            {order.stripe_session_id ? (
              <a
                href={`https://dashboard.stripe.com/search?query=${order.stripe_session_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-semibold text-[#1A4FBF] hover:underline"
              >
                Ver en Stripe →
              </a>
            ) : null}

            <div className="mt-6 border-t border-slate-100 pt-6">
              <AdminOrderStatusForm orderId={order.id as string} currentStatus={order.status as string} />
            </div>
            <div className="mt-6 border-t border-slate-100 pt-6">
              <AdminNotifyDeliveredForm orderId={order.id as string} />
            </div>
          </div>

          <section className={ADMIN_CARD_PAD}>
            <h2 className="text-lg font-semibold text-[#1E293B]">Documentos del expediente</h2>
            {!docs?.length ? (
              <p className="mt-4 text-sm text-[#64748B]">Sin archivos subidos.</p>
            ) : (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {docs.map((d) => (
                  <AdminDocumentCard
                    key={d.id}
                    fileName={d.file_name as string}
                    filePath={d.file_path as string}
                    documentType={d.document_type as string}
                    uploadedAt={d.created_at as string}
                  />
                ))}
              </div>
            )}
          </section>
        </div>

        <aside>
          <Link
            href="/admin/expedientes"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] hover:bg-slate-50"
          >
            ← Volver a expedientes
          </Link>
        </aside>
      </div>
    </>
  );
}
