import bodyParser from "body-parser";
import cors = require("cors");
import express from "express";
import helmet = require("helmet");
import { Routes } from "./routes/routes";
import { Util } from "./util/util";

class App {

  public app: express.Application;
  public routes: Routes = new Routes();
  private util: Util = new Util();

  constructor() {
    this.app = express();
    this.configRequest();
    this.configServer();
    this.routes.routes(this.app);
    this.app.use(this.util.errorHandler);
  }

  private configRequest(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
  }

  private configServer(): void {
    this.app.use(helmet());
    this.app.use(cors());
  }

}

export default new App().app;