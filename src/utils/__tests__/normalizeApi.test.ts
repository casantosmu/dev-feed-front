import dateLib from "../../lib/dateLib";
import { FeedBase, FeedNormalized } from "../../types";
import normalizeApi from "../normalizeApi";

describe("Given a feed function", () => {
  describe("When it receives a feed", () => {
    test(
      "Then it should return the received feed with more data " +
        "(detailsPath, timeFromNow, categoryText, categoryPath, userPath, externalUrlHostname)",
      () => {
        const timeFromNow = "1 second";
        dateLib.timeFromNow = jest.fn().mockReturnValue(timeFromNow);
        const feed: FeedBase = {
          id: "1234",
          userAuthor: "carlos",
          category: "articles",
          createdAt: "august",
          externalUrl: "http://url.ts",
          heading: "Im a heading. Hello!",
        };
        const expectedResult: FeedNormalized = {
          ...feed,
          timeFromNow,
          detailsPath: "/articles/1234",
          categoryText: "Articles",
          categoryPath: "/articles",
          userPath: "/user/carlos",
          externalUrlHostname: "url.ts",
        };

        const result = normalizeApi.feed(feed);

        expect(result).toStrictEqual(expectedResult);
      }
    );
  });
});
