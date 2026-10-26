import { VenderPisoMetroPage, venderPisoMetroPageMetadata } from "@/lib/vender-piso-sin-agencia-metro-page";

const slug = "sant-joan-despi" as const;

export const revalidate = 86400;
export const metadata = venderPisoMetroPageMetadata(slug);

export default function Page() {
  return <VenderPisoMetroPage slug={slug} />;
}
