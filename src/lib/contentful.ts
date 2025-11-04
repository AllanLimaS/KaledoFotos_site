import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,

  // Conteúdos em draft + publicados 
  accessToken: import.meta.env.CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com"
  
  // Com esta configuração de baixo, o build de produção pegará apenas os conteúdos que estão publicados. 
 // accessToken: import.meta.env.DEV
 //   ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
 //   : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
 // host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
