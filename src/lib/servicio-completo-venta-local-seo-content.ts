import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

export type VentaLocalZoneDetail = {
  name: string;
  context: string;
};

export type VentaLocalSeoContent = {
  /** Párrafo intro con cálculo de ahorro (100-130 palabras). */
  introParagraph: string;
  /** H2 mercado local. */
  marketParagraph: string;
  /** Nota sobre qué cubre el gestor en esta ciudad (1 párrafo). */
  gestorLocalNote: string;
  zones: readonly VentaLocalZoneDetail[];
  highlightSalePrice: number;
  savingVs3: number;
  savingVs5: number;
  faq: readonly { question: string; answer: string }[];
};

export const VENTA_LOCAL_SEO_CONTENT: Record<string, VentaLocalSeoContent> = {
  valladolid: {
    highlightSalePrice: 150_000,
    savingVs3: 4_500,
    savingVs5: 7_500,
    introParagraph:
      `En Valladolid el precio medio de un piso ronda los 150.000 € (Idealista, 2025: ~1.850 €/m² en capital). Una comisión del 3 % son 4.500 € + IVA (~5.445 €); al 5 %, 7.500 € + IVA. Con Livendia pagas ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido, pago único, sin comisión sobre el precio de venta. Aquí abundan vendedores mayores, herencias entre hermanos y operaciones entre vecinos o familiares que ya tienen comprador y no quieren ceder miles de euros a una inmobiliaria por un trámite documental. La gestoría inmobiliaria Livendia redacta reserva y arras, revisa nota simple y comunidad, y te acompaña hasta la firma en notaría — sin exclusiva ni marketing.`,
    marketParagraph:
      `El mercado vallisoletano es más pausado que Madrid o Barcelona, pero no menos delicado: Idealista (2025) sitúa la vivienda en venta en ~1.850 €/m² en capital (precio medio de piso ~150.000 €). Muchas ventas son entre particulares que se conocen desde hace años — herencias entre hermanos, vecinos, compradores de otra provincia. Los problemas suelen venir de aceptación de herencia pendiente, varios cotitulares que deben firmar arras al unísono, o cargas antiguas en la nota simple que el comprador descubre tarde. Livendia no busca comprador: ordena el tramo legal cuando tú ya lo tienes.`,
    gestorLocalNote:
      `En Valladolid el gestor revisa que la titularidad registral esté al día (especialmente en ventas por herencia), que el certificado de deuda de la comunidad refleje la situación real en edificios de Delicias o Parquesol, y que reserva y arras no contradigan lo pactado verbalmente en un mercado donde la confianza personal suele adelantarse al papel.`,
    zones: [
      {
        name: "Centro (Acera de Recoletos, Campo Grande)",
        context: "Pisos señoriales con compradores locales; operaciones entre familias sin agencia.",
      },
      {
        name: "Delicias y Parquesol",
        context: "Amplio parque de vivienda de los 90: ventas entre particulares por Idealista o recomendación.",
      },
      {
        name: "Rondilla y Pajarillos",
        context: "Precios más asequibles; compradores jóvenes que negocian arras con condición de hipoteca.",
      },
      {
        name: "La Victoria y Barrio España",
        context: "Rehabilitación progresiva; derramas en comunidad que deben constar antes de la señal.",
      },
      {
        name: "Laguna de Duero y Arroyo de la Encomienda",
        context: "Municipios del área: vendedores que prefieren gestor online sin desplazarse al centro.",
      },
      {
        name: "Medina del Campo y provincia",
        context: "Segundas residencias y herencias rurales vendidas a comprador conocido con plazos largos.",
      },
    ],
    faq: [
      {
        question: "¿Puedo vender en Valladolid si la herencia aún no está inscrita en el Registro?",
        answer:
          "No conviene firmar arras definitivas hasta que la titularidad del heredero figure correctamente. El gestor revisa el estado registral y te indica qué debe estar inscrito antes de vincular la operación.",
      },
      {
        question: "¿Tiene sentido una agencia si ya tengo comprador en Valladolid?",
        answer:
          `En un piso de 150.000 €, el 3 % son 4.500 € + IVA solo por intermediación. Si el comprador ya está, Livendia cubre reserva, arras y documentación por ${SERVICIO_COMPLETO_CV_PRICE_LABEL}.`,
      },
      {
        question: "¿Qué documentación suele pedir el comprador en Parquesol o Delicias?",
        answer:
          "Nota simple actualizada, certificado de deuda de la comunidad, ITE si el edificio la exige, y coherencia entre lo firmado en reserva y lo que irá a escritura.",
      },
      {
        question: "¿Gestionáis ventas si yo vivo en Madrid pero el piso está en Valladolid?",
        answer:
          "Sí. Todo el expediente es online: subes documentación al panel, el gestor redacta contratos y coordina hitos hasta notaría en Valladolid.",
      },
    ],
  },
  granada: {
    highlightSalePrice: 170_000,
    savingVs3: 5_100,
    savingVs5: 8_500,
    introParagraph:
      `En Granada el precio medio de un piso ronda los 170.000 € (Idealista, 2025: ~2.350 €/m² en capital). Una comisión del 3 % son 5.100 € + IVA (~6.171 €); al 5 %, 8.500 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana de gestoría inmobiliaria, sin comisión sobre la venta. En la ciudad conviven turismo residencial, universidad (UGR), y ventas en el Albaicín o Realejo entre particulares que ya tienen comprador y no necesitan exposición en portales. Redactamos reserva y arras, revisamos cargas y comunidad, y coordinamos hasta notaría sin exclusiva de agencia.`,
    marketParagraph:
      `Granada mezcla compradores locales, estudiantes UGR y adquirentes de otras provincias. Idealista (2025) sitúa la vivienda en venta en ~2.350 €/m² en capital (ticket medio ~170.000 €). El vendedor particular suele ser propietario en zona universitaria, heredero del casco histórico o familia con segunda residencia en la Vega. Casuísticas frecuentes: licencias en edificios del Albaicín, comunidades con obras de accesibilidad, arras copiadas que no contemplan arrendamiento turístico del vecino, o compradores con plazo corto para hipoteca. Livendia no hace marketing: blinda el tramo contractual.`,
    gestorLocalNote:
      `En Granada el gestor presta atención a edificios patrimoniales y comunidades con normativa estricta, coherencia entre reserva y arras cuando el comprador es extranjero o de otra CCAA, y checklist pre-escritura adaptado a notarías con alta carga en temporada alta universitaria.`,
    zones: [
      {
        name: "Albaicín y Realejo",
        context: "Casco histórico: compradores exigen documentación impecable; ventas entre particulares sin agencia.",
      },
      {
        name: "Zaidín y Campus Universitario",
        context: "Rotación vinculada a UGR; arras rápidas con condición de financiación del comprador joven.",
      },
      {
        name: "Ronda y Genil",
        context: "Zona residencial consolidada; muchas operaciones por recomendación entre vecinos.",
      },
      {
        name: "Chana y Norte",
        context: "Precios moderados; ahorro máximo vs comisión 3 % cuando el ticket ronda 160.000–180.000 €.",
      },
      {
        name: "Armilla y Maracena",
        context: "Área metropolitana: vendedores que venden a comprador de Granada capital o provincia.",
      },
      {
        name: "Motril y Costa Tropical (operaciones granadinas)",
        context: "Segunda residencia vendida a comprador conocido; plazos y documentación sin cartel de venta.",
      },
    ],
    faq: [
      {
        question: "¿Puedo vender un piso en el Albaicín entre particulares con comprador ya encontrado?",
        answer:
          "Sí. El gestor revisa nota simple, comunidad y posibles cargas o licencias antes de arras. El casco histórico exige documentación ordenada para que el comprador no reclame rebaja a última hora.",
      },
      {
        question: "¿El servicio sirve si el comprador es estudiante o familia de fuera de Granada?",
        answer:
          `Sí. Redactamos reserva y arras con plazos realistas (hipoteca, venta de su vivienda previa) y centralizamos documentos en el panel Livendia por ${SERVICIO_COMPLETO_CV_PRICE_LABEL}.`,
      },
      {
        question: "¿Qué pasa si mi piso tiene licencia turística del vecino y el comprador se preocupa?",
        answer:
          "El contrato y la documentación deben reflejar el uso real de tu vivienda. Te orientamos sobre qué constar en arras y qué no es competencia del servicio (licencias ajenas).",
      },
      {
        question: "¿Vendo sin agencia si el comprador viene de Idealista?",
        answer:
          "Es el caso típico: tú captaste al comprador; Livendia evita que pagues 5.100 € o más en comisión por un trámite que ya no necesita marketing.",
      },
    ],
  },
};

export function getVentaLocalSeoContent(slug: string): VentaLocalSeoContent | undefined {
  return VENTA_LOCAL_SEO_CONTENT[slug];
}
