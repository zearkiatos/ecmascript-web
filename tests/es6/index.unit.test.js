const { newFunction, newFunctionES6 } = require("../../src/es6");
describe("Test suite with demo change of ES6", () => {
  test("Should test params pass old way", () => {
    const expectedResult = "Pedro, 32, VE";

    const result = newFunction();

    expect(expectedResult).toBe(result);
  });

  test("Should test params pass with default params ES6 way", () => {
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

  test("Should set multiline text", () => {
    let expectedResult =
      "Qui consequatur. Commodi. Ipsum vel duis yet minima \nother epic phrase than we need";
    let lorem =
      "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
      "other epic phrase than we need";

    expect(expectedResult).toBe(lorem);
  });

  test("Should set multiline text in ES6", () => {
    let expectedResult = `Other epic phrase than we need
    now is another phrase epic`;

    let lorem = `Other epic phrase than we need
    now is another phrase epic`;

    expect(expectedResult).toBe(lorem);
  });

  test("Should get object attributes", () => {
    let person = {
      name: "Pedro",
      age: 32,
      country: "VE",
    };

    expect("Pedro").toBe(person.name);
    expect(32).toBe(person.age);
  });

  test("Should get object attributes with ES6 destructure", () => {
    let person = {
      name: "Pedro",
      age: 32,
      country: "VE",
    };

    const { name, age } = person;

    expect("Pedro").toBe(name);
    expect(32).toBe(age);
  });

  test("Should concat arrays with propagation mode with ES6", () => {
    const expectedResult = [
      "David",
      "Pedro",
      "Julian",
      "Ricardo",
      "Valeria",
      "Yessica",
      "Camila",
    ];
    const team1 = ["Pedro", "Julian", "Ricardo"];

    const team2 = ["Valeria", "Yessica", "Camila"];

    const education = ["David", ...team1, ...team2];

    expect(expectedResult).toEqual(education);
  });

  test("Should evalue let declaration and var declaration", () => {
    globalLet = undefined;
    const fn = function () {
      var global = "Global Var";
      let globalLet = "Global Let";
    };

    expect(global).toBeDefined();
    expect(globalLet).toBe(undefined);
  });
});
