import IApplicationError from "./application.error";

export default class NotFoundError implements IApplicationError {
  name: string;
  message: string;
  stack?: string;
  httpResponseStatusCode: number;

  constructor(
    message = "Item not found.",
    name = "not-found",
    httpResponseStatusCode = 404
  ) {
    this.message = message;
    this.name = name;
    this.httpResponseStatusCode = httpResponseStatusCode;
  }
}
