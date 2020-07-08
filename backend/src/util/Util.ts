import { Request, Response } from "express";
import { CodeHttpStatus } from "./code.http.status";


export class Util {

  public wrapAsync( fn: any ) {
    return function(req: Request, res: Response, next: any) {
      fn(req, res).catch(next);
    };
  }

  public errorHandler(error: Error, req: Request, res: Response, next: any) {
    res.status(CodeHttpStatus.BAD_REQUEST).json({
      error: error.message
    });
  }
}
