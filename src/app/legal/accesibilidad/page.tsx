import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}/legal/accesibilidad`;

export const metadata: Metadata = {
  title: "Accesibilidad",
  description:
    "Compromiso de accesibilidad web de Livendia conforme al Real Decreto 1112/2018: medidas adoptadas, limitaciones conocidas y canal de contacto.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function AccesibilidadPage() {
  const legal = getBusinessLegalIdentity();

  return (
    <LegalPageShell
      title="Declaración de accesibilidad"
      intro="Última revisión: 4 de octubre de 2026. Ámbito: sitio web livendia.com (portal público y área de cliente)."
    >
      <LegalSection title="1. Compromiso">
        <p>
          Livendia se compromete a hacer accesible su sitio web conforme al Real Decreto 1112/2018, de 7 de septiembre,
          sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público, en la medida
          en que resulte aplicable a prestadores de servicios al público a través de medios electrónicos, y siguiendo las
          pautas WCAG 2.1 nivel AA como referencia técnica.
        </p>
      </LegalSection>

      <LegalSection title="2. Medidas adoptadas">
        <ul className="list-inside list-disc space-y-2">
          <li>Estructura semántica de encabezados y landmarks en páginas principales.</li>
          <li>Textos alternativos en imágenes informativas relevantes.</li>
          <li>Contraste de color en componentes clave del diseño corporativo.</li>
          <li>Navegación por teclado en formularios, menús y botones principales.</li>
          <li>Etiquetas accesibles (aria-label) en botones icono como WhatsApp flotante.</li>
          <li>Diseño responsive para distintos tamaños de pantalla.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Limitaciones conocidas">
        <p>
          Estamos mejorando de forma continua. En la fecha de esta declaración pueden existir limitaciones como: algunos
          documentos PDF de terceros no accesibles, mapas embebidos con controles limitados por el proveedor, o contrastes
          puntuales en landings antiguas. Trabajamos para corregir incidencias detectadas.
        </p>
      </LegalSection>

      <LegalSection title="4. Preparación de la declaración">
        <p>
          Esta declaración se ha elaborado mediante autoevaluación interna y revisión de componentes principales del sitio.
          Última revisión significativa: octubre de 2026.
        </p>
      </LegalSection>

      <LegalSection title="5. Observaciones y contacto">
        <p>
          Si encuentras barreras de accesibilidad o necesitas información en un formato alternativo (p. ej. lectura
          asistida de un contenido concreto), contacta con:
        </p>
        <ul className="list-none space-y-2">
          <li>
            Email:{" "}
            <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
              {legal.email}
            </a>{" "}
            (asunto: «Accesibilidad web»)
          </li>
          <li>
            Teléfono:{" "}
            <a href={legal.phoneTel} className="font-semibold text-[#1A4FBF] hover:underline">
              {legal.phoneDisplay}
            </a>
          </li>
        </ul>
        <p>Responderemos en un plazo razonable, normalmente inferior a 20 días laborables.</p>
      </LegalSection>

      <LegalSection title="6. Procedimiento de reclamación">
        <p>
          Si no recibes respuesta satisfactoria, puedes presentar reclamación ante la autoridad competente en materia de
          accesibilidad digital o acudir a las vías de consumo indicadas en el{" "}
          <Link href="/legal/aviso-legal" className="font-semibold text-[#1A4FBF] hover:underline">
            aviso legal
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
