import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1A4FBF" },
    { media: "(prefers-color-scheme: dark)", color: "#0F2A6B" },
  ],
};
