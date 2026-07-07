import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";

export const TEMPORADA_LOCAL_DIFFERENTIATION: Record<
  string,
  LocalCityLandingFields & { faq?: readonly { question: string; answer: string }[] }
> = {
  madrid: {
    metaTitle: "Contrato alquiler temporada Madrid particulares — 200 € | Livendia",
    metaDescription:
      "Contrato de alquiler por temporada entre particulares en Madrid: 200 € IVA incl., 24-48 h. Oposiciones, desplazamientos y estancias acotadas. Sin comisión de agencia.",
    keywords: [
      "contrato alquiler temporada madrid particulares",
      "contrato temporada oposicion madrid",
      "alquiler temporal entre particulares madrid",
      "redactar contrato alquiler temporada madrid",
    ],
    heroBadge: "Entre particulares · Temporada · Madrid",
    heroH1: `Contrato de alquiler por temporada en Madrid entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
    heroImage: "/images/madrid1.jpg",
    heroBullets: [
      "Propietario e inquilino sin comisión de agencia",
      "Oposiciones, másteres, Azca y estancias laborales",
      "Causa de temporalidad y fianza 2 meses · 24-48 h",
    ],
    whyTitle: "Madrid: estancias acotadas, contrato acorde",
    whySubtitle:
      "Oposiciones, desplazamientos corporativos y másteres intensivos exigen un contrato fuera del LAU de vivienda habitual. Adaptamos el texto al motivo real de la estancia.",
    localZonesHeading: "Zonas de Madrid donde redactamos contratos de temporada",
    localZones:
      "Centro, Salamanca, Chamberí, Retiro, Moncloa, Tetuán, Carabanchel, Vallecas y municipios del cinturón (Móstoles, Getafe, Alcobendas). Misma gestoría online en toda la Comunidad de Madrid.",
    localBenefits: [
      {
        title: "Oposiciones y funcionarios en tránsito",
        description: "Duración ligada a convocatoria, academia o periodo de pruebas en sedes de la capital.",
      },
      {
        title: "Ejecutivos en Castellana y Azca",
        description: "Proyectos con fecha de fin, empresa y condiciones de prórroga por escrito.",
      },
      {
        title: "Rodajes y equipos audiovisuales",
        description: "Entrega y devolución del piso documentadas con inventario.",
      },
      {
        title: "Fianza de dos mensualidades",
        description: "Art. 36.1 LAU para uso distinto de vivienda — no confundir con LAU habitual.",
      },
      {
        title: "Sin comisión de agencia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. tarifa plana gestoría inmobiliaria.`,
      },
      {
        title: "Entrega 24-48 h",
        description: "Tras recibir datos completos de partes e inmueble.",
      },
    ],
  },
  barcelona: {
    metaTitle: "Contrato alquiler temporada Barcelona particulares — 200 €",
    metaDescription:
      "Contrato alquiler temporada entre particulares en Barcelona: 200 € IVA incl., 24-48 h. Erasmus, 22@, MWC. Redacción gestor Livendia sin comisión.",
    keywords: [
      "contrato alquiler temporada barcelona particulares",
      "contrato temporada erasmus barcelona",
      "alquiler temporal entre particulares barcelona",
      "redactar contrato alquiler temporada barcelona",
    ],
    heroBadge: "Entre particulares · Temporada · Barcelona",
    heroH1: `Contrato de alquiler por temporada en Barcelona entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
    heroImage: "/images/barcelona.jpg",
    heroBullets: [
      "Sin comisión inmobiliaria · trato directo entre partes",
      "Erasmus UB/UPC/ESADE, 22@, MWC y Sónar",
      "Causa de temporalidad explícita · 100 % online",
    ],
    whyTitle: "Barcelona: Erasmus, tech y eventos, no un LAU de serie",
    whySubtitle:
      "En Cataluña mezclar temporada contractual con alquiler habitual o turístico genera litigios. Livendia redacta el contrato según el uso pactado, no según un PDF de otra ciudad.",
    localZonesHeading: "Barcelona y área metropolitana: dónde gestionamos temporadas",
    localZones:
      "Eixample, Gràcia, Sant Martí, Poblenou (22@), Sants, Les Corts, L'Hospitalet, Badalona y Cornellà. Gestoría inmobiliaria digital para propietarios en península o extranjero.",
    localBenefits: [
      {
        title: "Estudiantes internacionales",
        description: "Semestre o curso en UB, UPC, UAB o ESADE con normas de convivencia y salida claras.",
      },
      {
        title: "Profesionales en 22@ y Glòries",
        description: "Contrato bilingüe si hace falta, con duración del proyecto y suministros.",
      },
      {
        title: "Eventos MWC y congresos Fira",
        description: "Estancia por semanas o meses sin activar prórrogas LAU.",
      },
      {
        title: "Verano en Barceloneta o costa metropolitana",
        description: "Distinto de VUT: contrato civil de temporada entre particulares.",
      },
      {
        title: "Inventario en pisos amueblados",
        description: "Mobiliario y estado documentados para entrada y salida.",
      },
      {
        title: "Tarifa plana Livendia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl., sin comisión inmobiliaria.`,
      },
    ],
  },
  valencia: {
    metaTitle: "Contrato alquiler temporada Valencia particulares — 200 € | Livendia",
    metaDescription:
      "Contrato de alquiler por temporada entre particulares en Valencia: 200 € IVA incl., 24-48 h. UPV, UV, Ruzafa, Benimaclet. Redacción gestor sin comisión.",
    keywords: [
      "contrato alquiler temporada valencia particulares",
      "contrato alquiler temporal valencia entre particulares",
      "redactar contrato alquiler temporada valencia",
      "alquiler por temporada valencia propietario",
    ],
    heroBadge: "Entre particulares · Temporada · Valencia",
    heroH1: `Contrato de alquiler por temporada en Valencia entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
    heroImage: "/images/valencia.jpg",
    heroBullets: [
      "Propietario e inquilino sin comisión de agencia",
      "UPV, UV, prácticas, teletrabajo y estancias laborales",
      "Ruzafa, Benimaclet, Ciutat Vella y área metropolitana",
    ],
    whyTitle: "Valencia: temporada contractual entre particulares",
    whySubtitle:
      "Estudiantes, profesionales desplazados y propietarios que alquilan meses concretos necesitan un contrato fuera del LAU habitual — redactado para el caso real, no copiado de un LAU de larga duración.",
    localZonesHeading: "Valencia y área metropolitana: dónde redactamos contratos de temporada",
    localZones:
      "Ciutat Vella, Ruzafa, El Carmen, Benimaclet, Campanar, Mislata, Burjassot, Paterna, Torrent, Alboraya y playas metropolitanas (Malvarrosa, Patacona). Gestoría online para propietarios en la Comunidad Valenciana o fuera de la provincia.",
    localBenefits: [
      {
        title: "Estudiantes UPV y UV",
        description: "Curso, máster o Erasmus con duración acorde al calendario académico y salida clara.",
      },
      {
        title: "Residencias y prácticas hospitalarias",
        description: "Estancias de meses en La Fe, Clínico o desplazamientos sanitarios con fechas cerradas.",
      },
      {
        title: "Teletrabajo y nómadas digitales",
        description: "Trimestres en Ciutat de les Arts, Ruzafa o la costa sin activar prórrogas LAU.",
      },
      {
        title: "Propietarios sin agencia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. — redacción entre particulares, sin comisión.`,
      },
      {
        title: "Fianza de dos mensualidades",
        description: "Art. 36.1 LAU para uso distinto de vivienda habitual — bien explicada en el contrato.",
      },
      {
        title: "Inventario en pisos amueblados",
        description: "Mobiliario y estado documentados para entrada y salida sin discusiones.",
      },
    ],
  },
  sevilla: {
    metaTitle: "Contrato alquiler temporada Sevilla particulares — 200 € | Livendia",
    metaDescription:
      "Contrato alquiler por temporada entre particulares en Sevilla: 200 € IVA incl., 24-48 h. US, UPO, Nervión, Triana. Gestor Livendia sin comisión.",
    keywords: [
      "contrato alquiler temporada sevilla particulares",
      "contrato alquiler temporal sevilla entre particulares",
      "redactar contrato alquiler temporada sevilla",
      "alquiler por temporada sevilla propietario",
    ],
    heroBadge: "Entre particulares · Temporada · Sevilla",
    heroH1: `Contrato de alquiler por temporada en Sevilla entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
    heroImage: "/images/sevilla.jpg",
    heroBullets: [
      "Sin comisión inmobiliaria · acuerdo directo entre partes",
      "US, UPO, Cartuja, prácticas y proyectos laborales",
      "Nervión, Triana, Macarena y Sevilla metropolitana",
    ],
    whyTitle: "Sevilla: estancias acotadas, contrato a medida",
    whySubtitle:
      "En Andalucía muchos particulares alquilan por meses sin querer un LAU de larga duración. Livendia redacta la causa de temporalidad, la fianza y la salida según lo que acordéis — no según una plantilla de internet.",
    localZonesHeading: "Sevilla capital y área metropolitana",
    localZones:
      "Centro, Triana, Nervión, Los Remedios, Macarena, Heliópolis, Cartuja, Sevilla Este, Dos Hermanas, Alcalá de Guadaíra y Tomares. Misma gestoría online para propietarios en Andalucía o en otra comunidad.",
    localBenefits: [
      {
        title: "Estudiantes US y UPO",
        description: "Semestre o curso con normas de convivencia, fianza y devolución de llaves claras.",
      },
      {
        title: "Prácticas y residencias médicas",
        description: "Estancias en Virgen del Rocío, Macarena u otros centros con plazo definido.",
      },
      {
        title: "Proyectos en Cartuja y Sevilla Este",
        description: "Desplazamiento laboral con fecha de fin y suministros pactados por escrito.",
      },
      {
        title: "Propietarios entre particulares",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl., sin comisión de agencia.`,
      },
      {
        title: "No confundir con alquiler turístico",
        description: "Te orientamos: contrato de temporada entre particulares no sustituye licencias turísticas.",
      },
      {
        title: "Entrega 24-48 h laborables",
        description: "Tras recibir datos completos de inmueble y partes.",
      },
    ],
  },
  malaga: {
    metaTitle: "Contrato alquiler temporada Málaga particulares — 200 € | Livendia",
    metaDescription:
      "Contrato alquiler por temporada entre particulares en Málaga y Costa del Sol: 200 € IVA incl., 24-48 h. UMA, Teatinos, verano. Sin comisión.",
    keywords: [
      "contrato alquiler temporada malaga particulares",
      "contrato alquiler temporal malaga entre particulares",
      "redactar contrato alquiler temporada malaga",
      "alquiler por temporada costa del sol",
    ],
    heroBadge: "Entre particulares · Temporada · Málaga",
    heroH1: `Contrato de alquiler por temporada en Málaga entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
    heroBullets: [
      "Sin comisión inmobiliaria · acuerdo directo entre partes",
      "UMA, Teatinos, El Palo y Costa del Sol",
      "Verano, teletrabajo y desplazamientos laborales",
    ],
    whyTitle: "Málaga y Costa del Sol: temporada entre particulares",
    whySubtitle:
      "Estudiantes, teletrabajadores y propietarios que alquilan meses concretos necesitan un contrato fuera del LAU habitual — redactado para el caso real, no copiado de internet.",
    localZonesHeading: "Málaga capital y Costa del Sol",
    localZones:
      "Centro, Teatinos, El Palo, Pedregalejo, Rincón de la Victoria, Torremolinos, Benalmádena, Fuengirola y municipios costeros. Gestoría online para propietarios en Andalucía o fuera.",
    localBenefits: [
      {
        title: "Estudiantes UMA y másteres",
        description: "Curso o semestre con duración acorde al calendario académico y salida clara.",
      },
      {
        title: "Verano en El Palo o la costa",
        description: "Estancia estacional con fechas exactas, mobiliario y limpieza de salida documentados.",
      },
      {
        title: "Teletrabajo estacional",
        description: "Trimestres en piso amueblado sin activar prórrogas LAU de vivienda habitual.",
      },
      {
        title: "Propietarios sin agencia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. — redacción entre particulares.`,
      },
      {
        title: "Fianza de dos mensualidades",
        description: "Art. 36.1 LAU para uso distinto de vivienda — bien explicada en el contrato.",
      },
      {
        title: "Inventario incluido",
        description: "Estado del piso documentado para entrada y salida sin discusiones.",
      },
    ],
  },
  zaragoza: {
    metaTitle: "Contrato alquiler temporada Zaragoza particulares — 200 € | Livendia",
    metaDescription:
      "Contrato alquiler por temporada entre particulares en Zaragoza: 200 € IVA incl., 24-48 h. UNIZAR, Delicias, Actur. Gestor Livendia sin comisión.",
    keywords: [
      "contrato alquiler temporada zaragoza particulares",
      "contrato alquiler temporal zaragoza entre particulares",
      "redactar contrato alquiler temporada zaragoza",
      "alquiler por temporada zaragoza propietario",
    ],
    heroBadge: "Entre particulares · Temporada · Zaragoza",
    heroH1: `Contrato de alquiler por temporada en Zaragoza entre particulares — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}`,
    heroImage: "/images/zaragoza.jpg",
    heroBullets: [
      "Sin comisión inmobiliaria · trato directo entre partes",
      "UNIZAR, Delicias, Actur y Casco Histórico",
      "Prácticas, proyectos y estancias laborales acotadas",
    ],
    whyTitle: "Zaragoza: estancias acotadas sin LAU genérico",
    whySubtitle:
      "Rotación universitaria y desplazamientos profesionales exigen un contrato de temporada con causa explícita — no un LAU de larga duración que active prórrogas no deseadas.",
    localZonesHeading: "Zaragoza capital y comarca",
    localZones:
      "Delicias, Actur, Casco Histórico, Valdespartera, Las Fuentes, Torrero y municipios del área metropolitana. Misma gestoría online en todo Aragón.",
    localBenefits: [
      {
        title: "Estudiantes UNIZAR",
        description: "Semestre o curso con normas de convivencia y devolución de llaves claras.",
      },
      {
        title: "Prácticas y residencias",
        description: "Estancias de meses en hospitales zaragozanos con plazo definido por escrito.",
      },
      {
        title: "Desplazamientos a PLAZA",
        description: "Proyectos laborales con fecha de fin y suministros pactados.",
      },
      {
        title: "Propietarios entre particulares",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl., sin comisión de agencia.`,
      },
      {
        title: "Inventario en pisos amueblados",
        description: "Mobiliario documentado para entrada y salida.",
      },
      {
        title: "Entrega 24-48 h laborables",
        description: "Tras recibir datos completos de inmueble y partes.",
      },
    ],
  },
  asturias: {
    metaTitle: "Contrato alquiler temporada Asturias particulares | Livendia",
    metaDescription:
      "Contrato alquiler por temporada entre particulares en Asturias: Oviedo, Gijón, costa. 200 € IVA incl. Verano, estudios, segunda residencia. Sin comisión.",
    keywords: [
      "contrato alquiler temporada asturias particulares",
      "contrato alquiler temporal oviedo gijon",
      "alquiler por temporada costa asturiana",
      "redactar contrato alquiler temporada asturias",
    ],
    heroBadge: "Entre particulares · Temporada · Asturias",
    heroH1: "Contrato de alquiler por temporada en Asturias entre particulares",
    heroImage: "/images/oviedo.jpg",
    heroBullets: [
      "Oviedo, Gijón, Avilés, costa e interior",
      "Verano, estudios y desplazamientos laborales",
      `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. · sin comisión`,
    ],
    whyTitle: "Asturias: costa, ciudad y casa rural — contrato a medida",
    whySubtitle:
      "Conviven alquiler urbano, veraneo en la costa y casas rurales. Livendia adapta el contrato de temporada al uso real — humedad, leña, parking y plazos estacionales incluidos.",
    localZonesHeading: "Principado de Asturias: dónde redactamos temporadas",
    localZones:
      "Oviedo, Gijón, Avilés, Langreo, Siero, Mieres, costa (Gijón mar, Villaviciosa, Llanes oriente) e interior rural. Ideal para propietarios que viven fuera de Asturias.",
    localBenefits: [
      {
        title: "Verano en la costa",
        description: "Estancia estacional con fechas, ropa de cama y limpieza de salida por escrito.",
      },
      {
        title: "Estudiantes en Oviedo y Gijón",
        description: "Curso o semestre con duración acorde y normas de convivencia claras.",
      },
      {
        title: "Casa rural y suministros",
        description: "Leña, agua y accesos documentados en viviendas del interior.",
      },
      {
        title: "Humedad y calefacción",
        description: "Cláusulas de mantenimiento acordes a viviendas del norte.",
      },
      {
        title: "Propietarios fuera del Principado",
        description: "Tramitación 100 % online si el piso está en Asturias.",
      },
      {
        title: "Tarifa plana Livendia",
        description: `${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl., sin comisión inmobiliaria.`,
      },
    ],
  },
  mallorca: {
    metaTitle: "Contrato alquiler temporada Mallorca particulares | Livendia",
    metaDescription:
      "Contrato alquiler por temporada entre particulares en Mallorca: Palma, Calvià, Alcúdia. 200 € IVA incl. Duración, fianza e inventario. Sin comisión.",
    keywords: [
      "contrato alquiler temporada mallorca particulares",
      "contrato temporada palma entre particulares",
      "alquiler temporal calvia",
      "redactar contrato alquiler temporada baleares",
    ],
    heroBadge: "Entre particulares · Temporada · Mallorca",
    heroH1: "Contrato de alquiler por temporada en Mallorca entre particulares",
    heroBullets: [
      "Palma, Calvià, Alcúdia, Manacor, Pollensa",
      "Verano, teletrabajo y segunda residencia sin agencia",
      `Tarifa fija ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.`,
    ],
    whyTitle: "Mallorca: temporada contractual bien cerrada",
    whySubtitle:
      "En las Baleares confundir temporada con arrendamiento habitual o con régimen turístico de alquiler genera sanciones y litigios. Livendia redacta el contrato acorde al uso pactado.",
    localZonesHeading: "Isla de Mallorca: dónde redactamos contratos de temporada",
    localZones:
      "Palma ciudad (Portixol, Son Espanyolet, Pere Garau), Calvià, Palmanova, Magaluf, Alcúdia, Pollensa, Manacor, Inca, Sóller y núcleos de segunda residencia. Mismo gestor online para propietarios en la península.",
    localBenefits: [
      {
        title: "Duración y motivo de la estancia",
        description:
          "Por escrito: fechas exactas, prórroga, salida anticipada y qué ocurre con la señal si el inquilino no obtiene visado o obra.",
      },
      {
        title: "Mobiliario y ropa de cama",
        description:
          "Inventario de equipamiento incluido vs. aportado por inquilino — crítico en apartamentos amueblados.",
      },
      {
        title: "Limpieza de salida y fianza",
        description:
          "Depósito, checklist de limpieza y penalizaciones proporcionadas, no copiadas de un LAU de 5 años.",
      },
      {
        title: "Suministros y comunidad",
        description:
          "Agua, luz, basuras y uso de parking o trastero comunitario en edificios de la costa.",
      },
      {
        title: "No confundir con licencia turística",
        description:
          "Te orientamos: contrato de temporada entre particulares no sustituye licencias de vivienda de uso turístico si la normativa local lo exige.",
      },
      {
        title: "Inventario fotográfico Livendia",
        description: "Estado del piso al entrar y al salir documentado en el expediente.",
      },
    ],
    faq: [
      {
        question: "¿Puedo alquilar mi piso en Palma solo tres meses en verano?",
        answer: `Sí, con un contrato de temporada redactado para esa duración (${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl.). No debe ser una copia de contrato LAU de larga duración.`,
      },
      {
        question: "¿El contrato de temporada vale para alquiler turístico con licencia?",
        answer:
          "Son figuras distintas. Si alquilas con licencia turística, la normativa balear y municipal es adicional. Nosotros cubrimos el contrato civil entre arrendador e inquilino temporal.",
      },
      {
        question: "¿Qué pasa si el inquilino quiere quedarse más tiempo?",
        answer:
          "La prórroga y la nueva duración deben constar por escrito antes de ampliar. Te ayudamos a redactar addenda o nuevo contrato.",
      },
      {
        question: "¿Atendéis propietarios que viven fuera de Mallorca?",
        answer:
          "Sí. Todo el proceso es online: contratas, subes datos y firmas con inventario sin viajar a la isla.",
      },
    ],
  },
};
