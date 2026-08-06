import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { fileURLToPath } from "node:url";

const root = new URL(".", import.meta.url);
const src = fileURLToPath(new URL("./src", root));

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    resolve: {
      alias: [
        { find: "next/link", replacement: fileURLToPath(new URL("./src/astro-shims/next-link.tsx", root)) },
        { find: "next/image", replacement: fileURLToPath(new URL("./src/astro-shims/next-image.tsx", root)) },
        { find: "next/navigation", replacement: fileURLToPath(new URL("./src/astro-shims/next-navigation.ts", root)) },
        { find: "next/script", replacement: fileURLToPath(new URL("./src/astro-shims/next-script.tsx", root)) },
        { find: "next/dynamic", replacement: fileURLToPath(new URL("./src/astro-shims/next-dynamic.tsx", root)) },
        { find: "next/server", replacement: fileURLToPath(new URL("./src/astro-shims/next-server.ts", root)) },
        { find: "next/cache", replacement: fileURLToPath(new URL("./src/astro-shims/next-cache.ts", root)) },
        { find: "react-slick", replacement: fileURLToPath(new URL("./src/astro-shims/react-slick.tsx", root)) },
        { find: "next", replacement: fileURLToPath(new URL("./src/astro-shims/next.ts", root)) },
        { find: "@/assets", replacement: fileURLToPath(new URL("./public/assets", root)) },
        { find: "@", replacement: src },
      ],
    },
    define: {
      "process.env.NEXT_PUBLIC_BLOG_ENABLED": JSON.stringify(process.env.NEXT_PUBLIC_BLOG_ENABLED),
    },
  },
});
