import { Request, Response } from "express";

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

  switch (err.name) {
    case "not-found":
      return res.status(404).json({ error: err.message });
    default:
      return res.status(400).json({ error: err.message });
  }
};
