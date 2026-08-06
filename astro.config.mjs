import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import { fileURLToPath } from "node:url";

const root = new URL(".", import.meta.url);
const src = fileURLToPath(new URL("./src", root));

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@/assets": fileURLToPath(new URL("./public/assets", root)),
        "@": src,
        "next/link": fileURLToPath(new URL("./src/astro-shims/next-link.tsx", root)),
        "next/image": fileURLToPath(new URL("./src/astro-shims/next-image.tsx", root)),
        "next/navigation": fileURLToPath(new URL("./src/astro-shims/next-navigation.ts", root)),
        "next/script": fileURLToPath(new URL("./src/astro-shims/next-script.tsx", root)),
        "react-slick": fileURLToPath(new URL("./src/astro-shims/react-slick.tsx", root)),
      },
    },
    define: {
      "process.env.NEXT_PUBLIC_BLOG_ENABLED": JSON.stringify(process.env.NEXT_PUBLIC_BLOG_ENABLED),
    },
  },
});
