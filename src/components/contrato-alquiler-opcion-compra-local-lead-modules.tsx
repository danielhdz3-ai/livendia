import { ContratarSlugButton } from "@/components/service-purchase-provider";
import {
  OPCION_COMPRA_GESTOR_MODULO,
  OPCION_COMPRA_REDACCION_MODULO,
} from "@/lib/contrato-alquiler-opcion-compra-local-seo-content";
import { CheckCircle, FileSignature, UserCheck } from "lucide-react";
import Image from "next/image";

type Props = {
  placeLabel: string;
  priceLabel: string;
};

export function ContratoAlquilerOpcionCompraLocalLeadModules({ placeLabel, priceLabel }: Props) {
  const placeInTitle = placeLabel ? ` en ${placeLabel}` : "";

  return (
    <>
      <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              <FileSignature className="h-4 w-4" aria-hidden />
              {OPCION_COMPRA_REDACCION_MODULO.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {OPCION_COMPRA_REDACCION_MODULO.title}
              {placeInTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#64748b]">{OPCION_COMPRA_REDACCION_MODULO.intro}</p>
            <ul className="mt-6 space-y-3">
              {OPCION_COMPRA_REDACCION_MODULO.bullets.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-[#475569] sm:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <ContratarSlugButton
              slug="contrato-alquiler-opcion-compra"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A4FBF] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#153e9a]"
            >
              Contratar redacción · {priceLabel}
            </ContratarSlugButton>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
            <Image
              src={OPCION_COMPRA_REDACCION_MODULO.imageSrc}
              alt={OPCION_COMPRA_REDACCION_MODULO.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 lg:order-1">
            <Image
              src={OPCION_COMPRA_GESTOR_MODULO.imageSrc}
              alt={OPCION_COMPRA_GESTOR_MODULO.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              <UserCheck className="h-4 w-4" aria-hidden />
              {OPCION_COMPRA_GESTOR_MODULO.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              {OPCION_COMPRA_GESTOR_MODULO.title}
              {placeInTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#64748b]">{OPCION_COMPRA_GESTOR_MODULO.intro}</p>
            <ul className="mt-6 space-y-3">
              {OPCION_COMPRA_GESTOR_MODULO.bullets.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-[#475569] sm:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <ContratarSlugButton
              slug="contrato-alquiler-opcion-compra"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#1A4FBF] bg-white px-8 py-3.5 text-base font-bold text-[#1A4FBF] hover:bg-blue-50"
            >
              Hablar con gestor · {priceLabel}
            </ContratarSlugButton>
          </div>
        </div>
      </section>
    </>
  );
}
