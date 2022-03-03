import IEelement from "./element.model";

export default class Inventory<T extends IEelement> {
  private readonly elements: Array<T> = [];

  add(element: T): void {
    this.elements.push(element);
  }

  /**
   * Check if contains element into array
   * @param element
   * @returns boolean
   */
  contains(element: T): boolean {
    return (
      this.elements.find((el) => el.equals(element) === true) !== undefined
    );
  }

  position(element: T): number {
    const elementOnInventory = this.elements.find(
      (el) => el.equals(element) === true
    );

    if (elementOnInventory === undefined) {
      return undefined;
    }

    return this.elements.indexOf(elementOnInventory);
  }

  toArray(): Array<T> {
    return this.elements;
  }
}
