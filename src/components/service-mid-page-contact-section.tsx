import { MessageCircle, Phone } from "lucide-react";
import { WhatsAppLeadButton } from "@/components/whatsapp-lead-button";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { ServiceInfoRequestForm } from "@/components/service-info-request-form";
import type { WhatsAppNeedType } from "@/lib/whatsapp-prefill";

type ServiceMidPageContactSectionProps = {
  serviceLabel: string;
  needType?: WhatsAppNeedType;
  city?: string;
  placement?: string;
};

/**
 * Punto de contacto a mitad de página: WhatsApp con modal, teléfono y formulario ligero.
 */
export function ServiceMidPageContactSection({
  serviceLabel,
  needType,
  city,
  placement = "mid_page_contact",
}: ServiceMidPageContactSectionProps) {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-[#F8FAFC] p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B]">¿Aún tienes dudas?</h2>
              <p className="mt-3 leading-relaxed text-[#475569]">
                Cuéntanos tu caso por WhatsApp o pide que te llamemos — sin coste ni compromiso.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WhatsAppLeadButton
                  placement={`${placement}_whatsapp`}
                  serviceLabel={serviceLabel}
                  needType={needType}
                  city={city}
                  mode="modal"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Escribir por WhatsApp
                </WhatsAppLeadButton>
                <a
                  href={getContactPhoneTelHref()}
                  data-analytics-placement={`${placement}_phone`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1A4FBF] px-6 py-3 text-sm font-semibold text-[#1A4FBF] transition hover:bg-[#1A4FBF]/5"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Llamar: {getContactPhoneDisplay()}
                </a>
              </div>
            </div>
            <ServiceInfoRequestForm serviceLabel={serviceLabel} analyticsSource={`${placement}_form`} />
          </div>
        </div>
      </div>
    </section>
  );
}
