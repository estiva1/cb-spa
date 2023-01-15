export enum ARTICLE_ACTION_TYPES {
  FETCH_ARTICLE_START = "FETCH_ARTICLE_START",
  FETCH_ARTICLE_SUCEES = "FETCH_ARTICLE_SUCEES",
  FETCH_ARTICLE_FAILED = "FETCH_ARTICLE_FAILED",
}

export type Article = {
  id: any;
  title: string;
  imageUrl: string;
  summary: string;
}

export type ArticleState = {
  id: any;
  article: string;
  isFetching: boolean;
  error: Error | null;
}
