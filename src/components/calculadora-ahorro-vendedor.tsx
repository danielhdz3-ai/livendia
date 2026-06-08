"use client";

import * as React from "react";
import { ContratarServicioButton } from "@/components/service-purchase-provider";
import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR,
} from "@/lib/catalog.public";

type Props = {
  city: string;
  precioMedio: number;
};

function formatEur(n: number): string {
  return `${Math.round(n).toLocaleString("es-ES")} €`;
}

const COMMISSION_PRESETS = [3, 4, 5] as const;

export function CalculadoraAhorroVendedor({ city, precioMedio }: Props) {
  const [price, setPrice] = React.useState(precioMedio);
  const [preset, setPreset] = React.useState<number | "custom">(3);
  const [customPct, setCustomPct] = React.useState(3);

  const commissionPct = preset === "custom" ? customPct : preset;
  const agencyFee = Math.round(price * (commissionPct / 100));
  const livendiaCost = LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR;
  const netSaving = agencyFee - livendiaCost;
  const positive = netSaving > 0;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="sale-price" className="block text-sm font-semibold text-[#1E293B]">
            Precio de venta del inmueble
          </label>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <input
              id="sale-price"
              type="range"
              min={80_000}
              max={1_200_000}
              step={5_000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="h-2 min-w-[200px] flex-1 cursor-pointer accent-[#1A4FBF]"
            />
            <input
              type="number"
              min={80_000}
              max={1_200_000}
              step={5_000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-36 rounded-lg border border-slate-200 px-3 py-2 text-right font-semibold text-[#1E293B]"
            />
          </div>
          <p className="mt-1 text-sm text-[#64748b]">{formatEur(price)}</p>
        </div>

        <div>
          <span className="block text-sm font-semibold text-[#1E293B]">Comisión de agencia estimada</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {COMMISSION_PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPreset(p)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  preset === p
                    ? "bg-[#1A4FBF] text-white"
                    : "bg-slate-100 text-[#475569] hover:bg-slate-200"
                }`}
              >
                {p} %
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPreset("custom")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                preset === "custom"
                  ? "bg-[#1A4FBF] text-white"
                  : "bg-slate-100 text-[#475569] hover:bg-slate-200"
              }`}
            >
              Personalizado
            </button>
          </div>
          {preset === "custom" ? (
            <input
              type="number"
              min={1}
              max={8}
              step={0.1}
              value={customPct}
              onChange={(e) => setCustomPct(Number(e.target.value))}
              className="mt-2 w-24 rounded-lg border border-slate-200 px-3 py-2 text-center"
              aria-label="Porcentaje personalizado"
            />
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Comisión agencia</p>
            <p className="mt-1 text-2xl font-bold text-[#1E293B]">{formatEur(agencyFee)}</p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">
              Livendia (arras {CONTRATO_ARRAS_LOCAL_PRICE_LABEL} + gestión {GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL})
            </p>
            <p className="mt-1 text-2xl font-bold text-[#1E293B]">{formatEur(livendiaCost)}</p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Tu ahorro neto</p>
            <p
              className={`mt-1 text-2xl font-bold ${positive ? "text-emerald-600" : "text-red-600"}`}
            >
              {formatEur(netSaving)}
            </p>
          </div>
        </div>

        <p className="text-[#475569]">
          {positive ? (
            <>
              En {city}, con un piso de {formatEur(price)}, te ahorras{" "}
              <strong className="text-[#1E293B]">{formatEur(netSaving)}</strong> respecto a pagar el{" "}
              {commissionPct} % a una agencia.
            </>
          ) : (
            <>
              Para este precio, la diferencia es mínima — la tranquilidad de tener gestor dedicado sigue
              valiendo la pena frente a improvisar 15-20 h de trámites.
            </>
          )}
        </p>

        <ContratarServicioButton className="inline-flex rounded-full bg-[#1A4FBF] px-8 py-4 text-base font-bold text-white hover:bg-[#1E3A8A]">
          Contratar gestor por {GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} →
        </ContratarServicioButton>
      </div>
    </div>
  );
}
