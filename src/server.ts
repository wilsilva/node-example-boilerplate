import "reflect-metadata";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";

import container from "./resources";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

const app = server.build();

app.listen(3000, () => console.log("Server running on port 3000"));
