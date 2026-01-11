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

  trailingSlash: 'always', // sempre deixa a barra final da URL 
  site: 'https://kaledofotos.com.br/',
  integrations: [sitemap()],
});