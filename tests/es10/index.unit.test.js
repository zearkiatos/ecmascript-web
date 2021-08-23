describe("Test suite with demo change of ES9", () => {
  test("Should execute and test the function flat", () => {
    const expectedResult = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

    const arrayFlated = array.flat(2);

    expect(arrayFlated).toEqual(expectedResult);
  });

  test("Should execute and test the function flatMap", () => {
    const expectedResult = [1, 2, 2, 4, 3, 6, 4, 8, 5, 10];
    const array = [1, 2, 3, 4, 5];

    const arrayFlatMapped = array.flatMap((value) => [value, value * 2]);

    expect(arrayFlatMapped).toEqual(expectedResult);
  });

  test("Should delete blank space in the start of the string", () => {
    const expectedResult = "hello world";
    const hello = "      hello world";

    const helloTrimStart = hello.trimStart();

    expect(helloTrimStart).toEqual(expectedResult);
  });

  test("Should delete blank space in the end of the string", () => {
    const expectedResult = "hello world";
    const hello = "hello world       ";

    const helloTrimEnd = hello.trimEnd();

    expect(helloTrimEnd).toEqual(expectedResult);
  });

  test("Should convert an array to object", () => {
    const expectedResult = {
      name: "Pedro",
      age: 32,
    };
    const entries = [
      ["name", "Pedro"],
      ["age", 32],
    ];

    const object = Object.fromEntries(entries);

    expect(object).toEqual(expectedResult);
  });

  test("Should create a symbol with description", () => {
    const expectedResult = 'My Symbol';
    const mySymbl = `My Symbol`;
    
    const symbol = Symbol(mySymbl);

    expect(symbol.description).toEqual(expectedResult);
  });
});
