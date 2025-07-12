import type { Foto } from "./foto";

export interface Main {
  data: Global;
  meta: Meta;
}

export interface Global {
  id: number;
  documentId: string;
  siteName: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  defaultSeo: SEO;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: Foto;
}

export interface Meta {}
