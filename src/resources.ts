import { Container } from "inversify";

import Course from "./entities/course.entity";
import CourseRepository from "./repositories/course.repository";
import IRepository from "./repositories/repository";
import CourseService from "./services/course.service";

/**
 * @controllers
 */
import "./controllers/course.controller";

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
