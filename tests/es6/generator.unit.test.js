import { helloWorld } from '../../src/es6/generator';
  describe("Test suite generator", () => {
    test("Should multiple generator", () => {
      const generatorHello = helloWorld();
        
      expect(generatorHello.next().value).toBe('Hello, ');
      expect(generatorHello.next().value).toBe('World');
      expect(generatorHello.next().value).toBeUndefined();
    });
  });