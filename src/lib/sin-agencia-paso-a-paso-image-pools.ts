/**
 * Imágenes sin-agencia (comprar / vender AMB):
 * - Hero encabezado → pool **vertical** (retrato).
 * - Pasos VentaSinAgenciaPasoAPaso → pool **apaisado** (oficina, contratos, gestoría).
 *
 * No usar `gestoriaLandingImagePoolFiltered()` entero: incluye escenas domésticas
 * (limpieza, sofá, familia) que no encajan en pasos de compraventa.
 */

/** Apaisadas 4:3 — módulos paso a paso. */
export const SIN_AGENCIA_STEP_IMAGE_POOL: readonly string[] = [
  "/images/pexels-tima-miroshnichenko-5439472.jpg",
  "/images/pexels-tima-miroshnichenko-5439443.jpg",
  "/images/pexels-tima-miroshnichenko-5439380.jpg",
  "/images/pexels-silverkblack-23496450.jpg",
  "/images/pexels-silverkblack-36729677.jpg",
  "/images/pexels-pavel-danilyuk-5520284.jpg",
  "/images/pexels-pavel-danilyuk-5520299.jpg",
  "/images/pexels-artempodrez-6779332.jpg",
  "/images/pexels-shkrabaanthony-5816284.jpg",
  "/images/pexels-n-voitkevich-8062296.jpg",
  "/images/contratodearras.jpg",
  "/images/contratodealquiler.jpg",
  "/images/contratos2.jpg",
  "/images/contrato9.jpg",
  "/images/contratos5.jpg",
  "/images/comercial1.jpg",
  "/images/gestoria3.jpg",
  "/images/gestoria4.jpg",
  "/images/firma11.jpg",
];

/** Retratos — hero de landings comprar/vender sin agencia. */
export const SIN_AGENCIA_HERO_VERTICAL_POOL: readonly string[] = [
  "/images/pexels-yankrukov-7693717.jpg",
  "/images/pexels-yankrukov-7693740.jpg",
  "/images/pexels-yankrukov-7693743.jpg",
  "/images/pexels-yankrukov-7698744.jpg",
  "/images/pexels-yankrukov-7693161.jpg",
  "/images/pexels-mikhail-nilov-8296981.jpg",
  "/images/pexels-mikhail-nilov-8297043.jpg",
  "/images/pexels-mikhail-nilov-8297355.jpg",
  "/images/pexels-mikhail-nilov-8296998.jpg",
  "/images/pexels-artempodrez-6779333.jpg",
  "/images/pexels-artempodrez-6779344.jpg",
  "/images/pexels-kampus-8171201.jpg",
  "/images/pexels-kampus-8463139.jpg",
  "/images/pexels-dimkidama-15675799.jpg",
  "/images/pexels-dantemunozphoto-16346704.jpg",
  "/images/pexels-cristian-rojas-10041249.jpg",
  "/images/pexels-anna-belousova-130658517-10325487.jpg",
  "/images/chicavertical.png",
  "/images/modelo3.jpg",
];

export const SIN_AGENCIA_HERO_VERTICAL_FALLBACK = "/images/pexels-yankrukov-7693717.jpg";
