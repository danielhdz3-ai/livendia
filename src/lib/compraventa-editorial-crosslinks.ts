/** Enlaces cruzados blog ↔ /respuestas (compraventa, sin duplicar títulos de landings). */

export type CompraventaEditorialLink = {
  href: string;
  title: string;
  description: string;
};

export const COMPRAVENTA_FEATURED_RESPUESTAS: readonly CompraventaEditorialLink[] = [
  {
    href: "/respuestas/documentos-comprar-piso-entre-particulares",
    title: "Documentos antes de comprar entre particulares",
    description: "Checklist del comprador antes de la señal.",
  },
  {
    href: "/respuestas/documentos-vender-piso-entre-particulares",
    title: "Documentos para vender entre particulares",
    description: "Registral, comunidad e ITE para el vendedor.",
  },
  {
    href: "/respuestas/diferencia-reserva-y-arras",
    title: "Reserva vs contrato de arras",
    description: "Cuándo usar cada documento y riesgos.",
  },
  {
    href: "/respuestas/como-calcular-arras",
    title: "Cómo calcular las arras",
    description: "Porcentaje habitual e importe de señal.",
  },
  {
    href: "/respuestas/que-pasa-si-desisto-arras",
    title: "Desistir después de firmar arras",
    description: "Penalidades en arras penitenciales.",
  },
  {
    href: "/respuestas/revision-documental-post-arras",
    title: "Revisión documental post-arras",
    description: "Due diligence del comprador tras la señal.",
  },
];

export const COMPRAVENTA_FEATURED_BLOG: readonly CompraventaEditorialLink[] = [
  {
    href: "/blog/comprar-piso-entre-particulares-sin-agencia-guia-completa",
    title: "Guía: comprar entre particulares sin agencia",
    description: "De la visita a la escritura con criterio de gestoría.",
  },
  {
    href: "/blog/que-es-un-contrato-de-arras",
    title: "Qué es un contrato de arras",
    description: "Penitenciales, confirmatorias y contenido mínimo.",
  },
  {
    href: "/blog/diferencia-arras-penitenciales-confirmatorias",
    title: "Arras penitenciales o confirmatorias",
    description: "Consecuencias si alguien se echa atrás.",
  },
  {
    href: "/blog/agencia-inmobiliaria-vs-gestoria-livendia-ahorro-comisiones",
    title: "Agencia vs gestoría Livendia",
    description: "Ahorro frente a comisión 3–5 %.",
  },
  {
    href: "/blog/vender-piso-barcelona-entre-particulares-guia-2026",
    title: "Vender en Barcelona entre particulares (2026)",
    description: "CCCat, cèdula, ITE y distritos.",
  },
  {
    href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria",
    title: "Cuánto cuesta una gestoría inmobiliaria",
    description: "Tarifas planas y qué incluye cada servicio.",
  },
];
