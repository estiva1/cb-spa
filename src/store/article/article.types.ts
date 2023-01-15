export enum ArticleActionTypes {
  FETCH_ARTICLE_START = "FETCH_ARTICLE_START",
  FETCH_ARTICLE_SUCEES = "FETCH_ARTICLE_SUCEES",
  FETCH_ARTICLE_ERROR = "FETCH_ARTICLE_ERROR",
}

export interface IArticle {
  id: any;
  title: string;
  imageUrl: string;
  summary: string;
}

export interface ArticleState {
  id: any;
  article: any;
  isFetching: boolean;
  error: null | string;
}

export interface FetchArticleStart {
  type: ArticleActionTypes.FETCH_ARTICLE_START;
  payload: any;
}

export interface FetchArticleSuccess {
  type: ArticleActionTypes.FETCH_ARTICLE_SUCEES;
  payload: any;
}

export interface FetchArticleError {
  type: ArticleActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}

export type ArticleAction =
  | FetchArticleStart
  | FetchArticleSuccess
  | FetchArticleError;
