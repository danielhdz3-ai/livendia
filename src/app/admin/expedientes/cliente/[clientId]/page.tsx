import Link from "next/link";
import { AdminStorageDocLink } from "@/components/admin-storage-doc-link";
import { AdminClientAvatar } from "@/components/admin/admin-client-avatar";
import { AdminPageHeader, AdminStatCard } from "@/components/admin/admin-page-header";
import { ORDER_DOCUMENT_LABEL_ES } from "@/lib/order-document-labels";
import { formatEuros } from "@/lib/admin-data";
import { ADMIN_CARD_PAD, ORDER_STATUS_LABEL } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export const metadata = { title: { absolute: "Expediente unificado — Livendia Admin" } };

export default async function AdminExpedienteClientePage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  await requireAdmin(`/admin/expedientes/cliente/${clientId}`);
  const supabase = await createServerSupabaseClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, phone, dni_nie, created_at")
    .eq("id", clientId)
    .maybeSingle();

  if (!profile) notFound();

  let email: string | null = null;
  try {
    const admin = createServiceRoleClient();
    const { data } = await admin.auth.admin.getUserById(clientId);
    email = data.user?.email ?? null;
  } catch {
    /* omit */
  }

  const [{ data: orders }, { data: docs }] = await Promise.all([
    supabase
      .from("orders")
      .select("id, status, created_at, paid_at, total_cents, stripe_session_id, services ( name )")
      .eq("client_id", clientId)
      .order("created_at", { ascending: false }),
    supabase
      .from("documents")
      .select("id, file_name, file_path, document_type, created_at, order_id")
      .eq("client_id", clientId)
      .order("created_at", { ascending: false }),
  ]);

  const paidOrders = (orders ?? []).filter((o) => o.paid_at);
  const totalCents = paidOrders.reduce((s, o) => s + (o.total_cents ?? 0), 0);

  return (
    <>
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
        Expediente unificado · Livendia
      </div>
      <AdminPageHeader
        title={(profile.full_name as string | null)?.trim() || "Cliente"}
        subtitle={email ?? undefined}
        actions={
          <Link href="/admin/expedientes" className="text-sm font-semibold text-[#1A4FBF] hover:underline">
            ← Expedientes
          </Link>
        }
      />

      <div className="mb-6 flex items-center gap-3">
        <AdminClientAvatar name={(profile.full_name as string) ?? "?"} />
        <div className="text-sm text-[#64748B]">
          <p>Tel: {(profile.phone as string | null) ?? "—"}</p>
          <p>DNI/NIE: {(profile.dni_nie as string | null) ?? "—"}</p>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard label="Ingresos" value={formatEuros(totalCents)} />
        <AdminStatCard label="Pedidos pagados" value={paidOrders.length} />
        <AdminStatCard label="Documentos" value={docs?.length ?? 0} />
        <AdminStatCard
          label="Registrado"
          value={new Date(profile.created_at as string).toLocaleDateString("es-ES")}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-6">
          <div className={ADMIN_CARD_PAD}>
            <h2 className="text-sm font-bold text-[#1E293B]">Todos los pedidos</h2>
            {!orders?.length ? (
              <p className="mt-4 text-sm text-[#64748B]">Sin pedidos</p>
            ) : (
              <ul className="mt-4 space-y-2">
                {orders.map((order) => {
                  const svc = order.services;
                  const name = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;
                  return (
                    <li key={order.id}>
                      <Link
                        href={`/admin/expedientes/${order.id}`}
                        className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3 transition hover:border-[#1A4FBF]/30 hover:bg-[#EFF6FF]/40"
                      >
                        <div>
                          <p className="font-semibold text-[#1E293B]">{name ?? "Servicio"}</p>
                          <p className="text-xs text-[#64748B]">
                            {ORDER_STATUS_LABEL[order.status as string] ?? order.status}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-[#1A4FBF]">
                          {formatEuros(order.total_cents as number | null)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className={ADMIN_CARD_PAD}>
            <h2 className="text-sm font-bold text-[#1E293B]">Documentos ({docs?.length ?? 0})</h2>
            {!docs?.length ? (
              <p className="mt-4 text-sm text-[#64748B]">Sin documentos subidos</p>
            ) : (
              <ul className="mt-4 divide-y divide-slate-100">
                {docs.map((d) => (
                  <li key={d.id} className="py-3">
                    <AdminStorageDocLink path={d.file_path as string}>{d.file_name as string}</AdminStorageDocLink>
                    <p className="mt-1 text-xs text-[#64748B]">
                      {ORDER_DOCUMENT_LABEL_ES[d.document_type as string] ?? d.document_type}
                      {" · "}
                      {new Date(d.created_at as string).toLocaleDateString("es-ES")}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
