import { Container } from "inversify";

import Course from "./core/entities/course.entity";
import CourseService from "./core/services/course.service";
import CourseRepository from "./infra/database/repositories/course.repository";
import IRepository from "./infra/database/repositories/repository";

/**
 * @controllers
 */
import "./application/http/controllers/course.controller";

const container = new Container();

/**
 * @Repositories
 */
container.bind<IRepository<Course>>("course.repository").to(CourseRepository);

/**
 * @Services
 */
container.bind<CourseService>("course.service").to(CourseService);

export default container;
