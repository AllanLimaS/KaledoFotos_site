import type { StrapiApp } from '@strapi/strapi/admin';
import ptBR from './translations/pt-BR.json';

export default {
  config: {
    locales: ["pt-BR"],
    translations: {
      "pt-BR": ptBR,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
