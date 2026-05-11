import { OrderDocuments, type DocRow } from "@/app/dashboard/order-documents";
import { OrderTimeline } from "@/app/mis-pedidos/[id]/order-timeline";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { LogoutButton } from "@/app/dashboard/logout-button";
import { SiteFooter } from "@/components/site-footer";

export default async function MisPedidoDetallePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/mis-pedidos/" + encodeURIComponent(id));

  const { data: order } = await supabase
    .from("orders")
    .select(
      "id, client_id, status, created_at, updated_at, total_cents, paid_at, completed_at, services ( name, slug )",
    )
    .eq("id", id)
    .maybeSingle();

  if (!order || order.client_id !== user.id) {
    notFound();
  }

  const { data: docs } = await supabase
    .from("documents")
    .select("id, order_id, file_name, file_path, document_type, created_at")
    .eq("order_id", id)
    .order("created_at", { ascending: false });

  const docRows: DocRow[] = (docs ?? []).map((d) => ({
    id: d.id as string,
    file_name: d.file_name as string,
    file_path: d.file_path as string,
    document_type: d.document_type as string,
    created_at: d.created_at as string,
  }));

  const canUpload = ["paid", "pending_docs", "in_review", "in_progress"].includes(order.status as string);
  const svc = order.services;
  const serviceRow = Array.isArray(svc) ? svc[0] : svc;

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <Link href="/dashboard" className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
              ← Panel
            </Link>
            <h1 className="mt-2 text-xl font-bold text-[#1E293B]">{serviceRow?.name ?? "Pedido"}</h1>
            <p className="text-sm text-[#64748b]">
              {new Date(order.created_at).toLocaleString("es-ES")}
              {order.total_cents != null ? ` · ${(order.total_cents / 100).toFixed(2)} €` : null}
            </p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:px-6">
        <section className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
          <OrderTimeline
            status={order.status as string}
            createdAt={order.created_at as string}
            paidAt={(order.paid_at as string | null) ?? null}
            completedAt={(order.completed_at as string | null) ?? null}
            updatedAt={order.updated_at as string}
          />
        </section>

        <section className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-[#1E293B]">Documentación del expediente</h2>
          <p className="mt-1 text-sm text-[#64748b]">
            Sube aquí los archivos que te hayamos indicado. Solo tú y el equipo de Livendia tienen acceso.
          </p>
          <OrderDocuments
            orderId={order.id as string}
            userId={user.id}
            canUpload={canUpload}
            initialDocs={docRows}
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
