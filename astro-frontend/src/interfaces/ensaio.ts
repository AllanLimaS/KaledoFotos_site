export interface Ensaio {
  id: number;
  documentId: string;
  Titulo: string;
  Descricao: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Fotos: Foto[]; // array de imagens
}

export interface Foto {
  id: number;
  name: string;
  url: string;
  caption?: string;
  alternativeText?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

interface ImageFormat {
  url: string;
  width: number;
  height: number;
  size: number;
  ext: string;
  mime: string;
}
