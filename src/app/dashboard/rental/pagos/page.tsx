import { RentalFinancePanel } from "@/components/rental-finance-panel";
import { getActivePropertyForUser } from "@/lib/rental-active-property";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const metadata = { title: "Pagos y gastos del alquiler" };

export default async function RentalPagosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { activeProperty, activeTenant } = await getActivePropertyForUser(supabase, user.id);

  if (!activeProperty) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
          Registra primero tu inmueble para ver pagos y gastos.
        </div>
      </div>
    );
  }

  const { data: payments } = await supabase
    .from("rent_payments")
    .select("id, payment_date, amount, status, payment_method, notes")
    .eq("property_id", activeProperty.id)
    .order("payment_date", { ascending: false });

  const { data: expenses } = await supabase
    .from("property_expenses")
    .select("id, expense_type, amount, expense_date, description, is_deductible")
    .eq("property_id", activeProperty.id)
    .order("expense_date", { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Pagos y gastos</h1>
        <p className="mt-1 text-[#64748B]">{activeProperty.address}</p>
      </div>

      {!activeTenant ? (
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
          Añade los datos del inquilino para registrar cuotas de renta.
        </div>
      ) : (
        <RentalFinancePanel
          propertyId={activeProperty.id}
          tenantId={activeTenant.id}
          monthlyRent={Number(activeTenant.monthly_rent)}
          payments={(payments ?? []) as Parameters<typeof RentalFinancePanel>[0]["payments"]}
          expenses={(expenses ?? []) as Parameters<typeof RentalFinancePanel>[0]["expenses"]}
          canManage={false}
        />
      )}
    </div>
  );
}
