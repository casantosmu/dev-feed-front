import { string } from ".";
import { config } from "../config";
import dateLib from "../lib/dateLib";
import { FeedAPI, Feed } from "../types";

export const feed = (feed: FeedAPI): Feed => {
  return {
    ...feed,
    detailsPath: `/${feed.category}/${feed.id}`,
    timeFromNow: dateLib.timeFromNow(feed.createdAt),
    categoryPath: `/${feed.category}`,
    userPath: `/user/${feed.createdBy}`,
    urlHostname: string.getHostname(feed.url),
    image: {
      ...feed.image,
      url: `${config.imagesEndpoint}/${feed.image.filename}`,
    },
  };
};
