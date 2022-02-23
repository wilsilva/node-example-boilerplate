import { inject, injectable } from "inversify";

import { REPOSITORY_TYPES } from "../../resources/types";
import NotFoundError from "../errors/notfound.error";
import Course from "../models/course.model";
import ICourseRepository from "../repositories/course.repository";

@injectable()
export default class CourseService {
  constructor(
    @inject(REPOSITORY_TYPES.Course) private repository: ICourseRepository
  ) {}

  retrieveAll(): Array<Course> {
    return this.repository.findAll();
  }

  create(course: Course): Course {
    const hasCourseWithSameId = (course: Course): boolean =>
      !!this.repository.findById(course.id);

    if (hasCourseWithSameId(course)) {
      throw Error("Has a course with the same id");
    }
    return this.repository.create(course);
  }

  retrieveById(id: string): Course {
    const course = this.repository.findById(id);

    if (!course) {
      throw new NotFoundError("course not found.");
    }

    return course;
  }

  update(id: string, course: Course): Course {
    return this.repository.update(id, course);
  }

  remove(id: string): boolean {
    return this.repository.delete(this.retrieveById(id));
  }
}
