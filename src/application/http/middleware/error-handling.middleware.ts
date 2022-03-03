import { Request, Response } from "express";

import IApplicationError from "../../../core/errors/application.error";

export const errorHandling = (
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: unknown
) => {
  if (process.env.NODE_ENV === "dev") {
    console.error(err.stack);
  }

  if (Object.prototype.hasOwnProperty.call(err, "httpResponseStatusCode")) {
    return res
      .status((err as IApplicationError).httpResponseStatusCode)
      .json({ error: { message: err.message } });
  }

  if (err) {
    return res.status(500).json({ error: { message: err.message } });
  }

  return res;
};
