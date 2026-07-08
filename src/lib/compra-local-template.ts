import type { CompraLocalFaqItem } from "@/lib/servicio-completo-compra-local-seo-content";

export const COMPRA_LOCAL_DOCUMENTACION_ITEMS = [
  {
    title: "Nota simple registral",
    description: "Cargas, servidumbres, embargos y coherencia entre titular y vendedor.",
  },
  {
    title: "Cédula de habitabilidad vigente",
    description: "Comprobamos validez y si puede frenar la escritura en tu comunidad autónoma.",
  },
  {
    title: "Certificado energético",
    description: "Obligatorio en compraventa; verificamos que corresponde al inmueble que visitaste.",
  },
  {
    title: "ITE / IITE si el edificio tiene +45 años",
    description: "Estado del edificio, deficiencias y acuerdos de subsanación en comunidad.",
  },
  {
    title: "Últimos recibos de IBI y comunidad",
    description: "Deuda oculta, cuotas impagadas del vendedor y coherencia con actas.",
  },
  {
    title: "Estatutos y actas de la comunidad",
    description: "Derramas aprobadas, obras pendientes y limitaciones de uso.",
  },
  {
    title: "Certificado de deuda cero con la comunidad",
    description: "Imprescindible antes de arras en muchas operaciones entre particulares.",
  },
  {
    title: "Contrato de arras o reserva",
    description: "Revisión de cláusulas, penalizaciones, plazos de hipoteca y condiciones suspensivas.",
  },
] as const;

export const COMPRA_LOCAL_TEMPLATE_FAQ: readonly CompraLocalFaqItem[] = [
  {
    question: "¿Necesito notario si compro directamente al propietario?",
    answer:
      "Sí. Comprar entre particulares no elimina la escritura pública ante notario ni el impuesto de transmisiones (ITP) y el registro. Livendia revisa contratos y documentación antes de que te comprometas; la formalización notarial y registral sigue siendo obligatoria y la gestionas con notaría/registro (te orientamos sobre plazos y papeles).",
  },
  {
    question: "¿Qué pasa si el vendedor no tiene la cédula de habitabilidad?",
    answer:
      "En la mayoría de comunidades autónomas no puedes escriturar sin cédula vigente. Si caducó o no existe, hay que renovarla antes de la firma. Lo detectamos en la revisión documental inicial para que negocies plazo o precio antes de entregar señal.",
  },
  {
    question: "¿Cuánto tarda la revisión documental?",
    answer:
      "Tras contratar y subir la documentación al panel, el gestor asignado suele devolver un primer informe orientativo en 24–48 h laborables en operaciones estándar. Operaciones con herencias, cargas urbanísticas o comunidades lentas pueden requerir algo más de margen; te lo decimos desde el primer contacto.",
  },
  {
    question: "¿Livendia sustituye al notario o al registro de la propiedad?",
    answer:
      "No. Somos gestoría inmobiliaria: revisamos, redactamos o corregimos reserva y arras, analizamos la documentación del inmueble y te acompañamos hasta la escritura. Notaría formaliza la compraventa y el Registro inscribe la titularidad; esos trámites y sus tasas van aparte del servicio Livendia.",
  },
  {
    question: "¿Qué pasa si detectáis un problema en la documentación antes de firmar arras?",
    answer:
      "Te entregamos un informe claro con riesgos (cargas, derramas, titularidad, cláusulas abusivas) y opciones: renegociar, pedir documentación al vendedor, no firmar o ajustar plazos. El objetivo es que decidas con datos, no con prisa.",
  },
];

export function compraLocalPageH1(city: string): string {
  return `Compra tu piso entre particulares en ${city} sin arriesgar tu dinero por un papel que nadie revisó`;
}

export function mergeCompraLocalFaq(
  cityFaq: readonly CompraLocalFaqItem[] | undefined,
): CompraLocalFaqItem[] {
  const seen = new Set<string>();
  const merged: CompraLocalFaqItem[] = [];
  for (const item of [...COMPRA_LOCAL_TEMPLATE_FAQ, ...(cityFaq ?? [])]) {
    if (seen.has(item.question)) continue;
    seen.add(item.question);
    merged.push(item);
  }
  return merged;
}

export const COMPRA_LOCAL_IMPORTANTE_SABER =
  "Livendia sí es tu gestoría inmobiliaria en el bando del comprador: revisamos reserva, arras y documentación del inmueble, detectamos cláusulas abusivas y te acompañamos con un gestor dedicado hasta la escritura. Lo que va aparte —y suele pagar el comprador directamente— son honorarios de notaría, impuesto de transmisiones patrimoniales (ITP), inscripción en el Registro de la Propiedad y tasaciones bancarias. Te orientamos sobre plazos y costes desde el inicio; esos trámites los formalizan notaría y registro con tus propios justificantes.";
