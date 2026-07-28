import { ACOMPANAMIENTO_ALQUILER_PRICE_LABEL } from "@/lib/catalog.public";

export const ACOMPANAMIENTO_ALQUILER_INCLUDED = [
  "Gestor especializado en alquileres asignado desde el primer día",
  "Orientación sobre los pasos del trámite cuando ya tienes (o vas a firmar) un piso de alquiler",
  "Checklist de la documentación que suele exigir el propietario, agencia o administración",
  "Revisión de borradores y cláusulas antes de comprometerte",
  "Redacción o adaptación de contratos de alquiler (LAU, temporada o habitación, según el caso)",
  "Firma digital electrónica certificada para formalizar el contrato",
  "Expediente online en Livendia: sube y consulta PDF, Word e imágenes con seguridad",
  "Asesoramiento continuo por teléfono, email o WhatsApp mientras el servicio esté activo",
  "Apoyo para mediar y aclarar dudas con la parte propietaria o su representante",
  "Revisión de coherencia con la normativa vigente (LAU y régimen aplicable)",
  `El acompañamiento termina cuando tú lo decides · ${ACOMPANAMIENTO_ALQUILER_PRICE_LABEL} IVA incl.`,
] as const;

export const ACOMPANAMIENTO_ALQUILER_NOT_INCLUDED = [
  "Administración recurrente del alquiler mes a mes (cobros, incidencias de mantenimiento a largo plazo)",
  "Honorarios de agencia inmobiliaria ni depósito de fianza en organismo oficial (si aplica, te orientamos)",
  "Representación procesal en juzgados ni litigio contencioso",
  "Gastos de notaría, registro o tasas ajenas a Livendia",
] as const;

export const ACOMPANAMIENTO_ALQUILER_SCOPE =
  "Pensado para inquilinos que necesitan un gestor a su lado en el proceso de alquiler: documentación, contrato, firma y mediación. No sustituye la administración de alquileres para propietarios.";

export const ACOMPANAMIENTO_ALQUILER_PROCESS_INTRO =
  "Contratas online, te asignamos un gestor y trabajamos sobre tu caso real: lo que ya te han pedido, el contrato y la firma. Todo queda en tu expediente hasta que tú cierres el servicio.";

export const ACOMPANAMIENTO_ALQUILER_PROCESS_STEPS = [
  {
    title: "Contratas y abres expediente",
    description:
      "Tras el pago accedes al panel Livendia. Subes DNI, borradores, mensajes del propietario o lo que ya tengas. Tu gestor ve el mismo expediente.",
  },
  {
    title: "Diagnóstico y plan de pasos",
    description:
      "Te explicamos qué documentación falta, qué riesgos hay en el contrato y qué conviene negociar o redactar antes de firmar o continuar el trámite.",
  },
  {
    title: "Documentos, contrato y firma",
    description:
      "Revisamos o redactamos el contrato, preparamos anexos si hace falta y formalizamos con firma digital electrónica certificada cuando toque firmar.",
  },
  {
    title: "Acompañamiento hasta que lo decidas",
    description:
      "Seguimos disponibles para dudas, mediación con la parte propietaria y comprobaciones normativas. El servicio no tiene fecha de caducidad fija: termina cuando tú lo indiques.",
  },
] as const;

export const ACOMPANAMIENTO_ALQUILER_PILLARS = [
  {
    title: "Documentación clara",
    description:
      "Sabes qué pedir, qué entregar y qué guardar. Evitas idas y vueltas con el propietario o la agencia.",
  },
  {
    title: "Contrato y firma seguros",
    description:
      "Revisión, redacción cuando haga falta y firma digital certificada para cerrar con tranquilidad.",
  },
  {
    title: "Gestor y mediación",
    description:
      "Un interlocutor experto te asesora y ayuda a encajar posiciones con la parte propietaria sin perder el marco legal.",
  },
  {
    title: "Expediente en la plataforma",
    description:
      "Todos los archivos del alquiler quedan centralizados en tu área de cliente, accesibles cuando los necesites.",
  },
] as const;

export const ACOMPANAMIENTO_ALQUILER_TESTIMONIALS = {
  title: "Inquilinos que alquilaron con gestor Livendia",
  items: [
    {
      quote:
        "Tenía el piso casi cerrado pero el propietario me pedía papeles sin orden. El gestor de Livendia me hizo un checklist, revisó el contrato y firmamos digitalmente en dos días.",
      author: "Marina G.",
      role: "Inquilina · Barcelona",
    },
    {
      quote:
        "No quería pelearme con la agencia. Livendia mediaba por mí, me explicó qué era legal en la fianza y me acompañó hasta la entrega de llaves.",
      author: "Javier L.",
      role: "Inquilino · Madrid",
    },
    {
      quote:
        "Era temporada de seis meses y nadie me aclaraba los gastos. Con el acompañamiento redactaron un anexo claro y guardé todo en el expediente online.",
      author: "Sofía P.",
      role: "Inquilina · Valencia",
    },
  ],
} as const;

export const ACOMPANAMIENTO_ALQUILER_FAQ = [
  {
    question: "¿Para quién es el acompañamiento de alquiler?",
    answer:
      "Para inquilinos que ya tienen un piso de alquiler en marcha o están a punto de firmarlo y necesitan un gestor especializado: documentación, contrato, firma, mediación con el propietario y tranquilidad normativa. No es el servicio de administración mensual para propietarios.",
  },
  {
    question: "¿Incluye la redacción del contrato?",
    answer:
      "Sí, cuando el caso lo requiere: revisamos el borrador existente o redactamos/adaptamos el contrato de alquiler (LAU, temporada o habitación) y lo formalizamos con firma digital certificada.",
  },
  {
    question: "¿Cuánto dura el servicio?",
    answer:
      "No tiene un plazo cerrado. Empieza al contratar y termina cuando tú decides que ya no necesitas el acompañamiento. Mientras esté activo, tienes gestor y expediente online.",
  },
  {
    question: "¿Puedo subir documentación desde el móvil?",
    answer:
      "Sí. En tu panel puedes subir PDF, Word y fotos (también desde el iPhone). El gestor las ve en el mismo expediente.",
  },
  {
    question: "¿Mediáis con el propietario o la agencia?",
    answer:
      "Te apoyamos a plantear y aclarar puntos delicados (cláusulas, fianza, gastos, plazos) con la parte propietaria o su representante, siempre dentro del marco de asesoramiento de gestoría inmobiliaria.",
  },
  {
    question: "¿El precio de 189 € incluye IVA?",
    answer: `Sí. ${ACOMPANAMIENTO_ALQUILER_PRICE_LABEL} IVA incluido. Pago único online; sin suscripción mensual.`,
  },
] as const;
