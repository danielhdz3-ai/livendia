import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Users, Mail, Phone, Calendar, ShoppingCart, Euro, Search } from "lucide-react";

export const metadata = { title: { absolute: "Clientes — Livendia Admin" } };

type OrderRow = {
  client_id: string;
  id: string;
  status: string;
  total_cents: number | null;
  created_at: string;
  services: { name?: string; slug?: string } | { name?: string; slug?: string }[] | null;
};

function serviceNameFromOrder(order: OrderRow): string | undefined {
  const svc = order.services;
  return Array.isArray(svc) ? svc[0]?.name : svc?.name;
}

function buildClientStats(orders: OrderRow[]) {
  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === "completed").length;
  const totalSpent = orders.reduce((sum, o) => sum + (o.total_cents || 0), 0);
  const services = [...new Set(orders.map(serviceNameFromOrder).filter(Boolean))] as string[];

  return {
    totalOrders,
    completedOrders,
    totalSpent,
    lastOrder: orders[0] ?? null,
    services,
  };
}

export default async function AdminClientesPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; servicio?: string }>;
}) {
  const { search, servicio } = await searchParams;

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin/clientes");

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (me?.role !== "admin") redirect("/dashboard");

  let clientsQuery = supabase
    .from("profiles")
    .select("*")
    .eq("role", "client")
    .order("created_at", { ascending: false });

  const searchTerm = search?.trim();
  if (searchTerm) {
    const term = `%${searchTerm}%`;
    clientsQuery = clientsQuery.or(`full_name.ilike.${term},email.ilike.${term}`);
  }

  const [{ data: allClients }, { data: allServices }] = await Promise.all([
    clientsQuery,
    supabase.from("services").select("name, slug").order("name"),
  ]);

  const clientIds = (allClients ?? []).map((client) => client.id);

  const { data: allOrders } = clientIds.length
    ? await supabase
        .from("orders")
        .select("client_id, id, status, total_cents, created_at, services(name, slug)")
        .in("client_id", clientIds)
        .order("created_at", { ascending: false })
    : { data: [] as OrderRow[] };

  const ordersByClient = new Map<string, OrderRow[]>();
  for (const order of allOrders ?? []) {
    const list = ordersByClient.get(order.client_id) ?? [];
    list.push(order);
    ordersByClient.set(order.client_id, list);
  }

  const clientsWithStats = (allClients ?? []).map((client) => ({
    ...client,
    stats: buildClientStats(ordersByClient.get(client.id) ?? []),
  }));

  // Filtrar por servicio si se especifica
  const filteredClients = servicio
    ? clientsWithStats.filter((c) =>
        c.stats.services.some((s: string) => s.toLowerCase().includes(servicio.toLowerCase()))
      )
    : clientsWithStats;

  const statsWeekCutoff = new Date();
  statsWeekCutoff.setDate(statsWeekCutoff.getDate() - 7);
  const newClientsLast7Days = clientsWithStats.filter(
    (c) => new Date(c.created_at) > statsWeekCutoff,
  ).length;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E293B]">Clientes</h1>
        <p className="mt-1 text-sm text-[#64748B]">
          Base de datos completa de {clientsWithStats.length} clientes
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-[#1A4FBF]" />
            <div>
              <div className="text-sm text-[#64748B]">Total Clientes</div>
              <div className="text-2xl font-bold text-[#1E293B]">{clientsWithStats.length}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-sm text-[#64748B]">Con Pedidos</div>
              <div className="text-2xl font-bold text-[#1E293B]">
                {clientsWithStats.filter((c) => c.stats.totalOrders > 0).length}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Euro className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-sm text-[#64748B]">Ingresos Totales</div>
              <div className="text-2xl font-bold text-[#1E293B]">
                {(
                  clientsWithStats.reduce((sum, c) => sum + c.stats.totalSpent, 0) / 100
                ).toFixed(0)}{" "}
                €
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <Calendar className="h-8 w-8 text-amber-600" />
            <div>
              <div className="text-sm text-[#64748B]">Nuevos (7 días)</div>
              <div className="text-2xl font-bold text-[#1E293B]">{newClientsLast7Days}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="mb-6 rounded-xl bg-white p-4 shadow ring-1 ring-slate-200">
        <form method="get" className="flex flex-wrap gap-4">
          {/* Búsqueda */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                name="search"
                defaultValue={search || ""}
                placeholder="Buscar por nombre o email..."
                className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </div>
          </div>

          {/* Filtro por servicio */}
          <div className="w-full sm:w-64">
            <select
              name="servicio"
              defaultValue={servicio || ""}
              className="w-full rounded-lg border border-slate-300 py-2 px-4 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            >
              <option value="">Todos los servicios</option>
              {allServices?.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#1A4FBF] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
          >
            Filtrar
          </button>

          {(search || servicio) && (
            <Link
              href="/admin/clientes"
              className="rounded-lg border border-slate-300 px-6 py-2 text-sm font-semibold text-[#1E293B] transition hover:bg-slate-50"
            >
              Limpiar
            </Link>
          )}
        </form>
      </div>

      {/* Lista de clientes */}
      {!filteredClients.length ? (
        <div className="rounded-xl bg-white p-12 text-center shadow ring-1 ring-slate-200">
          <Users className="mx-auto h-16 w-16 text-[#64748B]" />
          <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">No se encontraron clientes</h3>
          <p className="mt-2 text-sm text-[#64748B]">
            {search || servicio ? "Intenta cambiar los filtros" : "No hay clientes registrados"}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Info básica */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-[#1E293B]">
                      {client.full_name || "Sin nombre"}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#64748B]">
                      {client.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {client.email}
                        </span>
                      )}
                      {client.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {client.phone}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Registrado: {new Date(client.created_at).toLocaleDateString("es-ES")}
                      </span>
                    </div>
                  </div>

                  {/* Stats del cliente */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="text-xs text-[#64748B]">Pedidos</div>
                        <div className="font-semibold text-[#1E293B]">
                          {client.stats.totalOrders} total
                          {client.stats.completedOrders > 0 &&
                            ` (${client.stats.completedOrders} completados)`}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Euro className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="text-xs text-[#64748B]">Total Gastado</div>
                        <div className="font-semibold text-[#1E293B]">
                          {(client.stats.totalSpent / 100).toFixed(2)} €
                        </div>
                      </div>
                    </div>

                    {client.stats.lastOrder && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-amber-600" />
                        <div>
                          <div className="text-xs text-[#64748B]">Último Pedido</div>
                          <div className="font-semibold text-[#1E293B]">
                            {new Date(client.stats.lastOrder.created_at).toLocaleDateString("es-ES")}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Servicios contratados */}
                  {client.stats.services.length > 0 && (
                    <div className="mt-4">
                      <div className="mb-2 text-xs font-semibold text-[#64748B]">
                        SERVICIOS CONTRATADOS:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {client.stats.services.map((service: string, idx: number) => (
                          <span
                            key={idx}
                            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Acciones */}
                <div className="ml-4 flex flex-col gap-2">
                  <Link
                    href={`/admin/clientes/${client.id}`}
                    className="whitespace-nowrap rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
                  >
                    Ver Detalles →
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
