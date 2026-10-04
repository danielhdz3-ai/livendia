import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}/legal/aviso-legal`;

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Datos identificativos, habilitación profesional, condiciones de uso y resolución de conflictos del sitio web de Livendia, gestoría inmobiliaria online.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  const legal = getBusinessLegalIdentity();

  return (
    <LegalPageShell title="Aviso legal" intro="Última actualización: 4 de octubre de 2026.">
      <LegalSection title="1. Datos identificativos del titular">
        <ul className="list-none space-y-2">
          <li>
            <strong>Titular:</strong> {legal.legalName}
          </li>
          {legal.taxId ? (
            <li>
              <strong>NIF:</strong> {legal.taxId}
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
            <strong>Actividad:</strong> Gestoría inmobiliaria online — contratos, compraventa, administración de alquiler
            y servicios documentales entre particulares.
          </li>
          <li>
            <strong>Horario de atención:</strong> {legal.openingHours} (península).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Habilitación profesional">
        <p>
          Los servicios jurídicos y de gestión administrativa de Livendia son prestados por profesionales colegiados,
          entre ellos abogados colegiados en el Il·lustre Col·legi de l&apos;Advocacia de Barcelona (ICAB), gestores
          administrativos colegiados (Consejo General de Colegios de Gestores Administrativos de España) y Agentes de la
          Propiedad Inmobiliaria (API) colegiados, conforme a la normativa de cada colegio profesional.
        </p>
        <p>
          La actividad de gestoría administrativa se ejerce conforme al Real Decreto 881/2004, de 28 de mayo, y normativa
          autonómica aplicable. Livendia no sustituye la intervención de notaría, registro o administraciones públicas
          cuando la ley exija su participación.
        </p>
        <p>
          Más información sobre el equipo en{" "}
          <Link href="/equipo" className="font-semibold text-[#1A4FBF] hover:underline">
            /equipo
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. Seguro de responsabilidad civil">
        <p>
          Livendia mantiene, para la actividad profesional desarrollada, póliza de responsabilidad civil profesional
          acorde al volumen y naturaleza de los servicios prestados. Puedes solicitar acreditación escrita contactando con{" "}
          <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="4. Objeto del sitio web">
        <p>
          Este sitio informa sobre servicios de gestoría inmobiliaria, permite solicitar información, contratar servicios
          online, acceder al área de cliente y gestionar expedientes. La información publicada tiene carácter general y no
          constituye asesoramiento personalizado hasta que exista relación contractual y análisis del caso concreto.
        </p>
      </LegalSection>

      <LegalSection title="5. Condiciones de uso">
        <p>
          El acceso implica la aceptación del presente aviso, de la{" "}
          <Link href="/legal/privacidad" className="font-semibold text-[#1A4FBF] hover:underline">
            política de privacidad
          </Link>
          , de la{" "}
          <Link href="/legal/cookies" className="font-semibold text-[#1A4FBF] hover:underline">
            política de cookies
          </Link>{" "}
          y de las{" "}
          <Link href="/legal/condiciones" className="font-semibold text-[#1A4FBF] hover:underline">
            condiciones generales de contratación
          </Link>{" "}
          cuando contrates un servicio de pago.
        </p>
        <p>
          Te comprometes a usar el sitio de forma lícita, a no introducir malware, a no intentar acceder sin autorización
          a sistemas ajenos a tu cuenta y a facilitar datos veraces en formularios y expedientes.
        </p>
      </LegalSection>

      <LegalSection title="6. Propiedad intelectual e industrial">
        <p>
          Los contenidos, diseño, logotipos, textos, imágenes y código fuente del sitio son titularidad de Livendia o de
          terceros licenciantes. Queda prohibida su reproducción, distribución o transformación sin autorización expresa,
          salvo uso privado o citas con enlace a la fuente.
        </p>
      </LegalSection>

      <LegalSection title="7. Enlaces">
        <p>
          Los enlaces a sitios de terceros se ofrecen a título informativo. Livendia no controla ni asume responsabilidad
          por sus contenidos o políticas de privacidad.
        </p>
      </LegalSection>

      <LegalSection title="8. Exclusión y limitación de responsabilidad">
        <p>
          Livendia no garantiza la ausencia de interrupciones o errores técnicos del sitio, aunque trabaja para
          mantenerlo operativo. La responsabilidad por la prestación de servicios profesionales se rige por el contrato
          aplicable y la normativa deontológica de los colegios profesionales.
        </p>
      </LegalSection>

      <LegalSection title="9. Resolución de conflictos">
        <p>
          Como consumidor puedes acudir a la Junta Arbitral de Consumo de tu comunidad autónoma o utilizar la{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            className="font-semibold text-[#1A4FBF] hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            plataforma ODR de la Unión Europea
          </a>{" "}
          para reclamaciones online. Livendia no está obligada a participar en procedimientos de arbitraje de consumo
          salvo imperativo legal, pero atiende reclamaciones en{" "}
          <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.email}
          </a>{" "}
          con diligencia.
        </p>
      </LegalSection>

      <LegalSection title="10. Ley aplicable y jurisdicción">
        <p>
          Este aviso se rige por la legislación española. Para conflictos con consumidores, serán competentes los juzgados
          del domicilio del consumidor conforme a la normativa imperativa. Para clientes empresarios, las partes se someten
          a los juzgados de Barcelona, salvo fuero inderogable.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
