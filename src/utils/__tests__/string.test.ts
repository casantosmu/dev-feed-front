import { string } from "..";

describe("Given a capitalizeFirstWord function", () => {
  describe("When it receives 'testing word'", () => {
    test("Then it should return 'Testing word'", () => {
      const lowercaseString = "testing word";
      const expectedResult = "Testing word";

      const result = string.capitalizeFirstWord(lowercaseString);

      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given a getHostname function", () => {
  describe("When it receives 'http://www.host.name/some/paths?query=true&more=true'", () => {
    test("Then it should return 'www.host.name'", () => {
      const fullUrl = "http://www.host.name/some/paths?query=true&more=true";
      const expectedHostname = "www.host.name";

      const result = string.getHostname(fullUrl);

      expect(result).toBe(expectedHostname);
    });
  });

  describe("When it receives 'https://host.name/'", () => {
    test("Then it should return 'www.host.name'", () => {
      const fullUrl = "https://host.name/";
      const expectedHostname = "host.name";

      const result = string.getHostname(fullUrl);

      expect(result).toBe(expectedHostname);
    });
  });

  describe("When it receives an empty string: ''", () => {
    test("Then it should return an empty string: ''", () => {
      const receivedString = "";
      const expectedResult = "";

      const result = string.getHostname(receivedString);

      expect(result).toBe(expectedResult);
    });
  });
});
