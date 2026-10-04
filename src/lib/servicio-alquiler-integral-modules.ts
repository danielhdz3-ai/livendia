import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL } from "@/lib/catalog.public";

export const SERVICIO_ALQUILER_INTEGRAL_PROCESS_META = {
  eyebrow: "Qué incluye el servicio de alquiler integral",
  title: "Del anuncio a las llaves: cómo trabajamos contigo, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia. Valoramos tu vivienda y la normativa aplicable, captamos y filtramos inquilinos con criterio financiero, coordinamos visitas con discreción, redactamos un contrato LAU (o régimen que corresponda) y te acompañamos en firma, fianza y suministros. El seguro de alquiler garantizado lo contrata el propietario aparte; nosotros tramitamos la documentación con nuestra aseguradora de confianza.",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Contratos, DNI, nóminas, informes de solvencia, borradores, inventario y mensajes con tu gestor quedan centralizados en Livendia. Sabes en qué fase está la operación — valoración, candidatos, visitas o firma — sin depender de WhatsApps sueltos.",
  feeNote: `Honorarios Livendia desde ${SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL} IVA incl. · presupuesto cerrado antes de empezar. Prima del seguro de impago y administración mensual aparte.`,
  serviceLine: "Servicio de alquiler integral · Livendia",
} as const;

export const SERVICIO_ALQUILER_INTEGRAL_TENANT_DOCS = {
  title: "Documentación que pedimos a cada candidato",
  intro:
    "Antes de proponer un inquilino al propietario, recopilamos y revisamos la documentación laboral y financiera. Comprobamos que la renta encaja en un ratio de endeudamiento razonable y que el perfil puede superar el estudio de la aseguradora de alquiler garantizado.",
  items: [
    {
      title: "Nóminas y contrato laboral",
      body: "Últimas nóminas y contrato indefinido (o documentación equivalente de ingresos estables). Buscamos continuidad y capacidad real de hacer frente a la renta pactada.",
    },
    {
      title: "Vida laboral y situación fiscal",
      body: "Informe de vida laboral u otros justificantes que permitan contrastar antigüedad, tipo de contrato y coherencia con lo declarado en la entrevista.",
    },
    {
      title: "Ratio de endeudamiento",
      body: "Analizamos ingresos netos frente a la renta y otras cargas conocidas. Solo avanzamos candidatos que encajan con los criterios del seguro y con tu criterio como propietario.",
    },
    {
      title: "Expediente para el seguro",
      body: "Si el perfil es válido, empaquetamos la documentación para el estudio de solvencia del seguro de alquiler garantizado. La póliza la contratas tú; Livendia no es aseguradora.",
    },
  ],
} as const;

export const SERVICIO_ALQUILER_INTEGRAL_GUARANTEES = [
  {
    title: "Contrato conforme a la LAU",
    description:
      "Redacción profesional del contrato de arrendamiento urbano: duración, renta, fianza legal, actualización, gastos, suministros y cláusulas en zona tensionada cuando aplique.",
  },
  {
    title: "Normativa y SERPAVI",
    description:
      "Asesoramiento sobre obligaciones registrales y autonómicas (incluido SERPAVI en Cataluña u otros registros de alquiler), límites de renta en zonas tensionadas y documentación exigible al inquilino.",
  },
  {
    title: "Visitas con criterio",
    description:
      "Filtramos curiosos antes de abrir tu calendario. Las visitas se planifican en franjas que tú marcas, con discreción y protocolo de seguridad.",
  },
  {
    title: "Seguro de confianza",
    description:
      "Recomendamos nuestra aseguradora de alquiler garantizado para el estudio de impago; gestionamos el trámite documental. La prima y la cobertura son contrato entre propietario y aseguradora.",
  },
] as const;

export function buildServicioAlquilerIntegralSteps(
  priceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Valoración de la vivienda y asesoramiento inicial",
      description:
        "Antes de publicar el anuncio, analizamos tu inmueble, la renta objetivo, el tipo de arrendamiento (LAU habitual, habitación o temporada) y la regulación que te afecta: Ley de Vivienda, posibles límites en zonas tensionadas, registro de contratos (SERPAVI en Cataluña u otros en CCAA) y requisitos de solvencia que exigirá el mercado y el seguro.",
      howWeDoIt: [
        "Llamada o WhatsApp con gestor: situación del piso, plazos, si vives lejos o alquilas herencia/vivienda vacía.",
        "Revisión orientativa de renta de mercado y condiciones realistas (fianza, duración, suministros).",
        "Checklist normativo: registro de contrato, certificado energético, cédula o habitabilidad si procede.",
        "Plan de captación acordado contigo antes de contratar el servicio integral.",
      ],
      checklist: [
        "Asesoramiento normativo LAU y autonómico",
        "Orientación SERPAVI / registros de alquiler",
        "Sin compromiso en la primera conversación",
        "Presupuesto cerrado del servicio Livendia",
      ],
      imageSrc: "/images/gestoria.jpg",
      imageAlt: "Gestor Livendia valorando un piso para alquiler integral",
    },
    {
      step: 2,
      title: "Contratas el servicio y cualificamos inquilinos",
      description: `Contratas el alquiler integral (${priceLabel} IVA incl. referencia; confirmamos alcance por escrito) y activamos la captación. A cada candidato serio le pedimos nóminas, contrato indefinido o justificante de ingresos, vida laboral y documentación de identidad. Livendia analiza solvencia y ratio de endeudamiento respecto a la renta. Si encaja, tramitamos el expediente ante el seguro de alquiler garantizado que recomendamos — contratado aparte por ti como propietario.`,
      howWeDoIt: [
        "Publicación y difusión del anuncio con mensaje claro de requisitos documentales.",
        "Preselección telefónica: filtramos perfiles antes de pedir papeles o concertar visita.",
        "Recepción segura de nóminas, contratos y vida laboral; revisión de coherencia.",
        "Envío a estudio de solvencia de la aseguradora de confianza cuando el candidato es finalista.",
      ],
      checklist: [
        "Nóminas y contrato laboral revisados",
        "Vida laboral y ratio de endeudamiento",
        "Seguro de impago: póliza del propietario",
        "Solo candidatos solventes llegan a visita",
      ],
      imageSrc: "/images/servicio-alquiler-integral-hero.jpg",
      imageAlt: "Gestora Livendia analizando documentación de inquilinos para alquiler integral",
    },
    {
      step: 3,
      title: "Visitas al inmueble con discreción y flexibilidad",
      description:
        "Organizamos las visitas solo con candidatos ya filtrados. Respetamos tus franjas horarias y días disponibles, minimizamos molestias si vives en el piso o tienes inquilino saliente, y aplicamos un protocolo de seguridad: identificación previa, acompañamiento del gestor y registro de interesados.",
      howWeDoIt: [
        "Calendario compartido: tú indicas ventanas; nosotros confirmamos citas y recordatorios.",
        "Visitas presenciales o híbridas según acordemos (videollamada previa si hace falta).",
        "Feedback estructurado tras cada visita para decidir con datos, no solo sensaciones.",
        "Máxima discreción: no publicamos datos personales del propietario en el anuncio.",
      ],
      checklist: [
        "Solo visitas a perfiles pre-cualificados",
        "Horarios acordados contigo",
        "Protocolo de seguridad en la visita",
        "Gestor Livendia en la operativa",
      ],
      imageSrc: "/images/familia1.jpg",
      imageAlt: "Visita a vivienda en alquiler con gestor Livendia",
    },
    {
      step: 4,
      title: "Formalización de la oferta y contrato de alquiler profesional",
      description:
        "Con inquilino elegido y seguro en trámite o aprobado, cerramos condiciones económicas y redactamos el contrato de alquiler: LAU para vivienda habitual, o régimen adaptado si es habitación o temporada. Cláusulas sobre renta, fianza legal, actualización, suministros, inventario y registro en SERPAVI u organismo autonómico cuando corresponda.",
      howWeDoIt: [
        "Borrador jurídico revisado por gestor especializado en arrendamientos.",
        "Alineación con requisitos de la aseguradora y con lo pactado en visita.",
        "Revisión conjunta contigo antes de enviar al inquilino para firma.",
        "Coordinación de firma digital o presencial según prefieras.",
      ],
      checklist: [
        "Contrato LAU / habitación / temporada profesional",
        "Cláusulas conforme a normativa vigente",
        "Inventario y anexos cuando proceda",
        "Registro de contrato orientado",
      ],
      imageSrc: "/images/contratodealquiler.jpg",
      imageAlt: "Redacción de contrato de alquiler LAU Livendia",
    },
    {
      step: 5,
      title: "Firma, fianza, suministros y entrega de llaves",
      description:
        "Acompañamos la firma del contrato, el ingreso y depósito de la fianza legal (INCASÒL u organismo autonómico), las altas de suministros en titularidad acordada y la entrega de llaves con lecturas e inventario. El inquilino pasa a ocupar la vivienda con trámites cerrados; si quieres, después puedes contratar administración mensual Livendia.",
      howWeDoIt: [
        "Checklist pre-entrada: lecturas, estado del piso, llaves y documentación firmada.",
        "Orientación y seguimiento del depósito de fianza y documentos al registro.",
        "Gestión de altas/cambios de titularidad de luz, gas, agua e internet según contrato.",
        "Archivo del expediente en panel Livendia para consultas futuras.",
      ],
      checklist: [
        "Firma coordinada propietario-inquilino",
        "Fianza y depósos legales tramitados",
        "Altas de suministros acordadas",
        "Opcional: administración mensual después",
      ],
      imageSrc: "/images/gestora5.jpg",
      imageAlt: "Entrega de llaves y cierre de alquiler integral Livendia",
    },
  ];
}
