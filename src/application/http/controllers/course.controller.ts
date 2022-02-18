import { Request, Response } from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  response,
} from "inversify-express-utils";

import Course from "../../../core/entities/course.entity";
import CourseService from "../../../core/services/course.service";

@controller("/courses")
export default class CourseController {
  constructor(@inject("course.service") private service: CourseService) {}

  @httpGet("/")
  getAll(@response() response: Response<Course[]>): Response {
    return response.json(this.service.retrieveAll());
  }

  @httpPost("/")
  create(
    @request() request: Request,
    @response() response: Response<Course>
  ): Response {
    const course = request.body as Course;
    return response.json(this.service.create(course));
  }
}
