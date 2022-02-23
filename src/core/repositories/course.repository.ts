import Course from "../models/course.model";
import IRepository from "./repository";

export default interface ICourseRepository extends IRepository<Course> {
  findCoursesByCreatorId(creatorId: string): Array<Course>;
}
