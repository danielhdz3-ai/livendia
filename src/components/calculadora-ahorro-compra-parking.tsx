"use client";

import * as React from "react";
import { ContratarServicioButton } from "@/components/service-purchase-provider";
import { ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_EUR } from "@/lib/catalog.public";

type Props = {
  city: string;
  precioMedio: number;
};

function formatEur(n: number): string {
  return `${Math.round(n).toLocaleString("es-ES")} €`;
}

const COMMISSION_PRESETS = [5, 8, 10] as const;
const FLAT_FEE_PRESETS = [600, 900, 1200] as const;

export function CalculadoraAhorroCompraParking({ city, precioMedio }: Props) {
  const [price, setPrice] = React.useState(precioMedio);
  const [mode, setMode] = React.useState<"percent" | "flat">("percent");
  const [preset, setPreset] = React.useState<number | "custom">(8);
  const [customPct, setCustomPct] = React.useState(8);
  const [flatFee, setFlatFee] = React.useState(900);

  const commissionPct = preset === "custom" ? customPct : preset;
  const agencyFee =
    mode === "percent" ? Math.round(price * (commissionPct / 100)) : flatFee;
  const livendiaCost = ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_EUR;
  const netSaving = agencyFee - livendiaCost;
  const positive = netSaving > 0;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="parking-price" className="block text-sm font-semibold text-[#1E293B]">
            Precio del parking o trastero
          </label>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <input
              id="parking-price"
              type="range"
              min={8_000}
              max={80_000}
              step={1_000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="h-2 min-w-[200px] flex-1 cursor-pointer accent-[#1A4FBF]"
            />
            <input
              type="number"
              min={8_000}
              max={80_000}
              step={1_000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-36 rounded-lg border border-slate-200 px-3 py-2 text-right font-semibold text-[#1E293B]"
            />
          </div>
          <p className="mt-1 text-sm text-[#64748b]">{formatEur(price)}</p>
        </div>

        <div>
          <span className="block text-sm font-semibold text-[#1E293B]">Honorarios de agencia estimados</span>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setMode("percent")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                mode === "percent" ? "bg-[#1A4FBF] text-white" : "bg-slate-100 text-[#475569] hover:bg-slate-200"
              }`}
            >
              Porcentaje
            </button>
            <button
              type="button"
              onClick={() => setMode("flat")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                mode === "flat" ? "bg-[#1A4FBF] text-white" : "bg-slate-100 text-[#475569] hover:bg-slate-200"
              }`}
            >
              Paquete fijo
            </button>
          </div>
          {mode === "percent" ? (
            <div className="mt-3 flex flex-wrap gap-2">
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
              {preset === "custom" ? (
                <input
                  type="number"
                  min={3}
                  max={15}
                  step={0.5}
                  value={customPct}
                  onChange={(e) => setCustomPct(Number(e.target.value))}
                  className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-center"
                  aria-label="Porcentaje personalizado"
                />
              ) : null}
            </div>
          ) : (
            <div className="mt-3 flex flex-wrap gap-2">
              {FLAT_FEE_PRESETS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFlatFee(f)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    flatFee === f
                      ? "bg-[#1A4FBF] text-white"
                      : "bg-slate-100 text-[#475569] hover:bg-slate-200"
                  }`}
                >
                  {formatEur(f)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Agencia / gestoría</p>
            <p className="mt-1 text-2xl font-bold text-[#1E293B]">{formatEur(agencyFee)}</p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Livendia (gestor integral)</p>
            <p className="mt-1 text-2xl font-bold text-[#1E293B]">{formatEur(livendiaCost)}</p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Tu ahorro neto</p>
            <p className={`mt-1 text-2xl font-bold ${positive ? "text-emerald-600" : "text-red-600"}`}>
              {formatEur(netSaving)}
            </p>
          </div>
        </div>

        <p className="text-[#475569]">
          {positive ? (
            <>
              En {city}, con un parking o trastero de {formatEur(price)}, te ahorras{" "}
              <strong className="text-[#1E293B]">{formatEur(netSaving)}</strong> respecto a delegar los trámites en
              una agencia.
            </>
          ) : (
            <>
              Para este precio la diferencia es pequeña, pero Livendia incluye gestor dedicado, ITP y registro sin
              improvisar 15–25 h de trámites.
            </>
          )}
        </p>

        <ContratarServicioButton className="inline-flex rounded-full bg-[#1A4FBF] px-8 py-4 text-base font-bold text-white hover:bg-[#1A4FBF]">
          Contratar gestor por {formatEur(livendiaCost)} →
        </ContratarServicioButton>
      </div>
    </div>
  );
}
