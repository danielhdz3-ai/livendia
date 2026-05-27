import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: { absolute: "Pedidos — Livendia Admin" } };

const statusLabel: Record<string, string> = {
  pending_payment: "Pago pendiente",
  paid: "Pagado",
  pending_docs: "Falta documentación",
  in_review: "En revisión",
  in_progress: "En curso",
  completed: "Completado",
  cancelled: "Cancelado",
};

export default async function AdminPedidosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/pedidos");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, created_at, total_cents, client_id, services ( name ), profiles ( full_name, phone )")
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold text-[#1E293B]">Pedidos</h1>
      <p className="mt-1 text-sm text-[#64748b]">Todos los expedientes</p>

      {!orders?.length ? (
        <p className="mt-8 rounded-xl bg-white p-8 text-center text-[#64748b] shadow ring-1 ring-slate-200">
          No hay pedidos todavía.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl bg-white shadow ring-1 ring-slate-200">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-[#64748b]">
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Servicio</th>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((row) => {
                const svc = row.services;
                const sname = Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name;
                const pr = row.profiles;
                const pname = Array.isArray(pr) ? pr[0]?.full_name : (pr as { full_name?: string } | null)?.full_name;
                return (
                  <tr key={row.id} className="border-b border-slate-100 last:border-0">
                    <td className="whitespace-nowrap px-4 py-3 text-[#475569]">
                      {new Date(row.created_at).toLocaleString("es-ES")}
                    </td>
                    <td className="px-4 py-3 font-medium text-[#1E293B]">{sname ?? "—"}</td>
                    <td className="px-4 py-3 text-[#475569]">
                      {(pname as string)?.trim() || String(row.client_id).slice(0, 8) + "…"}
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[#1A4FBF]/10 px-2 py-1 text-xs font-semibold text-[#1A4FBF]">
                        {statusLabel[row.status] ?? row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={`/admin/pedidos/${row.id}`}
                        className="font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
