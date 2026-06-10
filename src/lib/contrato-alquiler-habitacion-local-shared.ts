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

export const HABITACION_PROCESS_STEPS = [
  {
    title: "Contratas online",
    description: "Pagas con tarjeta y se abre tu expediente en el área de cliente Livendia.",
  },
  {
    title: "Briefing del piso en Barcelona",
    description: "Indicas barrio, habitación, renta, gastos, convivencia y si hay más inquilinos.",
  },
  {
    title: "Redacción gestora",
    description: "Un gestor adapta el contrato al régimen de habitación y a la realidad del piso.",
  },
  {
    title: "Entrega y dudas previas a firmar",
    description: "Recibes el documento listo; resolvemos preguntas antes de entregar llaves.",
  },
] as const;

export const WHY_CONTRACT_MATTERS = [
  {
    title: "El acuerdo verbal no protege",
    body: "En Barcelona la rotación de inquilinos es alta. Sin contrato, disputas sobre fianza, gastos o preaviso acaban en conflicto.",
  },
  {
    title: "No es un contrato LAU de piso entero",
    body: "Usar una plantilla de vivienda completa deja fuera convivencia, zonas comunes y reparto de suministros — lo que más se litiga en pisos compartidos.",
  },
  {
    title: "Varios inquilinos en el mismo piso",
    body: "En Eixample, Gràcia o Poblenou es habitual convivir con 2-4 personas. El contrato debe definir quién paga qué y qué pasa si uno se va.",
  },
] as const;
