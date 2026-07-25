import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/contrato-alquiler-madrid",
        destination: "/servicios/contrato-alquiler-local/madrid",
        permanent: true,
      },
      {
        source: "/servicios/contrato-alquiler-barcelona",
        destination: "/servicios/contrato-alquiler-local/barcelona",
        permanent: true,
      },
      {
        source: "/servicios/gestoria-inmobiliaria-local",
        destination: "/gestoria",
        permanent: true,
      },
      {
        source: "/servicios/gestoria-inmobiliaria-local/:slug",
        destination: "/gestoria/:slug",
        permanent: true,
      },
      {
        // Fase 7 (Grupo D): página plana previa al hub /servicios/contrato-de-arras y al clúster
        // contrato-arras-local (ambos creados 16 días después). El hub ya vende el mismo producto
        // (mismo slug de catálogo "contrato-arras-confirmatorias") con más contenido y mejor
        // posición. `statusCode: 301` explícito porque aquí queremos el código HTTP exacto 301
        // (los redirects de arriba con `permanent: true` devuelven 308 en esta versión de Next.js,
        // que es igualmente permanente mas no es literalmente "301").
        source: "/servicios/contrato-arras-confirmatorias",
        destination: "/servicios/contrato-de-arras",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
