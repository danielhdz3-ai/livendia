import Image from "next/image";
import Link from "next/link";

const TUTORIAL_STEPS = [
  {
    step: 1,
    title: "Contratas y se abre tu expediente",
    body: "Tras el pago recibes acceso al área de cliente. Cada servicio tiene referencia única, estado y barra de progreso.",
    imageSrc: "/images/chicasofaazul.png",
    imageAlt: "Contratar servicio Livendia online",
  },
  {
    step: 2,
    title: "Subes documentación al panel",
    body: "PDF, Word o fotos desde móvil u ordenador. Nota simple, DNI, actas de comunidad o borrador de arras — todo en un solo lugar.",
    imageSrc: "/images/gestoria20.jpg",
    imageAlt: "Subir documentos al expediente Livendia",
  },
  {
    step: 3,
    title: "Tu gestor trabaja el trámite",
    body: "Revisión documental, redacción de contratos y actividad registrada en el historial del expediente (quién hizo qué y cuándo).",
    imageSrc: "/images/gestora2.jpg",
    imageAlt: "Gestor Livendia revisando expediente",
  },
  {
    step: 4,
    title: "Seguimiento hasta cerrar el servicio",
    body: "Ves próximos pasos, documentos validados y avances hasta escritura o entrega del contrato final.",
    imageSrc: "/images/firma11.jpg",
    imageAlt: "Cierre de operación inmobiliaria con Livendia",
  },
] as const;

type Props = {
  city?: string;
  serviceKind?: "compra" | "venta" | "generic";
};

export function ClientPlatformTutorialStrip({ city, serviceKind = "generic" }: Props) {
  const loc = city ? ` en ${city}` : "";
  const kindLabel =
    serviceKind === "compra"
      ? "compra"
      : serviceKind === "venta"
        ? "venta"
        : "trámite";

  return (
    <div className="mt-14 border-t border-slate-200 pt-12">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#1A4FBF]">Tutorial · área cliente</p>
        <h3 className="mt-2 text-xl font-extrabold text-[#1E293B] sm:text-2xl">
          Cómo funciona la plataforma Livendia{loc}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#64748B] sm:text-base">
          Gestoría con expediente digital: no es un formulario anónimo. Cada {kindLabel} deja trazabilidad en panel —
          documentos, progreso e historial de actividad.
        </p>
      </div>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TUTORIAL_STEPS.map((item) => (
          <li
            key={item.step}
            className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]/30"
          >
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" sizes="280px" />
              <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white shadow">
                {item.step}
              </span>
            </div>
            <div className="p-4">
              <p className="font-bold text-[#1E293B]">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#64748B] sm:text-sm">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <Image
              src="/images/livendia-fachada-azul.jpg"
              alt="Oficina Livendia"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Gestoría real</p>
            <p className="mt-1 text-sm leading-relaxed text-[#475569]">
              Co-gestores colegiados (ICAB, API, Consejo de Gestores). La plataforma es la herramienta; el criterio
              jurídico lo pone una persona con nombre en tu expediente.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-slate-100">
            <Image
              src="/images/contratos5.jpg"
              alt="Documentación inmobiliaria en Livendia"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Privacidad</p>
            <p className="mt-1 text-sm leading-relaxed text-[#475569]">
              Expediente privado por cliente. Solo tú y tu gestor asignado accedéis a la documentación de la operación.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center">
        <Link
          href="/login"
          className="inline-flex min-h-11 items-center rounded-full border border-[#1A4FBF]/30 bg-white px-6 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-[#EFF6FF]"
        >
          Acceder al área de cliente
        </Link>
      </p>
    </div>
  );
}
