export type FaqItem = {
  question: string;
  answer: string;
};

export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Qué es Livendia y en qué se diferencia de una inmobiliaria?",
    answer:
      "Livendia es una gestoría inmobiliaria digital: redactamos y revisamos contratos, acompañamos compraventas y administramos alquileres. No vendemos pisos ni cobramos honorarios de agencia; nuestro trabajo es la parte legal y de gestión con un gestor asignado y área de cliente online.",
  },
  {
    question: "¿Cómo contrato un servicio?",
    answer:
      "Eliges el servicio en la web, te registras o inicias sesión, completas el pago seguro con Stripe y accedes al panel para subir documentación y ver el estado. Si prefieres hablar antes, puedes escribirnos por WhatsApp o el formulario de contacto.",
  },
  {
    question: "¿Cuánto cuesta la administración de alquiler?",
    answer:
      "La administración para propietarios es 49 €/mes IVA incluido, sin permanencia. Incluye gestor asignado, contacto con el inquilino, incidencias, renovaciones y panel online. Puedes cancelar cuando quieras desde tu área de cliente.",
  },
  {
    question: "¿Qué ocurre después de pagar?",
    answer:
      "Recibes confirmación por email, ves el pedido en tu dashboard y te indicamos qué documentos subir (DNI, contrato, escrituras, etc., según el servicio). Un gestor revisa tu expediente y te contacta si hace falta aclarar algo.",
  },
  {
    question: "¿Atendéis en toda España?",
    answer:
      "Sí. Trabajamos de forma digital con clientes en toda España (y consultas desde Portugal en algunos casos). Tenemos landings orientativas en Madrid, Valencia y Barcelona; el servicio es el mismo online en cualquier provincia. Para alquiler y contratos aplicamos la normativa española vigente (LAU, arras, compraventa).",
  },
  {
    question: "¿Puedo contratar solo un contrato sin administración?",
    answer:
      "Sí. Tenemos contratos de alquiler (LAU, habitación, temporada), arras penitenciales o confirmatorias, revisión documental post-arras y servicio completo de compra. Cada uno con precio cerrado en la ficha del servicio.",
  },
  {
    question: "¿Los precios incluyen IVA?",
    answer:
      "Sí, los importes publicados en livendia.com incluyen IVA salvo que se indique lo contrario en la ficha. La factura se gestiona según los datos que facilites al contratar.",
  },
  {
    question: "¿Cómo puedo contactar con un gestor antes de pagar?",
    answer:
      "Escríbenos por WhatsApp o el formulario de contacto. Te orientamos sobre qué servicio encaja (alquiler, compra, arras o administración) sin compromiso, antes de que completes el checkout.",
  },
];
