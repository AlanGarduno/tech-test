// Update with your config settings.  
module.exports = {

  development: {
    client: 'pg',
    version: '8.0',
    connection: {
      host: process.env.KNEX_HOST,
      database: process.env.KNEX_DATABASE,
      user: process.env.KNEX_USERNAME,
      password: process.env.KNEX_PASSWORD,
      port: process.env.KNEX_PORT,
      options: {
        encrypt: true
      }
    },
    searchPath: ['knex', 'public'],
    pool: {
      min: 1,
      max: 200
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.KNEX_CONNECTION,
    version: '8.0',
    connection: {
      host: process.env.KNEX_HOST,
      database: process.env.KNEX_DATABASE,
      user: process.env.KNEX_USERNAME,
      password: process.env.KNEX_PASSWORD,
      port: process.env.KNEX_PORT,
      options: {
        encrypt: true
      }
    },
    searchPath: ['knex', 'public'],
    pool: {
      min: 1,
      max: 200
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.KNEX_CONNECTION,
    version: '8.0',
    connection: {
      host: process.env.KNEX_HOST,
      database: process.env.KNEX_DATABASE,
      user: process.env.KNEX_USERNAME,
      password: process.env.KNEX_PASSWORD,
      port: process.env.KNEX_PORT,
      options: {
        encrypt: true
      }
    },
    searchPath: ['knex', 'public'],
    pool: {
      min: 1,
      max: 200
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
