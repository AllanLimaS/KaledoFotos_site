import type { EntryFieldTypes, Link } from "contentful";
import type { Document } from "@contentful/rich-text-types";

// Interface para um asset do Contentful (imagem)
export interface ContentfulAsset {
  fields: {
    file: {
      url: string;
    };
  };
}

// Interface para a Página Inicial
export interface PaginaInicial {
    titulo: EntryFieldTypes.Text;
    fotosDoCarrossel: ContentfulAsset[];
    fotoContato: ContentfulAsset;
}

// Interface para a Sobre mim
export interface SobreMim {
  foto: ContentfulAsset;
  texto: Document;
}

// Interface para a Rede Social
export interface RedeSocial {
  rede: EntryFieldTypes.Text;
  link: EntryFieldTypes.Text;
}

// Interface para Ensaio after processing
export interface Ensaio {
  titulo: EntryFieldTypes.Text;
  descricao: Document;
  fotoDeCapa: ContentfulAsset;
  fotos: ContentfulAsset[];
}

// Interface para Ensaio from Contentful Entry
export interface EnsaioEntry {
  fields: Ensaio;
}

// Interface para a Categoria de Ensaio
export interface CategoriaEnsaio {
  titulo: EntryFieldTypes.Text;
  descricao: Document;
  fotoDeCapa: ContentfulAsset;
  ensaios: EnsaioEntry[]; 
}

// Interface para o SEO
export interface SEO {
  nomeDoSite: EntryFieldTypes.Text;
  metaTitle: EntryFieldTypes.Text;
  metaDescription: Document;
  shareImage: ContentfulAsset;
}
