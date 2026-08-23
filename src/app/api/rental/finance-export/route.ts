import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess } from "@/lib/rental-api-auth";
import { EXPENSE_TYPE_LABELS, RENT_PAYMENT_STATUS_LABELS } from "@/lib/rental-finance-labels";
import { NextResponse } from "next/server";

function escapeCsv(value: string | number | null | undefined): string {
  const s = String(value ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function buildCsv(rows: string[][]): string {
  return rows.map((r) => r.map(escapeCsv).join(",")).join("\n");
}

function buildHtmlReport(input: {
  propertyAddress: string;
  year: number;
  monthLabel: string;
  payments: Array<{ date: string; amount: number; status: string; method: string | null }>;
  expenses: Array<{ date: string; type: string; amount: number; description: string | null }>;
  totalRent: number;
  totalExpenses: number;
}): string {
  const balance = input.totalRent - input.totalExpenses;
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <title>Informe ${input.monthLabel} — ${input.propertyAddress}</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; color: #1e293b; }
    h1 { font-size: 1.5rem; }
    table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
    th, td { border: 1px solid #e2e8f0; padding: 8px; text-align: left; font-size: 14px; }
    th { background: #f1f5f9; }
    .summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0; }
    .card { background: #f8fafc; padding: 1rem; border-radius: 8px; }
    .card strong { display: block; font-size: 1.25rem; margin-top: 4px; }
    @media print { body { margin: 0; } }
  </style>
</head>
<body>
  <h1>Informe financiero — ${input.monthLabel}</h1>
  <p><strong>Inmueble:</strong> ${input.propertyAddress}</p>
  <p><strong>Generado:</strong> ${new Date().toLocaleString("es-ES")}</p>
  <div class="summary">
    <div class="card"><span>Rentas cobradas</span><strong>${input.totalRent.toFixed(2)} €</strong></div>
    <div class="card"><span>Gastos</span><strong>${input.totalExpenses.toFixed(2)} €</strong></div>
    <div class="card"><span>Balance</span><strong>${balance.toFixed(2)} €</strong></div>
  </div>
  <h2>Pagos de renta</h2>
  <table><thead><tr><th>Fecha</th><th>Importe</th><th>Estado</th><th>Método</th></tr></thead><tbody>
  ${input.payments.map((p) => `<tr><td>${p.date}</td><td>${p.amount.toFixed(2)} €</td><td>${RENT_PAYMENT_STATUS_LABELS[p.status] ?? p.status}</td><td>${p.method ?? "—"}</td></tr>`).join("")}
  </tbody></table>
  <h2>Gastos del inmueble</h2>
  <table><thead><tr><th>Fecha</th><th>Tipo</th><th>Importe</th><th>Descripción</th></tr></thead><tbody>
  ${input.expenses.map((e) => `<tr><td>${e.date}</td><td>${EXPENSE_TYPE_LABELS[e.type] ?? e.type}</td><td>${e.amount.toFixed(2)} €</td><td>${e.description ?? "—"}</td></tr>`).join("")}
  </tbody></table>
  <p style="margin-top:2rem;font-size:12px;color:#64748b;">Livendia — Administración de alquiler. Imprime esta página como PDF desde el navegador.</p>
</body>
</html>`;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get("propertyId")?.trim();
    const format = searchParams.get("format")?.trim() ?? "csv";
    const yearParam = searchParams.get("year");
    const monthParam = searchParams.get("month");

    if (!propertyId) {
      return NextResponse.json({ error: "Falta propertyId" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    const { data: property } = await supabase
      .from("properties")
      .select("address")
      .eq("id", propertyId)
      .maybeSingle();

    const now = new Date();
    const year = yearParam ? Number(yearParam) : now.getFullYear();
    const month = monthParam ? Number(monthParam) : now.getMonth() + 1;
    const start = `${year}-${String(month).padStart(2, "0")}-01`;
    const endDate = new Date(year, month, 0);
    const end = `${year}-${String(month).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}`;

    const { data: payments } = await supabase
      .from("rent_payments")
      .select("payment_date, amount, status, payment_method")
      .eq("property_id", propertyId)
      .gte("payment_date", start)
      .lte("payment_date", end)
      .order("payment_date");

    const { data: expenses } = await supabase
      .from("property_expenses")
      .select("expense_date, expense_type, amount, description")
      .eq("property_id", propertyId)
      .gte("expense_date", start)
      .lte("expense_date", end)
      .order("expense_date");

    const paidPayments = (payments ?? []).filter((p) => p.status === "paid");
    const totalRent = paidPayments.reduce((s, p) => s + Number(p.amount), 0);
    const totalExpenses = (expenses ?? []).reduce((s, e) => s + Number(e.amount), 0);
    const monthLabel = new Date(year, month - 1, 1).toLocaleDateString("es-ES", {
      month: "long",
      year: "numeric",
    });
    const address = (property?.address as string) ?? "Inmueble";

    if (format === "html") {
      const html = buildHtmlReport({
        propertyAddress: address,
        year,
        monthLabel,
        payments: (payments ?? []).map((p) => ({
          date: p.payment_date as string,
          amount: Number(p.amount),
          status: p.status as string,
          method: p.payment_method as string | null,
        })),
        expenses: (expenses ?? []).map((e) => ({
          date: e.expense_date as string,
          type: e.expense_type as string,
          amount: Number(e.amount),
          description: e.description as string | null,
        })),
        totalRent,
        totalExpenses,
      });
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Content-Disposition": `inline; filename="informe-${year}-${month}.html"`,
        },
      });
    }

    const rows: string[][] = [
      ["Informe financiero", monthLabel, address],
      [],
      ["PAGOS DE RENTA"],
      ["Fecha", "Importe", "Estado", "Método"],
      ...(payments ?? []).map((p) => [
        p.payment_date as string,
        Number(p.amount).toFixed(2),
        RENT_PAYMENT_STATUS_LABELS[p.status as string] ?? (p.status as string),
        (p.payment_method as string) ?? "",
      ]),
      [],
      ["GASTOS"],
      ["Fecha", "Tipo", "Importe", "Descripción"],
      ...(expenses ?? []).map((e) => [
        e.expense_date as string,
        EXPENSE_TYPE_LABELS[e.expense_type as string] ?? (e.expense_type as string),
        Number(e.amount).toFixed(2),
        (e.description as string) ?? "",
      ]),
      [],
      ["Total rentas cobradas", totalRent.toFixed(2)],
      ["Total gastos", totalExpenses.toFixed(2)],
      ["Balance", (totalRent - totalExpenses).toFixed(2)],
    ];

    const csv = "\uFEFF" + buildCsv(rows);
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="informe-${year}-${String(month).padStart(2, "0")}.csv"`,
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
