import IEelement from "./element.model";
import Inventory from "./Inventory.model";
import Lecture from "./Lecture.model";

export default class Module implements IEelement {
  constructor(
    public id: string,
    public name: string,
    public lectures: Inventory<Lecture>
  ) {}

  equals(element: Module): boolean {
    return this.id === element.id;
  }
}
