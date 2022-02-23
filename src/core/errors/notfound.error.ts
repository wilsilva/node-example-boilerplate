export default class NotFoundError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(message = "Item not found.") {
    this.message = message;
    this.name = "not-found";
  }
}
