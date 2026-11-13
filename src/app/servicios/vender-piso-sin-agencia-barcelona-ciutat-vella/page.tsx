import { VenderPisoMetroPage, venderPisoMetroPageMetadata } from "@/lib/vender-piso-sin-agencia-metro-page";

const slug = "barcelona-ciutat-vella" as const;

/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */
export const revalidate = false;

export const metadata = venderPisoMetroPageMetadata(slug);

export default function Page() {
  return <VenderPisoMetroPage slug={slug} />;
}
