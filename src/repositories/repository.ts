export default interface IRepository<T> {
  create(entity: T): T;
  findById(id: string): T;
  findAll(): Array<T>;
  update(entity: T): T;
  delete(entity: T): boolean;
}
