const config = require("./build/config/app.config");

// noinspection JSUnresolvedVariable
module.exports = {
  name: "default",
  type: "mariadb",
  host: config.App.DB_HOST,
  port: config.App.DB_PORT,
  username: config.App.DB_USER,
  password: config.App.DB_PASSWORD,
  database: config.App.DB_DATABASE,
  extra: {
    ssl: config.App.DB_SSL,
  },
  logging: false,
  cache: true,
  synchronize: false,
  entities: ["build/entities/**/*.js"],
  migrations: ["build/migrations/**/*.js"],
  subscribers: ["build/subscribers/**/*.js"],
  cli: {
    entitiesDir: "build/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "build/subscribers",
  },
};
