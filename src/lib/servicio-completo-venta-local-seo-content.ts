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
  valencia: {
    highlightSalePrice: 280_000,
    savingVs3: 8_400,
    savingVs5: 14_000,
    introParagraph:
      `En Valencia capital el precio medio de un piso ronda los 280.000 € (Idealista, 2025: ~2.450 €/m² en ciudad). Una comisión del 3 % son 8.400 € + IVA (~10.164 €); al 5 %, 14.000 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana de gestoría inmobiliaria, sin comisión sobre la venta. En la Comunidad Valenciana es muy habitual vender entre particulares cuando el comprador viene de Idealista, recomendación de vecino o comprador de Madrid/Barcelona que busca calidad de vida. Redactamos reserva y arras, revisamos nota simple, comunidad y cédula, y coordinamos hasta notaría sin exclusiva ni carteles.`,
    marketParagraph:
      `Valencia combina compradores locales, familias del área metropolitana (Mislata, Torrent, Paterna) y adquirentes de otras CCAA atraídos por precios más contenidos que Madrid o Barcelona. Idealista (2025) sitúa la vivienda en venta en ~2.450 €/m² en capital. Casuísticas frecuentes: arras copiadas de operaciones de agencia, reservas firmadas en 48 h con cláusulas que penalizan solo al vendedor si falla la hipoteca del comprador, derramas en edificios de Ciutat Vella o Ruzafa no comentadas en la visita, y ventas en cadena (vendes en Valencia y compras en otra provincia). Livendia no capta comprador: ordena el tramo legal cuando ya lo tienes.`,
    gestorLocalNote:
      `En Valencia el gestor revisa coherencia entre reserva verbal (mobiliario, parking, obra) y arras escritas, certificado de deuda de comunidad en edificios con obras de fachada en Cabanyal o Benimaclet, plazos realistas de hipoteca para compradores nacionales, y checklist pre-escritura adaptado a notarías con alta carga en temporada de primavera.`,
    zones: [
      {
        name: "Ruzafa y Ensanche",
        context: "Alta demanda entre particulares; arras rápidas con riesgo de cláusulas copiadas de agencia.",
      },
      {
        name: "Ciutat Vella y El Carmen",
        context: "Edificios históricos: comunidad, licencias y estado registral revisados antes de señal.",
      },
      {
        name: "Benimaclet y Algirós",
        context: "Compradores jóvenes y familias; operaciones por Idealista sin intermediario.",
      },
      {
        name: "Campanar y Nou Moles",
        context: "Vivienda familiar; ventas entre vecinos con confianza previa al contrato.",
      },
      {
        name: "Mislata, Torrent y l'Horta Sud",
        context: "Área metropolitana: mismo servicio online sin desplazarte al centro.",
      },
      {
        name: "Patacona y playa (operaciones valencianas)",
        context: "Segunda residencia o herencia vendida a comprador conocido con plazos largos.",
      },
    ],
    faq: [
      {
        question: "¿Puedo vender en Valencia si el comprador viene de Madrid o Barcelona?",
        answer:
          "Sí. El gestor centraliza documentación en el panel Livendia y coordina hitos hasta notaría en Valencia. Lo crítico es alinear plazos de hipoteca y arras antes de ingresar señal.",
      },
      {
        question: "¿Tiene sentido una agencia si ya tengo comprador en Ruzafa o Campanar?",
        answer:
          `En un piso de 280.000 €, el 3 % son 8.400 € + IVA solo por intermediación. Si el comprador ya está, Livendia cubre reserva, arras y documentación por ${SERVICIO_COMPLETO_CV_PRICE_LABEL}.`,
      },
      {
        question: "¿Revisáis ventas con obra nueva o promoción en l'Horta?",
        answer:
          "Sí. Verificamos coherencia entre anuncio, reserva y arras: plazos de entrega, anexos de garaje o trastero y condiciones de hipoteca del comprador.",
      },
      {
        question: "¿Qué documentación suele pedir el comprador en Valencia capital?",
        answer:
          "Nota simple actualizada, certificado de deuda de la comunidad, cédula de habitabilidad, certificado energético y coherencia entre lo firmado en reserva y lo que irá a escritura.",
      },
    ],
  },
  madrid: {
    highlightSalePrice: 380_000,
    savingVs3: 11_400,
    savingVs5: 19_000,
    introParagraph:
      `En Madrid capital el precio medio de un piso ronda los 380.000 € (Idealista, 2025: ~4.200 €/m² en ciudad). Una comisión del 3 % son 11.400 € + IVA (~13.794 €); al 5 %, 19.000 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — tarifa plana, sin comisión sobre la venta. En la capital es habitual vender entre particulares cuando el comprador viene de Idealista, recomendación o comprador de otra CCAA. Redactamos reserva y arras, revisamos nota simple y comunidad, y coordinamos hasta notaría sin exclusiva.`,
    marketParagraph:
      `Madrid concentra operaciones rápidas, compradores con hipoteca aprobada en 15 días y plantillas de arras pensadas para agencias. Idealista (2025) sitúa la vivienda en venta en ~4.200 €/m² en capital. Casuísticas frecuentes: varios cotitulares, herencia pendiente de inscribir, plusvalía municipal mal calculada, y ventas en cadena (vendes en Madrid y compras fuera). Livendia no busca comprador: blinda el tramo legal cuando ya lo tienes.`,
    gestorLocalNote:
      `En Madrid el gestor revisa coherencia entre reserva firmada con prisa y arras definitivas, certificado de deuda de comunidad en edificios con obras en Chamberí o Tetuán, plazos de cancelación de hipoteca del vendedor, y coordinación con notarías del corredor norte y sur.`,
    zones: [
      { name: "Salamanca y Chamberí", context: "Ticket alto; compradores exigen documentación impecable sin agencia." },
      { name: "Retiro y Arganzuela", context: "Ventas por Idealista; arras con condición de hipoteca del comprador." },
      { name: "Tetuán y Chamartín", context: "Familias y expatriados; operaciones sin cartel de venta." },
      { name: "Vallecas y Usera", context: "Ahorro máximo vs comisión 3 % en tickets ~300.000–350.000 €." },
      { name: "Getafe, Móstoles, Leganés", context: "Área metropolitana sur: mismo servicio online." },
      { name: "Las Rozas y Alcobendas", context: "Segunda residencia vendida a comprador conocido." },
    ],
    faq: [
      {
        question: "¿Puedo vender en Madrid si ya tengo comprador de Idealista?",
        answer:
          `Es el caso típico. En 380.000 €, el 3 % son 11.400 € + IVA solo por intermediación. Livendia cubre reserva, arras y documentación por ${SERVICIO_COMPLETO_CV_PRICE_LABEL}.`,
      },
      {
        question: "¿Gestionáis ventas en el cinturón sur o norte?",
        answer:
          "Sí. Misma operativa online para Madrid capital y municipios del área metropolitana hasta notaría.",
      },
      {
        question: "¿Qué pasa si hay varios propietarios o herencia reciente?",
        answer:
          "El gestor revisa titularidad registral y quién debe firmar arras antes de vincular la operación.",
      },
      {
        question: "¿Cuál es la landing SEO principal de venta en Madrid?",
        answer:
          "Además de esta ficha de servicio completo, la guía prioritaria está en /servicios/vender-piso-sin-agencia-madrid y el pilar /vender-piso-sin-inmobiliaria/madrid.",
      },
    ],
  },
  barcelona: {
    highlightSalePrice: 420_000,
    savingVs3: 12_600,
    savingVs5: 21_000,
    introParagraph:
      `En Barcelona capital el precio medio de un piso ronda los 420.000 € (Idealista, 2025: ~4.500 €/m²). Una comisión del 3 % son 12.600 € + IVA (~15.246 €); al 5 %, 21.000 € + IVA. Livendia cobra ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido — sin comisión sobre la venta. En Cataluña es habitual vender entre particulares con comprador ya encontrado; el tramo crítico es arras CCCat y documentación post-arras. Redactamos contratos, revisamos comunidad e ITE, y coordinamos hasta notaría.`,
    marketParagraph:
      `Barcelona mezcla compradores locales, inversión en Eixample y operaciones en AMB (L'Hospitalet, Badalona). Idealista (2025) sitúa la vivienda en venta en ~4.500 €/m² en capital. Casuísticas: arras bilingües mal adaptadas, cláusula 621-49, derramas en actas no comentadas en visita, y ventas por barrio (Eixample, Gràcia) sin agencia. Livendia no capta comprador.`,
    gestorLocalNote:
      `En Barcelona el gestor revisa CCCat en arras, coherencia castellano/catalán, ITE en edificios con más de 45 años, certificado de deuda de comunidad en edificios con obras en Poblenou o Gràcia, y enlaza con guías por barrio cuando la venta es hiperlocal.`,
    zones: [
      { name: "Eixample y Dreta", context: "Alta demanda; arras CCCat con plazos realistas de hipoteca." },
      { name: "Gràcia y Sarrià", context: "Ventas entre vecinos; documentación de comunidad reforzada." },
      { name: "Poblenou y Sant Martí", context: "Rehabilitación; coherencia entre visita y contrato." },
      { name: "Les Corts y Sants", context: "Despacho Livendia en Les Corts; ventas con gestor presencial si hace falta." },
      { name: "L'Hospitalet y Badalona", context: "AMB: mismo servicio y tarifa que Barcelona capital." },
      { name: "Ciutat Vella", context: "Edificios históricos; licencias y comunidad antes de señal." },
    ],
    faq: [
      {
        question: "¿Revisáis arras conforme al Codi civil de Catalunya?",
        answer:
          "Sí. Arras 621-4 a 621-9 y cláusula de financiación 621-49 adaptadas a tu operación, explicadas en castellano claro.",
      },
      {
        question: "¿Sirve el servicio si vendo en Eixample o Gràcia sin agencia?",
        answer:
          `Sí. Para búsquedas por barrio también tenemos guías en /servicios/venta-piso-particular-sin-agencia/; la landing principal de ciudad es /servicios/vender-piso-sin-agencia-barcelona (${SERVICIO_COMPLETO_CV_PRICE_LABEL}).`,
      },
      {
        question: "¿Atendéis ventas en el área metropolitana?",
        answer:
          "Sí. L'Hospitalet, Cornellà, Sabadell, Terrassa y resto del AMB con expediente online.",
      },
      {
        question: "¿Pack arras 495 € o servicio completo 890 €?",
        answer:
          "Si ya cerraste precio y solo necesitas tramo arras + documentación post-arras, el pack vendedor 495 € puede bastar; si quieres cobertura reserva–escritura, el servicio completo 890 €.",
      },
    ],
  },
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
