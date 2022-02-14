import { Inject, Service } from "typedi";

import Course from "../entities/course.entity";
import CourseService from "../services/course.service";

@Service()
export default class CourseController {
  constructor(@Inject() private service: CourseService) {}

  getAll(): Array<Course> {
    return this.service.retrieveAll();
  }
}
