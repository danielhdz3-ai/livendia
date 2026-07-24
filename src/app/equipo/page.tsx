import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { OfficeContactBanner } from "@/components/office-contact-banner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  CheckCircle,
  FileCheck,
  Monitor,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conoce al equipo y a los fundadores de Livendia: gestoría inmobiliaria digital en toda España. Abogados, gestores y API colegiados especializados en derecho inmobiliario.",
};

const founders = [
  {
    name: "Arnau Martí",
    role: "Socio fundador",
    credentials: ["Abogado colegiado (ICAB)", "Gestor administrativo colegiado", "Derecho inmobiliario"],
    image: "/images/fundador-arnau.png",
    imageAlt: "Arnau Martí, socio fundador de Livendia",
    seals: [
      {
        src: "/images/sello confianza/Logo-ICAB-2023-scaled.jpg",
        alt: "Il·lustre Col·legi de l'Advocacia de Barcelona (ICAB)",
      },
      {
        src: "/images/sello confianza/banner-consejo.jpg",
        alt: "Consejo General de Colegios de Gestores Administrativos de España",
      },
    ],
    paragraphs: [
      "Arnau Martí es abogado colegiado en el Il·lustre Col·legi de l'Advocacia de Barcelona (ICAB) y gestor administrativo colegiado, con especialización en derecho inmobiliario y en la gestión de operaciones entre particulares.",
      "Lleva más de una década acompañando compradores, vendedores e inversores en operaciones donde el detalle importa: contratos de arras con garantías bien calibradas, alquileres con cláusulas LAU ajustadas al caso real, compraventas con riesgos identificados antes de firmar y revisiones documentales cuando la operación ya está en marcha.",
      "En Livendia lidera el criterio jurídico del despacho: traduce la normativa en decisiones comprensibles, anticipa escenarios de conflicto y diseña procesos que protegen al cliente sin frenar la operación. Su enfoque combina rigor de despacho con cercanía de gestor: escucha antes de redactar, explica antes de firmar y no desaparece cuando la documentación se complica.",
    ],
  },
  {
    name: "Daniel Hernández",
    role: "Socio fundador",
    credentials: ["API colegiado", "Gestor administrativo", "+15 años en el sector inmobiliario"],
    image: "/images/fundador-daniel.png",
    imageAlt: "Daniel Hernández, socio fundador de Livendia",
    seals: [
      {
        src: "/images/sello confianza/api.jpg",
        alt: "Asociación Profesional Inmobiliaria (API)",
      },
      {
        src: "/images/sello confianza/banner-consejo.jpg",
        alt: "Consejo General de Colegios de Gestores Administrativos de España",
      },
    ],
    paragraphs: [
      "Daniel Hernández es Agente de la Propiedad Inmobiliaria (API) colegiado y gestor administrativo, con más de quince años de experiencia en compraventas, alquileres y tramitación inmobiliaria.",
      "Domina la redacción de contratos de alquiler y de compraventa, la preparación documental previa a la firma y el acompañamiento integral de compradores y vendedores: desde la revisión de garantías y plazos hasta la coordinación con notaría, registro, entidades financieras y terceros implicados en la operación.",
      "En Livendia aplica ese recorrido para que cada expediente avance con orden: documentación completa, cláusulas adaptadas al caso concreto y un interlocutor identificable que explica cada paso. Su objetivo es que compres o vendas con todas las garantías, sin sorpresas de última hora ni procesos a medias.",
    ],
  },
] as const;

const pillars = [
  {
    icon: Scale,
    title: "Derecho inmobiliario en el centro",
    description:
      "Arras, alquiler, compraventa y administración de alquiler exigen precisión jurídica y visión práctica. Nuestro trabajo es traducir el reglamento en decisiones claras para ti.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Monitor,
    title: "Digital, sin frialdad",
    description:
      "Herramientas ágiles, documentación ordenada y seguimiento en línea conviven con un trato cercano: hablas con personas, no con máquinas.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Gestores dedicados",
    description:
      "Cada proyecto tiene continuidad: quien empieza a conocerte no desaparece a mitad de camino. Acompañamos expedientes hasta el cierre con responsabilidad compartida.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: FileCheck,
    title: "Honorarios y plazos transparentes",
    description:
      "Sin letra pequeña creativa ni sorpresas de última hora. Informamos alcance, calendarios y siguiente paso para que puedas decidir con calma.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Formación permanente",
    description:
      "La normativa y el mercado cambian rápido; el equipo Livendia mantiene criterios actualizados para proteger tus intereses con conocimiento vigente.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Sparkles,
    title: "Pasión por el sector",
    description:
      "Somos uno de esos despachos en los que los lunes siguen mereciendo la pena: nos gusta resolver casos complejos y ver cerrar operaciones sin drama innecesario.",
    color: "from-purple-500 to-purple-600",
  },
];

const gallery = [
  {
    src: "/images/equipo1.jpg",
    title: "Rigor sin rigidez",
    caption:
      "Reuniones con tiempo para escuchar antes de pronunciar. Así ordenamos urgencias sin perder matices legales.",
  },
  {
    src: "/images/equipo2.jpg",
    title: "Trabajo en equipo",
    caption:
      "Varias miradas especializadas sobre tu expediente cuando hace falta: coordinación interna antes de llegar al cliente.",
  },
  {
    src: "/images/equipo4.jpg",
    title: "Cerca del día a día real",
    caption:
      "Documentos y formalidades tratados como lo que son: parte de tu vida, no papel acumulado en un cajón.",
  },
];

export default function EquipoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
              <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                  Nuestro equipo
                </div>

                <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-6xl xl:text-7xl">
                  Gestoría inmobiliaria digital con alma jurídica
                </h1>

                <p className="mt-6 text-xl leading-relaxed text-blue-50">
                  Livendia nace para unir{" "}
                  <strong className="font-semibold text-white">
                    tecnología útil y derecho inmobiliario serio
                  </strong>
                  . Somos un equipo joven, formado en la materia y apasionado por un sector donde cada operación marca un
                  antes y un después.
                </p>

                <p className="mt-4 max-w-xl text-lg leading-relaxed text-blue-100/95">
                  Redactamos, revisamos y acompañamos contratos pensando como despacho especializado — con el ritmo que
                  hoy exige cualquier ciudadano o inversor. Confianza, claridad y alguien al otro lado que entiende el
                  contexto, no solo el formulario.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-300" aria-hidden />
                    <span className="text-lg">Contratos pensados desde la práctica cotidiana entre particulares</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-300" aria-hidden />
                    <span className="text-lg">Seguimiento continuo desde el equipo que conoce tu caso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-cyan-300" aria-hidden />
                    <span className="text-lg">Mentalidad de gestoría moderna sin renunciar al detalle jurídico</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50"
                  >
                    Hablar con el equipo
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                  >
                    WhatsApp directo
                  </a>
                </div>
              </div>

              <div className="relative order-first h-[340px] sm:h-[420px] lg:order-none lg:h-auto lg:min-h-[520px]">
                <Image
                  src="/images/equipo3.jpg"
                  alt="Equipo Livendia — trabajo y cercanía en el día a día"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">Cómo entendemos nuestro trabajo</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                No solo completamos fichas: estudiamos riesgos, anticipamos preguntas y dejamos claro cada escenario antes
                de firmar un papel que te va a comprometer años.
              </p>
              <p className="mx-auto mt-3 text-sm font-medium text-[#475569]">
                Especialización, cercanía y criterio. Sin postureo jurídico innecesario.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-[#1A4FBF]"
                  >
                    <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-4`}>
                      <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-[#475569]">{item.description}</p>
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#1A4FBF]/5 to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">Tres instantes del despacho</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                Fotografías que resumen mejor que mil titulares qué esperar cuando Livendia entra en una operación
                contigo.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {gallery.map((item) => (
                <article
                  key={item.src}
                  className="group overflow-hidden rounded-2xl bg-slate-50 shadow-lg ring-1 ring-slate-200 transition hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#475569]">{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">Quiénes somos</p>
                <h2 className="mt-3 text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  Gestoría inmobiliaria digital en toda España
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
                  <p>
                    <strong className="text-[#1E293B]">Livendia</strong> nace para que comprar, vender o alquilar entre
                    particulares no implique ir a ciegas ni depender de una agencia tradicional. Somos una gestoría
                    inmobiliaria digital que une derecho inmobiliario, gestión administrativa y tecnología útil, con
                    cobertura en <strong className="text-[#1E293B]">toda España</strong>: el expediente se tramita online,
                    con gestor dedicado y seguimiento continuo, estés donde estés.
                  </p>
                  <p>
                    No somos un comparador ni un formulario automático. Detrás de cada operación hay profesionales
                    colegiados que conocen arras, alquiler, compraventa y administración de alquiler desde la práctica
                    diaria. Livendia existe porque vimos demasiadas operaciones mal cerradas: cláusulas genéricas, plazos
                    mal calculados o sorpresas en notaría que se podían haber evitado con criterio jurídico y trato
                    directo.
                  </p>
                  <p>
                    Nuestro compromiso es sencillo: precios publicados, gestor asignado, documentación ordenada y
                    explicaciones en lenguaje claro — sin letra pequeña creativa ni desaparecer a mitad de camino.
                  </p>
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Tramitación 100 % online en todo el territorio",
                    "Gestor inmobiliario dedicado a tu expediente",
                    "Precios fijos publicados, sin comisión de agencia",
                    "Profesionales colegiados con experiencia real",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#475569] sm:text-base">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200">
                <Image
                  src="/images/fundadores-oficina.png"
                  alt="Fundadores de Livendia en el despacho"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">Los fundadores</p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                Las personas detrás de Livendia
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                Dos perfiles complementarios — jurídico y tramitación inmobiliaria — que comparten el mismo objetivo:
                que tu operación cierre con garantías, claridad y alguien identificable al otro lado.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              {founders.map((founder) => (
                <article
                  key={founder.name}
                  className="overflow-hidden rounded-2xl bg-slate-50 shadow-lg ring-1 ring-slate-200"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1E3A8A]">
                    <Image
                      src={founder.image}
                      alt={founder.imageAlt}
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1E293B]">{founder.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">{founder.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {founder.credentials.map((credential) => (
                        <span
                          key={credential}
                          className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#475569] ring-1 ring-slate-200"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 space-y-4 leading-relaxed text-[#475569]">
                      {founder.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                    <div
                      className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8"
                      aria-label={`Sellos profesionales de ${founder.name}`}
                    >
                      {founder.seals.map((seal) => (
                        <Image
                          key={seal.src}
                          src={seal.src}
                          alt={seal.alt}
                          width={240}
                          height={108}
                          className="h-16 w-auto max-w-[11rem] object-contain sm:h-24 sm:max-w-[14rem]"
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">¿Hablamos de tu siguiente contrato?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">
              Ya sea una arras compleja, un alquiler con muchos matices o una compraventa que quieres blindar ante sorpresas,
              tienes detrás personas que llevan ese tipo de dossier día sí y día también.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105"
              >
                Ver servicios
                <CheckCircle className="h-6 w-6" aria-hidden />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold hover:bg-white/10"
              >
                Ir a contacto
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
                <span>Respuesta habitual en menos de un día laborable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
                <span>Honorarios comunicados antes de empezar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
                <span>Especialistas en vida real, no teoría despachada</span>
              </div>
            </div>
          </div>
        </section>

        <OfficeContactBanner />
      </main>

      <SiteFooter />
    </div>
  );
}
