import Inventory from "./Inventory.model";
import Module from "./module.model";

export default class Course {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public duration: number,
    public modules?: Inventory<Module>
  ) {}
}
