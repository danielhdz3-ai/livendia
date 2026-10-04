import { LegalPageShell, LegalSection } from "@/components/legal-page-shell";
import { getBusinessLegalIdentity } from "@/lib/business-legal";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}/legal/condiciones`;

export const metadata: Metadata = {
  title: "Condiciones generales de contratación",
  description:
    "Condiciones aplicables a la contratación online de servicios de gestoría inmobiliaria Livendia: precios, pago, área de cliente, obligaciones y derecho de desistimiento.",
  alternates: { canonical },
  robots: { index: true, follow: true },
};

export default function CondicionesPage() {
  const legal = getBusinessLegalIdentity();

  return (
    <LegalPageShell
      title="Condiciones generales de contratación"
      intro="Última actualización: 4 de octubre de 2026. Aplican a servicios contratados a través de livendia.com salvo condiciones particulares acordadas por escrito."
    >
      <LegalSection title="1. Identificación del prestador">
        <p>
          Prestador: <strong>{legal.legalName}</strong>
          {legal.taxId ? <> (NIF {legal.taxId})</> : null}. Contacto:{" "}
          <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.email}
          </a>
          , tel.{" "}
          <a href={legal.phoneTel} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.phoneDisplay}
          </a>
          . Datos completos en el{" "}
          <Link href="/legal/aviso-legal" className="font-semibold text-[#1A4FBF] hover:underline">
            aviso legal
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Ámbito y aceptación">
        <p>
          Estas condiciones regulan la contratación a distancia de servicios de gestoría inmobiliaria (redacción y
          revisión de contratos, administración de alquiler, packs documentales, suscripciones de administración, etc.)
          ofrecidos en la web. Al completar un pedido o suscripción confirmas que has leído y aceptas estas condiciones,
          la política de privacidad y, en su caso, condiciones específicas del producto mostradas en la ficha o checkout.
        </p>
      </LegalSection>

      <LegalSection title="3. Proceso de contratación">
        <ol className="list-inside list-decimal space-y-2">
          <li>Selección del servicio en /servicios o /precios.</li>
          <li>Revisión del precio, alcance indicado en la ficha y datos de facturación.</li>
          <li>Pago seguro mediante Stripe (tarjeta u otros medios habilitados).</li>
          <li>Confirmación por email y acceso al panel (/dashboard) para subir documentación y seguimiento.</li>
        </ol>
        <p className="mt-2">
          La contratación queda perfeccionada cuando el pago es aceptado y recibes confirmación. Livendia podrá rechazar
          pedidos por causas objetivas (incumplimiento legal, fraude, falta de datos imprescindibles).
        </p>
      </LegalSection>

      <LegalSection title="4. Precios, impuestos y facturación">
        <p>
          Los precios publicados incluyen IVA salvo indicación contraria. La factura se emite conforme a la normativa
          fiscal española con los datos que facilites en el checkout. Los precios pueden actualizarse en la web; el precio
          aplicable es el mostrado en el momento de confirmar el pago.
        </p>
      </LegalSection>

      <LegalSection title="5. Obligaciones del cliente">
        <ul className="list-inside list-disc space-y-2">
          <li>Facilitar información veraz, completa y actualizada sobre la operación y las partes implicadas.</li>
          <li>Entregar documentación en plazos razonables para cumplir los hitos del servicio.</li>
          <li>Revisar borradores y comunicar observaciones en tiempo útil antes de firmas o envíos a terceros.</li>
          <li>Mantener confidencialidad de credenciales de acceso al área privada.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Obligaciones de Livendia">
        <ul className="list-inside list-disc space-y-2">
          <li>Prestar el servicio contratado con la diligencia profesional exigible a gestores colegiados.</li>
          <li>Informar de alcance, plazos orientativos y limitaciones del servicio contratado.</li>
          <li>Tratar datos personales conforme al RGPD (ver política de privacidad).</li>
          <li>Ofrecer canal de contacto durante el horario publicado.</li>
        </ul>
        <p className="mt-2">
          Salvo pacto expreso en un servicio premium, Livendia no representa al cliente ante juzgados ni sustituye
          intervención notarial o registral obligatoria.
        </p>
      </LegalSection>

      <LegalSection title="7. Plazos de entrega">
        <p>
          Los plazos indicados en cada ficha (p. ej. 48–72 h laborables) son orientativos desde la recepción de la
          documentación completa y correcta. Si faltan datos, el plazo se suspende hasta su aportación.
        </p>
      </LegalSection>

      <LegalSection title="8. Suscripciones y administración de alquiler">
        <p>
          Los servicios recurrentes (administración de alquiler u otros abonos periódicos) se facturan según el ciclo
          indicado en checkout (mensual u otro). Puedes gestionar pagos y baja desde el panel o solicitándolo por email.
          La baja surte efecto al final del periodo ya abonado salvo impago o incumplimiento grave.
        </p>
      </LegalSection>

      <LegalSection title="9. Derecho de desistimiento">
        <p>
          Si actúas como consumidor en contratos a distancia, dispones de 14 días naturales para desistir sin necesidad
          de justificación, salvo excecciones legales. Detalle de supuestos, reembolsos y procedimiento en la{" "}
          <Link href="/legal/reembolsos" className="font-semibold text-[#1A4FBF] hover:underline">
            política de reembolsos y desistimiento
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="10. Garantías y reclamaciones">
        <p>
          Si el servicio entregado no se ajusta al alcance contratado por error imputable a Livendia, corrige o completa
          sin coste adicional razonable. Reclamaciones: {legal.email}, indicando número de pedido y descripción del
          problema. Responderemos en un plazo máximo de 30 días.
        </p>
      </LegalSection>

      <LegalSection title="11. Limitación de responsabilidad">
        <p>
          Livendia responde de los daños directos causados por incumplimiento imputable, dentro de los límites legales. No
          responde de decisiones unilaterales de terceros (bancos, registradores, administraciones), de información
          inexacta facilitada por el cliente ni de hechos ajenos a su esfera de control. Nada limita derechos
          imperativos del consumidor.
        </p>
      </LegalSection>

      <LegalSection title="12. Propiedad intelectual de entregables">
        <p>
          Los documentos elaborados para tu expediente se licencian para tu uso en la operación contratada. Livendia
          conserva derechos sobre metodologías, plantillas base y know-how interno. No está permitida la reventa masiva de
          plantillas o contenidos del sitio.
        </p>
      </LegalSection>

      <LegalSection title="13. Uso aceptable del servicio y del blog">
        <p>
          Queda prohibido usar la plataforma para actividades ilícitas, suplantación, spam o carga de malware. Los
          contenidos del blog son informativos; no habilitan uso comercial no autorizado de textos o imágenes.
        </p>
      </LegalSection>

      <LegalSection title="14. Modificaciones">
        <p>
          Podemos actualizar estas condiciones. La versión vigente estará publicada en esta URL. Para contratos en curso,
          aplican las condiciones aceptadas en la compra salvo cambio legal imperativo o mejora expresa comunicada.
        </p>
      </LegalSection>

      <LegalSection title="15. Ley y jurisdicción">
        <p>
          Legislación española. Consumidores: tribunales del domicilio del consumidor. Empresarios: juzgados de Barcelona,
          salvo norma imperativa en contrario.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
