import { getTenantContextForUser } from "@/lib/rental-tenant-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AlertCircle, MessageCircle } from "lucide-react";

export const metadata = { title: "Inicio — Portal inquilino" };

export default async function TenantHomePage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/inquilino");

  const tenantCtx = await getTenantContextForUser(supabase, user.id);
  if (!tenantCtx) redirect("/inquilino");

  const { data: openIncidents } = await supabase
    .from("incidents")
    .select("id, status")
    .eq("property_id", tenantCtx.propertyId)
    .in("status", ["pending", "in_progress", "waiting_approval"]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1E293B]">Hola, {tenantCtx.tenantName}</h1>
      <p className="mt-1 text-[#64748B]">{tenantCtx.propertyAddress}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          href="/inquilino/incidencias"
          className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 transition hover:shadow-2xl"
        >
          <AlertCircle className="h-8 w-8 text-orange-600" />
          <h2 className="mt-3 text-lg font-bold text-[#1E293B]">Incidencias</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            {openIncidents?.length
              ? `${openIncidents.length} incidencia(s) en curso`
              : "Reporta averías o consulta el estado"}
          </p>
        </Link>

        <Link
          href="/inquilino/chat"
          className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 transition hover:shadow-2xl"
        >
          <MessageCircle className="h-8 w-8 text-[#1A4FBF]" />
          <h2 className="mt-3 text-lg font-bold text-[#1E293B]">Chat con el gestor</h2>
          <p className="mt-1 text-sm text-[#64748B]">Comunicación directa con Livendia</p>
        </Link>
      </div>
    </div>
  );
}
