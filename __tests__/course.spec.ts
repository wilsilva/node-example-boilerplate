// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";

import server from "../src/application/http/server";
import Course from "../src/core/models/course.model";

describe("POST /courses", () => {
  const app = server.build();
  let request: supertest.SuperTest<supertest.Test>;

  beforeAll(() => {
    request = supertest(app);
  });

  it("Should create a new course", async () => {
    const course = new Course("1", "Course tests", "description tests", 4);
    const response = await request.post("/courses").send(course);

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(course);
  });

  it("We try create a new course with the same id, and should return an error", async () => {
    const course = new Course("1", "Course tests", "description tests", 4);
    const response = await request.post("/courses").send(course);

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(400);
    expect(response.body).toEqual({ error: "Has a course with the same id" });
  });

  it("Should return a course by id", async () => {
    const response = await request.get("/courses/1").send();
    expect(response.body).toEqual(
      new Course("1", "Course tests", "description tests", 4)
    );
  });

  it("Should return a list of courses", async () => {
    const response = await request.get("/courses").send();
    expect(response.body).toEqual(
      Array(new Course("1", "Course tests", "description tests", 4))
    );
  });
});
