export default class InvalidUUID implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(name = "invalid-uuid", message = "Invalid UUID.") {
    this.name = name;
    this.message = message;
  }
}
