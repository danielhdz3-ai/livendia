import type { LocalDifferentiationFields } from "@/lib/merge-local-differentiation";
import {
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
} from "@/lib/catalog.public";

/** Ciudades publicadas sin bloque en el archivo principal — copy único por mercado. */
export const ALQUILER_LOCAL_DIFFERENTIATION_EXTENDED: Record<string, LocalDifferentiationFields> = {
  sevilla: {
    keywords: [
      "contrato alquiler sevilla entre particulares",
      "contrato lau sevilla triana",
      "redactar contrato alquiler sevilla",
      "alquiler piso sevilla sin agencia",
      "contrato alquiler nervion macarena",
      "inventario alquiler sevilla lau",
      "contrato temporada estudiantes sevilla",
    ],
    metaTitle: "Contrato alquiler Sevilla entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Sevilla sin agencia: Triana, Nervión, Los Remedios, Macarena. 145 € IVA incl., inventario y revisión LAU. Livendia gestoría para particulares.",
    heroBadge: "Entre particulares · Sevilla",
    heroH1: "Contrato de alquiler en Sevilla entre particulares — LAU sin comisión de agencia",
    heroBullets: [
      "Triana, Nervión, Los Remedios, Macarena y Sevilla Este",
      `LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} o temporada ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
      "Inventario antes de entregar la fianza",
    ],
    whyTitle: "Sevilla: alquileres rápidos que necesitan contrato LAU serio",
    whySubtitle:
      "Muchos arrendamientos en Sevilla se cierran por Idealista o recomendación entre particulares. El PDF genérico no distingue temporada feria, curso US o LAU habitual — y ahí empiezan los conflictos.",
    localZonesHeading: "Barrios de Sevilla donde redactamos contratos LAU",
    localZones:
      "Triana, Los Remedios, Nervión, Macarena, Heliópolis, Sevilla Este, Tablada y municipios del área (Tomares, Camas, Alcalá de Guadaíra). Gestoría online Livendia con gestor dedicado.",
    localMarketInsight:
      "Sevilla combina demanda universitaria (US, Pablo de Olavide), rotación laboral en polígonos del entorno y presión turística en el centro. Los alquileres entre particulares suelen cerrarse en días: propietario e inquilino acuerdan renta en visita pero firman plantillas copiadas de otra ciudad. En barrios como Triana o Macarena es frecuente mezclar temporada feria o curso académico con contratos LAU mal redactados. Livendia adapta cláusulas al uso real — ocupación máxima, suministros, comunidad en edificios sin ascensor — antes de que entre la primera mensualidad.",
    localBenefits: [
      {
        title: "Temporada feria vs. LAU habitual",
        description:
          "Te orientamos si el arrendamiento es por Semana Santa, Feria o curso completo — modalidades distintas con obligaciones distintas.",
      },
      {
        title: "Pisos compartidos cerca de campus",
        description: "Normas de convivencia, limpieza y visitas en pisos de Nervión, Reina Mercedes o Los Bermejales.",
      },
      {
        title: "Comunidad en bloques sevillanos",
        description: "Clarificamos IBI, basuras y derramas antes de firmar en edificios del centro histórico o ensanche.",
      },
      {
        title: "Inventario fotográfico",
        description: "Azulejos, patios y carpintería documentados — clave en viviendas tradicionales.",
      },
      {
        title: "Sin captación de inquilinos",
        description: "No somos agencia: solo redactamos o revisamos el contrato entre las partes.",
      },
      {
        title: "Entrega en 48-72 h laborables",
        description: "Tras recibir datos del inmueble y de propietario e inquilino.",
      },
    ],
    finalCtaTitle: "Firma en Sevilla con contrato LAU entre particulares",
    faq: [
      {
        question: "¿El contrato de Sevilla vale para alquiler por habitaciones?",
        answer:
          "Sí. Redactamos LAU por habitación con reparto de gastos y normas de convivencia, o contrato de piso completo según el caso.",
      },
      {
        question: "¿Gestionáis alquileres en Tomares o Camas?",
        answer:
          "Sí. Si el inmueble está en el área metropolitana de Sevilla, aplicamos LAU estatal con adaptación al municipio concreto.",
      },
    ],
  },
  malaga: {
    keywords: [
      "contrato alquiler malaga entre particulares",
      "contrato lau malaga centro",
      "alquiler piso malaga sin agencia",
      "contrato temporada malaga costa",
      "redactar contrato alquiler teatinos",
      "contrato alquiler el palo",
      "inventario alquiler malaga lau",
    ],
    metaTitle: "Contrato alquiler Málaga entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Málaga y Costa del Sol próxima: Centro, Teatinos, El Palo. 145 € IVA incl., inventario y revisión profesional. Sin agencia.",
    heroBadge: "Entre particulares · Málaga",
    heroH1: "Contrato de alquiler en Málaga entre particulares — LAU sin comisión",
    heroBullets: [
      "Centro histórico, Teatinos, El Palo, Huelin",
      "Temporada turística o LAU habitual bien definidos",
      "Inventario y suministros claros desde el día uno",
    ],
    whyTitle: "Málaga: mercado mixto residencial-turístico",
    whySubtitle:
      "En Málaga conviven arrendamientos de larga duración, temporada en planta alta y pisos compartidos cerca del campus. Un mismo modelo PDF no sirve para los tres casos.",
    localZonesHeading: "Zonas de Málaga donde revisamos contratos",
    localZones:
      "Centro histórico, Teatinos, El Palo, La Malagueta, Huelin, Cruz de Humilladero y municipios costeros próximos (Rincón de la Victoria, Torremolinos).",
    localMarketInsight:
      "Málaga capital registra presión de vivienda por teletrabio, universidad y turismo residencial. Los propietarios que alquilan entre particulares suelen encontrar inquilino por Idealista en el centro o Teatinos, pero usan contratos pensados para Madrid o Barcelona. En El Palo o La Malagueta aparecen conflictos sobre ocupación máxima, uso turístico encubierto o mobiliario incluido. Livendia redacta cláusulas acordes al uso real — temporada con límite de estancia, LAU habitual con actualización de renta coherente, o habitación con reparto de gastos — antes de transferir la fianza.",
    localBenefits: [
      {
        title: "Temporada vs. residencia habitual",
        description: "Definimos límites de estancia y suministros cuando el inquilino viene por meses, no por años.",
      },
      {
        title: "Pisos cerca del campus",
        description: "Convivencia y preaviso en Teatinos, El Palo y Cruz de Humilladero.",
      },
      {
        title: "Comunidad y IBI en bloques costeros",
        description: "Gastos repercutidos sin lagunas en edificios con ascensor o sin él.",
      },
      {
        title: "Inventario de mobiliario",
        description: "Estado de electrodomésticos y terraza documentado en fotos.",
      },
      {
        title: "Gestoría, no agencia de alquiler",
        description: "145 € IVA incl. por contrato — sin mes de gestión sobre la renta.",
      },
      {
        title: "Coordinación online",
        description: "Propietario e inquilino pueden firmar desde cualquier provincia si el piso está en Málaga.",
      },
    ],
    finalCtaTitle: "Alquila en Málaga con contrato LAU revisado",
    faq: [
      {
        question: "¿Podéis redactar contrato de temporada en Málaga?",
        answer: `Sí. Si el arrendamiento es inferior a la duración LAU habitual, orientamos sobre contrato de temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) con cláusulas de salida y suministros.`,
      },
      {
        question: "¿Atendéis alquileres en Rincón de la Victoria?",
        answer: "Sí, siempre que el inmueble esté en la provincia de Málaga y las partes necesiten revisión contractual LAU.",
      },
    ],
  },
  zaragoza: {
    keywords: [
      "contrato alquiler zaragoza entre particulares",
      "contrato lau zaragoza delicias",
      "redactar contrato alquiler zaragoza",
      "alquiler piso zaragoza sin agencia",
      "contrato alquiler actur zaragoza",
      "inventario alquiler zaragoza",
      "contrato habitacion zaragoza lau",
    ],
    metaTitle: "Contrato alquiler Zaragoza entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Zaragoza: Casco Histórico, Delicias, Actur, Universidad. 145 € IVA incl. Entre propietario e inquilino sin agencia. Livendia.",
    heroBadge: "Entre particulares · Zaragoza",
    heroH1: "Contrato de alquiler en Zaragoza entre particulares — LAU sin agencia",
    heroBullets: [
      "Casco Histórico, Delicias, Actur, Valdespartera",
      "Actualización IPC y fianza LAU revisadas",
      "Pisos compartidos cerca de campus UZ",
    ],
    whyTitle: "Zaragoza: mercado estable con contratos mal adaptados",
    whySubtitle:
      "En Zaragoza muchos alquileres se cierran entre conocidos o por portales. Los borradores genéricos ignoran IPC, garantías adicionales mal redactadas o reparto de gastos en pisos compartidos.",
    localZonesHeading: "Zonas de Zaragoza donde redactamos contratos LAU",
    localZones:
      "Casco Histórico, Delicias, Universidad, Actur, Valdespartera, Las Fuentes, Torrero y barrios del entorno Expo.",
    localMarketInsight:
      "Zaragoza tiene un mercado de alquiler más pausado que Madrid o Barcelona, pero con rotación constante de estudiantes de la Universidad de Zaragoza y trabajadores de polígonos como Pla-Za o Malpica. Los arrendamientos entre particulares en Delicias o Actur suelen pactarse en una visita; el riesgo está en cláusulas de actualización de renta copiadas de otra comunidad autónoma o en fianzas que superan lo legal sin justificación. Livendia adapta el contrato al inmueble concreto — piso completo, habitación o temporada académica — con inventario y causas de resolución claras.",
    localBenefits: [
      {
        title: "IPC y revisión anual de renta",
        description: "Redactamos actualizaciones coherentes con LAU en mercado aragonés.",
      },
      {
        title: "Pisos compartidos universitarios",
        description: "Normas de convivencia en Delicias, San Francisco y zona campus.",
      },
      {
        title: "Fianza y garantías adicionales",
        description: "Verificamos que no se exija más depósito del permitido sin aval formal.",
      },
      {
        title: "Inventario incluido",
        description: "Estado de pintura y electrodomésticos antes de entregar llaves.",
      },
      {
        title: "Sin comisión de agencia",
        description: "Tarifa plana de gestoría contractual.",
      },
      {
        title: "Gestor dedicado",
        description: "Misma persona por WhatsApp desde el borrador hasta la firma.",
      },
    ],
    finalCtaTitle: "Cierra tu alquiler en Zaragoza con contrato LAU profesional",
    faq: [
      {
        question: "¿Redactáis contratos para pisos en Actur o Valdespartera?",
        answer: "Sí. Cubrimos toda Zaragoza capital y área metropolitana con el mismo protocolo LAU.",
      },
      {
        question: "¿Cuánto tardáis en entregar el contrato?",
        answer: "48-72 horas laborables desde que recibimos datos completos de las partes y del inmueble.",
      },
    ],
  },
  murcia: {
    keywords: [
      "contrato alquiler murcia entre particulares",
      "contrato lau murcia centro",
      "alquiler piso murcia sin agencia",
      "redactar contrato alquiler espinardo",
      "contrato alquiler habitacion murcia",
      "inventario alquiler murcia",
      "contrato lau vistabella murcia",
    ],
    metaTitle: "Contrato alquiler Murcia entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Murcia capital: Centro, Espinardo, Vistabella, El Carmen. 145 € IVA incl. Entre particulares sin agencia. Inventario Livendia.",
    heroBadge: "Entre particulares · Murcia",
    heroH1: "Contrato de alquiler en Murcia entre particulares — LAU sin agencia",
    heroBullets: [
      "Centro, Espinardo, Vistabella, El Carmen, campus UM",
      "Depósito y mantenimiento bien descritos",
      "Habitación o piso completo con LAU vigente",
    ],
    whyTitle: "Murcia: alquileres directos con documentación floja",
    whySubtitle:
      "En Murcia abundan acuerdos verbales entre propietario e inquilino — especialmente cerca del campus y en barrios residenciales. Sin contrato sólido, los conflictos por depósito o reformas aparecen al primer año.",
    localZonesHeading: "Barrios de Murcia donde revisamos contratos",
    localZones:
      "Centro histórico, Espinardo, Vistabella, El Carmen, La Flota, Santiago y El Palmar — más pedanías del área metropolitana.",
    localMarketInsight:
      "Murcia capital concentra demanda de estudiantes de la Universidad de Murcia y familias que buscan alquiler más asequible que en la costa. Los propietarios que alquilan sin agencia suelen usar modelos descargados de internet que no detallan quién paga comunidad, seguro del hogar o pequeñas reparaciones. En Espinardo y Vistabella es habitual el alquiler por habitación entre jóvenes; en el Centro, LAU habitual con inquilinos laboralmente estables. Livendia documenta el estado del inmueble y redacta cláusulas defendibles para ambas partes antes del ingreso de la fianza.",
    localBenefits: [
      {
        title: "Alquiler por habitación UM",
        description: "Reparto de suministros y normas de convivencia en pisos compartidos.",
      },
      {
        title: "Depósito y devolución",
        description: "Plazos y condiciones de devolución de fianza sin ambigüedades.",
      },
      {
        title: "Mantenimiento y reformas",
        description: "Separamos reparaciones del arrendatario de las del propietario.",
      },
      {
        title: "Inventario fotográfico",
        description: "Entrada documentada para evitar disputas a la salida.",
      },
      {
        title: "145 € IVA incl.",
        description: "Gestoría contractual frente a un mes de renta de agencia.",
      },
      {
        title: "Tramitación online",
        description: "Sin desplazarte a una oficina para revisar el borrador.",
      },
    ],
    finalCtaTitle: "Firma en Murcia con contrato LAU entre particulares",
    faq: [
      {
        question: "¿Gestionáis alquileres en Molina de Segura o Alcantarilla?",
        answer: "Sí, si el inmueble está en el área metropolitana de Murcia y necesitáis contrato LAU revisado.",
      },
      {
        question: "¿Incluye inventario el servicio?",
        answer: "Sí. El expediente incorpora inventario del estado del inmueble acordado con las partes.",
      },
    ],
  },
  palma: {
    keywords: [
      "contrato alquiler palma entre particulares",
      "contrato lau palma mallorca",
      "alquiler piso palma sin agencia",
      "contrato temporada palma mallorca",
      "redactar contrato alquiler santa catalina",
      "contrato alquiler son espanyol",
      "inventario alquiler palma lau",
    ],
    metaTitle: "Contrato alquiler Palma entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Palma de Mallorca: Casco Antiguo, Santa Catalina, Son Espanyol. 145 € IVA incl. Temporada o habitual. Sin agencia. Livendia.",
    heroBadge: "Entre particulares · Palma",
    heroH1: "Contrato de alquiler en Palma entre particulares — LAU sin agencia",
    heroBullets: [
      "Casco Antiguo, Santa Catalina, Son Espanyol, Playa de Palma",
      "Temporada turística o LAU bien delimitados",
      "Ocupación máxima y suministros por escrito",
    ],
    whyTitle: "Palma: presión turística exige contratos claros",
    whySubtitle:
      "En Palma la mezcla de uso residencial y temporal genera contratos ambiguos sobre ocupación, licencias y gastos. Adaptamos el texto al caso real antes de cobrar la renta.",
    localZonesHeading: "Zonas de Palma donde redactamos contratos",
    localZones:
      "Casco Antiguo, Santa Catalina, La Lonja, Son Espanyol, Pere Garau, Playa de Palma y barrios del ensanche.",
    localMarketInsight:
      "Palma de Mallorca tiene uno de los mercados más tensionados de Baleares: vivienda habitual, segunda residencia y estancias de meses conviven en el mismo edificio. Los arrendamientos entre particulares en Santa Catalina o el Casco suelen cerrarse rápido, pero las plantillas no distinguen temporada de LAU de larga duración ni limitan ocupación cuando hay turismo encubierto. Livendia redacta cláusulas sobre número de ocupantes, suministros, mobiliario y preaviso de salida acordes a la normativa estatal y al uso pactado en visita.",
    localBenefits: [
      {
        title: "Uso turístico vs. habitual",
        description: "Definimos modalidad correcta y evitamos contratos LAU mal aplicados.",
      },
      {
        title: "Ocupación máxima",
        description: "Límites claros de personas y pernoctaciones en pisos céntricos.",
      },
      {
        title: "Comunidad en edificios históricos",
        description: "IBI, ascensor y derramas en fincas del centro.",
      },
      {
        title: "Inventario detallado",
        description: "Mobiliario y estado de terrazas documentados.",
      },
      {
        title: "Sin captación",
        description: "No buscamos inquilino: solo blindamos el contrato.",
      },
      {
        title: "Gestor balear online",
        description: "Tramitación remota con gestor dedicado en español.",
      },
    ],
    finalCtaTitle: "Alquila en Palma con contrato LAU revisado por gestor",
    faq: [
      {
        question: "¿Redactáis contratos en Mallorca para propietarios fuera de la isla?",
        answer: "Sí. Propietario e inquilino pueden contratar online si el inmueble está en Palma o área próxima.",
      },
      {
        question: "¿Podéis distinguir temporada de LAU habitual en Palma?",
        answer: `Sí. Te orientamos sobre contrato de temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) o LAU según duración y motivo del arrendamiento.`,
      },
    ],
  },
  "las-palmas": {
    keywords: [
      "contrato alquiler las palmas entre particulares",
      "contrato lau las palmas gran canaria",
      "alquiler piso las palmas sin agencia",
      "contrato alquiler vegueta triana gc",
      "redactar contrato alquiler las palmas",
      "contrato temporada las palmas",
      "inventario alquiler gran canaria",
    ],
    metaTitle: "Contrato alquiler Las Palmas entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Las Palmas de Gran Canaria: Vegueta, Triana, Mesa y López. 145 € IVA incl. Entre particulares. Inventario Livendia.",
    heroBadge: "Entre particulares · Las Palmas",
    heroH1: "Contrato de alquiler en Las Palmas entre particulares — LAU sin agencia",
    heroBullets: [
      "Vegueta, Triana, Mesa y López, Tafira, campus ULPGC",
      "Temporada laboral o LAU habitual",
      "Inventario y suministros desde el primer día",
    ],
    whyTitle: "Las Palmas: mercado insular con particularidades",
    whySubtitle:
      "En Gran Canaria los alquileres entre particulares mezclan estancias laborales temporales, estudiantes y residencia habitual. Un PDF peninsular suele ignorar humedad, climatización o logística de mudanza insular.",
    localZonesHeading: "Barrios de Las Palmas donde revisamos contratos",
    localZones:
      "Vegueta, Triana, Mesa y López, Ciudad Jardín, Tafira, La Isleta y zona portuaria — más municipios del área (Telde, San Cristóbal).",
    localMarketInsight:
      "Las Palmas de Gran Canaria recibe flujo constante de trabajadores portuarios, teletrabajadores y estudiantes de la ULPGC. Los propietarios que alquilan sin agencia en Triana o Mesa y López suelen cerrar por recomendación o Idealista, pero usan contratos genéricos que no contemplan climatización, humedad en planta baja o estancias inferiores a un año. Livendia adapta cláusulas al inmueble real — terraza, parking, mobiliario incluido — y distingue temporada de LAU habitual antes de firmar.",
    localBenefits: [
      {
        title: "Temporada laboral vs. LAU",
        description: "Modalidad acorde si el inquilino viene por proyecto o curso.",
      },
      {
        title: "Climatización y suministros",
        description: "Reparto de luz, agua y aire acondicionado en clima canario.",
      },
      {
        title: "Pisos compartidos ULPGC",
        description: "Convivencia en Tafira y Ciudad Jardín.",
      },
      {
        title: "Inventario con fotos",
        description: "Estado de terraza y carpintería exterior.",
      },
      {
        title: "Gestoría online",
        description: "Sin necesidad de oficina física en la isla.",
      },
      {
        title: "145 € IVA incl.",
        description: "Tarifa plana frente a comisión de agencia.",
      },
    ],
    finalCtaTitle: "Firma en Las Palmas con contrato LAU entre particulares",
    faq: [
      {
        question: "¿Atendéis alquileres en Telde o San Cristóbal?",
        answer: "Sí, si el inmueble está en Gran Canaria y las partes necesitan contrato LAU revisado.",
      },
      {
        question: "¿Podéis redactar contrato si propietario e inquilino están en península?",
        answer: "Sí. La tramitación es online; lo importante es que el piso esté en Las Palmas de Gran Canaria.",
      },
    ],
  },
  bilbao: {
    keywords: [
      "contrato alquiler bilbao entre particulares",
      "contrato lau bilbao abando",
      "alquiler piso bilbao sin agencia",
      "redactar contrato alquiler deusto",
      "contrato alquiler bilbao basurto",
      "inventario alquiler bilbao lau",
      "contrato habitacion bilbao",
    ],
    metaTitle: "Contrato alquiler Bilbao entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Bilbao: Abando, Deusto, Basurto, Indautxu. 145 € IVA incl. Entre propietario e inquilino sin agencia. Livendia.",
    heroBadge: "Entre particulares · Bilbao",
    heroH1: "Contrato de alquiler en Bilbao entre particulares — LAU sin agencia",
    heroBullets: [
      "Abando, Deusto, Basurto, Indautxu, Santutxu",
      "Fianza LAU y actualización de renta revisadas",
      "Pisos compartidos cerca de UPV/EHU",
    ],
    whyTitle: "Bilbao: mercado vasco con contratos copiados de Madrid",
    whySubtitle:
      "En Bilbao los alquileres entre particulares crecen en Deusto y el ensanche. Las plantillas peninsulares ignoran idioma, comunidad en bloques de piedra o garantías adicionales mal redactadas.",
    localZonesHeading: "Barrios de Bilbao donde redactamos contratos LAU",
    localZones:
      "Abando, Indautxu, Deusto, Basurto, Santutxu, Begoña, Rekalde y margen izquierda (Getxo, Leioa, Erandio).",
    localMarketInsight:
      "Bilbao combina demanda universitaria en Deusto, familias en Indautxu y jóvenes profesionales en Abando. Los arrendamientos directos entre particulares suelen pactarse tras una visita en el ensanche, pero el borrador llega de un PDF genérico sin adaptar a la comunidad autónoma vasca ni al edificio concreto — ascensor antiguo, trastero incluido, parking en garaje comunitario. Livendia redacta cláusulas de gastos, fianza, preaviso e inventario acordes al LAU estatal y al inmueble antes de la primera transferencia.",
    localBenefits: [
      {
        title: "Pisos compartidos Deusto-UPV",
        description: "Normas de convivencia y reparto de gastos en pisos de estudiantes.",
      },
      {
        title: "Comunidad y IBI",
        description: "Gastos repercutidos sin lagunas en bloques del ensanche.",
      },
      {
        title: "Garantías adicionales",
        description: "Aval o depósito extra solo si cumple requisitos legales.",
      },
      {
        title: "Inventario incluido",
        description: "Estado de cocina y baño documentado.",
      },
      {
        title: "Sin comisión de agencia",
        description: "145 € IVA incl. por gestoría contractual.",
      },
      {
        title: "Gestor dedicado",
        description: "Seguimiento por WhatsApp hasta la firma.",
      },
    ],
    finalCtaTitle: "Alquila en Bilbao con contrato LAU revisado",
    faq: [
      {
        question: "¿Gestionáis alquileres en Getxo o Leioa?",
        answer: "Sí, si el inmueble está en el área metropolitana de Bilbao y necesitáis contrato LAU profesional.",
      },
      {
        question: "¿Redactáis contratos en euskera?",
        answer: "Redactamos en castellano con cláusulas LAU vigentes; si necesitáis versión bilingüe, consúltanos por WhatsApp.",
      },
    ],
  },
  alicante: {
    keywords: [
      "contrato alquiler alicante entre particulares",
      "contrato lau alicante centro",
      "alquiler piso alicante sin agencia",
      "contrato alquiler playa san juan",
      "redactar contrato alquiler alicante",
      "contrato habitacion alicante universidad",
      "inventario alquiler alicante",
    ],
    metaTitle: "Contrato alquiler Alicante entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Alicante: Centro, Playa San Juan, San Blas, Universidad. 145 € IVA incl. Sin agencia. Inventario Livendia.",
    heroBadge: "Entre particulares · Alicante",
    heroH1: "Contrato de alquiler en Alicante entre particulares — LAU sin agencia",
    heroBullets: [
      "Centro, Playa San Juan, San Blas, Carolinas",
      "Temporada o LAU según estancia real",
      "Inventario antes de la fianza",
    ],
    whyTitle: "Alicante: costa, universidad y contratos genéricos",
    whySubtitle:
      "En Alicante conviven arrendamientos anuales, estancias de curso y pisos cerca de la playa. El mismo PDF no vale para los tres perfiles de inquilino.",
    localZonesHeading: "Zonas de Alicante donde revisamos contratos",
    localZones:
      "Centro, Playa San Juan, San Blas, Carolinas Altas, Benalúa, Universidad y San Vicente del Raspeig colindante.",
    localMarketInsight:
      "Alicante capital atrae estudiantes de la UA, trabajadores del puerto y familias que buscan vivienda cerca del mar. Los alquileres entre particulares en Playa San Juan o el Centro se cierran rápido en temporada alta, pero las cláusulas sobre ocupación, mobiliario de terraza o comunidad en edificios con ascensor quedan mal definidas. Livendia adapta el contrato al uso real — habitación en piso compartido, LAU habitual en Carolinas o temporada en primera línea — con inventario fotográfico y suministros claros.",
    localBenefits: [
      {
        title: "Playa vs. centro urbano",
        description: "Cláusulas distintas según ubicación y perfil de inquilino.",
      },
      {
        title: "Pisos compartidos UA",
        description: "Convivencia en San Vicente y zona universitaria.",
      },
      {
        title: "Comunidad y seguros",
        description: "Obligaciones de propietario e inquilino bien repartidas.",
      },
      {
        title: "Inventario de terraza",
        description: "Mobiliario exterior documentado en fotos.",
      },
      {
        title: "145 € IVA incl.",
        description: "Gestoría sin mes de renta de agencia.",
      },
      {
        title: "Entrega 48-72 h",
        description: "Borrador revisado en días laborables.",
      },
    ],
    finalCtaTitle: "Firma en Alicante con contrato LAU entre particulares",
    faq: [
      {
        question: "¿Atendéis alquileres en Elche o San Vicente?",
        answer: "Sí, si el inmueble está en el área de Alicante y necesitáis revisión LAU profesional.",
      },
      {
        question: "¿Incluye contrato por habitación?",
        answer: "Sí. Redactamos LAU por habitación con normas de convivencia y reparto de gastos.",
      },
    ],
  },
  cordoba: {
    keywords: [
      "contrato alquiler cordoba entre particulares",
      "contrato lau cordoba juderia",
      "alquiler piso cordoba sin agencia",
      "redactar contrato alquiler cordoba",
      "contrato alquiler levante cordoba",
      "contrato habitacion cordoba uco",
      "inventario alquiler cordoba",
    ],
    metaTitle: "Contrato alquiler Córdoba entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Córdoba: Judería, Levante, sector sur, UCO. 145 € IVA incl. Entre particulares sin agencia. Livendia.",
    heroBadge: "Entre particulares · Córdoba",
    heroH1: "Contrato de alquiler en Córdoba entre particulares — LAU sin agencia",
    heroBullets: [
      "Judería, Levante, sector sur, Ciudad Jardín, UCO",
      "Patios y vivienda tradicional en inventario",
      "Pisos compartidos universitarios",
    ],
    whyTitle: "Córdoba: patrimonio histórico y contratos descuidados",
    whySubtitle:
      "En el casco histórico y cerca de la UCO abundan alquileres entre particulares con acuerdos verbales sobre patios, humedades o convivencia en pisos compartidos.",
    localZonesHeading: "Barrios de Córdoba donde redactamos contratos",
    localZones:
      "Judería, Centro, Levante, sector sur, Ciudad Jardín, El Brillante y campus UCO — más pedanías del área.",
    localMarketInsight:
      "Córdoba mezcla turismo en el casco histórico, estudiantes de la UCO y familias en expansión sur. Los propietarios que alquilan sin agencia suelen subestimar cláusulas sobre patios, humedades estacionales o convivencia en pisos de tres habitaciones cerca del campus. Livendia redacta contratos LAU con inventario detallado — carpintería, azulejos, climatización — y normas de preaviso acordes al mercado cordobés antes de entregar llaves.",
    localBenefits: [
      {
        title: "Vivienda tradicional",
        description: "Patios, humedades y mantenimiento en casco histórico.",
      },
      {
        title: "Pisos UCO compartidos",
        description: "Convivencia y limpieza en Ciudad Jardín y Levante.",
      },
      {
        title: "Fianza LAU",
        description: "Depósito legal y plazos de devolución claros.",
      },
      {
        title: "Inventario fotográfico",
        description: "Estado de estancias antes de mudanza.",
      },
      {
        title: "Sin agencia de alquiler",
        description: "Solo gestoría contractual a tarifa plana.",
      },
      {
        title: "Gestor online",
        description: "Tramitación remota con seguimiento dedicado.",
      },
    ],
    finalCtaTitle: "Alquila en Córdoba con contrato LAU revisado",
    faq: [
      {
        question: "¿Redactáis contratos para pisos en la Judería?",
        answer: "Sí. Adaptamos cláusulas a viviendas históricas con particularidades de mantenimiento y comunidad.",
      },
      {
        question: "¿Cuánto cuesta frente a una agencia?",
        answer: "Livendia cobra 145 € IVA incl. por contrato LAU; una agencia suele pedir un mes de renta o porcentaje.",
      },
    ],
  },
  valladolid: {
    keywords: [
      "contrato alquiler valladolid entre particulares",
      "contrato lau valladolid parquesol",
      "alquiler piso valladolid sin agencia",
      "redactar contrato alquiler delicias valladolid",
      "contrato habitacion valladolid uva",
      "inventario alquiler valladolid",
      "contrato alquiler rondilla valladolid",
    ],
    metaTitle: "Contrato alquiler Valladolid entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Valladolid: Centro, Parquesol, Delicias, Rondilla, UVA. 145 € IVA incl. Sin agencia. Livendia gestoría.",
    heroBadge: "Entre particulares · Valladolid",
    heroH1: "Contrato de alquiler en Valladolid entre particulares — LAU sin agencia",
    heroBullets: [
      "Centro, Parquesol, Delicias, Rondilla, campus UVA",
      "Herencias y alquiler entre conocidos bien documentados",
      "Inventario y fianza LAU revisados",
    ],
    whyTitle: "Valladolid: mercado pausado, conflictos por depósito",
    whySubtitle:
      "En Valladolid muchos alquileres son entre vecinos, familiares o compradores de otra provincia. Sin contrato sólido, las disputas por fianza o estado del piso aparecen al final del arrendamiento.",
    localZonesHeading: "Barrios de Valladolid donde revisamos contratos",
    localZones:
      "Centro, Parquesol, Delicias, Rondilla, La Victoria, Barrio España y zona campus UVA.",
    localMarketInsight:
      "Valladolid tiene un mercado de alquiler más estable que las grandes capitales: precios medios moderados, rotación universitaria en Delicias y Parquesol, y propietarios senior que alquilan piso heredado a conocidos. El perfil típico es arrendamiento entre particulares sin agencia — comprador de otra provincia, compañero de trabajo o familia extendida — con contrato copiado de internet. Livendia documenta inventario, fianza legal y causas de resolución antes del primer ingreso, evitando litigios cuando el inquilino abandona el piso o pide devolución del depósito.",
    localBenefits: [
      {
        title: "Alquiler entre conocidos",
        description: "Contrato profesional aunque las partes se conozcan de años.",
      },
      {
        title: "Pisos UVA compartidos",
        description: "Convivencia en Delicias y zona campus.",
      },
      {
        title: "Fianza y devolución",
        description: "Plazos legales sin cláusulas abusivas.",
      },
      {
        title: "Inventario incluido",
        description: "Estado del inmueble en fotos antes de entrar.",
      },
      {
        title: "145 € IVA incl.",
        description: "Tarifa plana de gestoría.",
      },
      {
        title: "Gestor dedicado",
        description: "Un interlocutor hasta la firma.",
      },
    ],
    finalCtaTitle: "Cierra tu alquiler en Valladolid con contrato LAU",
    faq: [
      {
        question: "¿Gestionáis alquileres en Laguna de Duero o Arroyo?",
        answer: "Sí, si el inmueble está en el área metropolitana de Valladolid.",
      },
      {
        question: "¿Sirve si alquilo a un familiar?",
        answer: "Sí. Incluso entre familiares conviene contrato LAU con inventario para evitar conflictos futuros.",
      },
    ],
  },
  vigo: {
    keywords: [
      "contrato alquiler vigo entre particulares",
      "contrato lau vigo casco",
      "alquiler piso vigo sin agencia",
      "redactar contrato alquiler coia vigo",
      "contrato alquiler bouzas vigo",
      "contrato habitacion vigo universidad",
      "inventario alquiler vigo",
    ],
    metaTitle: "Contrato alquiler Vigo entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Vigo: Casco, Coia, Bouzas, Balaídos. 145 € IVA incl. Entre particulares sin agencia. Livendia.",
    heroBadge: "Entre particulares · Vigo",
    heroH1: "Contrato de alquiler en Vigo entre particulares — LAU sin agencia",
    heroBullets: [
      "Casco, Coia, Bouzas, Balaídos, Samil",
      "Humedad y climatización en cláusulas",
      "Pisos compartidos cerca del campus",
    ],
    whyTitle: "Vigo: puerto, universidad y contratos peninsulares",
    whySubtitle:
      "En Vigo los alquileres directos son habituales en Coia y el ensanche. Los PDF genéricos no contemplan humedad atlántica, trasteros en bloques altos o reparto de gastos en pisos compartidos.",
    localZonesHeading: "Barrios de Vigo donde redactamos contratos LAU",
    localZones:
      "Casco, Coia, Bouzas, Balaídos, Lavadores, Samil y zona universitaria — más Nigrán y otras localidades del área.",
    localMarketInsight:
      "Vigo concentra demanda portuaria, universitaria y de teletrabajo con vistas a la ría. Los arrendamientos entre particulares en Coia o Bouzas suelen cerrarse por Idealista en pocos días, pero las plantillas no mencionan humedad, calefacción eléctrica o normas de convivencia en pisos de cuatro habitaciones. Livendia redacta LAU con inventario, suministros y preaviso adaptados al clima gallego y al edificio concreto antes de transferir la fianza.",
    localBenefits: [
      {
        title: "Humedad y mantenimiento",
        description: "Cláusulas sobre ventilación y reparaciones en clima atlántico.",
      },
      {
        title: "Pisos compartidos",
        description: "Convivencia en Coia y zona campus.",
      },
      {
        title: "Comunidad en bloques altos",
        description: "Ascensor, IBI y derramas claros.",
      },
      {
        title: "Inventario fotográfico",
        description: "Estado de estancias documentado.",
      },
      {
        title: "Sin comisión de agencia",
        description: "145 € IVA incl. por gestoría.",
      },
      {
        title: "Tramitación online",
        description: "Gestor dedicado por WhatsApp.",
      },
    ],
    finalCtaTitle: "Alquila en Vigo con contrato LAU revisado",
    faq: [
      {
        question: "¿Atendéis alquileres en Nigrán o Mos?",
        answer: "Sí, si el inmueble está en el área metropolitana de Vigo y necesitáis contrato LAU.",
      },
      {
        question: "¿Redactáis contrato por habitación en Vigo?",
        answer: "Sí, con reparto de gastos y normas de convivencia para pisos compartidos.",
      },
    ],
  },
  gijon: {
    keywords: [
      "contrato alquiler gijon entre particulares",
      "contrato lau gijon cimadevilla",
      "alquiler piso gijon sin agencia",
      "redactar contrato alquiler gijon",
      "contrato alquiler la calzada gijon",
      "contrato habitacion gijon universidad",
      "inventario alquiler gijon",
    ],
    metaTitle: "Contrato alquiler Gijón entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Gijón: Cimadevilla, La Calzada, El Llano, Laboral. 145 € IVA incl. Sin agencia. Livendia gestoría.",
    heroBadge: "Entre particulares · Gijón",
    heroH1: "Contrato de alquiler en Gijón entre particulares — LAU sin agencia",
    heroBullets: [
      "Cimadevilla, La Calzada, El Llano, Montevil, Laboral",
      "Climatización y humedad en cláusulas",
      "Pisos compartidos y LAU habitual",
    ],
    whyTitle: "Gijón: costa asturiana con alquileres directos",
    whySubtitle:
      "En Gijón los arrendamientos entre particulares mezclan residencia habitual, estudiantes del campus y segunda residencia próxima al mar. Un contrato genérico no cubre las tres realidades.",
    localZonesHeading: "Barrios de Gijón donde revisamos contratos",
    localZones:
      "Cimadevilla, La Calzada, El Llano, Montevil, Tremañes, Laboral y playas del entorno — más Oviedo colindante en operaciones duplicadas.",
    localMarketInsight:
      "Gijón es el mayor mercado de alquiler de Asturias: demanda universitaria en Montevil, familias en La Calzada y pisos con vistas en Cimadevilla. Los propietarios que alquilan sin agencia suelen usar modelos que no contemplan calefacción, humedades de costa o convivencia en pisos compartidos cerca del campus. Livendia adapta cláusulas LAU al inmueble — terraza, trastero, parking — con inventario fotográfico antes de la firma.",
    localBenefits: [
      {
        title: "Clima y calefacción",
        description: "Reparto de gastos de calefacción en invierno asturiano.",
      },
      {
        title: "Pisos compartidos campus",
        description: "Normas de convivencia en Montevil y Tremañes.",
      },
      {
        title: "Comunidad en bloques",
        description: "IBI, ascensor y derramas sin lagunas.",
      },
      {
        title: "Inventario incluido",
        description: "Estado del piso documentado en fotos.",
      },
      {
        title: "145 € IVA incl.",
        description: "Gestoría sin mes de renta de agencia.",
      },
      {
        title: "Gestor online",
        description: "Tramitación remota con seguimiento dedicado.",
      },
    ],
    finalCtaTitle: "Firma en Gijón con contrato LAU entre particulares",
    faq: [
      {
        question: "¿Gestionáis alquileres en Avilés o Oviedo también?",
        answer: "Sí. Tenemos landings específicas para Asturias; en Gijón aplicamos el mismo protocolo LAU.",
      },
      {
        question: "¿Incluye inventario el servicio?",
        answer: "Sí. El expediente incorpora inventario acordado con propietario e inquilino.",
      },
    ],
  },
  granada: {
    keywords: [
      "contrato alquiler granada entre particulares",
      "contrato lau granada albaicin",
      "alquiler piso granada sin agencia",
      "redactar contrato alquiler zaidin",
      "contrato alquiler realejo granada",
      "contrato habitacion granada ugr",
      "inventario alquiler granada",
    ],
    metaTitle: "Contrato alquiler Granada entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Granada: Albaicín, Zaidín, Realejo, UGR. 145 € IVA incl. Entre particulares sin agencia. Livendia.",
    heroBadge: "Entre particulares · Granada",
    heroH1: "Contrato de alquiler en Granada entre particulares — LAU sin agencia",
    heroBullets: [
      "Albaicín, Zaidín, Realejo, Chana, campus UGR",
      "Casco histórico y pisos universitarios",
      "Inventario antes de entregar fianza",
    ],
    whyTitle: "Granada: patrimonio UNESCO y pisos compartidos",
    whySubtitle:
      "En Granada conviven alquileres en casco histórico, pisos de la UGR y familias en Zaidín. Los contratos copiados no distinguen modalidades ni mantenimiento en edificios antiguos.",
    localZonesHeading: "Barrios de Granada donde redactamos contratos",
    localZones:
      "Albaicín, Realejo, Zaidín, Ronda, Chana, Cartuja y campus UGR — más municipios del área metropolitana.",
    localMarketInsight:
      "Granada mezcla turismo residencial, estudiantes de la UGR y familias en expansión en Zaidín. Los arrendamientos entre particulares en Realejo o el Albaicín suelen pactarse en visita, pero las cláusulas sobre obras en edificios históricos, convivencia en pisos de cinco habitaciones o suministros en planta sin ascensor quedan mal definidas. Livendia redacta LAU con inventario detallado y normas de preaviso acordes al barrio concreto antes del primer ingreso.",
    localBenefits: [
      {
        title: "Casco histórico",
        description: "Mantenimiento, humedades y comunidad en edificios antiguos.",
      },
      {
        title: "Pisos UGR compartidos",
        description: "Convivencia en Cartuja, Zaidín y Realejo.",
      },
      {
        title: "Temporada vs. LAU",
        description: "Modalidad correcta según duración del arrendamiento.",
      },
      {
        title: "Inventario fotográfico",
        description: "Azulejos, patios y carpintería documentados.",
      },
      {
        title: "Sin agencia",
        description: "145 € IVA incl. por gestoría contractual.",
      },
      {
        title: "Gestor dedicado",
        description: "Seguimiento online hasta la firma.",
      },
    ],
    finalCtaTitle: "Alquila en Granada con contrato LAU revisado",
    faq: [
      {
        question: "¿Redactáis contratos para pisos en el Albaicín?",
        answer: "Sí. Adaptamos cláusulas a viviendas históricas con particularidades de mantenimiento y accesibilidad.",
      },
      {
        question: "¿Podéis gestionar alquiler por habitación cerca de la UGR?",
        answer: "Sí, con reparto de gastos, limpieza y normas de convivencia por escrito.",
      },
    ],
  },
  santander: {
    keywords: [
      "contrato alquiler santander entre particulares",
      "contrato lau santander centro",
      "alquiler piso santander sin agencia",
      "redactar contrato alquiler sardinero",
      "contrato alquiler cueto santander",
      "contrato habitacion santander universidad",
      "inventario alquiler santander",
    ],
    metaTitle: "Contrato alquiler Santander entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Santander: Centro, Sardinero, Cueto, UC. 145 € IVA incl. Sin agencia. Inventario Livendia.",
    heroBadge: "Entre particulares · Santander",
    heroH1: "Contrato de alquiler en Santander entre particulares — LAU sin agencia",
    heroBullets: [
      "Centro, Sardinero, Cueto, Nueva Montaña, UC",
      "Estudiantes y familias — contratos adaptados",
      "Inventario y fianza LAU revisados",
    ],
    whyTitle: "Santander: universidad, playa y contratos genéricos",
    whySubtitle:
      "En Santander los alquileres directos son habituales cerca del campus y en el Sardinero. Sin revisión LAU, los conflictos por fianza o estado del piso aparecen al final del curso o del arrendamiento.",
    localZonesHeading: "Barrios de Santander donde revisamos contratos",
    localZones:
      "Centro, Sardinero, Cueto, Nueva Montaña, Peñacastillo y zona Universidad de Cantabria.",
    localMarketInsight:
      "Santander combina demanda universitaria de la UC, familias en el centro y pisos de segunda residencia en el Sardinero. Los propietarios que alquilan entre particulares suelen cerrar en septiembre o enero — inicio de curso o temporal laboral — con contratos descargados que no detallan calefacción, humedad de costa o convivencia en pisos compartidos. Livendia redacta LAU con inventario y suministros claros antes de la mudanza.",
    localBenefits: [
      {
        title: "Curso universitario",
        description: "Contratos acordes a estancias de curso o año académico.",
      },
      {
        title: "Climatización costera",
        description: "Gastos de calefacción y ventilación en cláusulas.",
      },
      {
        title: "Pisos compartidos UC",
        description: "Normas de convivencia cerca del campus.",
      },
      {
        title: "Inventario incluido",
        description: "Estado del inmueble en fotos.",
      },
      {
        title: "145 € IVA incl.",
        description: "Tarifa plana de gestoría.",
      },
      {
        title: "Gestor online",
        description: "Tramitación remota con seguimiento dedicado.",
      },
    ],
    finalCtaTitle: "Cierra tu alquiler en Santander con contrato LAU",
    faq: [
      {
        question: "¿Atendéis alquileres en Camargo o Astillero?",
        answer: "Sí, si el inmueble está en el área metropolitana de Santander.",
      },
      {
        question: "¿Redactáis contrato de temporada para curso universitario?",
        answer: `Sí. Te orientamos sobre LAU habitual o temporada (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) según duración real.`,
      },
    ],
  },
  pamplona: {
    keywords: [
      "contrato alquiler pamplona entre particulares",
      "contrato lau pamplona ensanche",
      "alquiler piso pamplona sin agencia",
      "redactar contrato alquiler iturrama",
      "contrato alquiler rochapea pamplona",
      "contrato habitacion pamplona upna",
      "inventario alquiler pamplona",
    ],
    metaTitle: "Contrato alquiler Pamplona entre particulares — 145 € IVA incl.",
    metaDescription:
      "Contrato LAU en Pamplona: Ensanche, Iturrama, Rochapea, UPNA. 145 € IVA incl. Entre particulares sin agencia. Livendia.",
    heroBadge: "Entre particulares · Pamplona",
    heroH1: "Contrato de alquiler en Pamplona entre particulares — LAU sin agencia",
    heroBullets: [
      "Ensanche, Iturrama, Rochapea, San Juan, UPNA",
      "San Fermín y curso universitario — modalidad correcta",
      "Inventario y fianza LAU revisados",
    ],
    whyTitle: "Pamplona: San Fermín, universidad y alquileres directos",
    whySubtitle:
      "En Pamplona conviven arrendamientos anuales, estancias de curso y picos de demanda en julio. Un contrato genérico no distingue temporada de LAU habitual ni limita ocupación.",
    localZonesHeading: "Barrios de Pamplona donde redactamos contratos",
    localZones:
      "Ensanche, Iturrama, Rochapea, San Juan, Buztintxuri, Mendillorri y zona campus UPNA — más Burlada y Cuarte.",
    localMarketInsight:
      "Pamplona tiene demanda estable de la UPNA, trabajadores de Navarra y picos turísticos en San Fermín. Los alquileres entre particulares en Iturrama o el Ensanche suelen cerrarse por recomendación o Idealista, pero las plantillas no contemplan estancias de curso, ocupación en julio o reparto de gastos en pisos compartidos. Livendia adapta cláusulas LAU al uso real — habitación, piso completo o temporada — con inventario antes de entregar la fianza.",
    localBenefits: [
      {
        title: "Curso UPNA",
        description: "Contratos para estancias académicas o anuales.",
      },
      {
        title: "San Fermín y temporadas",
        description: "Modalidad acorde si el arrendamiento es inferior a un año.",
      },
      {
        title: "Pisos compartidos",
        description: "Convivencia en Iturrama y Mendillorri.",
      },
      {
        title: "Inventario fotográfico",
        description: "Estado del inmueble documentado.",
      },
      {
        title: "145 € IVA incl.",
        description: "Gestoría sin comisión de agencia.",
      },
      {
        title: "Gestor dedicado",
        description: "Seguimiento online hasta la firma.",
      },
    ],
    finalCtaTitle: "Alquila en Pamplona con contrato LAU revisado",
    faq: [
      {
        question: "¿Gestionáis alquileres en Burlada o Cuarte?",
        answer: "Sí, si el inmueble está en el área metropolitana de Pamplona.",
      },
      {
        question: "¿Podéis redactar contrato para estancia de curso completo?",
        answer: "Sí. Te orientamos sobre LAU habitual o contrato de temporada según duración y motivo.",
      },
    ],
  },
};
