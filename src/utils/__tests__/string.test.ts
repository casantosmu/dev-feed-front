import { capitalizeFirstWord } from "../string";

describe("Given a capitalizeFirstWord", () => {
  describe("When it receives 'testing word'", () => {
    test("Then it should return 'Testing word'", () => {
      const lowercaseString = "testing word";
      const expectedResult = "Testing word";

      const result = capitalizeFirstWord(lowercaseString);

      expect(result).toBe(expectedResult);
    });
  });
});
