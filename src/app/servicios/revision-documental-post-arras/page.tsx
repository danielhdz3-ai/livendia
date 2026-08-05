import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import { REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL, resolveServicePriceLabel } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Phone,
  Building2,
  ClipboardCheck,
  Search,
  FileSearch,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: `Revisión documental post-arras — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
  description:
    `Verificación documental tras firmar arras y antes de escriturar: actas, derramas, ITE, nota registral y urbanismo. Informe PDF + llamada de veredicto. ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl.`,
  alternates: { canonical: `${getSiteUrl()}/servicios/revision-documental-post-arras` },
};

const INCLUDED = [
  "Revisión completa de contrato de arras",
  "Revisión completa de actas de comunidad (2 años)",
  "Verificación de derramas pendientes y extraordinarias",
  "Análisis del ITE (Inspección Técnica de Edificios)",
  "Obtención y revisión de nota registral actualizada",
  "Consulta de información urbanística y licencias",
  "Informe ejecutivo con hallazgos y recomendaciones",
  "Llamada de veredicto con gestor especializado",
  "Asesoramiento telefónico en cualquier momento",
  "Entrega en 3-5 días · Análisis en 48h · Formato PDF",
] as const;

export default async function RevisionDocumentalPostArrasPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "revision-documental-post-arras") ?? null;
  const priceLabel = resolveServicePriceLabel(service, REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL);

  const steps = [
    {
      icon: FileText,
      title: "Subes la documentación",
      description:
        "Desde tu panel Livendia aportas contrato de arras, actas de comunidad, ITE, nota registral y cualquier documento urbanístico que tengas.",
    },
    {
      icon: Search,
      title: "Análisis en 48 h",
      description:
        "Un gestor especializado revisa cargas, derramas, estado del edificio, cláusulas del contrato de arras y coherencia registral.",
    },
    {
      icon: ClipboardCheck,
      title: "Informe ejecutivo PDF",
      description:
        "Recibes un veredicto claro: hallazgos, riesgos detectados y recomendaciones antes de ir a notaría.",
    },
    {
      icon: Phone,
      title: "Llamada de veredicto + soporte",
      description:
        "Te explicamos el informe en una llamada y quedas con asesoramiento telefónico para despejar dudas hasta la escritura.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    Compraventa · Post-arras
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl">
                    Pack Revisión Documental post-arras
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">
                    Servicio integral de verificación documental tras firmar arras y antes de escriturar. Ideal
                    para compradores que quieren certeza total antes de la compra definitiva.
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar pack · {priceLabel}
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:h-[400px]">
                  <Image
                    src="/images/gestoria20.jpg"
                    alt="Gestor revisando documentación con lupa antes de la escritura"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">¿Qué incluye el pack?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                Tú aportas la documentación; nosotros la auditamos y te emitimos un veredicto profesional antes
                de la escritura.
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <span className="text-sm font-medium text-[#1E293B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Cómo funciona</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="relative rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                        Paso {i + 1}
                      </span>
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A4FBF]/10">
                        <Icon className="h-6 w-6 text-[#1A4FBF]" />
                      </div>
                      <h3 className="mt-4 font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <Building2 className="h-8 w-8 text-[#1A4FBF]" />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Actas y comunidad</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Detectamos derramas aprobadas o pendientes, conflictos vecinales documentados y acuerdos que
                    puedan afectar al inmueble o a tu bolsillo.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <FileSearch className="h-8 w-8 text-[#1A4FBF]" />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Registro y urbanismo</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Nota registral actualizada, cargas, licencias y planeamiento: todo cruzado con lo pactado en
                    arras antes de comprometer el resto del precio.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <Shield className="h-8 w-8 text-[#1A4FBF]" />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Veredicto claro</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    No te quedas solo con un PDF: llamada de veredicto y línea abierta para dudas hasta que
                    decidas si firmar escritura con tranquilidad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-10 w-10 shrink-0 text-amber-700" />
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">¿Para quién es este pack?</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  Para compradores que <strong>ya han firmado arras</strong> y disponen de documentación del
                  inmueble. Si aún no has llegado a arras, valora el{" "}
                  <Link href="/servicios/acompanamiento-reserva-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                    acompañamiento reserva-arras (424 €)
                  </Link>{" "}
                  o el{" "}
                  <Link href="/servicios/servicio-completo-compra" className="font-semibold text-[#1A4FBF] hover:underline">
                    servicio completo hasta escritura (890 €)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <Clock className="mx-auto h-10 w-10 text-cyan-200" />
              <h2 className="mt-4 text-3xl font-bold">Firma escritura con certeza</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata el pack, sube tu documentación y recibe informe + llamada de veredicto en 3-5 días
                laborables.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <Link
                  href="/servicios"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          </section>
        </main>
        <ClientPlatformShowcase />

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
