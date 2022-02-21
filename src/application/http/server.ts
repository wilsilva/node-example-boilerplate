import "reflect-metadata";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";

import container from "../../resources/container";
import { errorHandling } from "./middleware/error-handling.middleware";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

server.setErrorConfig((app) => app.use(errorHandling));

export default server;
