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
});
