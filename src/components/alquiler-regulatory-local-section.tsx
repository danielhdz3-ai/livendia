import type { AlquilerRegulatoryLocal } from "@/lib/administracion-alquiler-local-regulatory";
import { Scale } from "lucide-react";

type Props = {
  city: string;
  regulatory: AlquilerRegulatoryLocal;
};

export function AlquilerRegulatoryLocalSection({ city, regulatory }: Props) {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF]">
            <Scale className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              Normativa local del alquiler en {city}
            </h2>
            <p className="mt-2 text-sm text-[#64748b]">
              Referencia orientativa — verifica declaraciones de zona tensionada y organismos antes de renovar contrato.
            </p>
          </div>
        </div>
        <dl className="mt-8 space-y-6">
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Depósito de fianza</dt>
            <dd className="mt-1 text-[#475569]">
              <strong className="text-[#1E293B]">{regulatory.depositOrganism}.</strong> {regulatory.depositNote}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Zona de mercado tensionado</dt>
            <dd className="mt-1 text-[#475569]">{regulatory.tensionedZone}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Índice de referencia de renta</dt>
            <dd className="mt-1 text-[#475569]">{regulatory.rentIndex}</dd>
          </div>
          {regulatory.extraNote ? (
            <div>
              <dt className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Contexto de mercado</dt>
              <dd className="mt-1 text-[#475569]">{regulatory.extraNote}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </section>
  );
}
