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
    if (process.env.NODE_ENV === "dev") {
      console.error(err.stack);
    }

    res.status(400).json({ error: err.message });
  });
});

export const app = server.build();
