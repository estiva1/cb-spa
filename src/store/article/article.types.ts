export enum ARTICLE_ACTION_TYPES {
  FETCH_ARTICLE_START = "FETCH_ARTICLE_START",
  FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS",
  FETCH_ARTICLE_FAILED = "FETCH_ARTICLE_FAILED",
}

export type Article = {
  id: any;
  title: string;
  image_url: string;
  summary: string;
}

export type ArticleState = {
  id: any;
  article: string;
  isFetching: boolean;
  error: Error | null;
}
