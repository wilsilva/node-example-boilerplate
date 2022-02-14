import { Request, Response } from "express";
import Container from "typedi";

import CourseController from "./controllers/course.controller";

export const main = (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello world" });
};

export const createCourses = (req: Request, res: Response) => {
  const { name } = req.body;
  return res.json({ name });
};

export const getCourses = (_req: Request, res: Response) => {
  const controller = Container.get(CourseController);
  return res.json(controller.getAll());
};
