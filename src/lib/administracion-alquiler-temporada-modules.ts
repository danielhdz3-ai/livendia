import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
} from "@/lib/catalog.public";

export const ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES = {
  contratar: "/images/pexels-artempodrez-6779332.jpg",
  calendario: "/images/gestora4.jpg",
  renta: "/images/gestora2.jpg",
  tecnico: "/images/gestoria20.jpg",
  contratos: "/images/modelo5.jpg",
} as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_META = {
  eyebrow: "Qué incluye la administración temporada / habitaciones",
  title: "Cómo llevamos tu piso de temporada o por habitaciones, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia. Más rotación que un LAU estable: entradas y salidas, varios ocupantes, servicio técnico y seguimiento de la renta en tu cuenta. No incluimos comercialización del anuncio ni captación de inquilino (para eso existe el alquiler integral).",
  alwaysWithYouTitle: "Tu expediente en el panel",
  alwaysWithYouBody:
    "Calendario de ocupantes, contratos, incidencias, check-in/check-out e inventarios por habitación o temporada. Sabes quién entra, quién sale y qué queda pendiente sin depender de chats dispersos.",
  feeNote: `${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL} IVA incl. · contrato nuevo ${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL} · rescisiones gratis.`,
  serviceLine: "Admin. temporada / habitaciones · Livendia",
} as const;

export function buildAdministracionAlquilerTemporadaSteps(
  priceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Contratas y activas la administración online",
      description:
        "Pagas la cuota mensual sin permanencia y accedes al panel Livendia. Indicas si es piso de temporada, habitaciones compartidas o mixto, y subes contratos vigentes, inventarios y datos de contacto de cada ocupante.",
      howWeDoIt: [
        "Contratación en minutos con pago seguro.",
        "Gestor asignado especializado en rotación y convivencia.",
        "Alta de cada habitación o unidad de temporada en el expediente.",
        "Enlace al servicio de alquiler integral si aún buscas inquilino.",
      ],
      checklist: [
        `${priceLabel} IVA incl.`,
        "Sin permanencia",
        "Panel 24/7",
        "Gestor por WhatsApp",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES.contratar,
      imageAlt: "Contratar administración de alquiler por temporada Livendia",
    },
    {
      step: 2,
      title: "Calendario de entradas, salidas y check-in / check-out",
      description:
        "Registramos fechas de ocupación, fianzas por tramo y condiciones de cada entrada. Coordinamos check-in y check-out, estado de la vivienda o habitación y entrega de llaves con checklist para evitar disputas.",
      howWeDoIt: [
        "Calendario compartido propietario–gestor–inquilino cuando procede.",
        "Inventario y fotos al cambio de ocupante.",
        "Recordatorios de salida y preaviso según contrato.",
        "Informe breve al propietario tras cada rotación relevante.",
      ],
      checklist: [
        "Control de quién entra y sale",
        "Check-in / check-out coordinados",
        "Estado del piso documentado",
        "Ideal para varias habitaciones",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES.calendario,
      imageAlt: "Calendario de entradas y salidas en alquiler por habitaciones",
    },
    {
      step: 3,
      title: "Contacto único con inquilinos y seguimiento de la renta",
      description:
        "Los ocupantes contactan con Livendia, no contigo. Cada uno ingresa la renta (o el tramo pactado) en tu cuenta; nosotros controlamos plazos, avisamos en panel y reclamamos si hay retraso — sin cobrar la renta por ti ni garantizar el importe.",
      howWeDoIt: [
        "Canal único Livendia para consultas, convivencia y pagos.",
        "Control mensual del ingreso en la cuenta del propietario.",
        "Mediación entre habitaciones o con el titular del piso.",
        "Seguro de impago externo opcional (no incluido en cuota).",
      ],
      checklist: [
        "Renta directa a tu banco",
        "Seguimiento por ocupante",
        "Sin renta garantizada",
        "Menos llamadas al propietario",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES.renta,
      imageAlt: "Seguimiento de renta en administración de temporada",
    },
    {
      step: 4,
      title: "Servicio técnico e incidencias del día a día",
      description:
        "Averías, wifi, caldera, electrodomésticos o conflictos de convivencia: el inquilino abre incidencia con nosotros. Coordinamos técnicos, urgencias y proveedores; solo te consultamos para autorizar gastos o decisiones importantes.",
      howWeDoIt: [
        "Registro de cada incidencia con prioridad y estado.",
        "Coordinación de reparaciones y seguimiento hasta cierre.",
        "Comunicación clara con varios inquilinos en piso compartido.",
        "Histórico en panel para el propietario.",
      ],
      checklist: [
        "Gestión de averías incluida",
        "Proveedores coordinados por Livendia",
        "Convivencia y normas de casa",
        "Autorización del propietario si hay coste",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES.tecnico,
      imageAlt: "Servicio técnico en piso de temporada administrado por Livendia",
    },
    {
      step: 5,
      title: "Contratos nuevos, rescisiones y continuidad",
      description: `Cuando entra un inquilino nuevo y hace falta redactar contrato de temporada o habitación, lo tramitamos por ${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL} IVA incl. por contrato. Las rescisiones van incluidas en la cuota. Mantenemos el ritmo del piso mientras tú delegas la operativa.`,
      howWeDoIt: [
        `Redacción de contrato nuevo bajo demanda (${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL}).`,
        "Rescisiones y bajas sin coste adicional con admin activa.",
        "Coherencia entre contratos de habitación o temporada en el mismo piso.",
        "Opción de pasar a administración LAU si el piso deja de rotar.",
      ],
      checklist: [
        "Rescisiones gratis",
        "Contratos nuevos con tarifa publicada",
        "Documentación en panel",
        "Enlace con admin. LAU si cambia el uso",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_TEMPORADA_STEP_IMAGES.contratos,
      imageAlt: "Contrato de habitación o temporada bajo administración Livendia",
    },
  ];
}
