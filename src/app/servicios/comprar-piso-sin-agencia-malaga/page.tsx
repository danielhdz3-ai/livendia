import {
  ComprarPisoSinAgenciaLocalPage,
  comprarPisoSinAgenciaLocalPageMetadata,
} from "@/lib/comprar-piso-sin-agencia-local-page";

const slug = "malaga";

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export const metadata = comprarPisoSinAgenciaLocalPageMetadata(slug);

export default function Page() {
  return <ComprarPisoSinAgenciaLocalPage slug={slug} />;
}
