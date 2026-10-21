import type { SupabaseClient } from "@supabase/supabase-js";
import type { ActiveRentalContext, RentalPropertyRow, RentalTenantRow } from "@/lib/rental-active-property";
import { getActivePropertyForClientUser } from "@/lib/rental-active-property";

export type RentalDashboardDocRow = {
  id: string;
  document_type: string;
  file_name: string;
  file_url: string | null;
  storage_path: string | null;
};

export type RentalDashboardHomeData = {
  firstName: string;
  hasProperty: boolean;
  hasTenant: boolean;
  isSetupComplete: boolean;
  property: RentalPropertyRow | null;
  tenant: RentalTenantRow | null;
  propertyDocs: RentalDashboardDocRow[];
  tenantDocs: RentalDashboardDocRow[];
  openIncidents: number;
  pendingRent: number;
  awaitingApproval: number;
  yearExpensesTotal: number;
};

export async function loadRentalDashboardHomeData(
  supabase: SupabaseClient,
  ownerUserId: string,
  displayName?: string | null,
  contextOverride?: ActiveRentalContext,
): Promise<RentalDashboardHomeData> {
  const { properties, activeProperty, activeTenant } =
    contextOverride ?? (await getActivePropertyForClientUser(supabase, ownerUserId));

  const hasProperty = properties.length > 0;
  const hasTenant = !!activeTenant;
  const isSetupComplete = hasProperty && hasTenant;

  const name = displayName?.trim() || "Cliente";
  const firstName = name.split(" ")[0];

  let propertyDocs: RentalDashboardDocRow[] = [];
  let tenantDocs: RentalDashboardDocRow[] = [];
  let openIncidents = 0;
  let pendingRent = 0;
  let awaitingApproval = 0;
  let yearExpensesTotal = 0;

  if (isSetupComplete && activeProperty && activeTenant) {
    const { data: propDocs } = await supabase
      .from("property_documents")
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .eq("property_id", activeProperty.id)
      .order("uploaded_at", { ascending: false });

    propertyDocs = (propDocs ?? []).map((d) => ({
      id: d.id as string,
      document_type: d.document_type as string,
      file_name: d.file_name as string,
      file_url: (d.file_url as string | null) ?? null,
      storage_path: (d.storage_path as string | null) ?? null,
    }));

    const { data: tDocs } = await supabase
      .from("tenant_documents")
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .eq("tenant_id", activeTenant.id)
      .order("uploaded_at", { ascending: false });

    tenantDocs = (tDocs ?? []).map((d) => ({
      id: d.id as string,
      document_type: d.document_type as string,
      file_name: d.file_name as string,
      file_url: (d.file_url as string | null) ?? null,
      storage_path: (d.storage_path as string | null) ?? null,
    }));

    const { count: openCount } = await supabase
      .from("incidents")
      .select("id", { count: "exact", head: true })
      .eq("property_id", activeProperty.id)
      .in("status", ["pending", "in_progress", "waiting_approval", "approved"]);
    openIncidents = openCount ?? 0;

    const { count: approvalCount } = await supabase
      .from("incidents")
      .select("id", { count: "exact", head: true })
      .eq("property_id", activeProperty.id)
      .eq("status", "waiting_approval");
    awaitingApproval = approvalCount ?? 0;

    const { count: rentPending } = await supabase
      .from("rent_payments")
      .select("id", { count: "exact", head: true })
      .eq("property_id", activeProperty.id)
      .in("status", ["pending", "late"]);
    pendingRent = rentPending ?? 0;

    const yearStart = `${new Date().getFullYear()}-01-01`;
    const { data: yearExpenses } = await supabase
      .from("property_expenses")
      .select("amount")
      .eq("property_id", activeProperty.id)
      .gte("expense_date", yearStart);
    yearExpensesTotal = (yearExpenses ?? []).reduce((s, e) => s + Number(e.amount), 0);
  }

  return {
    firstName,
    hasProperty,
    hasTenant,
    isSetupComplete,
    property: activeProperty,
    tenant: activeTenant,
    propertyDocs,
    tenantDocs,
    openIncidents,
    pendingRent,
    awaitingApproval,
    yearExpensesTotal,
  };
}
