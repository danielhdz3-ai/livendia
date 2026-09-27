import {
  ComprarPisoMetroPage,
  comprarPisoMetroPageMetadata,
} from "@/lib/comprar-piso-sin-agencia-metro-page";
import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";

const slug = "barcelona-horta-guinardo" as ComprarPisoSinAgenciaBcnMetroSlug;

export const revalidate = 300;
export const metadata = comprarPisoMetroPageMetadata(slug);

export default function Page() {
  return <ComprarPisoMetroPage slug={slug} />;
}
