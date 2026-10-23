// @ts-check
import { defineConfig } from "astro/config";
import { readFileSync } from "node:fs";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

let outputDir = new URL("./dist/", import.meta.url);

// https://astro.build/config
export default defineConfig({
  site: "https://smkt.ca",
  integrations: [
    {
      name: "sitemap-output-directory",
      hooks: {
        "astro:build:done": ({ dir }) => { outputDir = dir; },
      },
    },
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/^\//, "").replace(/\/$/, "");
        const html = readFileSync(new URL(`${pathname ? `${pathname}/` : ""}index.html`, outputDir), "utf8");
        return !html.includes('<meta name="robots" content="noindex, nofollow"');
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
