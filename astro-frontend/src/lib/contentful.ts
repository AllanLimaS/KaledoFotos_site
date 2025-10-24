import { ContentfulClient } from './api-client';
import type { ApiResponse } from './api-client';

export interface ContentfulConfig {
  spaceId: string;
  accessToken: string;
  environment?: string;
}

export function createContentfulClient(config: ContentfulConfig) {
  const environment = config.environment || 'master';
  const baseUrl = `https://cdn.contentful.com/spaces/${config.spaceId}/environments/${environment}`;
  
  return new ContentfulClient({
    baseUrl,
    token: config.accessToken
  });
}

// Funções auxiliares para buscar conteúdo específico
export async function getEntries<T>(
  client: ContentfulClient,
  contentType: string,
  query?: Record<string, string>
): Promise<ApiResponse<T[]>> {
  const defaultQuery = {
    content_type: contentType,
    ...query
  };

  return client.fetch<T[]>('entries', defaultQuery);
}

export async function getEntry<T>(
  client: ContentfulClient,
  contentType: string,
  entryId: string
): Promise<ApiResponse<T>> {
  return client.fetch<T>(`entries/${entryId}`);
}

// Função para buscar assets (imagens, arquivos, etc)
export async function getAsset(
  client: ContentfulClient,
  assetId: string
) {
  return client.fetch(`assets/${assetId}`);
}

// Função para adaptar o formato de imagem do Contentful para o formato usado no projeto
export function adaptContentfulImage(asset: any) {
  return {
    url: asset.fields.file.url,
    width: asset.fields.file.details.image.width,
    height: asset.fields.file.details.image.height,
    alternativeText: asset.fields.description || '',
  };
}