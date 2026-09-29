import { CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";

export const HABITACION_INCLUDES = [
  {
    title: "Régimen de habitación en piso compartido",
    description: "Cláusulas adaptadas al arrendamiento de una habitación, no a un piso LAU completo.",
  },
  {
    title: "Fianza garantizada conforme a la ley",
    description: "Importe, depósito y devolución redactados con criterio legal y enlace al inventario fotográfico.",
  },
  {
    title: "Precio legal garantizado",
    description: `Tarifa plana ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. en web — sin comisión sobre la renta mensual.`,
  },
  {
    title: "Derechos claros en la convivencia",
    description: "Horarios, visitas, limpieza, cocina, salón y baños compartidos por escrito para propietario e inquilino.",
  },
  {
    title: "Contrato blindado bajo la ley",
    description: "Redacción profesional del régimen de habitación, no plantilla genérica copiada de otra operación.",
  },
  {
    title: "Inventario detallado con fotos",
    description: "Estado de la habitación, mobiliario y zonas comunes documentados para evitar disputas al salir.",
  },
  {
    title: "Entrega en 48–72 h",
    description: `Tras recibir datos completos del piso y las partes. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl.`,
  },
] as const;

export const HABITACION_PROCESS_INTRO =
  "Cinco fases con gestor especializado: llamada previa para propietarios e inquilinos, contratación online, documentación en panel, redacción del contrato e implementación para firmar — también con firma electrónica certificada y explicación de cláusulas clave.";

export const HABITACION_PROCESS_STEPS = [
  {
    title: "Llamada con tu gestor: le cuentas la operación",
    description:
      "Antes de pagar, hablas con un gestor de habitación en piso compartido. Explicas si eres propietario o inquilino, renta, fianza, convivencia y dudas sobre el contrato — te orientamos sin compromiso.",
  },
  {
    title: "Contratas el servicio desde la web",
    description:
      "Contratas online el servicio de contrato de alquiler de habitación y se abre tu expediente Livendia con precio legal garantizado (IVA incl.).",
  },
  {
    title: "Envías datos y documentación",
    description:
      "Subes DNI, datos del piso, renta acordada, condiciones de convivencia y fotos para el inventario detallado de la habitación y zonas comunes.",
  },
  {
    title: "Tramitamos y redactamos el contrato",
    description:
      "El gestor analiza la documentación, contrasta lo pactado y redacta el contrato blindado bajo la ley: fianza, gastos, preaviso e inventario. Te enviamos el borrador al panel.",
  },
  {
    title: "Implementación para firmar y asesoramiento",
    description:
      "Entrega lista para firmar en papel o con firma electrónica certificada. El gestor explica las cláusulas más importantes hasta que propietario e inquilino firmen con criterio.",
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
