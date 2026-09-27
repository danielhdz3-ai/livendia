import {
  ComprarPisoSinAgenciaLocalPage,
  comprarPisoSinAgenciaLocalPageMetadata,
} from "@/lib/comprar-piso-sin-agencia-local-page";

const slug = "madrid";

export const revalidate = 300;
export const metadata = comprarPisoSinAgenciaLocalPageMetadata(slug);

export default function Page() {
  return <ComprarPisoSinAgenciaLocalPage slug={slug} />;
}
