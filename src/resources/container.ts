import { Container } from "inversify";

/**
 * @controllers
 */
import "../application/http/controllers/course.controller";

import ICourseRepository from "../core/repositories/course.repository";
import CourseService from "../core/services/course.service";
import CourseRepository from "../infra/database/repositories/course.repository";
import { REPOSITORY_TYPES, SERVICE_TYPES } from "./types";

const container = new Container();

/**
 * @Repositories
 */
container.bind<ICourseRepository>(REPOSITORY_TYPES.Course).to(CourseRepository);

/**
 * @Services
 */
container.bind<CourseService>(SERVICE_TYPES.Course).to(CourseService);

export default container;
