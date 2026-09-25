import Image from "next/image";
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
};

function StepImageCard({
  step,
  city,
  priceLabel,
  imageOnLeft,
}: {
  step: VenderSinAgenciaProcessStep;
  city: string;
  priceLabel: string;
  imageOnLeft: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${imageOnLeft ? "" : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"}`}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#D4AF37]/20">
        <div className="relative aspect-[4/3]">
          <Image
            src={step.imageSrc}
            alt={step.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
          <div className="absolute right-4 top-4 rounded-xl bg-[#B8860B] px-3 py-2 text-center text-white shadow-md">
            <p className="text-[10px] font-bold uppercase tracking-wide">Incluido</p>
            <p className="text-lg font-extrabold leading-tight">{priceLabel}</p>
          </div>
        </div>
        <div className="border-t border-[#D4AF37]/15 bg-white px-5 py-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#B8860B]">
            Servicio completo venta · Livendia
          </p>
          <p className="mt-1 text-lg font-bold text-[#1E293B]">Paso {step.step}</p>
          <p className="mt-0.5 text-sm text-[#64748B]">
            {city} · 100 % online · gestor asignado
          </p>
        </div>
      </div>

      <div>
        <span className="inline-block rounded-full bg-[#FFFBEB] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#92400E] ring-1 ring-[#D4AF37]/30">
          Paso {step.step}
        </span>
        <h3 className="mt-4 text-2xl font-extrabold leading-snug text-[#1E293B] sm:text-3xl">{step.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-[#475569]">{step.description}</p>

        <div className="mt-6 rounded-2xl bg-[#FFFBEB]/80 p-5 ring-1 ring-[#D4AF37]/25 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">Cómo lo hacemos</p>
          <ol className="mt-4 space-y-3">
            {step.howWeDoIt.map((line, i) => (
              <li key={line.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-[#475569]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#1E293B]">
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
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden strokeWidth={2.5} />
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
}: Props) {
  return (
    <section
      className="border-b border-[#D4AF37]/20 bg-[#FFFBF7] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="venta-sin-agencia-pasos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#B8860B]">{eyebrow}</p>
          <h2
            id="venta-sin-agencia-pasos-heading"
            className="mx-auto mt-3 max-w-4xl text-2xl font-extrabold text-[#1E293B] sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#64748B] sm:text-lg">{intro}</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#D4AF37]/40 bg-white px-6 py-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#92400E]">Tarifa plana · IVA incluido</p>
            <p className="text-3xl font-extrabold text-[#1E293B] sm:text-4xl">{priceLabel}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#64748B] sm:mt-0 sm:max-w-md sm:text-right">
            Sin comisión sobre el precio del piso. Trámite 100 % online con gestor real en {city}.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {steps.map((s) => (
            <span
              key={s.step}
              className="rounded-full border border-[#D4AF37]/50 bg-white px-4 py-2 text-sm font-semibold text-[#92400E]"
            >
              Paso {s.step}
            </span>
          ))}
          <span className="rounded-full border border-[#1A4FBF]/30 bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1A4FBF]">
            {alwaysWithYouTitle}
          </span>
        </div>

        <div className="mt-14 space-y-20 sm:space-y-24">
          {steps.map((step, index) => (
            <StepImageCard
              key={step.step}
              step={step}
              city={city}
              priceLabel={priceLabel}
              imageOnLeft={index % 2 === 0}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-6 py-8 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-100">{alwaysWithYouTitle}</p>
          <p className="mt-3 text-base leading-relaxed text-blue-50 sm:text-lg">{alwaysWithYouBody}</p>
        </div>
      </div>
    </section>
  );
}
