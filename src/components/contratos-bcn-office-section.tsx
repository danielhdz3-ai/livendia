import { LivendiaReveal } from "@/components/livendia-reveal";
import { ContratosBcnDespachoBarrioNav } from "@/components/contratos-bcn-despacho-barrio-nav";
import { OfficeMap } from "@/components/office-map";
import { getContratosBcnOfficeContent } from "@/lib/contratos-bcn-office-barrio";
import type { ContratosInmobiliariosBarrioPage } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import {
  BUSINESS_EMAIL,
  BUSINESS_OPENING_HOURS,
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
} from "@/lib/business-nap";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { CalendarCheck, MapPin, Train } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

type Props = {
  /** Si se pasa, el copy del despacho se adapta al barrio (misma sede Les Corts). */
  barrio?: ContratosInmobiliariosBarrioPage | null;
  /** Hub Barcelona: muestra enlaces a #despacho de cada barrio. */
  showBarrioDespachoNav?: boolean;
};

export function ContratosBcnOfficeSection({ barrio = null, showBarrioDespachoNav = false }: Props) {
  const content = getContratosBcnOfficeContent(barrio);
  const address = getBusinessAddressDisplayLine();
  const mapsUrl = getBusinessMapsExternalUrl();
  const phoneDisplay = getContactPhoneDisplay();
  const phoneTel = getContactPhoneTelHref();
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(content.whatsAppPrefill)}`;

  return (
    <section
      id="despacho"
      className="scroll-mt-28 border-b border-slate-200 bg-gradient-to-b from-[#EFF6FF] to-white px-4 py-16 sm:px-6 lg:py-24"
      aria-labelledby="contratos-bcn-despacho-title"
    >
      <div className="mx-auto max-w-6xl">
        <LivendiaReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{content.eyebrow}</p>
              <h2 id="contratos-bcn-despacho-title" className="mt-3 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                {content.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#475569]">{content.lead}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{content.body}</p>

              <ul className="mt-8 space-y-4">
                {content.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#334155]">
                    <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="flex items-start gap-2 text-sm font-semibold text-[#1E293B]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#1A4FBF] hover:underline">
                    {address}
                  </a>
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-[#64748B]">
                  <Train className="h-4 w-4 shrink-0 text-[#06B6D4]" aria-hidden />
                  {content.transport}
                </p>
                <p className="mt-3 text-xs text-[#64748B]">
                  Horario despacho: L–V {BUSINESS_OPENING_HOURS.opens}–{BUSINESS_OPENING_HOURS.closes} ·{" "}
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="font-medium text-[#1A4FBF] hover:underline">
                    {BUSINESS_EMAIL}
                  </a>{" "}
                  ·{" "}
                  <a href={phoneTel} className="font-medium text-[#1A4FBF] hover:underline">
                    {phoneDisplay}
                  </a>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#2563EB]"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Reservar cita en el despacho
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center rounded-xl border border-[#1A4FBF]/30 bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] hover:bg-[#EFF6FF]"
                >
                  WhatsApp — pedir cita
                </a>
                <Link
                  href="/gestoria/les-corts"
                  className="inline-flex min-h-12 items-center text-sm font-semibold text-[#64748B] underline-offset-2 hover:text-[#1A4FBF] hover:underline"
                >
                  Gestoría en Les Corts →
                </Link>
              </div>

              {showBarrioDespachoNav ? <ContratosBcnDespachoBarrioNav /> : null}
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                <OfficeMap minHeightClassName="min-h-[280px] sm:min-h-[320px]" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
                <Image
                  src={content.sideImage}
                  alt={content.sideImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 560px"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </LivendiaReveal>
      </div>
    </section>
  );
}
