import { constants } from "@/config";

export type Categories = typeof constants.categories[number];

export interface ImageAPI {
  width: number;
  height: number;
  filename: string;
  description: string;
}

export interface Image extends ImageAPI {
  url: string;
}

export interface FeedAPI {
  id: string;
  heading: string;
  image: ImageAPI;
  description: string;
  createdBy: string;
  category: Categories;
  url: string;
  createdAt: string;
  isVoted: boolean;
  totalVotes: number;
  totalViews: number;
  totalComments: number;
}

export interface FeedDetailsAPI extends FeedAPI {
  comments: string[];
  tags: string[];
}

export interface Feed extends FeedAPI {
  image: Image;
  detailsPath: string;
  timeFromNow: string;
  categoryPath: string;
  userPath: string;
  urlHostname: string;
}
