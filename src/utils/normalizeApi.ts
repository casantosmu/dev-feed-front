import { string } from ".";
import dateLib from "../lib/dateLib";
import { FeedBase, FeedNormalized } from "../types";

export const feed = (feed: FeedBase): FeedNormalized => {
  return {
    ...feed,
    detailsPath: `/${feed.category}/${feed.id}`,
    timeFromNow: dateLib.timeFromNow(feed.createdAt),
    categoryText: string.capitalizeFirstWord(feed.category),
    categoryPath: `/${feed.category}`,
    userPath: `/user/${feed.userAuthor}`,
    externalUrlHostname: string.getHostname(feed.externalUrl),
  };
};

const normalizeApi = {
  feed,
};

export default normalizeApi;
