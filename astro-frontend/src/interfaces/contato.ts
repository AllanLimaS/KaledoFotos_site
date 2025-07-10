import type { Foto } from "./foto";

export interface Main {
  data: Contato;
  meta: Meta;
}

export interface Contato {
  id: number;
  documentId: string;
  Formspree_link: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Redes: Rede[];
  Foto_fundo: Foto;
}

export interface Rede {
  id: number;
  Nome: string;
  URL: string;
  Icon_svg: string;
}

export interface Meta {}
