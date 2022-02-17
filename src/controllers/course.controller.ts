import { Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, response } from "inversify-express-utils";

import CourseService from "../services/course.service";

@controller("/courses")
export default class CourseController {
  constructor(@inject("course.service") private service: CourseService) {}

  @httpGet("/")
  getAll(@response() response: Response): Response {
    return response.json(this.service.retrieveAll());
  }
}
