import IEelement from "./element.model";

export default class Inventory<T extends IEelement> {
  private readonly elements: Array<T> = [];

  /**
   * to add a new element
   * @param element T
   */
  add(element: T): void {
    this.elements.push(element);
  }

  /**
   * Check if contains element into array
   * @param element T
   * @returns boolean
   */
  contains(element: T): boolean {
    return (
      this.elements.find((el) => el.equals(element) === true) !== undefined
    );
  }

  /**
   * get position from a specific element.
   * @param element T
   * @returns number
   */
  position(element: T): number {
    const elementOnInventory = this.elements.find(
      (el) => el.equals(element) === true
    );

    if (elementOnInventory === undefined) {
      return undefined;
    }

    return this.elements.indexOf(elementOnInventory);
  }

  /**
   * return a list of items
   * @returns Array<T>
   */
  toArray(): Array<T> {
    return this.elements;
  }
}
