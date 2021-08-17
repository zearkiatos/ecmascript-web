const { newFunction, newFunctionES6 } = require("../../src/es6");
describe("Test suite with demo change of ES6", () => {
  test("Test params pass old way", () => {
    const expectedResult = "Pedro, 32, VE";

    const result = newFunction();

    expect(expectedResult).toBe(result);
  });

  test("Test params pass with default params ES6 way", () => {
    const expectedResult = "Pedro, 32, VE";

    const result = newFunctionES6();

    expect(expectedResult).toBe(result);
  });

  test("Should set string with concat", () => {
    let expectedResult = "Hello World";
    let hello = "Hello";
    let world = "World";

    let epicPhrase = hello + " " + world;

    expect(expectedResult).toBe(epicPhrase);
  });

  test("Should set string with concat with ES6", () => {
    let expectedResult = "Hello World";
    let hello = "Hello";
    let world = "World";

    let epicPhrase = `${hello} ${world}`;

    expect(expectedResult).toBe(epicPhrase);
  });
});
