export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: env("DATABASE_URL"), // pega a variável injetada pelo Cloud
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
