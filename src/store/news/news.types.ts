export enum NEWS_ACTION_TYPES {
  FETCH_NEWS_START = "FETCH_NEWS_START",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_FAILED = "FETCH_NEWS_FAILED",
}

export type News = {
  id: number;
  image_url: string;
  title: string;
  summary: string;
  published_at: string;
};