export default class NotFoundError extends Error {
  constructor(message = "Item not found.") {
    super(message);
    this.name = "not-found";
  }
}
