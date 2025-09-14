require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "postgres",
    "database": process.env.DB_NAME || "test-db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres",
    "synchronize": true
  },
  "test": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "postgres",
    "database": process.env.DB_NAME || "test-db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres",
    "synchronize": false
  },
  "production": {
    "use_env_variable": process.env.DATABASE_URL || "postgres://user:password@localhost:5432/db-name",
    "dialect": "postgres"
  }
}