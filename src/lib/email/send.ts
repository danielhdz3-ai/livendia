import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
import { createServiceRoleClient } from "@/lib/supabase/service";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getAdminNotifyEmail, getAppUrl, getResendFrom } from "./config";
import AdminDocUploadedEmail from "./templates/admin-doc-uploaded";
import AdminNewOrderEmail from "./templates/admin-new-order";
import ContactInquiryEmail from "./templates/contact-inquiry";
import DocsReminderEmail from "./templates/docs-reminder";
import DocumentDeliveredEmail from "./templates/document-delivered";
import OrderConfirmedEmail from "./templates/order-confirmed";
import OrderStatusUpdatedEmail from "./templates/order-status-updated";
import WelcomeEmail from "./templates/welcome";
import { getResend } from "./resend-client";

export async function getAuthUserContact(supabase: SupabaseClient, userId: string) {
  const { data, error } = await supabase.auth.admin.getUserById(userId);
  if (error || !data.user) return null;
  const email = data.user.email ?? null;
  const fullName = (data.user.user_metadata?.full_name as string | undefined) ?? "";
  return { email, fullName };
}

export async function sendWelcomeEmail(opts: { to: string; customerName: string }) {
  const resend = getResend();
  if (!resend || !opts.to) return;
  const dashboardUrl = `${getAppUrl()}/dashboard`;
  await resend.emails.send({
    from: getResendFrom(),
    to: opts.to,
    subject: "Bienvenido/a a Livendia",
    react: WelcomeEmail({
      customerName: opts.customerName,
      dashboardUrl,
    }),
  });
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
}) {
  const resend = getResend();
  if (!resend) return;
  const adminOrderUrl = `${getAppUrl()}/admin/pedidos/${opts.orderId}`;
  await resend.emails.send({
    from: getResendFrom(),
    to: getAdminNotifyEmail(),
    subject: `[Livendia] Nuevo pedido: ${opts.serviceName}`,
    react: AdminNewOrderEmail({
      serviceName: opts.serviceName,
      orderId: opts.orderId,
      clientEmail: opts.clientEmail,
      adminOrderUrl,
    }),
  });
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
    to: getAdminNotifyEmail(),
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
    to: getAdminNotifyEmail(),
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
