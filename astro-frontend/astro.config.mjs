// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [
      "localhost",
      "https://aplicativos-kaledofotos-back.ca48be.easypanel.host",
      import.meta.env.STRAPI_URL,
    ],
  },
});