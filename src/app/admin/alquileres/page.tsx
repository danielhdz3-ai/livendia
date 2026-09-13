import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Building2, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import { fetchRentalAdminClients, countPendingRentalDocs } from "@/lib/rental-admin-clients";
import { INCIDENT_OPEN_STATUSES } from "@/lib/rental-incident-labels";

export const metadata = { title: { absolute: "Gestión de alquileres — Livendia Admin" } };

export default async function AdminAlquileresPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/alquileres");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const { data: rentalServices } = await supabase
    .from("services")
    .select("id")
    .in("slug", ["administracion-alquiler", "administracion-alquiler-temporada"]);

  if (!rentalServices?.length) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="rounded-xl bg-white p-12 text-center shadow ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-[#1E293B]">Servicio no configurado</h3>
          <p className="mt-2 text-sm text-[#64748B]">
            El servicio de administración de alquiler no está disponible
          </p>
        </div>
      </main>
    );
  }

  const rentalClientsNested = await Promise.all(
    rentalServices.map((s) => fetchRentalAdminClients(supabase, s.id as string)),
  );
  const rentalClientsById = new Map<string, (typeof rentalClientsNested)[number][number]>();
  for (const list of rentalClientsNested) {
    for (const row of list) {
      if (!rentalClientsById.has(row.clientId)) rentalClientsById.set(row.clientId, row);
    }
  }
  const rentalClients = [...rentalClientsById.values()].sort(
    (a, b) => new Date(b.since).getTime() - new Date(a.since).getTime(),
  );

  const adminAlquilerServiceId =
    (
      await supabase.from("services").select("id").eq("slug", "administracion-alquiler").maybeSingle()
    ).data?.id ?? null;

  const clientIds = rentalClients.map((c) => c.clientId);
  const billingStatusByClient = new Map<string, "active" | "suspended">();
  if (clientIds.length > 0) {
    const { data: billingRows, error: billingErr } = await supabase
      .from("rental_admin_billing")
      .select("client_id, status")
      .in("client_id", clientIds);
    if (!billingErr) {
      for (const row of billingRows ?? []) {
        billingStatusByClient.set(row.client_id as string, row.status as "active" | "suspended");
      }
    }
  }

  const todayIso = new Date().toISOString().slice(0, 10);
  type UpcomingDueRow = { id: string; client_id: string; due_date: string; amount_cents: number };
  let upcomingDues: UpcomingDueRow[] = [];
  if (adminAlquilerServiceId) {
    const duesRes = await supabase
      .from("rental_admin_fee_dues")
      .select("id, client_id, due_date, amount_cents, status")
      .eq("service_id", adminAlquilerServiceId)
      .eq("status", "pending")
      .gte("due_date", todayIso)
      .order("due_date", { ascending: true })
      .limit(12);
    if (!duesRes.error && duesRes.data) upcomingDues = duesRes.data as UpcomingDueRow[];
  }

  const dueClientIds = [...new Set((upcomingDues ?? []).map((d) => d.client_id as string))];
  const dueNameByClient = new Map<string, string>();
  if (dueClientIds.length > 0) {
    const { data: dueProfiles } = await supabase
      .from("profiles")
      .select("id, full_name")
      .in("id", dueClientIds);
    for (const p of dueProfiles ?? []) {
      dueNameByClient.set(p.id as string, (p.full_name as string) || "Cliente");
    }
  }

  const clientsWithData = await Promise.all(
    rentalClients.map(async (client) => {
      const { data: properties } = await supabase
        .from("properties")
        .select("id, address, zone, postal_code")
        .eq("user_id", client.clientId);

      const propertyIds = properties?.map((p) => p.id as string) || [];
      const { data: tenants } = propertyIds.length > 0
        ? await supabase.from("tenants").select("id, full_name, property_id").in("property_id", propertyIds)
        : { data: null };

      const tenantIds = tenants?.map((t) => t.id as string) || [];
      const pendingDocs = await countPendingRentalDocs(supabase, propertyIds, tenantIds);

      let openIncidents = 0;
      if (propertyIds.length > 0) {
        const { count } = await supabase
          .from("incidents")
          .select("id", { count: "exact", head: true })
          .in("property_id", propertyIds)
          .in("status", [...INCIDENT_OPEN_STATUSES]);
        openIncidents = count ?? 0;
      }

      return {
        client,
        properties: properties || [],
        tenants: tenants || [],
        pendingDocs,
        openIncidents,
      };
    }),
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Gestión de Alquileres</h1>
        <p className="mt-1 text-sm text-[#64748B]">
          Clientes con pedido o suscripción activa de administración de alquiler
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3">
              <Users className="h-6 w-6 text-[#1A4FBF]" />
            </div>
            <div>
              <div className="text-sm text-[#64748B]">Clientes Activos</div>
              <div className="text-2xl font-bold text-[#1E293B]">{clientsWithData.length}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-3">
              <Building2 className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm text-[#64748B]">Propiedades</div>
              <div className="text-2xl font-bold text-[#1E293B]">
                {clientsWithData.reduce((sum, c) => sum + c.properties.length, 0)}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-50 p-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-[#64748B]">Inquilinos</div>
              <div className="text-2xl font-bold text-[#1E293B]">
                {clientsWithData.reduce((sum, c) => sum + c.tenants.length, 0)}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-amber-50 p-3">
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <div className="text-sm text-[#64748B]">Docs Pendientes</div>
              <div className="text-2xl font-bold text-[#1E293B]">
                {clientsWithData.reduce((sum, c) => sum + c.pendingDocs, 0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {upcomingDues.length > 0 ? (
        <section className="mb-8 rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <h2 className="text-lg font-bold text-[#1E293B]">Operaciones — cuotas administración (día 1)</h2>
          <p className="mt-1 text-sm text-[#64748B]">
            Próximas cuotas previstas en calendario (transferencia). Ámbar = pendiente de cobro.
          </p>
          <ul className="mt-4 divide-y divide-slate-100">
            {upcomingDues.map((due) => (
              <li key={due.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm">
                <div>
                  <span className="font-semibold text-[#1E293B]">
                    {dueNameByClient.get(due.client_id as string) ?? "Cliente"}
                  </span>
                  <span className="text-[#64748B]">
                    {" "}
                    · {new Date(due.due_date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#1A4FBF]">
                    {(due.amount_cents / 100).toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    €
                  </span>
                  <Link
                    href={`/admin/alquileres/${due.client_id}`}
                    className="text-xs font-semibold text-[#1A4FBF] hover:underline"
                  >
                    Ficha →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {!clientsWithData.length ? (
        <div className="rounded-xl bg-white p-12 text-center shadow ring-1 ring-slate-200">
          <Building2 className="mx-auto h-16 w-16 text-[#64748B]" />
          <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">No hay clientes todavía</h3>
          <p className="mt-2 text-sm text-[#64748B]">
            Los clientes con suscripción de administración de alquiler aparecerán aquí
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {clientsWithData.map(({ client, properties, tenants, pendingDocs, openIncidents }) => {
            const billingStatus = billingStatusByClient.get(client.clientId) ?? "active";
            return (
            <div
              key={client.clientId}
              className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-[#1E293B]">
                        {client.profile?.full_name || "Cliente sin nombre"}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          billingStatus === "active"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {billingStatus === "active" ? "Activo" : "Suspendido"}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-4 text-sm text-[#64748B]">
                      <span>{client.profile?.email}</span>
                      {client.profile?.phone ? <span>📞 {client.profile.phone}</span> : null}
                      <span className="text-xs">
                        {client.source === "subscription" ? "Suscripción" : "Pedido"} · desde{" "}
                        {new Date(client.since).toLocaleDateString("es-ES")}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-[#1A4FBF]" />
                      <div>
                        <div className="text-xs text-[#64748B]">Propiedades</div>
                        <div className="font-semibold text-[#1E293B]">{properties.length}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="text-xs text-[#64748B]">Inquilinos</div>
                        <div className="font-semibold text-[#1E293B]">{tenants.length}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {pendingDocs > 0 ? (
                        <AlertCircle className="h-5 w-5 text-amber-600" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      <div>
                        <div className="text-xs text-[#64748B]">Documentación</div>
                        <div className="font-semibold text-[#1E293B]">
                          {pendingDocs > 0 ? `${pendingDocs} pendientes` : "Completa"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {openIncidents > 0 ? (
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      <div>
                        <div className="text-xs text-[#64748B]">Incidencias</div>
                        <div className="font-semibold text-[#1E293B]">
                          {openIncidents > 0 ? `${openIncidents} abiertas` : "Al día"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {properties.length > 0 ? (
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-semibold text-[#64748B]">PROPIEDADES:</div>
                      {properties.map((prop) => (
                        <div key={prop.id as string} className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-[#1E293B]">{prop.address as string}</span>
                          {prop.zone ? <span className="text-[#64748B]">• {prop.zone as string}</span> : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/admin/alquileres/${client.clientId}`}
                    className="rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      )}
    </main>
  );
}
