import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Building2, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import { fetchRentalAdminClients, countPendingRentalDocs } from "@/lib/rental-admin-clients";

export const metadata = { title: { absolute: "Gestión de alquileres — Livendia Admin" } };

export default async function AdminAlquileresPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/alquileres");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  const { data: service } = await supabase
    .from("services")
    .select("id")
    .eq("slug", "administracion-alquiler")
    .maybeSingle();

  if (!service) {
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

  const rentalClients = await fetchRentalAdminClients(supabase, service.id as string);

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

      return {
        client,
        properties: properties || [],
        tenants: tenants || [],
        pendingDocs,
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
          {clientsWithData.map(({ client, properties, tenants, pendingDocs }) => (
            <div
              key={client.clientId}
              className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-[#1E293B]">
                      {client.profile?.full_name || "Cliente sin nombre"}
                    </h3>
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
          ))}
        </div>
      )}
    </main>
  );
}
