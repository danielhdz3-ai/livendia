import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";

type Props = {
  city: string;
  priceLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  steps: readonly VenderSinAgenciaProcessStep[];
  alwaysWithYouTitle: string;
  alwaysWithYouBody: string;
  /** Etiqueta bajo la imagen de cada paso. */
  serviceLine?: string;
  /** Texto junto a la tarifa plana. */
  feeNote?: string;
  /**
   * Pasos: imágenes apaisadas sin recorte (contain). Cover solo si todas las fotos son 4:3 nativo.
   */
  stepImageObjectFit?: "contain" | "cover";
};

function StepImageCard({
  step,
  city,
  priceLabel,
  imageOnLeft,
  serviceLine,
  stepImageObjectFit,
}: {
  step: VenderSinAgenciaProcessStep;
  city: string;
  priceLabel: string;
  imageOnLeft: boolean;
  serviceLine: string;
  stepImageObjectFit: "contain" | "cover";
}) {
  const imageColOrder = imageOnLeft ? "lg:order-1" : "lg:order-2";
  const textColOrder = imageOnLeft ? "lg:order-2" : "lg:order-1";

  return (
    <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div
        className={`order-2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#1A4FBF]/15 ${imageColOrder}`}
      >
        <div className="relative aspect-[4/3] bg-[#E2E8F0] sm:aspect-[3/2] lg:aspect-[4/3]">
          <Image
            src={step.imageSrc}
            alt={step.imageAlt}
            fill
            quality={90}
            className={stepImageObjectFit === "contain" ? "object-contain object-center" : "object-cover object-center"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 480px"
          />
          <div className="absolute right-2 top-2 rounded-lg bg-[#1A4FBF]/90 px-2.5 py-1.5 text-center text-white shadow-md backdrop-blur-sm sm:right-4 sm:top-4 sm:rounded-xl sm:px-3 sm:py-2">
            <p className="text-[9px] font-bold uppercase tracking-wide sm:text-[10px]">Incluido</p>
            <p className="text-base font-extrabold leading-tight sm:text-lg">{priceLabel}</p>
          </div>
        </div>
        <div className="border-t border-[#1A4FBF]/10 bg-white px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A4FBF] sm:text-[11px]">{serviceLine}</p>
          <p className="mt-1 text-base font-bold text-[#1E293B] sm:text-lg">Paso {step.step}</p>
          <p className="mt-0.5 text-xs leading-snug text-[#64748B] sm:text-sm">
            {city} · 100 % online · gestor asignado
          </p>
        </div>
      </div>

      <div className={`order-1 min-w-0 ${textColOrder}`}>
        <span className="inline-block rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A4FBF] ring-1 ring-[#1A4FBF]/25">
          Paso {step.step}
        </span>
        <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#1E293B] sm:mt-4 sm:text-2xl lg:text-3xl">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:mt-4 sm:text-base">{step.description}</p>

        <div className="mt-5 rounded-2xl bg-[#EFF6FF]/70 p-4 ring-1 ring-[#1A4FBF]/15 sm:mt-6 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1A4FBF]">Cómo lo hacemos</p>
          <ol className="mt-4 space-y-3">
            {step.howWeDoIt.map((line, i) => (
              <li key={line.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-[#475569]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF]/15 text-xs font-bold text-[#1A4FBF]">
                  {i + 1}
                </span>
                <span className="pt-0.5">{line}</span>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-6 space-y-2.5">
          {step.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-[#475569]">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function VentaSinAgenciaPasoAPasoSection({
  city,
  priceLabel,
  eyebrow,
  title,
  intro,
  steps,
  alwaysWithYouTitle,
  alwaysWithYouBody,
  serviceLine = "Servicio completo venta · Livendia",
  feeNote,
  stepImageObjectFit = "contain",
}: Props) {
  const resolvedFeeNote =
    feeNote ??
    `Sin comisión sobre el precio del piso. Trámite 100 % online con gestor real en ${city}.`;
  return (
    <section
      className="border-b border-[#1A4FBF]/10 bg-[#F8FAFC] px-4 py-12 sm:px-6 sm:py-20"
      aria-labelledby="venta-sin-agencia-pasos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">{eyebrow}</p>
          <h2
            id="venta-sin-agencia-pasos-heading"
            className="mx-auto mt-3 max-w-4xl text-xl font-extrabold leading-snug text-[#1E293B] sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#64748B] sm:text-lg">{intro}</p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#1A4FBF]/25 bg-white px-4 py-4 shadow-sm sm:mt-10 sm:px-6 sm:py-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Tarifa plana · IVA incluido</p>
            <p className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl lg:text-4xl">{priceLabel}</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#64748B] sm:mt-0 sm:max-w-md sm:text-right">
            {resolvedFeeNote}
          </p>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {steps.map((s) => (
            <span
              key={s.step}
              className="shrink-0 rounded-full border border-[#1A4FBF]/30 bg-white px-3 py-1.5 text-xs font-semibold text-[#1A4FBF] sm:px-4 sm:py-2 sm:text-sm"
            >
              Paso {s.step}
            </span>
          ))}
          <span className="shrink-0 rounded-full border border-[#1A4FBF]/30 bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold text-[#1A4FBF] sm:px-4 sm:py-2 sm:text-sm">
            {alwaysWithYouTitle}
          </span>
        </div>

        <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-20 lg:space-y-24">
          {steps.map((step, index) => (
            <StepImageCard
              key={step.step}
              step={step}
              city={city}
              priceLabel={priceLabel}
              imageOnLeft={index % 2 === 0}
              serviceLine={serviceLine}
              stepImageObjectFit={stepImageObjectFit}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-6 py-8 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-100">{alwaysWithYouTitle}</p>
          <p className="mt-3 text-base leading-relaxed text-blue-50 sm:text-lg">{alwaysWithYouBody}</p>
          <p className="mt-6">
            <Link
              href="#plataforma-cliente"
              className="inline-flex min-h-11 items-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50"
            >
              Ver cómo funciona la plataforma
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
