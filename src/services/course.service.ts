import { Inject, Service } from "typedi";

import Course from "../entities/course.entity";
import IRepository from "../repositories/repository";

@Service()
export default class CourseService {
  constructor(
    @Inject("course.repository") private repository: IRepository<Course>
  ) {}

  retrieveAll(): Array<Course> {
    return this.repository.findAll();
  }
}
