import Link from "next/link";
import { ServiceGestorPlatformSection } from "@/components/service-gestor-platform-section";
import {
  buildGestoriaHubDigitalWorkflow,
  GESTORIA_DIGITAL_ONLINE_BULLETS,
  gestoriaRegionalDigitalNote,
} from "@/lib/gestoria-online-digital-content";
import { CheckCircle, CloudUpload, CreditCard, LayoutDashboard, MapPin } from "lucide-react";

type Props = {
  city: string;
  schemaAdministrativeArea: string;
  focus?: "all" | "alquiler" | "compraventa";
  primarySlug?: string;
};

const DIGITAL_CARDS = [
  {
    icon: LayoutDashboard,
    title: "Panel cliente 24/7",
    body: "Estado del trámite, documentos firmables y conversación con tu gestor en un solo lugar.",
  },
  {
    icon: CreditCard,
    title: "Pago online seguro",
    body: "Tarifas cerradas en la web; activas el servicio en minutos sin transferencias opacas.",
  },
  {
    icon: CloudUpload,
    title: "Expediente digital",
    body: "Subes nota simple, DNI, contratos previos o actas de comunidad cuando los tengas.",
  },
] as const;

export function GestoriaOnlineDigitalSection({
  city,
  schemaAdministrativeArea,
  focus = "all",
  primarySlug = "servicio-completo-compra",
}: Props) {
  const workflow = buildGestoriaHubDigitalWorkflow({ city, schemaAdministrativeArea, focus });
  const regionalNote = gestoriaRegionalDigitalNote(city, schemaAdministrativeArea);

  return (
    <div id="gestoria-online-digital" className="scroll-mt-24">
      <section className="border-b border-slate-200 bg-gradient-to-b from-[#EFF6FF] to-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Servicio digital en España</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            Gestoría inmobiliaria online en {city}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#64748b]">
            Livendia no es una gestoría administrativa de ventanilla: es gestoría{" "}
            <span className="font-semibold text-[#1E293B]">inmobiliaria</span>{" "}
            para particulares con trámite digital en {schemaAdministrativeArea} y el resto de zonas donde operamos.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {GESTORIA_DIGITAL_ONLINE_BULLETS.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-[#475569] sm:text-base">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {DIGITAL_CARDS.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <Icon className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-[#1E293B]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex gap-3 rounded-2xl border border-[#1A4FBF]/20 bg-[#F8FAFC] p-6 sm:items-start">
            <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-[#1A4FBF]" aria-hidden />
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#1A4FBF]">Tu zona en España</p>
              <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-base">{regionalNote}</p>
              <p className="mt-4 text-sm text-[#64748b]">
                <Link href="/login" className="font-semibold text-[#1A4FBF] hover:underline">
                  Accede al panel
                </Link>
                {" · "}
                <Link href="/gestoria" className="font-semibold text-[#1A4FBF] hover:underline">
                  Más ciudades con gestoría
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceGestorPlatformSection
        workflow={workflow}
        city={city}
        serviceLabel="Gestoría inmobiliaria"
        primarySlug={primarySlug}
        platformServiceKind={focus === "compraventa" ? "compra" : focus === "alquiler" ? "generic" : "generic"}
      />
    </div>
  );
}
