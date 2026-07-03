import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
import { createServiceRoleClient } from "@/lib/supabase/service";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getAdminNotifyEmails, getAppUrl, getResendFrom } from "./config";
import AdminDocUploadedEmail from "./templates/admin-doc-uploaded";
import AdminNewOrderEmail from "./templates/admin-new-order";
import AdminNewIncidentEmail from "./templates/admin-new-incident";
import ContactInquiryEmail from "./templates/contact-inquiry";
import DocsReminderEmail from "./templates/docs-reminder";
import DocumentDeliveredEmail from "./templates/document-delivered";
import IncidentStatusUpdatedEmail from "./templates/incident-status-updated";
import IncidentToOwnerEmail from "./templates/incident-to-owner";
import OrderConfirmedEmail from "./templates/order-confirmed";
import OrderStatusUpdatedEmail from "./templates/order-status-updated";
import WelcomeEmail from "./templates/welcome";
import { getResend } from "./resend-client";

export async function getAuthUserContact(supabase: SupabaseClient, userId: string) {
  const [{ data, error }, { data: profile }] = await Promise.all([
    supabase.auth.admin.getUserById(userId),
    supabase.from("profiles").select("full_name, phone").eq("id", userId).maybeSingle(),
  ]);
  if (error || !data.user) return null;
  const email = data.user.email ?? null;
  const metaName = (data.user.user_metadata?.full_name as string | undefined) ?? "";
  const fullName = (profile?.full_name as string | undefined)?.trim() || metaName;
  const phone = (profile?.phone as string | undefined)?.trim() || null;
  return { email, fullName, phone };
}

function formatOrderTotalEur(totalCents: number | null | undefined): string {
  if (totalCents == null) return "—";
  return `${(totalCents / 100).toFixed(2).replace(".", ",")} €`;
}

function formatPaidAtEs(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" });
}

export async function sendWelcomeEmail(opts: { to: string; customerName: string }) {
  const resend = getResend();
  if (!resend || !opts.to) return null;
  const dashboardUrl = `${getAppUrl()}/dashboard`;
  const result = await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: "Bienvenido/a a Livendia",
    react: WelcomeEmail({
      customerName: opts.customerName,
      dashboardUrl,
    }),
  });
  return result;
}

export async function sendDocsReminderEmail(opts: {
  to: string;
  customerName: string;
  serviceName: string;
}) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  const dashboardUrl = `${getAppUrl()}/dashboard`;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: `Livendia — Recordatorio: documentación pendiente (${opts.serviceName})`,
    react: DocsReminderEmail({
      customerName: opts.customerName,
      serviceName: opts.serviceName,
      dashboardUrl,
    }),
  });
}

export async function sendOrderConfirmedEmail(opts: {
  to: string;
  customerName: string;
  serviceName: string;
  orderId: string;
}) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  const dashboardUrl = `${getAppUrl()}/dashboard`;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: `Livendia — Pedido confirmado: ${opts.serviceName}`,
    react: OrderConfirmedEmail({
      customerName: opts.customerName,
      serviceName: opts.serviceName,
      orderId: opts.orderId,
      dashboardUrl,
    }),
  });
}

export async function sendAdminNewOrderEmail(opts: {
  serviceName: string;
  orderId: string;
  clientEmail: string;
  clientName?: string;
  clientPhone?: string | null;
  totalCents?: number | null;
  paidAt?: string | null;
}) {
  const resend = getResend();
  const adminTo = getAdminNotifyEmails();
  if (!resend) {
    console.error("[email] sendAdminNewOrderEmail: RESEND_API_KEY no configurada");
    return null;
  }
  if (adminTo.length === 0) {
    console.error("[email] sendAdminNewOrderEmail: sin destinatarios admin");
    return null;
  }

  const totalLabel = formatOrderTotalEur(opts.totalCents);
  const adminOrderUrl = `${getAppUrl()}/admin/pedidos/${opts.orderId}`;
  const adminDashboardUrl = `${getAppUrl()}/admin`;

  const result = await resend.emails.send({
    from: getResendFrom(),
    to: adminTo,
    subject: `💰 [Livendia] Nuevo pago: ${opts.serviceName} — ${totalLabel}`,
    react: AdminNewOrderEmail({
      serviceName: opts.serviceName,
      orderId: opts.orderId,
      clientEmail: opts.clientEmail.trim() || "—",
      clientName: opts.clientName?.trim() || "—",
      clientPhone: opts.clientPhone?.trim() || "—",
      totalLabel,
      paidAtLabel: formatPaidAtEs(opts.paidAt),
      adminOrderUrl,
      adminDashboardUrl,
    }),
  });

  if (result.error) {
    console.error("[email] sendAdminNewOrderEmail:", result.error);
  }

  return result;
}

export async function sendAdminDocUploadedEmail(opts: {
  fileName: string;
  docTypeLabel: string;
  orderId: string;
  clientEmail: string;
}) {
  const resend = getResend();
  if (!resend) return;
  const adminOrderUrl = `${getAppUrl()}/admin/pedidos/${opts.orderId}`;
  await resend.emails.send({
    from: getResendFrom(),
    to: getAdminNotifyEmails(),
    subject: `[Livendia] Nueva documentación — pedido ${opts.orderId.slice(0, 8)}…`,
    react: AdminDocUploadedEmail({
      fileName: opts.fileName,
      docTypeLabel: opts.docTypeLabel,
      orderId: opts.orderId,
      clientEmail: opts.clientEmail,
      adminOrderUrl,
    }),
  });
}

export async function sendOrderStatusUpdatedEmail(opts: {
  to: string;
  customerName: string;
  serviceName: string;
  statusKey: string;
}) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  const statusLabel = ORDER_STATUS_LABEL_ES[opts.statusKey] ?? opts.statusKey;
  const dashboardUrl = `${getAppUrl()}/dashboard`;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: `Livendia — Estado del pedido: ${statusLabel}`,
    react: OrderStatusUpdatedEmail({
      customerName: opts.customerName,
      serviceName: opts.serviceName,
      statusLabel,
      dashboardUrl,
    }),
  });
}

export async function sendDocumentDeliveredEmail(opts: {
  to: string;
  customerName: string;
  serviceName: string;
  message: string;
}) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  const dashboardUrl = `${getAppUrl()}/dashboard`;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: `Livendia — Documento disponible: ${opts.serviceName}`,
    react: DocumentDeliveredEmail({
      customerName: opts.customerName,
      serviceName: opts.serviceName,
      message: opts.message,
      dashboardUrl,
    }),
  });
}

export async function sendContactInquiryEmail(opts: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const resend = getResend();
  if (!resend) {
    throw new Error("RESEND_API_KEY no configurada");
  }
  const submittedAt = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  await resend.emails.send({
    from: getResendFrom(),
    to: getAdminNotifyEmails(),
    replyTo: opts.email,
    subject: `[Livendia] Consulta web — ${opts.name.slice(0, 60)}`,
    react: ContactInquiryEmail({
      name: opts.name,
      email: opts.email,
      phone: opts.phone,
      message: opts.message,
      submittedAt,
    }),
  });
}

export async function fetchClientEmailForOrder(clientId: string) {
  const supabase = createServiceRoleClient();
  const contact = await getAuthUserContact(supabase, clientId);
  return contact;
}

export async function sendAdminNewIncidentEmail(opts: {
  incidentTitle: string;
  incidentId: string;
  propertyAddress: string;
  clientEmail: string;
  priority: string;
}) {
  const resend = getResend();
  if (!resend) return;
  const adminIncidentUrl = `${getAppUrl()}/admin/incidencias/${opts.incidentId}`;
  await resend.emails.send({
    from: getResendFrom(),
    to: getAdminNotifyEmails(),
    subject: `[Livendia] Nueva incidencia: ${opts.incidentTitle}`,
    react: AdminNewIncidentEmail({
      incidentTitle: opts.incidentTitle,
      incidentId: opts.incidentId,
      propertyAddress: opts.propertyAddress,
      clientEmail: opts.clientEmail,
      priority: opts.priority,
      adminIncidentUrl,
    }),
  });
}

export async function sendIncidentToOwnerEmail(opts: {
  to: string;
  ownerName: string;
  incidentTitle: string;
  incidentDescription: string;
  priority: string;
  propertyAddress: string;
  incidentId: string;
}) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: `[Livendia] Nueva incidencia en ${opts.propertyAddress}`,
    react: IncidentToOwnerEmail({
      ownerName: opts.ownerName,
      incidentTitle: opts.incidentTitle,
      incidentDescription: opts.incidentDescription,
      priority: opts.priority,
      propertyAddress: opts.propertyAddress,
      incidentId: opts.incidentId,
    }),
  });
}

export async function sendIncidentStatusUpdatedEmail(opts: {
  to: string;
  customerName: string;
  incidentTitle: string;
  newStatus: string;
  estimatedCost?: number;
  approvedBudget?: number;
  incidentId: string;
}) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  const incidentUrl = `${getAppUrl()}/dashboard/rental/incidencias/${opts.incidentId}`;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: `Livendia — Actualización de incidencia: ${opts.incidentTitle}`,
    react: IncidentStatusUpdatedEmail({
      customerName: opts.customerName,
      incidentTitle: opts.incidentTitle,
      newStatus: opts.newStatus,
      estimatedCost: opts.estimatedCost,
      approvedBudget: opts.approvedBudget,
      incidentUrl,
    }),
  });
}
