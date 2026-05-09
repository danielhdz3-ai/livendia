import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "./logout-button";
import { OrderDocuments, type DocRow } from "./order-documents";
import { ServiceCheckout } from "./service-checkout";

const statusLabel: Record<string, string> = {
  pending_payment: "Pago pendiente",
  paid: "Pagado",
  pending_docs: "Falta documentación",
  in_review: "En revisión",
  in_progress: "En curso",
  completed: "Completado",
  cancelled: "Cancelado",
};

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("full_name, role").eq("id", user.id).maybeSingle();

  const { data: orders } = await supabase
    .from("orders")
    .select(
      "id, status, created_at, total_cents, services ( name, slug )",
    )
    .order("created_at", { ascending: false });

  const { data: services } = await supabase
    .from("services")
    .select("id, name, price_cents")
    .eq("is_active", true)
    .eq("is_recurring", false)
    .order("price_cents", { ascending: true });

  const name = profile?.full_name?.trim() || user.email || "Cliente";

  const serviceRows = (services ?? []).map((s) => ({
    id: s.id as string,
    name: s.name as string,
    price_cents: s.price_cents as number,
  }));

  const orderIds = (orders ?? []).map((o) => o.id as string);
  let docsByOrder: Record<string, DocRow[]> = {};
  if (orderIds.length > 0) {
    const { data: allDocs } = await supabase
      .from("documents")
      .select("id, order_id, file_name, file_path, document_type, created_at")
      .in("order_id", orderIds)
      .order("created_at", { ascending: false });
    for (const d of allDocs ?? []) {
      const oid = d.order_id as string;
      const row: DocRow = {
        id: d.id as string,
        file_name: d.file_name as string,
        file_path: d.file_path as string,
        document_type: d.document_type as string,
        created_at: d.created_at as string,
      };
      if (!docsByOrder[oid]) docsByOrder[oid] = [];
      docsByOrder[oid].push(row);
    }
    for (const key of Object.keys(docsByOrder)) {
      docsByOrder[key].sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  }

  const canUploadStatus = (s: string) =>
    ["paid", "pending_docs", "in_review", "in_progress"].includes(s);

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <Link href="/" className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
              ← Inicio
            </Link>
            <h1 className="mt-2 text-xl font-bold text-[#1E293B]">Panel</h1>
            <p className="text-sm text-[#475569]">
              Hola, {name}
              {profile?.role === "admin" ? (
                <span className="ml-2 rounded-full bg-[#06B6D4]/20 px-2 py-0.5 text-xs font-semibold text-[#0e7490]">
                  Admin
                </span>
              ) : null}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {profile?.role === "admin" ? (
              <Link
                href="/admin/pedidos"
                className="rounded-full border border-[#06B6D4] px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:bg-[#06B6D4]/10"
              >
                Admin
              </Link>
            ) : null}
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <ServiceCheckout services={serviceRows} />
        <h2 className="mt-12 text-lg font-semibold text-[#1E293B]">Mis pedidos</h2>
        {!orders?.length ? (
          <p className="mt-4 rounded-xl bg-white p-6 text-[#475569] shadow ring-1 ring-slate-200">
            Aún no tienes pedidos. Cuando contrates un servicio, aparecerán aquí.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {orders.map((row) => {
              const svc = row.services;
              const serviceRow = Array.isArray(svc) ? svc[0] : svc;
              return (
              <li
                key={row.id}
                className="rounded-xl bg-white p-4 shadow ring-1 ring-slate-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-[#1E293B]">
                    {serviceRow?.name ?? "Servicio"}
                  </span>
                  <span className="rounded-full bg-[#1A4FBF]/10 px-3 py-1 text-xs font-semibold text-[#1A4FBF]">
                    {statusLabel[row.status] ?? row.status}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#64748b]">
                  {new Date(row.created_at).toLocaleString("es-ES")}
                  {row.total_cents != null ? ` · ${(row.total_cents / 100).toFixed(2)} €` : null}
                </p>
                <OrderDocuments
                  orderId={row.id}
                  userId={user.id}
                  canUpload={canUploadStatus(row.status)}
                  initialDocs={docsByOrder[row.id] ?? []}
                />
              </li>
            )})}
          </ul>
        )}
      </main>
    </div>
  );
}
