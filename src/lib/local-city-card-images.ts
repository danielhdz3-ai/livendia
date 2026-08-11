/** Imágenes para tarjetas de ciudad en índices locales y landings. */
const LOCAL_CITY_CARD_IMAGES: Record<string, string> = {
  madrid: "/images/madrid.jpg",
  barcelona: "/images/barcelona.jpg",
  valencia: "/images/valencia.jpg",
  malaga: "/images/malaga.jpg",
  sevilla: "/images/sevilla.jpg",
  bilbao: "/images/bilbao1.jpg",
  zaragoza: "/images/zaragoza.jpg",
  alicante: "/images/valencia1.jpg",
  murcia: "/images/comercial4.jpg",
  valladolid: "/images/valladolid.jpg",
  granada: "/images/sevilla2.jpg",
  oviedo: "/images/oviedo.jpg",
  gijon: "/images/gijon.jpg",
  asturias: "/images/oviedo.jpg",
  vigo: "/images/vigo.jpg",
  coruna: "/images/coruña.jpg",
  "a-coruna": "/images/coruña.jpg",
  "hospitalet-de-llobregat": "/images/comercial2.jpg",
  "cornella-de-llobregat": "/images/contratos5.jpg",
  badalona: "/images/contratos6.jpg",
  "sant-cugat-del-valles": "/images/comercial1.jpg",
  sabadell: "/images/comercial 9.jpg",
  terrassa: "/images/contratos7.jpg",
  "les-corts": "/images/livendia-fachada-azul.jpg",
  mallorca: "/images/mallorca.jpg",
  menorca: "/images/menorca1.jpg",
  palma: "/images/mallorca2.jpg",
};

const FALLBACK_CITY_IMAGE = "/images/tipo2.jpg";

export function getLocalCityCardImage(slug: string): string {
  return LOCAL_CITY_CARD_IMAGES[slug] ?? FALLBACK_CITY_IMAGE;
}
