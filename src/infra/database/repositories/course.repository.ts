import { injectable } from "inversify";

import Course from "../../../core/entities/course.entity";
import IRepository from "./repository";

@injectable()
export default class CourseRepository implements IRepository<Course> {
  private static courses: Array<Course> = [];

  create(entity: Course): Course {
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
}
