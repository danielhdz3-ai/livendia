import { ensureAllRentalAdminFeeDues, getAdminRentalServiceId, syncPaidFeeDuesFromOrders } from "@/lib/rental-admin-billing";
import {
  ensureCurrentMonthPayments,
  markOverdueRentPayments,
} from "@/lib/rental-rent-schedule";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (!secret || auth !== `Bearer ${secret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const supabase = createServiceRoleClient();
  const markedLate = await markOverdueRentPayments(supabase);
  const createdCurrent = await ensureCurrentMonthPayments(supabase);

  const adminBilling = await ensureAllRentalAdminFeeDues(supabase);
  const serviceId = await getAdminRentalServiceId(supabase);
  const syncedAdminDues = serviceId ? await syncPaidFeeDuesFromOrders(supabase, serviceId) : 0;

  return NextResponse.json({
    ok: true,
    markedLate,
    createdCurrentMonth: createdCurrent,
    rentalAdminBilling: adminBilling,
    syncedAdminDues,
  });
}
