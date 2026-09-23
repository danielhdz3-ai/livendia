import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";
import { CONTRATO_ALQUILER_OPCION_COMPRA_FAQ } from "@/lib/contrato-alquiler-opcion-compra-content";

export const OPCION_COMPRA_REDACCION_MODULO = {
  eyebrow: "Servicio de redacción",
  title: "Livendia redacta tu contrato de alquiler con opción a compra",
  intro:
    "No es una plantilla genérica: un gestor inmobiliario recoge el arrendamiento LAU y el pacto de opción — precio de ejercicio, plazo, imputación de rentas e inventario — adaptado a lo que habéis negociado entre particulares.",
  bullets: [
    "Arrendamiento conforme a LAU con cláusulas de opción de compra",
    "Precio futuro, plazo para ejercer y qué pasa con las mensualidades",
    "Inventario del inmueble y contrato listo para firmar",
    "Asesoramiento sobre tanteo y derechos del inquilino",
  ] as const,
  imageSrc: "/images/contratos7.jpg",
  imageAlt: "Gestor Livendia redactando contrato de alquiler con opción a compra",
} as const;

export const OPCION_COMPRA_GESTOR_MODULO = {
  eyebrow: "Gestor experto",
  title: "Gestor experto redacta contrato de alquiler con opción a compra",
  intro:
    "Un gestor dedicado conoce tu expediente de principio a fin: valida datos del inmueble, contrasta el acuerdo entre propietario e inquilino y entrega un contrato profesional en 48-72 h laborables — 100 % online, sin comisión de agencia.",
  bullets: [
    "Contacto directo con tu gestor antes y durante la redacción",
    "Panel Livendia para subir DNI, escrituras o nota simple",
    "Explicación en castellano claro de cada cláusula sensible",
    "Coherencia entre alquiler y futura compraventa si se ejerce la opción",
  ] as const,
  imageSrc: "/images/gestoria3.jpg",
  imageAlt: "Gestor experto Livendia en contrato alquiler opción compra",
} as const;

export const OPCION_COMPRA_LOCAL_BASE_FAQ = CONTRATO_ALQUILER_OPCION_COMPRA_FAQ;

export function opcionCompraLocalPriceFaq(city: string) {
  return {
    question: `¿Cuánto cuesta redactar el contrato con opción a compra en ${city}?`,
    answer: `${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incluido. Incluye inventario, gestor dedicado y asesoramiento hasta la firma. Sin comisión de agencia.`,
  };
}
