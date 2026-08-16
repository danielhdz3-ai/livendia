import { LegalDraftNote } from "@/components/legal-draft-note";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Datos identificativos y condiciones de uso del sitio web de Livendia, gestoría inmobiliaria online.",
  alternates: { canonical: "https://livendia.com/legal/aviso-legal" },
};

export default function AvisoLegalPage() {
  const legal = getBusinessLegalIdentity();

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
              <ul className="mt-3 list-none space-y-2">
                <li>
                  <strong>Titular:</strong> {legal.legalName}
                </li>
                {legal.taxId ? (
                  <li>
                    <strong>CIF/NIF:</strong> {legal.taxId}
                  </li>
                ) : null}
                {legal.addressLine ? (
                  <li>
                    <strong>Domicilio:</strong> {legal.addressLine}
                  </li>
                ) : null}
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
                    {legal.email}
                  </a>
                </li>
                <li>
                  <strong>Teléfono:</strong>{" "}
                  <a href={legal.phoneTel} className="font-semibold text-[#1A4FBF] hover:underline">
                    {legal.phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong>Actividad:</strong> Gestoría inmobiliaria online — contratos, compraventa y administración de
                  alquileres.
                </li>
              </ul>
              <p className="mt-3">
                Más información en{" "}
                <Link href="/equipo" className="font-semibold text-[#1A4FBF] hover:underline">
                  nuestro equipo
                </Link>{" "}
                y en{" "}
                <Link href="/contacto" className="font-semibold text-[#1A4FBF] hover:underline">
                  contacto
                </Link>
                .
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
