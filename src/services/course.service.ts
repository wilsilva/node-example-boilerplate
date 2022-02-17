import { inject, injectable } from "inversify";

import Course from "../entities/course.entity";
import IRepository from "../repositories/repository";

@injectable()
export default class CourseService {
  constructor(
    @inject("course.repository") private repository: IRepository<Course>
  ) {}

  retrieveAll(): Array<Course> {
    return this.repository.findAll();
  }
}
