import { knex as setupKnex, Knex } from 'knex'

import { env } from './env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    directory: env.DATABASE_MIGRATIONS_DIR,
  },
}

export const knex = setupKnex(config)
