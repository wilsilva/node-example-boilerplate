import IApplicationError from "./application.error";

export default class ThereTheSameIDError implements IApplicationError {
  httpResponseStatusCode: number;
  name: string;
  message: string;
  stack?: string;

  constructor(
    message = "There is an item with the same id",
    name = "there-item-with-the-same-id",
    httpResponseCode = 400
  ) {
    this.httpResponseStatusCode = httpResponseCode;
    this.name = name;
    this.message = message;
  }
}
