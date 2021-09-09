// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/infrastructure/dev.sqlite3",
    },
    migrations: {
      directory: "./src/infrastructure/migrations",
    },
    seeds: {
      directory: "./src/infrastructure/seeds",
    },
  },
};
