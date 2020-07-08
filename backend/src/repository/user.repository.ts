import { UserModel } from "../models/user.model";
import { ConnectionFactory } from "./connection.factory";

export class UserRepository extends ConnectionFactory {

  public static async insetUser(user: UserModel) {
    return await this.knex("user").insert({
      name: user.name
    }, "id").returning("id");
  }

}