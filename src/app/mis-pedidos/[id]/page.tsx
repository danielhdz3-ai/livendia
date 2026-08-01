import { OrderDocuments, type DocRow } from "@/app/dashboard/order-documents";
import { OrderTimeline, OrderTimelineCompact } from "@/app/mis-pedidos/[id]/order-timeline";
import { ClientExpedienteContactPanel } from "@/components/client-expediente-contact-panel";
import { LivendiaTrustPanel } from "@/components/livendia-trust-panel";
import { OrderDetailMobileTabs } from "@/components/order-detail-mobile-tabs";
import { OrderDocChecklist } from "@/components/order-doc-checklist";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { LogoutButton } from "@/app/dashboard/logout-button";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Calendar, Home, LayoutDashboard } from "lucide-react";

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
  const serviceName = serviceRow?.name ?? "Pedido";
  const serviceSlug = (serviceRow?.slug as string | undefined) ?? null;
  const uploadedTypes = docRows.map((d) => d.document_type);
  const showChecklist = canUpload && (order.status === "pending_docs" || order.status === "paid");

  const summaryBlock = (
    <div className="space-y-4">
      {showChecklist ? (
        <OrderDocChecklist serviceSlug={serviceSlug} uploadedTypes={uploadedTypes} />
      ) : (
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-base font-bold text-[#1E293B]">Estado del expediente</h2>
          <p className="mt-2 text-sm text-[#64748B]">
            Tu gestor está trabajando en este trámite. Te avisaremos por email ante cualquier novedad.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#64748B]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              {new Date(order.created_at).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            {order.total_cents != null ? (
              <span className="font-semibold text-[#1A4FBF]">
                {(order.total_cents / 100).toFixed(2)} € IVA incl.
              </span>
            ) : null}
          </div>
        </section>
      )}
    </div>
  );

  const documentsBlock = (
    <section className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200 sm:p-8">
      <h2 className="text-lg font-bold text-[#1E293B] sm:text-xl">Documentación del expediente</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
        Sube PDF, Word o fotos desde el móvil (hasta 25&nbsp;MB por archivo). Si lo prefieres, también puedes
        enviar la documentación a{" "}
        <a href="mailto:info@livendia.com" className="font-semibold text-[#1A4FBF] hover:underline">
          info@livendia.com
        </a>{" "}
        y la incorporaremos a este expediente.
      </p>
      <div className="mt-5">
        <OrderDocuments
          orderId={order.id as string}
          userId={user.id}
          canUpload={canUpload}
          initialDocs={docRows}
          prominent
        />
      </div>
    </section>
  );

  const trackingBlock = (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <OrderTimeline
        status={order.status as string}
        createdAt={order.created_at as string}
        paidAt={(order.paid_at as string | null) ?? null}
        completedAt={(order.completed_at as string | null) ?? null}
        updatedAt={order.updated_at as string}
      />
    </section>
  );

  const helpBlock = (
    <div className="space-y-4">
      <ClientExpedienteContactPanel serviceName={serviceName} orderId={order.id as string} />
      <LivendiaTrustPanel variant="compact" />
    </div>
  );

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
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">{serviceName}</h1>
              <OrderStatusBadge status={order.status as string} />
            </div>
            <p className="mt-2 text-sm text-[#64748B]">
              {new Date(order.created_at).toLocaleString("es-ES")}
              {order.total_cents != null ? ` · ${(order.total_cents / 100).toFixed(2)} €` : null}
            </p>
          </div>
        </div>
      </header>

      <div className="sticky top-14 z-40 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur lg:hidden">
        <Link
          href="/mis-pedidos"
          className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-[#1A4FBF]"
        >
          <ArrowLeft className="h-4 w-4" />
          Mis expedientes
        </Link>
        <div className="mt-3 flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Expediente</p>
            <h1 className="mt-0.5 text-lg font-bold leading-snug text-[#1E293B]">{serviceName}</h1>
            {order.total_cents != null ? (
              <p className="mt-0.5 text-sm text-[#64748B]">{(order.total_cents / 100).toFixed(2)} €</p>
            ) : null}
          </div>
          <OrderStatusBadge status={order.status as string} size="sm" />
        </div>
        <div className="mt-4">
          <OrderTimelineCompact status={order.status as string} />
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-8">
        <OrderDetailMobileTabs
          defaultTab={showChecklist ? "documentos" : "resumen"}
          tabs={[
            { id: "resumen", label: "Resumen", content: summaryBlock },
            { id: "documentos", label: "Documentos", content: documentsBlock },
            { id: "seguimiento", label: "Seguimiento", content: trackingBlock },
            { id: "ayuda", label: "Ayuda", content: helpBlock },
          ]}
        />

        <div className="hidden space-y-4 lg:block">
          {showChecklist ? (
            <OrderDocChecklist serviceSlug={serviceSlug} uploadedTypes={uploadedTypes} />
          ) : null}
          {documentsBlock}
          {helpBlock}
          {trackingBlock}
        </div>

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
