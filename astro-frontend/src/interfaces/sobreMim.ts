import type { Foto } from "./foto";

export interface Main {
  data: SobreMim;
  meta: Meta;
}

export interface SobreMim {
  id: number;
  documentId: string;
  Texto: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  Foto: Foto;
}

export interface Meta {}
