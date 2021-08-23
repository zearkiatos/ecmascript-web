const Calculator = require('../../src/es6/calculator');
  describe("Test suite for calculator class", () => {
    test("Should sum two values", () => {
     const expectedResult = 20;
  
      const calculator = new Calculator();
      const result = calculator.sum(15, 5);
        
      expect(expectedResult).toBe(result);
    });
  });