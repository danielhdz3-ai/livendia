import { LegalDraftNote } from "@/components/legal-draft-note";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false },
};

export default function PrivacidadPage() {
  const legal = getBusinessLegalIdentity();

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-[#1E293B]">Política de privacidad</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#475569]">
            <LegalDraftNote />
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Responsable del tratamiento</h2>
              <p className="mt-2">
                <strong>{legal.legalName}</strong>
                {legal.addressLine ? <> ({legal.addressLine})</> : null} — contacto:{" "}
                <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
                  {legal.email}
                </a>
                , tel.{" "}
                <a href={legal.phoneTel} className="font-semibold text-[#1A4FBF] hover:underline">
                  {legal.phoneDisplay}
                </a>
                — es responsable del tratamiento de los datos personales recabados a través de este sitio, formularios
                y relación contractual con clientes.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Finalidades y base legal</h2>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Gestión de consultas (formulario de contacto): interés legítimo y, en su caso, consentimiento.</li>
                <li>
                  Prestación de servicios contratados y facturación: ejecución contractual y obligaciones legales.
                </li>
                <li>Alta como usuario y área privada: ejecución contractual y consentimiento en lo necesario.</li>
                <li>
                  Envío de comunicaciones sobre el servicio contratado: ejecución contractual. Comunicaciones
                  comerciales, solo con consentimiento expreso o conforme a reglamento aplicable.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Conservación</h2>
              <p className="mt-2">
                Los datos se conservarán el tiempo necesario para las finalidades indicadas y los plazos legales
                aplicables (por ejemplo, obligaciones contables o prescripción).
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Destinatarios y encargados</h2>
              <p className="mt-2">
                Pueden tener acceso a los datos proveedores de infraestructura tecnológica (p. ej. alojamiento,
                correo electrónico, pasarela de pago) en calidad de encargados del tratamiento, con contrato o
                condiciones conforme al RGPD. No se prevén cesiones salvo obligación legal.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Derechos</h2>
              <p className="mt-2">
                Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y
                portabilidad cuando correspondan, y reclamar ante la autoridad de control (p. ej. AEPD en España)
                escribiendo al responsable con referencia “Protección de datos”.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
