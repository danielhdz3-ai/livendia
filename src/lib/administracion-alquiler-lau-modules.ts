import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";

/** Imágenes en repo (no reutilizar las reservadas a alquiler integral). */
export const ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES = {
  alta: "/images/pexels-yankrukov-7693161.jpg",
  contacto: "/images/gestora1.jpg",
  renta: "/images/pexels-mikhail-nilov-8296998.jpg",
  incidencias: "/images/gestora3.jpg",
  renovaciones: "/images/modelo4.jpg",
} as const;

export const ADMINISTRACION_ALQUILER_LAU_PROCESS_META = {
  eyebrow: "Qué incluye la administración de alquiler LAU",
  title: "Cómo administramos tu piso de larga duración, paso a paso",
  intro:
    "Cinco fases con el mismo gestor Livendia. El inquilino ya está en la vivienda: nosotros somos su único interlocutor, controlamos que la renta llegue a tu cuenta, gestionamos incidencias y te avisamos solo de lo importante. Sin captación de inquilino ni renta garantizada en la cuota.",
  alwaysWithYouTitle: "Tu panel de propietario",
  alwaysWithYouBody:
    "Contratos, justificantes de renta, historial de incidencias y mensajes con tu gestor en un solo sitio. Consultas el estado del alquiler sin depender de correos sueltos ni del WhatsApp personal.",
  feeNote: `${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. · sin permanencia · gestor dedicado online en toda España.`,
  serviceLine: "Administración de alquiler LAU · Livendia",
} as const;

export function buildAdministracionAlquilerLauSteps(
  priceLabel: string,
): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Contratas y das de alta el piso y el inquilino",
      description:
        "Pagas la cuota mensual online (sin permanencia) y abres tu expediente. Subes contrato LAU, datos del inquilino, cuenta bancaria donde debe ingresar la renta e inventario si lo tienes. Un gestor revisa la documentación y confirma el arranque.",
      howWeDoIt: [
        "Contratación segura con Stripe y acceso inmediato al panel.",
        "Checklist de alta: partes, vivienda, renta, fianza y contacto del inquilino.",
        "Confirmación por WhatsApp con tu gestor asignado.",
        "Si aún no tienes inquilino, te orientamos hacia el servicio de alquiler integral.",
      ],
      checklist: [
        `${priceLabel} IVA incl. · sin permanencia`,
        "Alta 100 % online",
        "Gestor humano desde el día uno",
        "Panel con documentación centralizada",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES.alta,
      imageAlt: "Alta de administración de alquiler LAU en panel Livendia",
    },
    {
      step: 2,
      title: "Livendia es el único contacto del inquilino",
      description:
        "Desde la activación, el arrendatario escribe y llama a Livendia — no a tu móvil. Filtramos consultas, peticiones y reclamaciones; tú te mantienes al margen del día a día salvo decisiones que requieran tu visto bueno.",
      howWeDoIt: [
        "Comunicación canalizada: email, panel y teléfono de gestión Livendia.",
        "Registro de cada incidencia y petición en el expediente.",
        "Mediación profesional ante malentendidos o peticiones fuera de contrato.",
        "Tú recibes resúmenes, no un hilo interminable de mensajes.",
      ],
      checklist: [
        "Cero llamadas directas al propietario",
        "Mediación incluida en la cuota",
        "Horario laboral con respuesta ágil",
        "Tono profesional con el inquilino",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES.contacto,
      imageAlt: "Gestor Livendia como intermediario con el inquilino",
    },
    {
      step: 3,
      title: "Seguimiento de la renta en tu cuenta bancaria",
      description:
        "El inquilino transfiere la renta a la cuenta que indicaste. Livendia no recibe ese dinero ni garantiza el importe: comprobamos cada mes que el pago ha entrado en plazo, lo reflejamos en el panel y reclamamos al inquilino si hay retraso.",
      howWeDoIt: [
        "Control mensual del ingreso y aviso en panel al propietario.",
        "Recordatorios y reclamación al inquilino ante impagos leves.",
        "Orientación sobre seguro de impago externo si lo quieres contratar.",
        "Sin comisión sobre la renta ni cobro en nombre del propietario.",
      ],
      checklist: [
        "Pago directo inquilino → tu banco",
        "Control mensual Livendia",
        "Sin renta garantizada en la cuota",
        "Historial en panel",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES.renta,
      imageAlt: "Control de pago de renta en cuenta del propietario",
    },
    {
      step: 4,
      title: "Incidencias, averías y coordinación de proveedores",
      description:
        "Cuando surge una avería o una petición de mantenimiento, el inquilino contacta con nosotros. Abrimos el parte, coordinamos técnicos o empresas, pedimos presupuesto si hace falta tu OK y hacemos seguimiento hasta cerrar la incidencia.",
      howWeDoIt: [
        "Triaje de urgencia: seguridad, suministros, convivencia.",
        "Contacto con fontaneros, electricistas u otros según el caso.",
        "Solo te molestamos para autorizar gastos o decisiones relevantes.",
        "Cierre documentado en el panel con lo ocurrido.",
      ],
      checklist: [
        "Gestión operativa de incidencias",
        "Coordinación de reparaciones",
        "Autorización del propietario cuando procede",
        "Seguimiento hasta resolución",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES.incidencias,
      imageAlt: "Gestión de incidencias en vivienda en alquiler",
    },
    {
      step: 5,
      title: "Renovaciones, plazos legales y documentación",
      description:
        "Vigilamos vencimientos, preavisos, posibles actualizaciones de renta conforme a contrato y LAU, y renovaciones. Te avisamos con antelación, preparamos borradores si toca prorrogar y mantenemos la documentación al día en el panel.",
      howWeDoIt: [
        "Calendario de fechas clave del arrendamiento.",
        "Avisos de renovación o fin de contrato con margen para decidir.",
        "Coordinación de addendas o nuevo contrato si lo necesitas (servicio aparte).",
        "Archivo de comunicaciones y documentos por año de arrendamiento.",
      ],
      checklist: [
        "Control de renovaciones y plazos",
        "Actualización IPC/IRAV según contrato",
        "Documentación ordenada en panel",
        "Cancelación cuando quieras (sin permanencia)",
      ],
      imageSrc: ADMINISTRACION_ALQUILER_LAU_STEP_IMAGES.renovaciones,
      imageAlt: "Renovación de contrato de alquiler LAU con gestor",
    },
  ];
}
