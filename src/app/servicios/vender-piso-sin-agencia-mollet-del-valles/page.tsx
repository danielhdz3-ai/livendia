import { VenderPisoMetroPage, venderPisoMetroPageMetadata } from "@/lib/vender-piso-sin-agencia-metro-page";

const slug = "mollet-del-valles" as const;

export const revalidate = 86400;
export const metadata = venderPisoMetroPageMetadata(slug);

export default function Page() {
  return <VenderPisoMetroPage slug={slug} />;
}
