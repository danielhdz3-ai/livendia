import { BillingPortalButton } from "@/components/billing-portal-button";
import { RentalPanelShell } from "@/components/rental-panel-shell";
import { RentalSidebarNav } from "@/components/rental-sidebar-nav";
import {
  isRentalAdminServiceSlug,
  orderGrantsRentalAccess,
  subscriptionGrantsRentalAccess,
} from "@/lib/rental-access";
import { getActivePropertyForUser, getUnreadChatCount } from "@/lib/rental-active-property";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogoutButton } from "@/app/dashboard/logout-button";
import { Settings } from "lucide-react";

const sidebarQuickLink =
  "block rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-white/85 transition hover:bg-white/15 hover:text-white";
const billingNavOnBrand =
  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white disabled:opacity-60";

export default async function RentalDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, services(slug)")
    .order("created_at", { ascending: false });

  const { data: rentalSubs, error: subsErr } = await supabase
    .from("client_subscriptions")
    .select("status, current_period_end, services(slug)")
    .eq("client_id", user.id);

  if (subsErr) {
    console.error("client_subscriptions:", subsErr.message);
  }

  const allowed =
    (rentalSubs ?? []).some((row) => {
      const svc = row.services;
      const slug = Array.isArray(svc) ? svc[0]?.slug : (svc as { slug?: string } | null)?.slug;
      return (
        isRentalAdminServiceSlug(slug) &&
        subscriptionGrantsRentalAccess(row.status, row.current_period_end)
      );
    }) || (orders ?? []).some((o) => orderGrantsRentalAccess(o));

  if (!allowed) {
    redirect("/dashboard");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  const { properties, activeProperty } = await getActivePropertyForUser(supabase, user.id);
  const chatUnreadCount = activeProperty
    ? await getUnreadChatCount(supabase, activeProperty.id, user.id)
    : 0;

  const propertyOptions = properties.map((p) => ({
    id: p.id,
    address: p.address,
    zone: p.zone,
  }));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <aside className="w-64 border-r border-[#1547a8]/80 bg-[#1A4FBF] shadow-xl shadow-slate-900/15">
        <div className="flex h-full flex-col">
          <div className="border-b border-white/15 p-6">
            <Link href="/dashboard/rental" className="block outline-none ring-white/40 focus-visible:ring-2">
              <span className="text-3xl font-extrabold leading-tight tracking-tight text-white">Livendia</span>
              <span className="mt-1.5 block text-sm font-semibold text-white/80">Gestoría Digital</span>
            </Link>
          </div>

          <RentalSidebarNav
            activePropertyId={activeProperty?.id}
            chatUnreadCount={chatUnreadCount}
          />

          <div className="mt-auto border-t border-white/15 p-4 space-y-3">
            <Link href="/dashboard/configuracion" className={sidebarQuickLink}>
              <span className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Configuración
              </span>
            </Link>
            <BillingPortalButton navItemClassName={billingNavOnBrand} returnPath="/dashboard/rental" />

            <div className="flex items-center gap-3 rounded-lg bg-white/[0.1] p-3 ring-1 ring-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-bold text-white">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-white">{firstName}</div>
                <div className="text-xs text-white/65">Administración de alquileres</div>
              </div>
            </div>

            <LogoutButton variant="on-brand" />
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <RentalPanelShell
          properties={propertyOptions}
          activePropertyId={activeProperty?.id}
          chatUnreadCount={chatUnreadCount}
        >
          {children}
        </RentalPanelShell>
      </main>
    </div>
  );
}
