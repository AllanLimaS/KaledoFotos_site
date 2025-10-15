import path from "path";

export default ({ env }) => {
  const isCloud = !!env("DATABASE_URL");
  const client = isCloud ? "postgres" : "sqlite";

  const connections = {
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        ssl: {
          rejectUnauthorized: false,
        },
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
    },
  };
};
