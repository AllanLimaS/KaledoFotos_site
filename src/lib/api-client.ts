export interface ApiClientConfig {
  baseUrl: string;
  token: string;
}

export interface QueryParams {
  [key: string]: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: any;
}

export abstract class ApiClient {
  protected config: ApiClientConfig;

  constructor(config: ApiClientConfig) {
    this.config = config;
  }

  abstract fetch<T>(endpoint: string, query?: QueryParams): Promise<ApiResponse<T>>;
}

// Implementação específica para Contentful
export class ContentfulClient extends ApiClient {
  async fetch<T>(endpoint: string, query?: QueryParams): Promise<ApiResponse<T>> {
    const url = new URL(`${this.config.baseUrl}/${endpoint}`);

    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${this.config.token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    const json = await res.json();
    return {
      data: json.items || json,
      meta: json.metadata,
    };
  }
}