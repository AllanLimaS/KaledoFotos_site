// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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
});