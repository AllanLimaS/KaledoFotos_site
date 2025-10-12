export function CheckImageUrl(url) {
    // Verifica se a URL já é completa (começa com "http" ou "https")
    return url.startsWith("http") ? url : `${import.meta.env.STRAPI_URL}${url}`;
}
