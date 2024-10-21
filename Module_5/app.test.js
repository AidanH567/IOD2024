const request = require("supertest");
const app = require("./app");

describe("Calculator Routes", () => {
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);

  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  test("GET /calculator/subtract => difference of numbers", () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });

  test("GET /calculator/multiply => product of numbers", () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });

  test("GET /calculator/divide => quotient of numbers", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2,
        });
      });
  });

  test("GET /calculator/divide => division by zero", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=0`)
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({
          error: "Cannot divide by zero.",
        });
      });
  });
});
