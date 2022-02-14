import { Service } from "typedi";

import Course from "../entities/course.entity";

@Service()
export default class CourseService {
  retrieveAll(): Array<Course> {
    return [
      new Course(
        "Aprendendo NodeJS com Typescript e TypeDI",
        "Neste curso usamos typescript e typeDI para criar uma solução em NodeJS",
        4
      ),
    ];
  }
}
