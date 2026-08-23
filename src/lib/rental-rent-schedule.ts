import type { SupabaseClient } from "@supabase/supabase-js";

export function rentMonthDates(startDate: string, endDate?: string | null): string[] {
  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) return [];

  const end = endDate ? new Date(endDate) : new Date(start.getFullYear() + 2, start.getMonth(), 1);
  const months: string[] = [];
  const cursor = new Date(start.getFullYear(), start.getMonth(), 1);
  const limit = new Date(end.getFullYear(), end.getMonth(), 1);

  while (cursor <= limit) {
    months.push(
      `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-01`,
    );
    cursor.setMonth(cursor.getMonth() + 1);
  }

  return months;
}

export async function generateRentScheduleForTenant(
  supabase: SupabaseClient,
  tenantId: string,
  propertyId: string,
): Promise<{ created: number; skipped: number }> {
  const { data: tenant } = await supabase
    .from("tenants")
    .select("id, start_date, end_date, monthly_rent, is_active")
    .eq("id", tenantId)
    .eq("property_id", propertyId)
    .maybeSingle();

  if (!tenant || tenant.is_active === false) {
    return { created: 0, skipped: 0 };
  }

  const months = rentMonthDates(tenant.start_date as string, tenant.end_date as string | null);
  if (months.length === 0) return { created: 0, skipped: 0 };

  const { data: existing } = await supabase
    .from("rent_payments")
    .select("payment_date")
    .eq("tenant_id", tenantId);

  const existingDates = new Set((existing ?? []).map((r) => r.payment_date as string));
  let created = 0;
  let skipped = 0;

  for (const paymentDate of months) {
    if (existingDates.has(paymentDate)) {
      skipped++;
      continue;
    }

    const { error } = await supabase.from("rent_payments").insert({
      property_id: propertyId,
      tenant_id: tenantId,
      payment_date: paymentDate,
      amount: tenant.monthly_rent,
      status: "pending",
      payment_method: null,
      notes: "Cuota generada desde calendario de contrato",
    });

    if (!error) created++;
    else skipped++;
  }

  return { created, skipped };
}

export async function markOverdueRentPayments(supabase: SupabaseClient): Promise<number> {
  const now = new Date();
  const firstOfCurrentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;

  const { data: overdue, error: selectErr } = await supabase
    .from("rent_payments")
    .select("id")
    .eq("status", "pending")
    .lt("payment_date", firstOfCurrentMonth);

  if (selectErr || !overdue?.length) return 0;

  const ids = overdue.map((r) => r.id as string);
  const { error } = await supabase.from("rent_payments").update({ status: "late" }).in("id", ids);

  return error ? 0 : ids.length;
}

export async function ensureCurrentMonthPayments(supabase: SupabaseClient): Promise<number> {
  const now = new Date();
  const paymentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;

  const { data: tenants } = await supabase
    .from("tenants")
    .select("id, property_id, monthly_rent")
    .eq("is_active", true);

  let created = 0;

  for (const tenant of tenants ?? []) {
    const { data: existing } = await supabase
      .from("rent_payments")
      .select("id")
      .eq("tenant_id", tenant.id as string)
      .eq("payment_date", paymentDate)
      .maybeSingle();

    if (existing) continue;

    const { error } = await supabase.from("rent_payments").insert({
      property_id: tenant.property_id as string,
      tenant_id: tenant.id as string,
      payment_date: paymentDate,
      amount: tenant.monthly_rent,
      status: "pending",
      notes: "Cuota auto-generada (cron)",
    });

    if (!error) created++;
  }

  return created;
}
