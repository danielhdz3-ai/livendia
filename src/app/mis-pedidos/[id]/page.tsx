import { OrderDocuments, type DocRow } from "@/app/dashboard/order-documents";
import { OrderTimeline, OrderTimelineCompact } from "@/app/mis-pedidos/[id]/order-timeline";
import { ClientExpedienteContactPanel } from "@/components/client-expediente-contact-panel";
import { ExpedienteDesktopHero } from "@/components/expediente-desktop-hero";
import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { LivendiaTrustPanel } from "@/components/livendia-trust-panel";
import { OrderActivityFeed } from "@/components/order-activity-feed";
import { OrderDeliverablesPanel } from "@/components/order-deliverables-panel";
import { OrderDetailMobileTabs } from "@/components/order-detail-mobile-tabs";
import { OrderDocChecklist } from "@/components/order-doc-checklist";
import { OrderProgressRing } from "@/components/order-progress-ring";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { LogoutButton } from "@/app/dashboard/logout-button";
import { mergeOrderActivity } from "@/lib/order-activity";
import { calculateOrderProgress } from "@/lib/order-progress";
import { PanelContentEnter } from "@/components/panel-content-enter";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { PANEL_CARD, PANEL_PAGE_BG } from "@/lib/client-panel-ui";
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
  const progress = calculateOrderProgress({
    status: order.status as string,
    serviceSlug,
    uploadedTypes,
    docCount: docRows.length,
  });

  const activityResult = await supabase
    .from("order_activity")
    .select("id, kind, title, description, created_at")
    .eq("order_id", id)
    .order("created_at", { ascending: false })
    .limit(20);

  const deliverablesResult = await supabase
    .from("order_deliverables")
    .select("id, title, message, file_name, file_path, created_at")
    .eq("order_id", id)
    .order("created_at", { ascending: false });

  const activityItems = mergeOrderActivity(activityResult.error ? [] : (activityResult.data ?? []), {
    status: order.status as string,
    createdAt: order.created_at as string,
    paidAt: (order.paid_at as string | null) ?? null,
    completedAt: (order.completed_at as string | null) ?? null,
    docCount: docRows.length,
  });

  const deliverableRows = deliverablesResult.error ? [] : (deliverablesResult.data ?? []);
  const deliverablesBlock =
    deliverableRows.length > 0 ? <OrderDeliverablesPanel items={deliverableRows} /> : null;

  const statusSummaryBlock = !showChecklist ? (
    <section className={PANEL_CARD}>
      <h2 className="text-base font-bold text-[#1E293B] sm:text-lg">Estado del expediente</h2>
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
  ) : null;

  const checklistBlock =
    showChecklist ? (
      <OrderDocChecklist serviceSlug={serviceSlug} uploadedTypes={uploadedTypes} />
    ) : null;

  const documentsBlock = (
    <section id="documentos" className={`${PANEL_CARD} scroll-mt-28`}>
      <h2 className="text-lg font-bold text-[#1E293B] sm:text-xl">Sube tu documentación</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
        Arrastra archivos o elige desde tu ordenador. PDF, Word e imágenes hasta 25&nbsp;MB por archivo.
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
    <section className={PANEL_CARD}>
      <OrderTimeline
        status={order.status as string}
        createdAt={order.created_at as string}
        paidAt={(order.paid_at as string | null) ?? null}
        completedAt={(order.completed_at as string | null) ?? null}
        updatedAt={order.updated_at as string}
      />
    </section>
  );

  const activityBlock = <OrderActivityFeed items={activityItems} />;

  const summaryBlock = (
    <div className="space-y-4">
      <OrderProgressRing percent={progress.percent} label={progress.label} />
      {deliverablesBlock}
      {checklistBlock ?? statusSummaryBlock}
    </div>
  );

  const helpBlock = (
    <div className="space-y-4">
      <ClientExpedienteContactPanel serviceName={serviceName} orderId={order.id as string} />
      <LivendiaGestorCard compact />
    </div>
  );

  return (
    <div className={`min-h-screen pb-6 lg:pb-0 ${PANEL_PAGE_BG}`}>
      <header className="hidden border-b border-slate-200 bg-white/90 backdrop-blur lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 xl:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-bold text-white shadow hover:bg-[#2563EB]"
            >
              <LayoutDashboard className="h-4 w-4" aria-hidden />
              Panel principal
            </Link>
            <Link
              href="/mis-pedidos"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] hover:border-[#1A4FBF]/30 hover:text-[#1A4FBF]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Mis pedidos
            </Link>
          </div>
          <LogoutButton />
        </div>
      </header>

      <ExpedienteDesktopHero
        serviceName={serviceName}
        orderId={order.id as string}
        status={order.status as string}
        createdAt={order.created_at as string}
        totalCents={order.total_cents as number | null}
        progressPercent={progress.percent}
        progressLabel={progress.label}
        docCount={docRows.length}
      />

      <div className="sticky top-14 z-40 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur lg:hidden">
        <Link
          href="/mis-pedidos"
          className="inline-flex min-h-9 items-center gap-2 text-sm font-semibold text-[#1A4FBF]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
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
        <div className="mt-4">
          <OrderProgressRing percent={progress.percent} label={progress.label} size="sm" />
        </div>
      </div>

      <PanelContentEnter>
        <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 xl:px-8">
        <div className="lg:hidden">
          <OrderDetailMobileTabs
            defaultTab={showChecklist ? "documentos" : "resumen"}
            tabs={[
              { id: "resumen", label: "Resumen", content: summaryBlock },
              { id: "documentos", label: "Documentos", content: documentsBlock },
              { id: "seguimiento", label: "Seguimiento", content: (
                <div className="space-y-4">
                  {trackingBlock}
                  {activityBlock}
                </div>
              ) },
              { id: "ayuda", label: "Ayuda", content: helpBlock },
            ]}
          />
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="space-y-6 lg:col-span-8">
            {deliverablesBlock}
            {checklistBlock ?? statusSummaryBlock}
            {documentsBlock}
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-6">
            {trackingBlock}
            {activityBlock}
            <LivendiaGestorCard compact />
            <LivendiaTrustPanel variant="compact" />
          </aside>
        </div>

        <div className="mt-8 hidden justify-center pb-8 lg:flex">
          <Link
            href="/dashboard"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
          >
            <Home className="h-4 w-4" aria-hidden />
            Volver al panel principal
          </Link>
        </div>
      </main>
      </PanelContentEnter>
    </div>
  );
}
