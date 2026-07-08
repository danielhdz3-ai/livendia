import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

/** Copy y keywords únicos por ciudad — compra entre particulares. */
export const COMPRA_LOCAL_DIFFERENTIATION: Record<string, LocalCityLandingFields> = {
  madrid: {
    keywords: [
      "comprar piso entre particulares madrid",
      "gestor compra vivienda madrid",
      "revisar contrato reserva madrid",
      "comprar piso sin agencia madrid",
      "acompañamiento compra chamberi retiro",
      "tramites compra piso particular madrid",
    ],
    heroBadge: "Compra con gestor · Madrid capital y corona",
    heroH1: "Compra tu piso en Madrid con gestor dedicado — sin firmar a ciegas",
    metaTitle: "Comprar piso entre particulares en Madrid | Gestor comprador Livendia",
    metaDescription:
      "¿Compras en Madrid (Retiro, Chamberí, Tetuán, Vallecas…)? Gestor en tu bando: reserva, arras y escritura revisadas. Tarifa plana 890 € IVA incl. Sin comisión de agencia.",
    heroBullets: [
      "Operaciones en distrito y cinturón (Móstoles, Alcorcón, Las Rozas…)",
      "Detectamos honorarios encadenados y plazos de hipoteca irreales",
      `Tarifa plana ${SERVICIO_COMPLETO_CV_PRICE_LABEL} — un solo gestor hasta notaría`,
    ],
    whyTitle: "Comprar en Madrid cuando el mercado va a toda prisa",
    whySubtitle:
      "En operaciones de particulares o con agencia ligera, lo que no negocias antes de la señal casi nunca se arregla después. Livendia prioriza tu expediente, no la comisión del intermediario.",
    localZonesHeading: "Barrios y municipios donde acompañamos compradores",
    localZones:
      "Chamberí, Salamanca, Retiro, Tetuán, Carabanchel, Vallecas, Usera, Fuencarral, barrios del norte y municipios del cinturón (Móstoles, Getafe, Leganés, Alcorcón). Misma gestoría online: tú firmas con criterio, nosotros revisamos cada texto.",
    localBenefits: [
      {
        title: "Gestor que habla tu idioma, no “legalese”",
        description:
          "Traducimos cláusulas de reserva y arras a decisiones concretas: qué pedir, qué no firmar y qué negociar antes de transferir la señal en el mercado más competitivo de España.",
      },
      {
        title: "Revisión registral y urbanística madrileña",
        description:
          "Nota simple, cargas, ITE en edificios antiguos del centro, certificados de comunidad y coherencia entre visita y contrato — especialmente en pisos reformados o con locales comerciales en planta baja.",
      },
      {
        title: "Defensa frente a plantillas de agencia",
        description:
          "Si interviene una inmobiliaria, revisamos nota de encargo, honorarios y penalizaciones que suelen ir en contra del comprador. Ahorras miles frente a errores que el servicio completo amortiza.",
      },
      {
        title: "Coordinación con banco y vendedor",
        description:
          "Alineamos plazos de financiación, arras y escritura para que no pierdas el piso por un calendario imposible ni pagues penalidades por retrasos que no te corresponden.",
      },
      {
        title: "Un interlocutor, no un call center",
        description:
          "Mismo gestor por WhatsApp y teléfono durante toda la operación. Panel Livendia con documentos centralizados.",
      },
      {
        title: "Precio cerrado, sin sorpresas",
        description: `890 € IVA incluido por todo el acompañamiento hasta escritura. Sin porcentaje sobre el precio del inmueble.`,
      },
    ],
    finalCtaTitle: "Cierra la compra en Madrid con documentación profesional",
  },
  barcelona: {
    keywords: [
      "comprar piso entre particulares barcelona",
      "gestor compra vivienda barcelona",
      "revisar arras poblenou eixample",
      "comprar piso sin comision agencia barcelona",
      "compraventa particulares hospitalet badalona",
      "ITE compra piso barcelona gestoria",
    ],
    heroBadge: "Compra entre particulares · Barcelona y área metropolitana",
    heroH1: "Compra en Barcelona con gestor en catalán y castellano — contratos bajo control",
    metaTitle: "Comprar entre particulares en Barcelona | Gestor comprador Livendia",
    metaDescription:
      "Compra en Eixample, Gràcia, Poblenou, Sant Martí, L'Hospitalet o Badalona con gestor dedicado. Revisión reserva/arras, ITE y cargas. 890 € IVA incl.",
    heroBullets: [
      "Pisos con ITE pendiente, locales y vivienda turística mal definida",
      "Contratos bilingües o redactados solo a favor del vendedor",
      "Gestor fijo hasta firma en notaría barcelonesa",
    ],
    whyTitle: "Barcelona: mercado tensionado, documentación exigente",
    whySubtitle:
      "Aquí conviven compradores internacionales, obra nueva y edificios con historial urbanístico complejo. Livendia alinea lo pactado en la visita con lo que firmas.",
    localZonesHeading: "Zonas donde revisamos compras a diario",
    localZones:
      "Eixample, Gràcia, Poblenou, Sarrià-Sant Gervasi, Sant Martí, Sants, Les Corts, L'Hospitalet, Badalona, Santa Coloma y municipios del área metropolitana con el mismo protocolo documental.",
    localBenefits: [
      {
        title: "Control de ITE y estado del edificio",
        description:
          "Verificamos inspección técnica, obras en comunidad y licencias antes de que las arras te obliguen a asumir costes que no viste en el anuncio.",
      },
      {
        title: "Cláusulas en castellano y catalán",
        description:
          "Te explicamos obligaciones reales aunque el borrador mezcle idiomas o referencias a normativa autonómica que no entiendes a primera vista.",
      },
      {
        title: "Compras sin pagar doble intermediación",
        description:
          "Si encuentras piso de particular, no necesitas pagar comisión de comprador: inviertes en gestoría que defiende tu dinero en reserva y arras.",
      },
      {
        title: "Servidumbres y cargas en nota simple",
        description:
          "Detectamos gravámenes, usufructos o limitaciones de uso que en barrios densos (Poblenou, Born) aparecen tarde si nadie las lee.",
      },
      {
        title: "Calendario realista hasta escritura",
        description:
          "Coordinamos con vendedor, agencia (si la hay) y notaría para que plazos de hipoteca y entrega de llaves sean ejecutables.",
      },
      {
        title: "Tarifa plana Livendia",
        description: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido. Sin porcentaje sobre el precio de compra.`,
      },
    ],
    finalCtaTitle: "Cierra la compra en Barcelona con documentación profesional",
  },
  valencia: {
    keywords: [
      "comprar piso entre particulares valencia",
      "gestor compra vivienda valencia",
      "revisar reserva arras ruzafa",
      "comprar piso particular benimaclet",
      "tramites compra piso valencia horta",
      "comprar sin agencia valencia gestoria",
    ],
    heroBadge: "Compra con gestor · Valencia y l'Horta",
    heroH1: "Compra en Valencia con gestor que conoce el ritmo valenciano",
    metaTitle: "Comprar piso entre particulares en Valencia | Gestor Livendia",
    metaDescription:
      "Compra en Ruzafa, Benimaclet, Campanar, Ciutat Vella, Mislata o Torrent con gestor dedicado. Reserva y arras equilibradas. 890 € IVA incl.",
    heroBullets: [
      "Reservas firmadas en 48 h — las revisamos antes del ingreso",
      "Obra nueva y segunda mano en l'Horta y capital",
      "Gestor único por WhatsApp hasta escritura",
    ],
    whyTitle: "Valencia: velocidad de mercado, contratos copiados",
    whySubtitle:
      "Promesas verbales en la visita que no salen en el contrato son la principal fuente de conflicto. Livendia deja por escrito lo crítico antes de la señal.",
    localZonesHeading: "Barrios y municipios del área de compra",
    localZones:
      "Ciutat Vella, Ruzafa, Benimaclet, Campanar, Malvarrosa, Patraix, Quatre Carreres, Mislata, Paterna, Torrent, Burjassot y operaciones en playa y huerta con la misma revisión gestora.",
    localBenefits: [
      {
        title: "Arras alineadas con lo que viste",
        description:
          "En promociones y reventas revisamos anexos, calidades y plazos de entrega para que no firmes arras de obra nueva con lagunas.",
      },
      {
        title: "Ahorro frente a cláusulas de agencia",
        description:
          "Muchos compradores en Valencia recuperan el coste del servicio al eliminar honorarios encadenados o penalizaciones desproporcionadas.",
      },
      {
        title: "Comunidad y derramas en edificios mixtos",
        description:
          "Revisamos actas y certificados de estar al corriente — clave en edificios con locales o turismo residencial mal regulado.",
      },
      {
        title: "Financiación sin plazos imposibles",
        description:
          "Negociamos extensiones de hipoteca realistas con bancos valencinos y vendedores particulares.",
      },
      {
        title: "Gestoría 100 % online",
        description:
          "Sin desplazarte al despacho: documentos en panel, llamadas de seguimiento y respuesta ágil entre visita y arras.",
      },
      {
        title: "890 € todo el proceso",
        description: "Un pago, IVA incluido, desde reserva hasta firma en notaría valenciana.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Valencia con documentación profesional",
  },
  bilbao: {
    keywords: [
      "comprar piso entre particulares bilbao",
      "gestor compra vivienda bilbao",
      "comprar piso deusto getxo particular",
      "revisar arras comprador bizkaia",
      "compraventa particulares gran bilbao",
      "comprar sin agencia bilbao gestoria",
    ],
    heroBadge: "Compra entre particulares · Gran Bilbao",
    heroH1: "Compras de particular a particular en Bilbao — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Bilbao | Asesor experto Livendia",
    metaDescription:
      "¿Compras de particular a particular en Bilbao? Gestor inmobiliario experto: revisión de reserva y arras, defensa frente a cláusulas abusivas y acompañamiento hasta escritura. 890 € IVA incl.",
    heroBullets: [
      "Abando, Deusto, Indautxu, Getxo, Barakaldo, Portugalete",
      "Precios altos: un error en arras duele más que el gestor",
      "Revisión de nota simple y derramas antes de la señal",
    ],
    whyTitle: "Bizkaia: compradores que buscan en Idealista, no en agencia",
    whySubtitle:
      "En el mercado vizcaíno las plantillas suelen proteger al vendedor. Livendia equilibra reserva y arras cuando compras a un particular o con intermediación mínima.",
    localZonesHeading: "Dónde acompañamos compradores en Bizkaia",
    localZones:
      "Bilbao (Abando, Deusto, Indautxu, Basurto), Getxo, Portugalete, Barakaldo, Santurtzi y municipios del Gran Bilbao con operativa digital y gestor de referencia.",
    localBenefits: [
      {
        title: "Arras equilibradas en mercado caro",
        description:
          "Con precios medios elevados, una penalización mal redactada puede costar más que todo el servicio Livendia.",
      },
      {
        title: "Financiación y condición suspensiva de hipoteca",
        description:
          "Plazos negociables con entidades locales y vendedores que entienden el proceso hipotecario vasco.",
      },
      {
        title: "Comunidades con obras y fondos de reserva",
        description:
          "Revisamos derramas y actas en edificios señorial de Deusto o bloques más recientes en Ansio.",
      },
      {
        title: "Compra sin comisión de comprador",
        description:
          "Encuentras el piso tú; nosotros blindamos el tramo legal con tarifa plana.",
      },
      {
        title: "Coordinación hasta notaría bilbaína",
        description:
          "Checklist pre-escritura y coherencia entre reserva, arras y minuta notarial.",
      },
      {
        title: "Gestor dedicado, no rotación",
        description: "Un profesional conoce tu expediente de principio a fin.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Bilbao con documentación profesional",
  },
  sevilla: {
    keywords: [
      "comprar piso entre particulares sevilla",
      "gestor compra vivienda sevilla",
      "comprar piso triana nervion particular",
      "revisar contrato reserva sevilla",
      "tramites compra piso tomares dos hermanas",
      "comprar sin agencia sevilla gestoria",
    ],
    heroBadge: "Compra entre particulares · Sevilla y área metropolitana",
    heroH1: "Compra de particular a particular en Sevilla — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Sevilla | Asesor experto Livendia",
    metaDescription:
      "¿Compras en Triana, Nervión, Los Remedios, Macarena o Tomares? Gestor en el bando del comprador: reserva, arras y escritura. 890 € IVA incl. Sin comisión de agencia.",
    heroBullets: [
      "Patrimonio histórico: comunidades con obras y licencias a revisar",
      "Compras a particular por Idealista o recomendación local",
      "Plazos de hipoteca negociados antes de entregar arras",
    ],
    whyTitle: "Sevilla: confianza en la visita, riesgo en el contrato",
    whySubtitle:
      "En barrios céntricos y nuevas zonas (Los Remedios, Sevilla Este) es habitual comprar a familia o particular sin agencia compradora. Sin gestor, firmas lo que el vendedor envía.",
    localZonesHeading: "Barrios y municipios donde compramos contigo",
    localZones:
      "Triana, Nervión, Los Remedios, Macarena, Santa Cruz, Heliópolis, Sevilla Este, Tomares, Dos Hermanas, Alcalá de Guadaíra y Mairena del Aljarafe — misma atención gestora online.",
    localBenefits: [
      {
        title: "Reserva revisada antes del primer ingreso",
        description:
          "En operaciones sevillanas con prisa, frenamos cláusulas de penalización abusiva o señal desproporcionada.",
      },
      {
        title: "Conocimiento de edificios históricos",
        description:
          "Orientación sobre licencias, ITE y limitaciones en casco antiguo y ampliaciones en barrios residenciales.",
      },
      {
        title: "Arras que reflejan la financiación real",
        description:
          "Condición suspensiva de hipoteca con plazos que los bancos andaluces suelen aceptar si se redactan bien.",
      },
      {
        title: "Sin pagar comisión al comprador",
        description:
          "Tu inversión va a gestoría (890 €), no a un 3 % sobre el precio del piso por encontrar anuncio.",
      },
      {
        title: "Mediación con vendedor particular",
        description:
          "Redactamos o corregimos arras para que el vendedor las acepte sin romper la operación.",
      },
      {
        title: "Seguimiento hasta notaría sevillana",
        description: "Documentación ordenada y gestor disponible en cada hito previo a escritura.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Sevilla con documentación profesional",
  },
  malaga: {
    keywords: [
      "comprar piso entre particulares malaga",
      "gestor compra vivienda malaga",
      "comprar piso costa del sol particular",
      "revisar reserva arras teatinos",
      "comprar segunda residencia malaga gestoria",
      "comprar piso torremolinos sin agencia",
    ],
    heroBadge: "Compra entre particulares · Málaga y Costa del Sol",
    heroH1: "Compra de particular a particular en Málaga — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Málaga | Asesor experto Livendia",
    metaDescription:
      "¿Compras en Centro, Teatinos, El Palo, Torremolinos o la costa? Gestor comprador: reserva, arras y escritura. Segunda residencia e inversión. 890 € IVA incl.",
    heroBullets: [
      "Segunda residencia, traslado o inversión en costa",
      "Contratos turístico-residenciales mal redactados",
      "Revisión de comunidad y derramas en edificios de playa",
    ],
    whyTitle: "Málaga y costa: mezcla turística, residencial e inversión",
    whySubtitle:
      "Comprar en Teatinos no es igual que en Rincón de la Victoria. Livendia adapta la revisión al uso real (habitual, larga estancia o segunda vivienda) y al régimen de la comunidad.",
    localZonesHeading: "Zonas de compra que atendemos",
    localZones:
      "Centro histórico, Teatinos, El Palo, Pedregalejo, Carretera de Cádiz, Torremolinos, Rincón de la Victoria, Benalmádena, Fuengirola oriente y Málaga capital — gestoría online con el mismo gestor de referencia.",
    localBenefits: [
      {
        title: "Segunda residencia sin sorpresas",
        description:
          "Si compras desde fuera de Andalucía, revisamos comunidad, suministros y estatutos antes de arras — clave en edificios con uso mixto turístico.",
      },
      {
        title: "Promesas del vendedor por escrito",
        description:
          "Mobiliario, plaza de garaje, trastero y estado de reforma quedan en contrato, no solo en WhatsApp.",
      },
      {
        title: "Costa: plazos y ocupación claros",
        description:
          "Evitamos lagunas sobre alquiler turístico vecinal, máximos de ocupación o obras en fachada marítima.",
      },
      {
        title: "Ahorro vs. errores caros",
        description:
          "Una penalización mal calculada en arras en un piso de 320.000 € supera con creces la tarifa Livendia.",
      },
      {
        title: "Gestor en bando comprador",
        description:
          "No somos agencia que busca comisión: somos gestoría que protege tu señal y tu hipoteca.",
      },
      {
        title: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido`,
        description: "Todo el camino hasta escritura en notaría malagueña o costera.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Málaga con documentación profesional",
  },
  zaragoza: {
    keywords: [
      "comprar piso entre particulares zaragoza",
      "gestor compra vivienda zaragoza",
      "comprar piso sin agencia zaragoza",
      "revisar reserva arras valdespartera",
      "compraventa particulares delicias actur",
      "comprar piso particular casco historico zaragoza",
    ],
    heroBadge: "Compra entre particulares · Zaragoza y comarca",
    heroH1: "Compra de particular a particular en Zaragoza — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Zaragoza | Asesor experto Livendia",
    metaDescription:
      "¿Compras en Zaragoza (Delicias, Actur, Valdespartera, Casco Histórico)? Gestor comprador: reserva, arras y escritura revisadas. 890 € IVA incl. Sin comisión de agencia.",
    heroBullets: [
      "PAUs recientes: cargas de urbanización revisadas antes de la señal",
      "Compras a particular por Idealista o herencia familiar",
      "Gestor fijo hasta firma en notaría zaragozana",
    ],
    whyTitle: "Zaragoza: mercado entre particulares con documentación exigente",
    whySubtitle:
      "En operaciones sin agencia compradora, lo que no negocias antes de la señal casi nunca se arregla después. Livendia prioriza tu expediente, no la comisión del intermediario.",
    localZonesHeading: "Zonas donde acompañamos compradores en Aragón",
    localZones:
      "Casco Histórico, Delicias, Actur, Universidad, Valdespartera, Parque Goya, Rosales del Canal, Utebo, Cuarte de Huerva y municipios de la comarca — misma gestoría online con gestor de referencia.",
    heroImage: "/images/zaragoza2.jpg",
    localBenefits: [
      {
        title: "Cargas de urbanización en PAUs recientes",
        description:
          "En Valdespartera, Parque Goya o Rosales del Canal revisamos cargas registrales y urbanísticas antes de que la señal quede atada a un inmueble con afecciones ocultas.",
      },
      {
        title: "Herencias y titularidad registral",
        description:
          "Muchas compras en Zaragoza proceden de herencias familiares. Verificamos que la titularidad permite transmitir con garantías antes de entregar arras.",
      },
      {
        title: "ITE y derramas en el Casco Histórico",
        description:
          "Edificios antiguos con inspección técnica pendiente o acuerdos de rehabilitación en comunidad — los detectamos antes de que firmes.",
      },
      {
        title: "Compra sin comisión de comprador",
        description:
          "Encuentras el piso tú; nosotros blindamos el tramo legal con tarifa plana frente a honorarios encadenados de agencias.",
      },
      {
        title: "Plazos de hipoteca realistas",
        description:
          "Negociamos condición suspensiva y calendario con vendedor particular y banco para que no pierdas el piso por plazos imposibles.",
      },
      {
        title: "890 € todo el proceso",
        description: `${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido. Sin porcentaje sobre el precio de compra.`,
      },
    ],
    finalCtaTitle: "Cierra la compra en Zaragoza con documentación profesional",
  },
  oviedo: {
    keywords: [
      "comprar piso entre particulares oviedo",
      "gestor compra vivienda oviedo",
      "comprar piso sin agencia oviedo",
      "revisar reserva arras oviedo",
      "compraventa particulares asturias",
      "comprar piso particular los pilares oviedo",
    ],
    heroBadge: "Compra entre particulares · Oviedo y área metropolitana",
    heroH1: "Compra de particular a particular en Oviedo — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Oviedo | Asesor experto Livendia",
    metaDescription:
      "¿Compras en Oviedo (La Ería, Los Pilares, Pumarín, Teatinos)? Gestor comprador: reserva, arras y escritura revisadas. 890 € IVA incl. Sin comisión de agencia.",
    heroBullets: [
      "Compras a vecino, compañero o anuncio en portal",
      "ITE, cédula de habitabilidad y comunidad revisadas antes de la señal",
      "Gestor fijo hasta firma en notaría ovetense",
    ],
    whyTitle: "Oviedo: confianza en la visita, riesgo en el contrato",
    whySubtitle:
      "En barrios residenciales y el área metropolitana es habitual comprar a particular sin agencia compradora. Sin gestor, firmas lo que el vendedor envía.",
    localZonesHeading: "Barrios y municipios donde acompañamos compradores",
    localZones:
      "La Ería, Los Pilares, Pumarín, Teatinos, El Llano, Ciudad Naranco, Siero, Langreo, Mieres y municipios del área metropolitana — misma atención gestora online.",
    heroImage: "/images/oviedo2.jpg",
    localBenefits: [
      {
        title: "Reserva revisada antes del primer ingreso",
        description:
          "En operaciones ovetenses con prisa, frenamos cláusulas de penalización abusiva o señal desproporcionada antes de transferir dinero.",
      },
      {
        title: "Cédula de habitabilidad y ITE",
        description:
          "Verificamos certificados vigentes y estado del edificio — clave en bloques de Los Pilares o Pumarín con administradores saturados.",
      },
      {
        title: "Comunidad y derramas pendientes",
        description:
          "Revisamos actas y certificado de deuda cero antes de arras — el cuello de botella más habitual en ventas entre particulares en Oviedo.",
      },
      {
        title: "Sin pagar comisión al comprador",
        description:
          "Tu inversión va a gestoría (890 €), no a un porcentaje sobre el precio del piso por encontrar anuncio.",
      },
      {
        title: "Mediación con vendedor particular",
        description:
          "Redactamos o corregimos arras para que el vendedor las acepte sin romper la operación.",
      },
      {
        title: "Seguimiento hasta notaría ovetense",
        description: "Documentación ordenada y gestor disponible en cada hito previo a escritura.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Oviedo con documentación profesional",
  },
  gijon: {
    keywords: [
      "comprar piso entre particulares gijon",
      "gestor compra vivienda gijon",
      "comprar piso sin agencia gijon",
      "revisar reserva arras gijon",
      "compraventa particulares asturias costa",
      "comprar piso particular cimadevilla gijon",
    ],
    heroBadge: "Compra entre particulares · Gijón y costa asturiana",
    heroH1: "Compra de particular a particular en Gijón — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Gijón | Asesor experto Livendia",
    metaDescription:
      "¿Compras en Gijón (Cimadevilla, La Calzada, Roces, El Llano, costa)? Gestor comprador: reserva, arras y escritura. 890 € IVA incl. Sin comisión de agencia.",
    heroBullets: [
      "Compras a particular por Idealista o recomendación local",
      "Edificios costeros con ITE y derramas a revisar antes de la señal",
      "Plazos de hipoteca negociados antes de entregar arras",
    ],
    whyTitle: "Gijón: mercado entre particulares con edificios exigentes",
    whySubtitle:
      "En barrios céntricos, universitarios y la franja costera es habitual comprar sin agencia compradora. Livendia equilibra reserva y arras cuando compras a un particular.",
    localZonesHeading: "Zonas donde acompañamos compradores en Gijón",
    localZones:
      "Cimadevilla, Centro, La Calzada, Roces, El Llano, Somió, Playa de San Lorenzo, Villaviciosa oriente y municipios del área con el mismo protocolo documental.",
    heroImage: "/images/gijon2.jpg",
    localBenefits: [
      {
        title: "Arras equilibradas en mercado local",
        description:
          "Con precios en alza, una penalización mal redactada puede costar más que todo el servicio Livendia.",
      },
      {
        title: "ITE y estado del edificio costero",
        description:
          "Verificamos inspección técnica, obras en comunidad y licencias antes de que las arras te obliguen a asumir costes no vistos en la visita.",
      },
      {
        title: "Comunidades con obras y fondos de reserva",
        description:
          "Revisamos derramas y actas en edificios del centro y bloques recientes en La Calzada o Roces.",
      },
      {
        title: "Compra sin comisión de comprador",
        description:
          "Encuentras el piso tú; nosotros blindamos el tramo legal con tarifa plana.",
      },
      {
        title: "Coordinación hasta notaría gijonesa",
        description:
          "Checklist pre-escritura y coherencia entre reserva, arras y minuta notarial.",
      },
      {
        title: "Gestor dedicado, no rotación",
        description: "Un profesional conoce tu expediente de principio a fin.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Gijón con documentación profesional",
  },
  murcia: {
    keywords: [
      "comprar piso entre particulares murcia",
      "gestor compra vivienda murcia",
      "comprar piso sin agencia murcia",
      "revisar reserva arras murcia",
      "compraventa particulares espinardo murcia",
      "comprar piso particular huerta murcia",
    ],
    heroBadge: "Compra entre particulares · Murcia y área metropolitana",
    heroH1: "Compra de particular a particular en Murcia — con asesor experto en todo el proceso",
    metaTitle: "Comprar piso entre particulares en Murcia | Asesor experto Livendia",
    metaDescription:
      "¿Compras en Murcia (Centro, Espinardo, El Carmen, Vistabella, huerta)? Gestor comprador: reserva, arras y escritura. 890 € IVA incl. Sin comisión de agencia.",
    heroBullets: [
      "Urbanizaciones y herencias: documentación alineada antes de la señal",
      "Compras a particular por Idealista o familia",
      "Gestor fijo hasta firma en notaría murciana",
    ],
    whyTitle: "Murcia: operaciones familiares, contratos copiados",
    whySubtitle:
      "En capital y huerta metropolitana es habitual comprar entre particulares sin agencia compradora. Sin gestor, firmas lo que el vendedor envía.",
    localZonesHeading: "Barrios y municipios donde acompañamos compradores",
    localZones:
      "Centro, Espinardo, El Carmen, Vistabella, El Palmar, Alcantarilla, Molina de Segura, Alguazas y municipios del área — misma atención gestora online.",
    heroImage: "/images/gestoria3.jpg",
    localBenefits: [
      {
        title: "Reserva revisada antes del primer ingreso",
        description:
          "En operaciones murcianas con prisa, frenamos cláusulas de penalización abusiva o señal desproporcionada.",
      },
      {
        title: "Urbanizaciones y titularidad en herencias",
        description:
          "Muchas ventas entre familias requieren alinear titularidad y certificados antes de la fecha de escritura.",
      },
      {
        title: "Arras que reflejan la financiación real",
        description:
          "Condición suspensiva de hipoteca con plazos que los bancos suelen aceptar si se redactan bien.",
      },
      {
        title: "Sin pagar comisión al comprador",
        description:
          "Tu inversión va a gestoría (890 €), no a un porcentaje sobre el precio del piso.",
      },
      {
        title: "Mediación con vendedor particular",
        description:
          "Redactamos o corregimos arras para que el vendedor las acepte sin romper la operación.",
      },
      {
        title: "Seguimiento hasta notaría murciana",
        description: "Documentación ordenada y gestor disponible en cada hito previo a escritura.",
      },
    ],
    finalCtaTitle: "Cierra la compra en Murcia con documentación profesional",
  },
};
