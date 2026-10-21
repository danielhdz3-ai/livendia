import { RentalFinancePanel } from "@/components/rental-finance-panel";
import { requireAdmin } from "@/lib/admin-auth";
import { requireAdminMirrorProperty } from "@/lib/admin-rental-client-page";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: { absolute: "Pagos (vista cliente) — Livendia Admin" } };

export default async function AdminMirrorPagosPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await requireAdmin("/admin/alquileres");
  const { clientId } = await params;
  const supabase = await createServerSupabaseClient();
  const { activeProperty, activeTenant } = await requireAdminMirrorProperty(supabase, clientId);

  const { data: payments } = await supabase
    .from("rent_payments")
    .select("id, payment_date, amount, status, payment_method, notes")
    .eq("property_id", activeProperty!.id)
    .order("payment_date", { ascending: false });

  const { data: expenses } = await supabase
    .from("property_expenses")
    .select("id, expense_type, amount, expense_date, description, is_deductible")
    .eq("property_id", activeProperty!.id)
    .order("expense_date", { ascending: false });

  if (!activeTenant) {
    redirect(`/admin/alquileres/${clientId}`);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Pagos y gastos</h1>
        <p className="mt-1 text-[#64748B]">Vista del cliente — {activeProperty!.address}</p>
      </div>
      <RentalFinancePanel
        propertyId={activeProperty!.id}
        tenantId={activeTenant.id}
        monthlyRent={Number(activeTenant.monthly_rent)}
        payments={(payments ?? []) as Parameters<typeof RentalFinancePanel>[0]["payments"]}
        expenses={(expenses ?? []) as Parameters<typeof RentalFinancePanel>[0]["expenses"]}
        canManage={true}
      />
    </div>
  );
}
