import { inject, injectable } from "inversify";

import IRepository from "../../infra/database/repositories/repository";
import Course from "../entities/course.entity";

@injectable()
export default class CourseService {
  constructor(
    @inject("course.repository") private repository: IRepository<Course>
  ) {}

  retrieveAll(): Array<Course> {
    return this.repository.findAll();
  }

  create(course: Course): Course {
    const hasCourseWithSameId = (course: Course): boolean => {
      if (this.retrieveAll().find((c) => course.id === c.id)) {
        return true;
      }

      return false;
    };

    if (hasCourseWithSameId(course)) {
      throw Error("Has a course with the same id");
    }
    return this.repository.create(course);
  }
}