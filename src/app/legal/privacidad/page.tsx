import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { LEGAL_DATA_PROCESSORS } from "@/lib/legal-processors";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}/legal/privacidad`;

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en Livendia: responsable, finalidades, encargados, derechos y plazos de conservación (RGPD).",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  const legal = getBusinessLegalIdentity();

  return (
    <LegalPageShell
      title="Política de privacidad"
      intro="Última actualización: 4 de octubre de 2026. Esta política complementa el aviso legal y la política de cookies."
    >
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          <strong>{legal.legalName}</strong>
          {legal.taxId ? <> (NIF {legal.taxId})</> : null}
          {legal.addressLine ? <> — {legal.addressLine}</> : null}.
        </p>
        <p>
          Correo para protección de datos:{" "}
          <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.email}
          </a>{" "}
          (asunto recomendado: «Protección de datos»). Teléfono:{" "}
          <a href={legal.phoneTel} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.phoneDisplay}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Delegado de protección de datos">
        <p>
          Livendia no tiene obligación legal de designar DPO. Para cualquier cuestión relativa a privacidad utiliza el
          correo indicado en el apartado 1. Responderemos en el plazo máximo de un mes (prorrogable dos meses más si la
          solicitud es compleja, informándote previamente).
        </p>
      </LegalSection>

      <LegalSection title="3. Datos que tratamos">
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Identificación y contacto:</strong> nombre, email, teléfono, dirección postal cuando nos la facilites.
          </li>
          <li>
            <strong>Datos contractuales y de expediente:</strong> información sobre inmuebles, contratos, documentación
            aportada, historial de servicios contratados y comunicaciones relacionadas con la prestación.
          </li>
          <li>
            <strong>Datos de pago:</strong> Livendia no almacena números completos de tarjeta; Stripe procesa el cobro
            conforme a su política de privacidad.
          </li>
          <li>
            <strong>Datos técnicos:</strong> dirección IP, identificadores de dispositivo, logs de acceso al área privada
            y cookies (ver{" "}
            <Link href="/legal/cookies" className="font-semibold text-[#1A4FBF] hover:underline">
              política de cookies
            </Link>
            ).
          </li>
          <li>
            <strong>Datos de navegación (con consentimiento):</strong> páginas visitadas, origen de campaña y eventos
            agregados vía Google Analytics / Google Ads.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Finalidades y bases legales">
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Prestación de servicios de gestoría inmobiliaria</strong> (contratos, administración de alquiler,
            revisiones documentales, área de cliente): ejecución de contrato (art. 6.1.b RGPD).
          </li>
          <li>
            <strong>Gestión de consultas</strong> (formulario, email, WhatsApp, teléfono): medidas precontractuales a
            petición del interesado y, en su caso, interés legítimo en atender solicitudes (art. 6.1.b y 6.1.f).
          </li>
          <li>
            <strong>Facturación, contabilidad y obligaciones fiscales:</strong> cumplimiento de obligaciones legales
            (art. 6.1.c).
          </li>
          <li>
            <strong>Alta de usuario, autenticación y seguridad</strong> del panel: ejecución contractual e interés
            legítimo en proteger la plataforma (art. 6.1.b y 6.1.f).
          </li>
          <li>
            <strong>Comunicaciones operativas</strong> sobre tu expediente: ejecución contractual (art. 6.1.b).
          </li>
          <li>
            <strong>Comunicaciones comerciales</strong> sobre servicios similares: consentimiento (art. 6.1.a) o, si ya
            eres cliente, soft opt-in conforme a la LSSI cuando proceda; puedes oponerte en cualquier momento.
          </li>
          <li>
            <strong>Analítica web y medición publicitaria:</strong> consentimiento (art. 6.1.a) mediante banner de cookies
            y Consent Mode de Google.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Plazos de conservación">
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Datos de clientes y expedientes:</strong> durante la relación contractual y, posteriormente, hasta
            6 años por obligaciones contables, fiscales y responsabilidad civil profesional (prescripción general).
          </li>
          <li>
            <strong>Consultas no convertidas en contrato:</strong> hasta 12 meses desde la última interacción, salvo que
            solicites supresión antes.
          </li>
          <li>
            <strong>Facturas y documentación fiscal:</strong> 6 años (Ley General Tributaria).
          </li>
          <li>
            <strong>Logs de seguridad del área privada:</strong> hasta 12 meses, salvo incidente que exija conservación
            ampliada.
          </li>
          <li>
            <strong>Cookies analíticas/publicitarias:</strong> según duración indicada en la{" "}
            <Link href="/legal/cookies" className="font-semibold text-[#1A4FBF] hover:underline">
              política de cookies
            </Link>
            ; revocables en cualquier momento.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Encargados del tratamiento">
        <p>
          Contratamos proveedores que tratan datos por nuestra cuenta y bajo instrucciones documentadas (art. 28 RGPD):
        </p>
        <ul className="mt-3 space-y-4">
          {LEGAL_DATA_PROCESSORS.map((p) => (
            <li key={p.name} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <p className="font-semibold text-[#1E293B]">{p.name}</p>
              <p className="mt-1">{p.role}</p>
              <p className="mt-1 text-xs text-[#64748B]">
                Ubicación / transferencias: {p.location}. Finalidad: {p.purpose}.{" "}
                <a href={p.privacyUrl} className="text-[#1A4FBF] hover:underline" rel="noopener noreferrer" target="_blank">
                  Política de privacidad del proveedor
                </a>
                .
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          No vendemos datos personales. No cedemos datos a terceros salvo obligación legal, encargados indicados o cuando
          sea necesario para la prestación del servicio que hayas contratado (p. ej. coordinación con notaría o entidades
          que tú designes).
        </p>
      </LegalSection>

      <LegalSection title="7. Transferencias internacionales">
        <p>
          Algunos encargados (Supabase, Vercel, Resend, Google) pueden tratar datos en Estados Unidos u otros países fuera
          del Espacio Económico Europeo. Cuando procede, nos basamos en decisiones de adecuación, Cláusulas Contractuales
          Tipo aprobadas por la Comisión Europea y/o el Marco de Privacidad de Datos UE-EE. UU. (Data Privacy Framework),
          según el proveedor y su documentación vigente.
        </p>
      </LegalSection>

      <LegalSection title="8. Medidas de seguridad (art. 32 RGPD)">
        <p>Aplicamos medidas técnicas y organizativas proporcionadas al riesgo, entre ellas:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Cifrado en tránsito (HTTPS/TLS) en todo el sitio y área privada.</li>
          <li>Control de acceso basado en roles, autenticación segura y contraseñas almacenadas por el proveedor de auth.</li>
          <li>Aislamiento de datos por cliente en la base de datos (políticas RLS).</li>
          <li>Copias de seguridad y monitorización de infraestructura en Vercel/Supabase.</li>
          <li>Acceso restringido del personal a expedientes según necesidad de conocer.</li>
          <li>Contratos de encargo o condiciones de tratamiento con proveedores relevantes.</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Decisiones automatizadas y elaboración de perfiles">
        <p>
          Livendia <strong>no adopta decisiones basadas únicamente en tratamiento automatizado</strong> que produzcan
          efectos jurídicos o te afecten significativamente de modo similar. No elaboramos perfiles comerciales
          automatizados sobre clientes.
        </p>
        <p>
          Podemos utilizar herramientas informáticas de apoyo interno (p. ej. plantillas o asistencia en redacción) siempre
          con revisión humana por profesionales colegiados antes de entregar documentación vinculante al cliente. No
          sustituyen el criterio profesional ni constituyen asesoramiento sin intervención del gestor.
        </p>
      </LegalSection>

      <LegalSection title="10. Derechos del interesado">
        <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando correspondan:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Por email a{" "}
            <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
              {legal.email}
            </a>{" "}
            acreditando tu identidad.
          </li>
          <li>Plazo de respuesta: 1 mes desde la recepción (prorrogable 2 meses adicionales en casos complejos).</li>
        </ul>
        <p>
          Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la{" "}
          <a
            href="https://www.aepd.es"
            className="font-semibold text-[#1A4FBF] hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Agencia Española de Protección de Datos (AEPD)
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Menores">
        <p>
          Los servicios de Livendia están dirigidos a personas con capacidad legal para contratar. No recabamos
          intencionadamente datos de menores de 14 años. Si detectas un tratamiento indebido, contacta con nosotros para
          proceder a la supresión.
        </p>
      </LegalSection>

      <LegalSection title="12. Cambios">
        <p>
          Podemos actualizar esta política para reflejar cambios normativos o del servicio. Publicaremos la versión
          vigente en esta URL con fecha de revisión. Te informaremos de cambios sustanciales cuando sea legalmente
          exigible.
        </p>
      </LegalSection>

      <p className="text-xs text-[#64748B]">
        Documentos relacionados:{" "}
        <Link href="/legal/aviso-legal" className="text-[#1A4FBF] hover:underline">
          Aviso legal
        </Link>
        ,{" "}
        <Link href="/legal/cookies" className="text-[#1A4FBF] hover:underline">
          Cookies
        </Link>
        ,{" "}
        <Link href="/legal/condiciones" className="text-[#1A4FBF] hover:underline">
          Condiciones generales
        </Link>
        .
      </p>
    </LegalPageShell>
  );
}
