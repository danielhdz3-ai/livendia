import { ContratarServicioButton } from "@/components/service-purchase-provider";
import {
  CONSULTA_FISCAL_FISCAL_KEYS,
  CONSULTA_FISCAL_PRICE_EXAMPLE_3_OWNERS,
  CONSULTA_FISCAL_PROCESS_STEPS,
} from "@/lib/consulta-fiscal-vendedor-landing";
import { CONSULTA_FISCAL_VENDEDOR_PATH, CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL } from "@/lib/catalog.public";
import { computeFiscalSellerEstimate } from "@/lib/fiscal-seller-calculator";
import { FISCAL_SELLER_PUBLIC_EXAMPLE_FIXTURE } from "@/lib/fiscal-seller-example-fixture";
import Link from "next/link";
import { Calculator, ClipboardCheck, FileUp, PhoneCall, ShieldCheck, FileText } from "lucide-react";

const STEP_ICONS = [ShieldCheck, FileUp, Calculator, ClipboardCheck, PhoneCall] as const;

export function ConsultaFiscalProcessSection() {
  return (
    <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6" aria-labelledby="cf-proceso-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="cf-proceso-heading" className="text-2xl font-bold text-[#1E293B]">
          Cómo funciona esta consulta
        </h2>
        <p className="mt-3 text-[#64748b]">
          Cinco pasos solo tributarios: sin gestión de comunidad, ITE ni redacción de arras. El cálculo lo hace el gestor con
          herramientas internas; no hay calculadora pública en la web.
        </p>
        <ol className="mt-10 space-y-6">
          {CONSULTA_FISCAL_PROCESS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? FileText;
            return (
              <li key={step.step} className="flex gap-4 rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF]/10">
                  <Icon className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#06B6D4]">Paso {step.step}</p>
                  <h3 className="mt-1 text-lg font-semibold text-[#1E293B]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#475569]">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function ConsultaFiscalKeysSection() {
  return (
    <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6" aria-labelledby="cf-claves-heading">
      <div className="mx-auto max-w-4xl">
        <h2 id="cf-claves-heading" className="text-2xl font-bold text-[#1E293B]">
          {CONSULTA_FISCAL_FISCAL_KEYS.title}
        </h2>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#475569]">
          {CONSULTA_FISCAL_FISCAL_KEYS.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A4FBF]" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-[#64748b]">{CONSULTA_FISCAL_FISCAL_KEYS.disclaimer}</p>
      </div>
    </section>
  );
}

export function ConsultaFiscalMemoriaExampleSection() {
  const result = computeFiscalSellerEstimate(FISCAL_SELLER_PUBLIC_EXAMPLE_FIXTURE);

  return (
    <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6" aria-labelledby="cf-memoria-heading">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#06B6D4]">Ejemplo con datos ficticios</p>
            <h2 id="cf-memoria-heading" className="mt-2 text-2xl font-bold text-[#1E293B]">
              Así es tu memoria
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              Piso en Barcelona, dos titulares al 50 %. Las cifras salen del mismo motor interno que usa el gestor; están
              rotuladas como ficticias y no sustituyen tu caso real.
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-slate-200">
                <dt className="text-xs font-semibold text-[#64748b]">Plusvalía orient.</dt>
                <dd className="mt-1 text-lg font-bold text-[#1E293B]">
                  {result.plusvalia.payable.toLocaleString("es-ES", { minimumFractionDigits: 2 })} €
                </dd>
              </div>
              <div className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-slate-200">
                <dt className="text-xs font-semibold text-[#64748b]">IRPF total orient.</dt>
                <dd className="mt-1 text-lg font-bold text-[#1E293B]">
                  {result.totalIrpf.toLocaleString("es-ES", { minimumFractionDigits: 2 })} €
                </dd>
              </div>
              <div className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-slate-200">
                <dt className="text-xs font-semibold text-[#64748b]">Líquido neto orient.</dt>
                <dd className="mt-1 text-lg font-bold text-[#1A4FBF]">
                  {result.netApprox.toLocaleString("es-ES", { minimumFractionDigits: 2 })} €
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-[#64748b]">
              Incluye resumen, plusvalía (doble método), IRPF por titular, escenarios, plazos y aviso legal. Sin coeficientes
              públicos hasta verificación BOE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${CONSULTA_FISCAL_VENDEDOR_PATH}/ejemplo-memoria`}
                className="inline-flex items-center gap-2 rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#153f9a]"
              >
                <FileText className="h-4 w-4" aria-hidden />
                Ver ejemplo de memoria (PDF)
              </Link>
              <ContratarServicioButton className="rounded-full border-2 border-[#1A4FBF] bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50">
                Contratar consulta ({CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL})
              </ContratarServicioButton>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-blue-50 p-6 shadow-inner ring-1 ring-slate-200">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-black text-[#1A4FBF]/10"
              aria-hidden
            >
              EJEMPLO
            </div>
            <div className="relative space-y-3 text-sm text-[#334155]">
              <p className="font-semibold text-[#1A4FBF]">Memoria tributaria orientativa</p>
              <p className="text-xs uppercase tracking-wide text-[#64748b]">Barcelona · 2 titulares ficticios</p>
              <div className="rounded-lg bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/80">
                <p className="font-medium">Resumen</p>
                <p className="mt-2 text-xs text-[#64748b]">Líquido neto orientativo tras impuestos estimados…</p>
              </div>
              <div className="rounded-lg bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/80">
                <p className="font-medium">Plusvalía · IRPF</p>
                <p className="mt-2 text-xs text-[#64748b]">Método objetivo vs real · Desglose por titular…</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#64748b]">{CONSULTA_FISCAL_PRICE_EXAMPLE_3_OWNERS}</p>
      </div>
    </section>
  );
}