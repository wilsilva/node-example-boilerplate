import "reflect-metadata";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { InversifyExpressServer } from "inversify-express-utils";

import container from "./resources";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

server.setErrorConfig((app) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Error, _req: Request, res: Response, _next: unknown) => {
    console.error(err.stack);
    res.status(400).json({ error: err.message });
  });
});

const app = server.build();

app.listen(3000, () => console.log("Server running on port 3000"));
