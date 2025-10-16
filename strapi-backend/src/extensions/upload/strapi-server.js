// src/extensions/upload/strapi-server.js
export default (plugin) => {
  const originalUpload = plugin.controllers.upload.upload;

  plugin.controllers.upload.upload = async (ctx) => {
    const files = ctx.request.files?.files;

    // Se o usuário tentar enviar vários arquivos, faz o upload um por um
    if (Array.isArray(files)) {
      const results = [];
      for (const file of files) {
        ctx.request.files = { files: file };
        const result = await originalUpload(ctx);
        results.push(result);
      }

      ctx.body = results;
      return;
    }

    // Upload normal (único arquivo)
    return await originalUpload(ctx);
  };

  return plugin;
};
