# Kaledo Fotos — Site de Fotografia
Este projeto é o site **[KaledoFotos.com.br](https://astro.build/)**, desenvolvido com **Astro** e integrado ao **Contentful** como CMS headless.  

---

## Tecnologias Utilizadas

- **[Astro](https://astro.build/)** — Framework moderno para sites estáticos e híbridos.
- **[Contentful](https://www.contentful.com/)** — Headless CMS usado para gerenciamento de conteúdo.
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — Plataforma de hospedagem e deploy contínuo.

---

## Estrutura do Projeto

```bash
.
├── public/              # Arquivos estáticos (imagens, ícones, etc)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── interfaces/      # Tipagens dos objetos do CMS
│   ├── layouts/         # Layout principal do site
│   ├── pages/           # Páginas do Astro (rotas)
│   ├── lib/             # Conexão do Contentful e utilidades gerais 
│   └── styles/          # Estilos globais
├── package.json
├── astro.config.mjs
└── README.md
```

