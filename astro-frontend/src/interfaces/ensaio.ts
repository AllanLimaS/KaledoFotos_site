import type { Foto } from "./foto";

export interface Main {
  data: Ensaio[];
  meta: Meta;
}

export interface Ensaio {
  id: number;
  documentId: string;
  Titulo: string;
  link_da_pagina: string;
  Descricao: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Fotos: Foto[];
  Foto_capa: Foto;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
