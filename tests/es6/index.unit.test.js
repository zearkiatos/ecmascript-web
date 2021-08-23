const {
  newFunction,
  newFunctionES6,
  slugFormat,
  greetingName,
  square,
  helloPromise,
} = require("../../src/es6");
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
    const fn = function () {
      var global = "Global Var";
      let globalLet = "Global Let";
    };

    expect(global).toBeDefined();
  });

  test("Should create a new object", () => {
    const expectedResult = {
      name: "Pedro",
      age: 32,
    };
    let name = "Pedro";
    let age = 32;

    const obj = { name: name, age: age };

    expect(obj).toEqual(expectedResult);
  });

  test("Should create a new object with ES6", () => {
    const expectedResult = {
      name: "Pedro",
      age: 32,
    };
    let name = "Pedro";
    let age = 32;

    const obj = { name, age };

    expect(obj).toEqual(expectedResult);
  });

  test("Should run the array with map", () => {
    const expectedResult = ["Pedro", "Yessica"];
    const names = [
      {
        name: "Pedro",
        age: 32,
      },
      {
        name: "Yessica",
        age: 27,
      },
    ];

    let listOfNames = names.map(function (item) {
      return item.name;
    });

    expect(listOfNames).toEqual(expectedResult);
  });

  test("Should run the array with map with arrow function with ES6", () => {
    const expectedResult = ["Pedro", "Yessica"];
    const names = [
      {
        name: "Pedro",
        age: 32,
      },
      {
        name: "Yessica",
        age: 27,
      },
    ];

    let listOfNames = names.map((item) => item.name);

    expect(listOfNames).toEqual(expectedResult);
  });

  test("Should return a string with slug format based in an arrow function", () => {
    const expectedResult = "Pedro-32-VE";

    let dataSluged = slugFormat("Pedro", 32, "VE");

    expect(dataSluged).toEqual(expectedResult);
  });

  test("Should return a string with a greeting", () => {
    const expectedResult = "Hi Pedro";

    let greeting = greetingName("Pedro");

    expect(greeting).toEqual(expectedResult);
  });

  test("Should elevate a number to square", () => {
    const expectedResult = 4;

    let elevated = square(2);

    expect(elevated).toEqual(expectedResult);
  });

  test("Should managment promise with resolved", () => {
    const expectedResult = "Hey! 🟢";

    helloPromise()
      .then((response) => expect(response).toBe(expectedResult))
      .catch((error) => error);
  });

  test("Should managment promise with reject", () => {
    const expectedResult = "Ups!! something was wrong 💥";
    helloPromise(false)
      .then((response) => response)
      .catch((error) => expect(error).toBe(expectedResult));
  });
});
