import IEelement from "./element.model";

export default class Lecture implements IEelement {
  constructor(public id: string) {}

  equals(element: Lecture): boolean {
    return this.id === element.id;
  }
}
