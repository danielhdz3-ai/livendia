import {
  ComprarPisoMetroPage,
  comprarPisoMetroPageMetadata,
} from "@/lib/comprar-piso-sin-agencia-metro-page";
import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";

const slug = "mollet-del-valles" as ComprarPisoSinAgenciaBcnMetroSlug;

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export const metadata = comprarPisoMetroPageMetadata(slug);

export default function Page() {
  return <ComprarPisoMetroPage slug={slug} />;
}
