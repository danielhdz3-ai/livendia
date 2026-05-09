import {
  fetchClientEmailForOrder,
  sendDocsReminderEmail,
} from "@/lib/email/send";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { NextResponse } from "next/server";

const HOURS = 48;

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const supabase = createServiceRoleClient();
  const { data: candidates } = await supabase
    .from("orders")
    .select("id, client_id, status, paid_at, created_at, services ( name )")
    .in("status", ["paid", "pending_docs"])
    .is("docs_reminder_sent_at", null);

  const cutoff = Date.now() - HOURS * 60 * 60 * 1000;
  let sent = 0;

  for (const row of candidates ?? []) {
    const paidAt = row.paid_at ? new Date(row.paid_at as string).getTime() : null;
    const createdAt = new Date(row.created_at as string).getTime();
    const reference = paidAt ?? createdAt;
    if (reference > cutoff) continue;

    const { count, error: cErr } = await supabase
      .from("documents")
      .select("id", { count: "exact", head: true })
      .eq("order_id", row.id as string);

    if (cErr || (count ?? 0) > 0) continue;

    const contact = await fetchClientEmailForOrder(row.client_id as string);
    if (!contact?.email) continue;

    const svc = row.services;
    const serviceName =
      (Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name) ??
      "tu servicio";

    try {
      await sendDocsReminderEmail({
        to: contact.email,
        customerName: contact.fullName,
        serviceName,
      });
      await supabase
        .from("orders")
        .update({ docs_reminder_sent_at: new Date().toISOString() })
        .eq("id", row.id as string);
      sent += 1;
    } catch {
      /* siguiente */
    }
  }

  return NextResponse.json({ ok: true, remindersSent: sent });
}
