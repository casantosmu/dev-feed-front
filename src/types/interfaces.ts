import config from "../config";

export type Categories = typeof config.categories[number];

export interface FeedBase {
  id: string;
  heading: string;
  userAuthor: string;
  category: Categories;
  externalUrl: string;
  createdAt: string;
}

export interface FeedNormalized extends FeedBase {
  detailsPath: string;
  timeFromNow: string;
  categoryText: string;
  categoryPath: string;
  userPath: string;
  externalUrlHostname: string;
}
