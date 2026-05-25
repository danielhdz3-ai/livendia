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
    ];
  },
};

export default nextConfig;
