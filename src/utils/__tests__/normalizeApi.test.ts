import { normalizeApi } from "..";
import { config } from "@/config";
import dateLib from "@/dateLib";
import { FeedAPI, Feed } from "@/types";

describe("Given a feed function", () => {
  describe("When it receives a feed", () => {
    test(
      "Then it should return the received feed with more data " +
        "(detailsPath, timeFromNow, categoryPath, userPath, urlHostname, image url)",
      () => {
        const timeFromNow = "since 1 second";
        const imageUrl = "http://mocked-endpoint.com";
        dateLib.timeFromNow = jest.fn().mockReturnValue(timeFromNow);
        // Mock IMAGES_ENDPOINT environment configuration
        Object.defineProperty(config, "imagesEndpoint", {
          value: imageUrl,
        });
        const feed: FeedAPI = {
          id: "1234",
          description: "A very long long description.",
          createdBy: "carlos",
          category: "articles",
          createdAt: "august",
          url: "http://url.ts",
          heading: "Im a heading. Hello!",
          image: {
            description: "Some image description",
            filename: "my-photo.jpg",
            height: 45,
            width: 45,
          },
          isVoted: true,
          totalComments: 2340,
          totalViews: 234,
          totalVotes: 34,
        };
        const expectedResult: Feed = {
          ...feed,
          timeFromNow,
          image: {
            ...feed.image,
            url: "http://mocked-endpoint.com/my-photo.jpg",
          },
          detailsPath: "/articles/1234",
          categoryPath: "/articles",
          userPath: "/user/carlos",
          urlHostname: "url.ts",
        };

        const result = normalizeApi.feed(feed);

        expect(result).toStrictEqual(expectedResult);
      }
    );
  });
});
