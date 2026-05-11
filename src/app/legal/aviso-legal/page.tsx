import { LegalDraftNote } from "@/components/legal-draft-note";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal — Livendia",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-[#1E293B]">Aviso legal</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#475569]">
            <LegalDraftNote />
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Datos identificativos</h2>
              <p className="mt-2">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de
                la información y de comercio electrónico, se informa de que el titular del sitio web es Livendia
                (datos societarios, domicilio fiscal y CIF/NIF a completar). Correo de contacto: a través del
                formulario en la web o del correo indicado como canal oficial cuando esté publicado.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Objeto</h2>
              <p className="mt-2">
                Este sitio tiene por objeto informar sobre servicios de gestoría y administración inmobiliaria,
                así como permitir la contratación y gestión de expedientes de clientes. La información publicada
                tiene carácter general y no sustituye asesoramiento personalizado.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Propiedad intelectual</h2>
              <p className="mt-2">
                Los contenidos, diseño, logotipos y código del sitio están protegidos por la normativa vigente.
                Queda prohibida su reproducción o uso sin autorización expresa.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-[#1E293B]">Exclusión de responsabilidad</h2>
              <p className="mt-2">
                Se excluye toda responsabilidad derivada de la información mal utilizada o de enlaces a sitios
                de terceros. El uso de la web implica la aceptación de este aviso en su versión publicada en cada
                momento.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
