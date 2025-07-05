interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  // monta a URL para a chamada à API
  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

  // adiciona os parâmetros de consulta, se houver
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  // faz a chamada à API
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
    },
  });

  // verifica se a resposta foi bem-sucedida
  if (!res.ok) {
    console.error("Erro na chamada à API:", await res.json());
    throw new Error(`Erro ao buscar dados: ${res.status}`);
  }

  // obtém os dados da resposta
  let data = await res.json();

  // se houver uma chave para desembrulhar os dados, faz isso
  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  // se os dados estiverem embrulhados em uma lista e a opção estiver ativada, desembrulha a lista
  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
