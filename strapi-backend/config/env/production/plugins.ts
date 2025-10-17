export default ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        timeout: 250000,
      },
      actionOptions: {
        upload: {
        },
        uploadStream: {
        },
        delete: {},
      },
      sizeLimit: 250 * 1024 * 1024, // 10 MB por arquivo
    },
  },
});
