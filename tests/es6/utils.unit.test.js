import hello from "../../src/es6/utils";
describe("Test suite for module", () => {
  test("Should return a string with a greeting", () => {
    const expectedResult = "hello!";

    const result = hello();

    expect(expectedResult).toBe(result);
  });
});
