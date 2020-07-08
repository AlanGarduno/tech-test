import express from "express";
import { UserController } from "../controllers/user.controller";
import { Util } from "../util/util";

export class Routes {
  public userController: UserController = new UserController();
  public util = new Util();

  public routes(app: express.Application) {
    app.route("/api/user/")
    .post(this.util.wrapAsync(this.userController.postData));
  }
}