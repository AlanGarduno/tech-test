import { Request, Response } from "express";
import { UserSerivce } from "../services/user.service";

const userService = new UserSerivce();

export class UserController {

  public async postData(req: Request, res: Response) {
    await userService.addRegistry(req, res);
  }
}