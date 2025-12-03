// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://smkt.ca",
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
