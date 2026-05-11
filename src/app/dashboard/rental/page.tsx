import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Users,
  FileText,
  DollarSign,
  Calendar,
  AlertTriangle,
  Plus,
  TrendingUp,
  TrendingDown,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  ArrowRight,
  Download,
  BarChart3,
} from "lucide-react";

export default async function RentalDashboardPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Fetch properties
  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", user.id);

  const property = properties?.[0]; // Por ahora tomamos la primera propiedad

  // Fetch active tenant
  const { data: tenants } = property
    ? await supabase
        .from("tenants")
        .select("*")
        .eq("property_id", property.id)
        .eq("is_active", true)
        .limit(1)
    : { data: null };

  const activeTenant = tenants?.[0];

  // Fetch recent payments
  const { data: payments } = property
    ? await supabase
        .from("rent_payments")
        .select("*")
        .eq("property_id", property.id)
        .order("payment_date", { ascending: false })
        .limit(6)
    : { data: [] };

  // Fetch expenses
  const { data: expenses } = property
    ? await supabase
        .from("property_expenses")
        .select("*")
        .eq("property_id", property.id)
        .order("expense_date", { ascending: false })
        .limit(10)
    : { data: [] };

  // Fetch incidents
  const { data: incidents } = property
    ? await supabase
        .from("incidents")
        .select("*")
        .eq("property_id", property.id)
        .order("created_at", { ascending: false })
        .limit(5)
    : { data: [] };

  // Calculate stats
  const totalIncome = payments?.reduce((sum, p) => p.status === "paid" ? sum + Number(p.amount) : sum, 0) ?? 0;
  const totalExpenses = expenses?.reduce((sum, e) => sum + Number(e.amount), 0) ?? 0;
  const netProfit = totalIncome - totalExpenses;
  const pendingPayments = payments?.filter(p => p.status === "pending").length ?? 0;
  const openIncidents = incidents?.filter(i => i.status !== "resolved").length ?? 0;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#1E293B]">Administración de Alquiler</h1>
              <p className="mt-1 text-sm text-[#64748B]">
                Gestión completa de tu propiedad en alquiler
              </p>
            </div>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
            >
              <Home className="h-4 w-4" />
              <span>Panel general</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
        {!property ? (
          // No property yet - Setup wizard
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
              <Building2 className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-[#1E293B]">
              Configura tu primera propiedad
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              Para empezar a gestionar tu alquiler, necesitamos los datos de tu inmueble
            </p>
            <Link
              href="/dashboard/rental/properties/new"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            >
              <Plus className="h-4 w-4" />
              <span>Añadir propiedad</span>
            </Link>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <TrendingUp className="h-4 w-4" />
                  <span>Ingresos totales</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{totalIncome.toFixed(0)} €</div>
                <div className="mt-1 text-xs opacity-75">Este año</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <TrendingDown className="h-4 w-4" />
                  <span>Gastos totales</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{totalExpenses.toFixed(0)} €</div>
                <div className="mt-1 text-xs opacity-75">Este año</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <BarChart3 className="h-4 w-4" />
                  <span>Beneficio neto</span>
                </div>
                <div className="mt-2 text-3xl font-bold">
                  {netProfit >= 0 ? "+" : ""}{netProfit.toFixed(0)} €
                </div>
                <div className="mt-1 text-xs opacity-75">Rentabilidad</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Pendientes</span>
                </div>
                <div className="mt-2 text-3xl font-bold">{pendingPayments + openIncidents}</div>
                <div className="mt-1 text-xs opacity-75">
                  {pendingPayments} pagos, {openIncidents} incidencias
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left Column */}
              <div className="space-y-6 lg:col-span-2">
                {/* Property & Tenant Info */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Property Card */}
                  <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1E293B]">Inmueble</h3>
                      <Link
                        href={`/dashboard/rental/properties/${property.id}`}
                        className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="font-semibold text-[#1E293B]">{property.address}</div>
                      <div className="text-[#64748B]">
                        {property.property_type} • {property.rooms} hab. • {property.surface_m2} m²
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#64748B]">
                        <span>IBI: {property.ibi_annual}€/año</span>
                        <span>•</span>
                        <span>Comunidad: {property.community_fee_monthly}€/mes</span>
                      </div>
                    </div>
                  </div>

                  {/* Tenant Card */}
                  <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#1E293B]">Inquilino</h3>
                      {activeTenant && (
                        <Link
                          href={`/dashboard/rental/tenants/${activeTenant.id}`}
                          className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    {activeTenant ? (
                      <div className="space-y-2 text-sm">
                        <div className="font-semibold text-[#1E293B]">{activeTenant.full_name}</div>
                        <div className="text-[#64748B]">{activeTenant.phone}</div>
                        <div className="text-xs text-[#64748B]">
                          Renta: {activeTenant.monthly_rent}€/mes • Fianza: {activeTenant.deposit_amount}€
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-sm text-[#64748B]">Sin inquilino activo</p>
                        <Link
                          href="/dashboard/rental/tenants/new"
                          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#1A4FBF]"
                        >
                          <Plus className="h-3 w-3" />
                          <span>Añadir inquilino</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Payments Calendar */}
                <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1E293B]">Calendario de cobros</h3>
                    <Link
                      href="/dashboard/rental/payments"
                      className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                    >
                      Ver todos →
                    </Link>
                  </div>

                  {!payments?.length ? (
                    <p className="text-center text-sm text-[#64748B]">No hay pagos registrados</p>
                  ) : (
                    <div className="space-y-2">
                      {payments.slice(0, 5).map((payment) => (
                        <div
                          key={payment.id}
                          className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                        >
                          <div className="flex items-center gap-3">
                            {payment.status === "paid" ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : payment.status === "late" ? (
                              <XCircle className="h-5 w-5 text-red-600" />
                            ) : (
                              <Clock className="h-5 w-5 text-amber-600" />
                            )}
                            <div>
                              <div className="text-sm font-semibold text-[#1E293B]">
                                {new Date(payment.payment_date).toLocaleDateString("es-ES", {
                                  month: "long",
                                  year: "numeric",
                                })}
                              </div>
                              <div className="text-xs text-[#64748B]">
                                {payment.status === "paid"
                                  ? "Pagado"
                                  : payment.status === "late"
                                  ? "Impagado"
                                  : "Pendiente"}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-bold text-[#1A4FBF]">
                            {Number(payment.amount).toFixed(0)} €
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recent Expenses */}
                <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1E293B]">Gastos recientes</h3>
                    <Link
                      href="/dashboard/rental/expenses"
                      className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                    >
                      Ver todos →
                    </Link>
                  </div>

                  {!expenses?.length ? (
                    <p className="text-center text-sm text-[#64748B]">No hay gastos registrados</p>
                  ) : (
                    <div className="space-y-2">
                      {expenses.slice(0, 5).map((expense) => (
                        <div
                          key={expense.id}
                          className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                        >
                          <div>
                            <div className="text-sm font-semibold text-[#1E293B]">
                              {expense.expense_type}
                            </div>
                            <div className="text-xs text-[#64748B]">
                              {new Date(expense.expense_date).toLocaleDateString("es-ES")}
                              {expense.is_deductible && (
                                <span className="ml-2 text-green-600">• Deducible</span>
                              )}
                            </div>
                          </div>
                          <div className="text-sm font-bold text-red-600">
                            -{Number(expense.amount).toFixed(0)} €
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Incidents */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#1E293B]">Incidencias</h3>
                    <Link
                      href="/dashboard/rental/incidents"
                      className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
                    >
                      Ver todas →
                    </Link>
                  </div>

                  {!incidents?.length ? (
                    <div className="text-center">
                      <p className="text-sm text-[#64748B]">No hay incidencias</p>
                      <p className="mt-1 text-xs text-[#94A3B8]">¡Todo va bien! 🎉</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {incidents.map((incident) => {
                        const priorityColors: Record<string, string> = {
                          low: "bg-blue-100 text-blue-900",
                          medium: "bg-amber-100 text-amber-900",
                          high: "bg-orange-100 text-orange-900",
                          urgent: "bg-red-100 text-red-900",
                        };

                        return (
                          <div
                            key={incident.id}
                            className="rounded-xl border border-slate-200 p-4"
                          >
                            <div className="mb-2 flex items-start justify-between">
                              <h4 className="text-sm font-semibold text-[#1E293B]">
                                {incident.title}
                              </h4>
                              <span
                                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                                  priorityColors[incident.priority] || priorityColors.medium
                                }`}
                              >
                                {incident.priority}
                              </span>
                            </div>
                            <p className="text-xs text-[#64748B] line-clamp-2">
                              {incident.description}
                            </p>
                            <div className="mt-2 flex items-center justify-between text-xs text-[#64748B]">
                              <span>{incident.status}</span>
                              {incident.estimated_cost && (
                                <span className="font-semibold">~{incident.estimated_cost}€</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-6 text-white shadow-lg">
                  <h3 className="mb-4 text-lg font-bold">Acciones rápidas</h3>
                  <div className="space-y-2">
                    <Link
                      href="/dashboard/rental/expenses/new"
                      className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/30"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Registrar gasto</span>
                    </Link>
                    <Link
                      href="/dashboard/rental/incidents/new"
                      className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/30"
                    >
                      <AlertTriangle className="h-4 w-4" />
                      <span>Nueva incidencia</span>
                    </Link>
                    <button className="flex w-full items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/30">
                      <Download className="h-4 w-4" />
                      <span>Exportar informe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
