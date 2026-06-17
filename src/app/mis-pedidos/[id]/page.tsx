import { OrderDocuments, type DocRow } from "@/app/dashboard/order-documents";
import { OrderTimeline } from "@/app/mis-pedidos/[id]/order-timeline";
import { LogoutButton } from "@/app/dashboard/logout-button";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Home, LayoutDashboard, Upload } from "lucide-react";

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
  const needsDocs = order.status === "pending_docs" || order.status === "paid";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-50 pb-6 lg:pb-0">
      <header className="hidden border-b border-slate-200 bg-white shadow-sm lg:block">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-[#2563EB]"
              >
                <LayoutDashboard className="h-4 w-4" />
                Panel principal
              </Link>
              <Link
                href="/mis-pedidos"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1E293B] hover:border-[#1A4FBF]/30 hover:text-[#1A4FBF]"
              >
                <ArrowLeft className="h-4 w-4" />
                Mis pedidos
              </Link>
            </div>
            <LogoutButton />
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Expediente</p>
            <h1 className="mt-1 text-2xl font-bold text-[#1E293B] sm:text-3xl">
              {serviceRow?.name ?? "Pedido"}
            </h1>
            <p className="mt-2 text-sm text-[#64748B]">
              {new Date(order.created_at).toLocaleString("es-ES")}
              {order.total_cents != null ? ` · ${(order.total_cents / 100).toFixed(2)} €` : null}
              {" · "}
              <span className="font-semibold text-[#1A4FBF]">
                {ORDER_STATUS_LABEL_ES[order.status as string] ?? order.status}
              </span>
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-4 px-4 py-4 sm:space-y-6 sm:px-6 sm:py-8">
        <div className="lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Expediente</p>
          <h1 className="mt-1 text-xl font-bold text-[#1E293B]">{serviceRow?.name ?? "Pedido"}</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            {ORDER_STATUS_LABEL_ES[order.status as string] ?? order.status}
          </p>
        </div>
        {needsDocs ? (
          <section className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-amber-900">
                <Upload className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-950">Sube la documentación de tu contrato</h2>
                <p className="mt-1 text-sm leading-relaxed text-amber-900/90">
                  Puedes arrastrar varios archivos a la vez (DNI, escrituras, borrador, etc.). El gestor los revisará
                  en cuanto los reciba.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
          <h2 className="text-xl font-bold text-[#1E293B]">Documentación del expediente</h2>
          <p className="mt-2 text-sm text-[#64748B]">
            Sube todos los archivos que necesitemos para redactar o revisar tu contrato. Solo tú y Livendia tienen
            acceso.
          </p>
          <OrderDocuments
            orderId={order.id as string}
            userId={user.id}
            canUpload={canUpload}
            initialDocs={docRows}
            prominent
          />
        </section>

        <section className="hidden rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200 sm:p-8 lg:block">
          <h2 className="text-lg font-semibold text-[#1E293B]">Seguimiento del servicio</h2>
          <div className="mt-4">
            <OrderTimeline
              status={order.status as string}
              createdAt={order.created_at as string}
              paidAt={(order.paid_at as string | null) ?? null}
              completedAt={(order.completed_at as string | null) ?? null}
              updatedAt={order.updated_at as string}
            />
          </div>
        </section>

        <div className="hidden justify-center pb-8 lg:flex">
          <Link
            href="/dashboard"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
          >
            <Home className="h-4 w-4" />
            Volver al panel principal
          </Link>
        </div>
      </main>
    </div>
  );
}
