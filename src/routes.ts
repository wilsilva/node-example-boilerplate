import { Router } from "express";

import { createCourses, getCourses, main } from "./handlers";

const router = Router();

router.get("/", main);

router.get("/courses", getCourses);
router.post("/courses", createCourses);

export default router;
