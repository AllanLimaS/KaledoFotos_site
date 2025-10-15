export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '25mb',
      formLimit: '25mb',
      textLimit: '25mb',
    },
  },
  

  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
