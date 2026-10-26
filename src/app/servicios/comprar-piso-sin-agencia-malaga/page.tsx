import {
  ComprarPisoSinAgenciaLocalPage,
  comprarPisoSinAgenciaLocalPageMetadata,
} from "@/lib/comprar-piso-sin-agencia-local-page";

const slug = "malaga";

export const revalidate = 86400;
export const metadata = comprarPisoSinAgenciaLocalPageMetadata(slug);

export default function Page() {
  return <ComprarPisoSinAgenciaLocalPage slug={slug} />;
}
