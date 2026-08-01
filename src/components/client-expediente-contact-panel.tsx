import { BUSINESS_EMAIL, getWhatsAppHref } from "@/lib/business-nap";
import { Mail, MessageCircle, Upload } from "lucide-react";

type ClientExpedienteContactPanelProps = {
  serviceName: string;
  orderId: string;
  orderRef?: string;
};

function buildEmailSubject(serviceName: string, orderId: string): string {
  return `Documentación expediente · ${serviceName} · ${orderId.slice(0, 8)}`;
}

function buildWhatsAppPrefill(serviceName: string, orderId: string): string {
  return `Hola, soy cliente de Livendia. Tengo una consulta sobre mi expediente "${serviceName}" (ref. ${orderId.slice(0, 8)}).`;
}

export function ClientExpedienteContactPanel({
  serviceName,
  orderId,
}: ClientExpedienteContactPanelProps) {
  const mailSubject = buildEmailSubject(serviceName, orderId);
  const mailHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(mailSubject)}`;
  const waHref = getWhatsAppHref(buildWhatsAppPrefill(serviceName, orderId));

  return (
    <section className="space-y-4" aria-labelledby="expediente-contact-heading">
      <div>
        <h2 id="expediente-contact-heading" className="text-base font-bold text-[#1E293B] sm:text-lg">
          Otras formas de enviar tu expediente
        </h2>
        <p className="mt-1 text-sm text-[#64748B]">
          Puedes subir los archivos aquí en el panel o, si lo prefieres, enviarlos por email. Tu gestor los
          incorporará al mismo expediente.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1A4FBF]/10 text-[#1A4FBF]">
            <Upload className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="mt-3 font-bold text-[#1E293B]">Subir en tu panel</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
            La forma más rápida: fotos, PDF o Word desde el móvil. Solo tú y Livendia tenéis acceso.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#475569]">
            <Mail className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="mt-3 font-bold text-[#1E293B]">Enviar por email</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
            Adjunta tus archivos a{" "}
            <a href={mailHref} className="font-semibold text-[#1A4FBF] hover:underline">
              {BUSINESS_EMAIL}
            </a>{" "}
            indicando tu nombre y el servicio contratado.
          </p>
          <a
            href={mailHref}
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#1A4FBF]/20 bg-[#EFF6FF] px-5 text-sm font-bold text-[#1A4FBF] hover:border-[#1A4FBF]/40"
          >
            Abrir email
          </a>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-[#128C7E] to-[#25D366] p-5 text-white shadow-lg sm:p-6">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
            <MessageCircle className="h-6 w-6" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold">Contactar con tu gestor por WhatsApp</h3>
            <p className="mt-1 text-sm leading-relaxed text-emerald-50">
              Dudas sobre qué documentación falta, plazos o el estado de tu trámite. Horario L–V, 9:00–19:30.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-placement="expediente_whatsapp"
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-base font-bold text-[#128C7E] shadow-md transition hover:bg-emerald-50 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              WhatsApp con gestor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
