/**
 * Imágenes en public/images versionadas en git — oficina, contratos, gestoría, firmas.
 * Mantener sincronizado con `npm run audit:images`.
 * Excluidas en pick: firma10/gestor6 (stock con texto ajeno visible).
 */

export const GESTORIA_LANDING_IMAGE_EXCLUDED = [
  "/images/firma10.jpg",
  "/images/gestor6.jpg",
] as const;

/** Pool ampliado para asignación única por landing (≥6 por página). */
export const GESTORIA_LANDING_IMAGE_POOL: readonly string[] = [
  "/images/contratos.jpg",
  "/images/contratos1.jpg",
  "/images/contratos2.jpg",
  "/images/contratos5.jpg",
  "/images/contratos6.jpg",
  "/images/contratos7.jpg",
  "/images/contrato9.jpg",
  "/images/contratodealquiler.jpg",
  "/images/contratodearras.jpg",
  "/images/gestoria.jpg",
  "/images/gestoria1.jpg",
  "/images/gestoria2.jpg",
  "/images/gestoria3.jpg",
  "/images/gestoria4.jpg",
  "/images/gestoria5.jpg",
  "/images/gestoria20.jpg",
  "/images/gestora1.jpg",
  "/images/gestora2.jpg",
  "/images/gestora3.jpg",
  "/images/gestora4.jpg",
  "/images/gestora5.jpg",
  "/images/gestora6.jpg",
  "/images/gestora7.jpg",
  "/images/gestora8.jpg",
  "/images/gestora9.jpg",
  "/images/gestora10.jpg",
  "/images/firma11.jpg",
  "/images/comercial1.jpg",
  "/images/familia1.jpg",
  "/images/familia2.jpg",
  "/images/familia6.jpg",
  "/images/equipo1.jpg",
  "/images/equipo2.jpg",
  "/images/equipo3.jpg",
  "/images/equipo4.jpg",
  "/images/modelo1.jpg",
  "/images/modelo2.jpg",
  "/images/modelo3.jpg",
  "/images/modelo4.jpg",
  "/images/modelo5.jpg",
  "/images/chicasofa4.png",
  "/images/chicasofaazul.png",
  "/images/pexels-pavel-danilyuk-5520284.jpg",
  "/images/pexels-pavel-danilyuk-5520299.jpg",
  "/images/pexels-khwanchai-12885860.jpg",
  "/images/pexels-silverkblack-23496450.jpg",
  "/images/pexels-silverkblack-36729677.jpg",
  "/images/pexels-tima-miroshnichenko-5439380.jpg",
  "/images/pexels-tima-miroshnichenko-5439443.jpg",
  "/images/pexels-tima-miroshnichenko-5439472.jpg",
  "/images/pexels-yankrukov-7693161.jpg",
  "/images/pexels-yankrukov-7693717.jpg",
  "/images/pexels-yankrukov-7693740.jpg",
  "/images/pexels-yankrukov-7693743.jpg",
  "/images/pexels-yankrukov-7698744.jpg",
  "/images/pexels-mikhail-nilov-8296981.jpg",
  "/images/pexels-mikhail-nilov-8296998.jpg",
  "/images/pexels-mikhail-nilov-8297043.jpg",
  "/images/pexels-mikhail-nilov-8297355.jpg",
  "/images/pexels-shkrabaanthony-5816284.jpg",
  "/images/pexels-artempodrez-5715856.jpg",
  "/images/pexels-artempodrez-6779332.jpg",
  "/images/pexels-artempodrez-6779333.jpg",
  "/images/pexels-artempodrez-6779344.jpg",
  "/images/pexels-kampus-8171201.jpg",
  "/images/pexels-kampus-8463139.jpg",
  "/images/pexels-dantemunozphoto-16346704.jpg",
  "/images/pexels-dimkidama-15675799.jpg",
  "/images/pexels-cristian-rojas-10041249.jpg",
  "/images/pexels-anna-belousova-130658517-10325487.jpg",
  "/images/pexels-n-voitkevich-8062296.jpg",
  "/images/pexels-rdne-9034770.jpg",
] as const;

const EXCLUDED_SET = new Set<string>(GESTORIA_LANDING_IMAGE_EXCLUDED);

export function gestoriaLandingImagePoolFiltered(): readonly string[] {
  return GESTORIA_LANDING_IMAGE_POOL.filter((p) => !EXCLUDED_SET.has(p));
}
