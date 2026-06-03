import type { BlogCategory } from "@/lib/blog-types";
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";

export type BlogCategoryCta = {
  headline: string;
  subline: string;
  contratarHref: string;
  contratarLabel: string;
  infoHref: string;
  infoLabel: string;
  whatsappPrefill: string;
};

export function getCategoryCta(category: BlogCategory): BlogCategoryCta {
  switch (category) {
    case "alquiler":
      return {
        headline: "¿Necesitas un contrato de alquiler bien hecho?",
        subline: `Redacción o revisión LAU por gestores expertos. ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl., entrega 48–72 h.`,
        contratarHref: "/servicios/contrato-alquiler-lau",
        contratarLabel: "Contratar contrato LAU",
        infoHref: "/servicios/contrato-de-alquiler",
        infoLabel: "Guía de contratos de alquiler",
        whatsappPrefill: "Hola, leo el blog y necesito ayuda con un contrato de alquiler (LAU).",
      };
    case "compraventa":
      return {
        headline: "¿Vas a firmar arras o comprar vivienda?",
        subline: "Revisión profesional, arras penitenciales o confirmatorias y acompañamiento hasta escritura.",
        contratarHref: "/servicios/contrato-arras-penitenciales",
        contratarLabel: "Contratar contrato de arras",
        infoHref: "/servicios/contrato-de-arras",
        infoLabel: "Ver servicios de arras",
        whatsappPrefill: "Hola, leo el blog y tengo dudas sobre arras o compraventa.",
      };
    case "administracion":
      return {
        headline: "¿Quieres delegar la gestión con tu inquilino?",
        subline: "Administración desde 49 €/mes IVA incl. Sin permanencia y panel online.",
        contratarHref: "/servicios/administracion-alquiler",
        contratarLabel: "Contratar administración",
        infoHref: "/para-propietarios",
        infoLabel: "Guía para propietarios",
        whatsappPrefill: "Hola, leo el blog y me interesa la administración de alquiler.",
      };
    case "legal":
    default:
      return {
        headline: "¿Necesitas asesoramiento inmobiliario?",
        subline: "Contratos, compraventa y administración con gestor asignado en Livendia.",
        contratarHref: "/servicios",
        contratarLabel: "Ver servicios",
        infoHref: "/contacto",
        infoLabel: "Contactar",
        whatsappPrefill: "Hola, leo el blog y quiero orientación sobre un trámite inmobiliario.",
      };
  }
}
