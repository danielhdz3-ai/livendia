import type { VenderSinAgenciaProcessStep } from "@/lib/vender-piso-sin-agencia-barcelona-modules";
import { CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL } from "@/lib/catalog.public";

/** Cinco pasos alineados solo con memoria tributaria (plusvalía + IRPF), sin trámite documental de venta. */
export function buildConsultaFiscalVendedorSteps(priceLabel = CONSULTA_FISCAL_VENDEDOR_PRICE_LABEL): readonly VenderSinAgenciaProcessStep[] {
  return [
    {
      step: 1,
      title: "Contratas y nos cuentas tu caso de venta",
      description:
        "Indicas municipio del inmueble, fecha prevista de escritura, número de titulares y % en escritura, si es vivienda habitual, posible reinversión o titular mayor de 65 años. No pedimos datos de comunidad, ITE ni cédula: solo lo necesario para orientar plusvalía municipal e IRPF.",
      howWeDoIt: [
        "Contratación online con disclaimer de orientación (no asesoramiento vinculante).",
        "Formulario: municipio, escritura prevista, titulares y escenarios fiscales.",
        "Confirmación de pago y apertura de expediente en panel Livendia.",
        "Gestor asignado en 24 h laborables.",
      ],
      checklist: [
        "Precio desde " + priceLabel + " IVA incl. (hasta 2 titulares)",
        "Residentes y no residentes (este último a consultar)",
        "Sin gestión de notaría ni contratos",
        "100 % online",
      ],
      imageSrc: "/images/gestoria3.jpg",
      imageAlt: "Gestor Livendia recopilando datos para consulta fiscal del vendedor",
    },
    {
      step: 2,
      title: "Subes la documentación tributaria",
      description:
        "Contrato de arras (precio y fecha), escritura de compra o nota simple con titulares, IBI o certificado catastral del valor del suelo y liquidación ITP/IVA de cuando compraste. Opcional: saldo hipotecario y facturas de reformas para afinar el IRPF.",
      howWeDoIt: [
        "Checklist en panel con obligatorios y opcionales marcados.",
        "Subida segura de PDFs; el gestor indica qué falta.",
        "Recordatorio por email si el expediente está incompleto.",
        "Plazo cuenta desde documentación completa (3–5 días laborables).",
      ],
      checklist: [
        "Arras y precio de venta",
        "Catastro / valor del suelo",
        "Base de adquisición (escritura + ITP)",
        "Empadronamiento si aplica vivienda habitual",
      ],
      imageSrc: "/images/gestoria20.jpg",
      imageAlt: "Documentación fiscal para estimación de plusvalía e IRPF",
    },
    {
      step: 3,
      title: "Calculamos la plusvalía municipal (IIVTNU)",
      description:
        "Aplicamos método objetivo y método real según tu municipio, años de tenencia y fecha de escritura (cambio de coeficientes desde 1-dic-2026). Te indicamos cuál resulta más favorable cuando procede y qué hipótesis usamos en cada cifra.",
      howWeDoIt: [
        "Coeficiente por años de propiedad y tabla vigente según fecha escritura.",
        "Tipo municipal orientativo (p. ej. Barcelona) — pendiente confirmación ordenanza.",
        "Comparación objetivo vs real; si no hay incremento, plusvalía cero.",
        "Notas en memoria sobre datos pendientes de verificar en BOE/ayuntamiento.",
      ],
      checklist: [
        "Doble método IIVTNU",
        "Efecto fecha escritura 2026",
        "Sin presentar autoliquidación en ayuntamiento",
        "Cifras con hipótesis explícitas",
      ],
      imageSrc: "/images/gestoria.jpg",
      imageAlt: "Simulación de plusvalía municipal al vender vivienda",
    },
    {
      step: 4,
      title: "Estimamos el IRPF por titular",
      description:
        "Repartimos la ganancia patrimonial según % en escritura, valor de adquisición, gastos deducibles y mejoras documentadas. Incluimos escenarios orientativos de vivienda habitual (reinversión) y exención para mayores de 65 cuando los datos lo permiten — sin prometer exenciones.",
      howWeDoIt: [
        "Base: precio venta − gastos − plusvalía pagada − valor adquisición.",
        "Escala del ahorro IRPF 2026 sobre la parte imputable a cada titular.",
        "Escenarios exención / reinversión con condiciones explicadas en memoria.",
        "Líquido aproximado: venta − hipoteca − gastos − plusvalía − IRPF estimado.",
      ],
      checklist: [
        "Desglose por titular y %",
        "Mejoras y gastos de compra si aportas facturas",
        "No sustituye declaración de la renta",
        "Revisión humana obligatoria",
      ],
      imageSrc: "/images/gestoria5.jpg",
      imageAlt: "Estimación orientativa de IRPF en venta de vivienda",
    },
    {
      step: 5,
      title: "Memoria PDF y videollamada de explicación",
      description:
        "El gestor revisa el borrador antes de que lo veas: memoria con resumen, desglose plusvalía e IRPF, plazos posteriores a la venta y disclaimer. Luego agendamos videollamada de 30–45 min para resolver dudas.",
      howWeDoIt: [
        "Borrador interno → aprobación del gestor → entrega en panel.",
        "Memoria descargable con cada hipótesis indicada.",
        "Videollamada para repasar cifras y próximos pasos fiscales.",
        "Email con enlace al panel y recordatorio de documentación pendiente si aplica.",
      ],
      checklist: [
        "Memoria solo tras revisión del gestor",
        "Videollamada incluida",
        "Orientación sobre plazos plusvalía e IRPF",
        "Confirmar cifras con gestoría fiscal antes de liquidar",
      ],
      imageSrc: "/images/fundadores-oficina.png",
      imageAlt: "Gestor Livendia explicando memoria tributaria al vendedor",
    },
  ];
}

export const CONSULTA_FISCAL_VENDEDOR_PROCESS = {
  eyebrow: "Consulta fiscal vendedor",
  title: "Cómo obtenemos tu memoria tributaria orientativa",
  intro:
    "Cinco fases solo tributarias: datos del caso, documentación fiscal, plusvalía, IRPF por titular y entrega con videollamada. Sin redactar arras ni perseguir certificados de comunidad.",
  alwaysWithYouTitle: "Panel Livendia",
  alwaysWithYouBody:
    "Checklist fiscal, memoria aprobada por el gestor y cita para la videollamada — sin mezclar con gestión documental de la compraventa.",
  serviceLine: "Consulta fiscal vendedor · Livendia",
} as const;