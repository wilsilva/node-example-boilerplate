import { app }  from "../src/server";
import request from "supertest";
import Course from "../src/entities/course.entity";
import assert from "assert";

describe("POST /courses", () => {
 let server: request.SuperTest<request.Test>;
 beforeAll(() => {
  server = request(app);
 });
 
 it("Should create a new course", async () => {
  const course = new Course("1", "Course tests", "description tests", 4);
  const response = await server
   .post("/courses")
   .send(course);

   expect(response.headers["content-type"]).toMatch(/json/);
   expect(response.status).toEqual(200);
   expect(response.body).toEqual(course);
 })

 it("Should create a new course", async () => {
  const course = new Course("1", "Course tests", "description tests", 4);
  const response = await server
   .post("/courses")
   .send(course);

   expect(response.headers["content-type"]).toMatch(/json/);
   expect(response.status).toEqual(400);
   expect(response.body).toEqual({error: "Has a course with the same id"});
 })
})
