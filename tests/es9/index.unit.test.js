import { helloWorld } from "../../src/es9";

describe("Test suite with demo change of ES9", () => {
  test("Should execute repose operator and destructure only the specify object", () => {
    const expectedResult = "Pedro";
    const expectedObjectResult = {
      age: 32,
      country: "VE",
    };
    const obj = {
      name: "Pedro",
      age: 32,
      country: "VE",
    };

    const { name, ...all } = obj;

    expect(name).toEqual(expectedResult);
    expect(all).toEqual(expectedObjectResult);
  });

  test("Should unified object", () => {
    const expectedResult = {
      name: "Pedro",
      age: 32,
      country: "VE",
    };
    const obj = {
      name: "Pedro",
      age: 32,
    };

    const newObject = {
      ...obj,
      country: "VE",
    };

    expect(newObject).toEqual(expectedResult);
  });

  test("Should resolve promise as the old way", () => {
    const expectedResult = "Hello World";

    helloWorld()
      .then((response) => expect(response).toEqual(expectedResult))
      .catch((error) => console.log(error))
      .finally(() => console.log('Finished'));
  });

  test("Should evaluate the regular expression and get each one of element", () => {
      const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

      const match = regexData.exec('2021-08-22');
      const year = match[1];
      const month = match[2];
      const day = match[3];

      expect(year).toBe("2021");
      expect(month).toBe("08");
      expect(day).toBe("22");
  });
});
