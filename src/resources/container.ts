import { Container } from "inversify";

import "../application/http/controllers/course.controller";
import Course from "../core/entities/course.entity";
import CourseService from "../core/services/course.service";
import CourseRepository from "../infra/database/repositories/course.repository";
import IRepository from "../infra/database/repositories/repository";
import { REPOSITORY_TYPES, SERVICE_TYPES } from "./types";

const container = new Container();

/**
 * @Repositories
 */
container
  .bind<IRepository<Course>>(REPOSITORY_TYPES.Course)
  .to(CourseRepository);

/**
 * @Services
 */
container.bind<CourseService>(SERVICE_TYPES.Course).to(CourseService);

export default container;
