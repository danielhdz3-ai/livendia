import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";

export type TemporadaBcnStepPatch = Partial<
  Pick<VenderSinAgenciaProcessStep, "title" | "description" | "howWeDoIt" | "checklist">
>;

export type TemporadaBcnZoneEnrichment = {
  processIntro?: string;
  step1?: TemporadaBcnStepPatch;
  step3?: TemporadaBcnStepPatch;
  step5?: TemporadaBcnStepPatch;
};

export const TEMPORADA_BCN_ZONE_ENRICHMENT: Record<string, TemporadaBcnZoneEnrichment> = {
  "barcelona-eixample": {
    processIntro:
      "En l'Eixample propietarios e inquilinos cierran temporadas por Erasmus, másteres en zona universitaria o desplazamientos a oficinas de Passeig de Gràcia. Cinco fases con un gestor Livendia: llamada previa, contratación online, documentación en panel, redacción con causa de temporalidad e inventario, y cierre antes de firmar — sin comisión sobre la renta.",
    step1: {
      title: "Llamada con tu gestor: cuentas la estancia en l'Eixample",
      description:
        "Antes de pagar, un gestor especializado repasa contigo si el uso es Erasmus, prácticas, teletrabajo por trimestres o verano en piso amueblado entre Dreta y Esquerra. Aclaramos fianza de dos mensualidades, mobiliario señorial y riesgo de confundir temporada con LAU de vivienda habitual en fincas de 1900.",
      howWeDoIt: [
        "Contacto por teléfono o WhatsApp — sin compromiso.",
        "Repaso de calle, planta, amueblado y calendario académico o laboral real.",
        "Orientación sobre contención de rentas cuando el uso no es vivienda habitual.",
        "Plan: contratar → subir datos → borrador en 24-48 h → firma.",
      ],
    },
    step3: {
      title: "Documentación del piso en l'Eixample (partes, renta e inventario)",
      description:
        "Subes DNI, dirección exacta (portal, ascensor, parking si aplica), renta pactada, depósito, duración del curso o proyecto e inventario fotográfico de mobiliario y electrodomésticos — habitual en pisos compartidos o amueblados de alquiler temporal.",
    },
    step5: {
      title: "Contrato listo para firmar antes de entregar llaves en el Eixample",
      description:
        "Entregamos PDF firmable con causa de temporalidad explícita, cláusulas de salida al terminar el semestre o la estancia laboral y repaso de fianza e inventario hasta que propietario e inquilino firmen con criterio.",
    },
  },
  "barcelona-gracia": {
    processIntro:
      "Gràcia concentra temporadas por estudios en Joanic, teletrabajo en pisos de planta baja y veranos en Vila de Gràcia. Livendia guía el proceso en cinco pasos con gestor único: desde la primera llamada hasta el contrato civil de temporada, lejos de plantillas LAU copiadas de otras ciudades.",
    step1: {
      title: "Primera llamada: tu caso de alquiler temporal en Gràcia",
      description:
        "Explicas si alquilas o entras en un piso amueblado en Vila de Gràcia, Camp d'en Grassot o La Salut, duración (curso, obra en edificio, estancia de meses) y qué incluye la renta. El gestor detecta si hace falta contrato de temporada y no LAU de larga duración.",
    },
    step3: {
      title: "Datos del inmueble en Gràcia: convivencia, suministros e inventario",
      description:
        "Documentación de partes, dirección, importes, calendario de entrada/salida y fotos del estado del piso — especialmente útil cuando hay terraza compartida, locales en planta baja o normas de vecindad que deben quedar por escrito.",
    },
  },
  "barcelona-poblenou": {
    processIntro:
      "Poblenou y el 22@ mueven contratos por proyectos tech, rotación de equipos y estancias ligadas a congresos en Fira o MWC. Cinco fases Livendia con trámite online, inventario en lofts amueblados y redacción bilingüe si hace falta — 200 € IVA incl., sin comisión inmobiliaria.",
    step1: {
      title: "Llamada con gestor: estancia temporal en Poblenou o 22@",
      description:
        "Repasamos duración del proyecto, empresa o motivo académico, idioma del contrato, parking, coworking incluido y fechas de salida. En el 22@ es frecuente mezclar perfiles internacionales: conviene fijar causa de temporalidad antes de transferir fianza.",
      howWeDoIt: [
        "WhatsApp o teléfono con gestor de alquileres temporales.",
        "Distinción clara entre temporada contractual, LAU habitual y uso turístico regulado.",
        "Checklist de datos para lofts y promociones recientes en Sant Martí.",
      ],
    },
    step3: {
      title: "Expediente con datos del loft o piso en Poblenou",
      description:
        "Partes, dirección en 22@ o Rambla del Poblenou, renta, fianza de dos meses, equipamiento (electrodomésticos, limpieza de salida) e inventario con fotos para rotaciones rápidas de inquilino.",
    },
    step5: {
      title: "Implementación: firma y salida al cerrar el proyecto",
      description:
        "Asesoramiento sobre prórroga, extinción al terminar el plazo y devolución de fianza según inventario — clave cuando la estancia coincide con eventos o cierre de proyecto en el distrito.",
    },
  },
  "barcelona-sants-montjuic": {
    processIntro:
      "Sants-Montjuïc reúne estancias por Fira de Barcelona, estudios en la Zona Universitària límite, obras en edificios y teletrabajo en Hostafrancs. Contratas el servicio Livendia en cinco pasos con gestor real y panel online — contrato de temporada entre particulares, no comisión sobre el alquiler.",
    step1: {
      title: "Llamada: alquiler por temporada en Sants, Hostafrancs o Montjuïc",
      description:
        "Cuéntanos el motivo (congreso, máster, reforma del edificio, estancia laboral en Sants o Poble-sec), plazos y si el piso está amueblado. Orientamos sobre fianza, suministros y salida sin activar prórrogas LAU.",
    },
    step3: {
      title: "Documentación para redactar en Sants-Montjuïc",
      description:
        "DNI, contrato verbal resumido, renta, duración exacta ligada a Fira o curso, estado del inmueble e inventario — incluido mobiliario en pisos cerca de la estación de Sants o en Poble-sec.",
    },
  },
  "barcelona-sarria-sant-gervasi": {
    processIntro:
      "Sarrià-Sant Gervasi exige formalidad: temporadas por posgrado, familias en traslado temporal o profesionales en Bonanova y Tres Torres. Livendia acompaña en cinco fases con redacción precisa, inventario detallado y gestor hasta la firma — tarifa plana 200 € IVA incl.",
    step1: {
      title: "Consulta con gestor: temporada en Sarrià, Sant Gervasi o Pedralbes",
      description:
        "Primera toma de contacto para definir duración, perfil del inquilino, parking, portería y mobiliario de calidad. En zonas premium el coste de un LAU mal elegido supera con creces la tarifa Livendia.",
      howWeDoIt: [
        "Llamada sin compromiso para propietarios e inquilinos particulares.",
        "Repaso de causas válidas de temporalidad en pisos señoriales compartidos o enteros.",
        "Plazo orientativo 24-48 h laborables tras documentación completa.",
      ],
    },
    step3: {
      title: "Información del inmueble en Sarrià-Sant Gervasi",
      description:
        "Datos de partes, dirección, renta elevada de mercado, fianza, depósitos adicionales si se pactan, inventario fotográfico exhaustivo y cláusulas de conservación acordes a acabados y electrodomésticos de gama alta.",
    },
    step5: {
      title: "Cierre profesional antes de la entrada en Sarrià o Sant Gervasi",
      description:
        "Repaso de cláusulas críticas, opción de firma electrónica y archivo en expediente para propietario e inquilino — especialmente cuando una de las partes reside fuera de Barcelona.",
    },
  },
};

export function getTemporadaBcnZoneEnrichment(slug: string): TemporadaBcnZoneEnrichment | undefined {
  return TEMPORADA_BCN_ZONE_ENRICHMENT[slug];
}
