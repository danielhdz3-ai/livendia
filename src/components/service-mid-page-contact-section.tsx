import { MessageCircle, Phone } from "lucide-react";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { ServiceInfoRequestForm } from "@/components/service-info-request-form";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const midPageWaHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

type ServiceMidPageContactSectionProps = {
  /** Ej. "Contrato de arras en Madrid" — se usa en el título y en el email de contexto. */
  serviceLabel: string;
};

/**
 * Punto de contacto adicional a mitad de página (tras FAQ / precio), distinto del
 * WhatsApp del hero y del CTA final. Combina WhatsApp + teléfono + el formulario
 * ligero de "pedir información" — alternativa a "Contratar" para quien no está
 * listo para pagar en el primer clic. No toca el flujo de checkout.
 */
export function ServiceMidPageContactSection({ serviceLabel }: ServiceMidPageContactSectionProps) {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-[#F8FAFC] p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B]">¿Aún tienes dudas?</h2>
              <p className="mt-3 leading-relaxed text-[#475569]">
                Habla ahora con un gestor por WhatsApp o pide que te llamemos nosotros — sin coste ni compromiso.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={midPageWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Escribir por WhatsApp
                </a>
                <a
                  href={getContactPhoneTelHref()}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A4FBF] px-6 py-3 text-sm font-semibold text-[#1A4FBF] transition hover:bg-[#1A4FBF]/5"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Llamar: {getContactPhoneDisplay()}
                </a>
              </div>
            </div>
            <ServiceInfoRequestForm serviceLabel={serviceLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
