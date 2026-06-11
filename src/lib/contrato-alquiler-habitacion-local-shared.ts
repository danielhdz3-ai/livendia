import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";

export const HABITACION_INCLUDES = [
  {
    title: "Régimen de habitación en piso compartido",
    description: "Cláusulas adaptadas al arrendamiento de una habitación, no a un piso LAU completo.",
  },
  {
    title: "Normas de convivencia",
    description: "Horarios, visitas, limpieza, cocina, salón y baños compartidos por escrito.",
  },
  {
    title: "Gastos y suministros",
    description: "Qué incluye la renta (luz, agua, internet, comunidad) y cómo se reparten.",
  },
  {
    title: "Fianza y depósito",
    description: "Importe, devolución y estado del mobiliario de la habitación al entrar y salir.",
  },
  {
    title: "Inventario de la habitación",
    description: "Estado y elementos incluidos para evitar disputas al finalizar.",
  },
  {
    title: "Entrega en 48–72 h",
    description: `Tras recibir datos completos del piso y las partes. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
  },
] as const;

export const HABITACION_PROCESS_INTRO =
  "Primero hablas con un gestor especializado; después contratas y envías la documentación. En todo el proceso tienes asesoramiento personalizado por llamada o WhatsApp.";

export const HABITACION_PROCESS_STEPS = [
  {
    title: "Solicita una llamada con tu gestor",
    description:
      "Antes de pagar, puedes reservar una llamada con un gestor especializado en alquiler de habitación. Le explicas tu caso — piso compartido, convivencia, gastos, fianza — y te asesoramos sin compromiso.",
  },
  {
    title: "Paga el servicio y envía la documentación",
    description:
      "Cuando decidas contratar, pagas online y nos envías la documentación del inquilino y del propietario: DNI, datos del piso, renta acordada y condiciones de convivencia.",
  },
  {
    title: "El gestor tramita tu contrato",
    description:
      "Un gestor redacta y adapta el contrato a tu situación real. En todo momento tienes asesoramiento por llamada o WhatsApp: estudiamos tu caso y nos adaptamos a las circunstancias del piso.",
  },
  {
    title: "Entrega lista para firmar",
    description:
      "Recibes el contrato revisado en tu expediente. Resolvemos las dudas de propietario e inquilino antes de firmar o entregar llaves.",
  },
] as const;

export const HABITACION_TESTIMONIALS_NATIONAL = {
  title: "Casos reales de contratos de habitación tramitados con Livendia",
  items: [
    {
      quote:
        "Alquilaba una habitación en un piso compartido sin contrato escrito. El gestor nos llamó antes de cobrar, aclaró cómo repartir luz e internet y dejó el preaviso por escrito. Firmamos sin tensiones.",
      author: "Laura M.",
      role: "Propietaria — piso compartido en Barcelona",
    },
    {
      quote:
        "Entré en un piso con tres compañeros y solo teníamos un acuerdo verbal. Livendia redactó un contrato con normas de cocina, visitas y limpieza. Me lo explicaron por WhatsApp línea a línea.",
      author: "Carlos R.",
      role: "Inquilino — habitación en Eixample",
    },
    {
      quote:
        "Necesitábamos contratos individuales para dos habitaciones del mismo piso. El gestor adaptó cada uno con su fianza e inventario y coordinó todo por teléfono en dos días.",
      author: "Jordi P.",
      role: "Arrendador — dos habitaciones en Poblenou",
    },
    {
      quote:
        "Llegué de otra ciudad y el propietario no sabía qué poner en el contrato de habitación. Livendia lo tramitó online, revisó el borrador que teníamos y lo dejó listo para firmar en 48 horas.",
      author: "Marina S.",
      role: "Inquilina — habitación en Sants",
    },
  ],
} as const;
