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
  Fotos: FotoComponent[];
}

export interface FotoComponent {
  id: number;
  Titulo_da_foto: string;
  Informacoes_complementares: string;
  Foto: Foto;
}

export interface Foto {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export enum EXT {
  JPEG = ".jpeg",
  Jpg = ".jpg",
  PNG = ".png",
}

export interface Formats {
  thumbnail: Large;
  small?: Large;
  medium?: Large;
  large?: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
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
