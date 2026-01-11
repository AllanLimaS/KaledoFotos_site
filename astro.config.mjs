// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

const strapiUrl = process.env.STRAPI_URL || "localhost";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ["localhost", strapiUrl],
  },

  redirects: {
    "/ensaios": "/#Ensaios",
  },
  site: 'https://kaledofotos.com.br/',
  integrations: [sitemap()],
});