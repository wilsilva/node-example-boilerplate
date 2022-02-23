import { Request, Response } from "express";
import { inject } from "inversify";
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request,
  requestParam,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  response,
} from "inversify-express-utils";

import Course from "../../../core/models/course.model";
import CourseService from "../../../core/services/course.service";
import * as uuid from "../../../infra/utils/uuid";
import { SERVICE_TYPES } from "../../../resources/types";

@controller("/courses")
export default class CourseController {
  constructor(@inject(SERVICE_TYPES.Course) private service: CourseService) {}

  @httpGet("/")
  getAll(@response() response: Response<Course[]>): Response {
    return response.json(this.service.retrieveAll());
  }

  @httpPost("/")
  create(
    @request() request: Request,
    @response() response: Response
  ): Response {
    const course = request.body as Course;

    if (!course.id) {
      course.id = uuid.generate();
    }

    if (!uuid.isValid(course.id)) {
      return response.status(400).json({ error: "Invalid UUID." });
    }

    return response.status(201).json(this.service.create(course));
  }

  @httpGet("/:id")
  getById(
    @requestParam("id") id: string,
    @response() response: Response<Course>
  ): Response {
    return response.json(this.service.retrieveById(id));
  }

  @httpDelete("/:id")
  removeById(
    @requestParam("id") id: string,
    @response() response: Response
  ): Response {
    const deleted = this.service.remove(id);
    return response.json({ deleted });
  }
}
