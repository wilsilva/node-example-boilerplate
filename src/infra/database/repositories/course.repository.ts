import { injectable } from "inversify";

import Course from "../../../core/models/course.model";
import ICourseRepository from "../../../core/repositories/course.repository";
import * as uuid from "../../utils/uuid";
import InvalidUUID from "../errors/invalid-uuid.error";

@injectable()
export default class CourseRepository implements ICourseRepository {
  private static courses: Array<Course> = [];

  create(entity: Course): Course {
    const course = entity;

    if (!course.id) {
      course.id = uuid.generate();
    }

    if (!uuid.isValid(course.id)) {
      throw new InvalidUUID();
    }

    CourseRepository.courses.push(entity);
    return entity;
  }
  findById(id: string): Course {
    return CourseRepository.courses.find((course) => course.id === id);
  }
  findAll(): Array<Course> {
    return CourseRepository.courses;
  }

  update(id: string, entity: Course): Course {
    CourseRepository.courses = CourseRepository.courses.map((course) => {
      if (course.id === id) {
        return entity;
      }
      return course;
    });

    return CourseRepository.courses.find((course) => course.id === entity.id);
  }

  delete(entity: Course): boolean {
    const oldSize = CourseRepository.courses.length;

    CourseRepository.courses = CourseRepository.courses.filter(
      (course) => course.id !== entity.id
    );

    const newSize = CourseRepository.courses.length;

    if (newSize < oldSize) {
      return true;
    }

    return false;
  }

  findCoursesByCreatorId(creatorId: string): Course[] {
    throw new Error("Method not implemented.");
  }
}
