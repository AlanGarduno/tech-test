import camelCaseKeys from "camelcase-keys";
import Knex from "knex";

export class ConnectionFactory {
  /**
   * @description Build a connection with the db
   */
  public static knex: Knex = Knex({
    client: process.env.KNEX_CONNECTION,
    debug: false,
    postProcessResponse: (result: any) => {
      if (Array.isArray(result)) {

        return result.map((row) => ConnectionFactory.convertToCamel(row));
      }
    },
    connection: {
      host: process.env.KNEX_HOST,
      user: process.env.KNEX_USERNAME,
      password: process.env.KNEX_PASSWORD,
      database: process.env.KNEX_DATABASE,
      port: parseInt(process.env.KNEX_DB_PORT, 10),
      options: {
        encrypt: true
      },
    },
    searchPath: ["knex", "public"],
    pool: {
      min: 2,
      max: 10
    }
  });

  public static convertToCamel(row: any) {
    return camelCaseKeys(row);
  }

}