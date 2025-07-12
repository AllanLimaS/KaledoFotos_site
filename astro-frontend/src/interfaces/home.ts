import type { Foto } from "./foto";

export interface Main {
  data: Home;
  meta: Meta;
}

export interface Home {
  id: number;
  documentId: string;
  Titulo: string;
  CTA: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Carrossel: Foto[];
}

export interface Meta {}
