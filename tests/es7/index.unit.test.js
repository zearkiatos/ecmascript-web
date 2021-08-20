describe("Test suite with demo change of ES7", () => {
  test("Should return truthy if the value exist", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    const existSeven = numbers.includes(7);

    expect(existSeven).toBeTruthy();
  });

  test("Should return falsy if the value not exist", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    const existSeven = numbers.includes(9);

    expect(existSeven).toBeFalsy();
  });

  test("Should elevate number to the potentia", () => {
    const base = 4;
    const exponent = 3;
    const expectedResult = 64;

    const result = base ** exponent;

    expect(expectedResult).toBe(result);
  });
});
