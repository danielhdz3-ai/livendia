"use server";

import { fetchClientEmailForOrder, sendDocumentDeliveredEmail } from "@/lib/email/send";
import { computeFiscalSellerEstimate, type FiscalSellerCalcInput } from "@/lib/fiscal-seller-calculator";
import { renderFiscalMemoriaHtml } from "@/lib/fiscal-seller-memoria-html";
import { logOrderDeliverable } from "@/lib/order-activity-log";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { revalidatePath } from "next/cache";

async function requireAdmin() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "No autorizado" as const, supabase: null };
  const { data: p } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (p?.role !== "admin") return { error: "No permitido" as const, supabase: null };
  return { supabase, error: null as null };
}

export async function generateFiscalMemoriaDraft(orderId: string, input: FiscalSellerCalcInput) {
  const auth = await requireAdmin();
  if (auth.error) return { error: auth.error };

  const result = computeFiscalSellerEstimate(input);
  const html = renderFiscalMemoriaHtml(result, {
    municipality: input.municipalityId,
    escrituraDate: input.escrituraDate,
  });

  const admin = createServiceRoleClient();
  const { data: order } = await admin.from("orders").select("order_intake").eq("id", orderId).maybeSingle();
  const prior = (order?.order_intake as Record<string, unknown>) ?? {};

  const { error } = await admin
    .from("orders")
    .update({
      order_intake: {
        ...prior,
        fiscal_memoria_draft: {
          html,
          result,
          calcInput: input,
          generatedAt: new Date().toISOString(),
          approvedAt: null,
        },
      },
    })
    .eq("id", orderId);

  if (error) return { error: error.message };
  revalidatePath(`/admin/expedientes/${orderId}`);
  return { ok: true };
}

export async function approveFiscalMemoriaDraft(orderId: string) {
  const auth = await requireAdmin();
  if (auth.error) return { error: auth.error };

  const admin = createServiceRoleClient();
  const { data: order } = await admin
    .from("orders")
    .select("client_id, order_intake, services ( name )")
    .eq("id", orderId)
    .maybeSingle();

  if (!order) return { error: "Pedido no encontrado" };
  const intake = order.order_intake as Record<string, unknown> | null;
  const draft = intake?.fiscal_memoria_draft as { html?: string } | undefined;
  if (!draft?.html) return { error: "No hay borrador. Genera la memoria primero." };

  const { error: delErr } = await admin.from("order_deliverables").insert({
    order_id: orderId,
    title: "Memoria tributaria orientativa (PDF/HTML)",
    message:
      "Tu gestor ha revisado la memoria. Descarga el documento o revisa el resumen en el panel. Agenda la videollamada respondiendo a info@livendia.com.",
    file_name: "memoria-fiscal-orientativa.html",
    file_type: "text/html",
    visible_to_client: true,
    approved_at: new Date().toISOString(),
  });

  if (delErr) return { error: delErr.message };

  await admin
    .from("orders")
    .update({
      order_intake: {
        ...intake,
        fiscal_memoria_draft: { ...draft, approvedAt: new Date().toISOString() },
      },
      status: "in_progress",
    })
    .eq("id", orderId);

  const contact = await fetchClientEmailForOrder(order.client_id as string);
  const svc = order.services;
  const serviceName =
    (Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name) ?? "Consulta fiscal";

  if (contact?.email) {
    await sendDocumentDeliveredEmail({
      to: contact.email,
      customerName: contact.fullName,
      serviceName,
      message:
        "La memoria tributaria orientativa está lista en tu panel. Revisa las hipótesis y escribe a info@livendia.com para agendar la videollamada de 30–45 min.",
    });
  }

  await logOrderDeliverable({
    orderId,
    title: "Memoria fiscal aprobada",
    message: "Memoria orientativa revisada por gestor.",
  });

  revalidatePath(`/admin/expedientes/${orderId}`);
  revalidatePath(`/mis-pedidos/${orderId}`);
  return { ok: true };
}