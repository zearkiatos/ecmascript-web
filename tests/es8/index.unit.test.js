import { helloAsync, anotherAsyncFunction } from '../../src/es8'
describe("Test suite with demo change of ES8", () => {
  test("Should convert a object to array", () => {
    const expectedResult = [
        [
            'frontend', 'Oscar'
        ],
        [
            'backend', 'Isabel'
        ],
        [
            'design', 'Ana'
        ],
    ];
    const data = {
      frontend: "Oscar",
      backend: "Isabel",
      design: "Ana",
    };

    const entries = Object.entries(data);

    expect(entries).toEqual(expectedResult);
    expect(entries.length).toBe(3);
  });

  test("Should return the values element of an object in an array", () => {
    const expectedResult = ['Oscar', 'Isabel', 'Ana'];
    const data = {
      frontend: "Oscar",
      backend: "Isabel",
      design: "Ana",
    };

    const values = Object.values(data);

    expect(values).toEqual(expectedResult);
    expect(values.length).toBe(3);
  });

  test("Should return a string convert with new strings to the start of the string", () => {
    const expectedResult = 'hihello';
    const string = 'hello';

    const stringConverted = string.padStart(7,'hi');

    expect(stringConverted).toEqual(expectedResult);
  });

  test("Should return a string convert with new strings to the end of the string", () => {
    const expectedResult = 'helloworld';
    const string = 'hello';

    const stringConverted = string.padEnd(10,'world');

    expect(stringConverted).toEqual(expectedResult);
  });

  test("Should result a promise with async await", async () => {
    const expectedResult = 'Hello World';

    const hello = await helloAsync(true);

    expect(hello).toEqual(expectedResult);
  });

  test("Should result a promise with async await with a reject", async () => {
    const expectedResult = '🛑 Something was Wrong!';

    try {
      await helloAsync(false);
    }
    catch(exception) {
      expect(exception.message).toEqual(expectedResult);
    }
  });

  test("Should return in the try result a promise with async await", async () => {
    const expectedResult = 'Hello World';

    const hello = await anotherAsyncFunction(true);

    expect(hello).toEqual(expectedResult);
  });

  test("Should return result a promise with async await with a reject from catch", async () => {
    const expectedResult = '🛑 Something was Wrong!';

    try {
      await anotherAsyncFunction(false);
    }
    catch(exception) {
      expect(exception.message).toEqual(expectedResult);
    }

  });


});
