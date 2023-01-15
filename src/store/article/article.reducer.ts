import { AnyAction } from "redux";
import {
  fetchArticleFailed,
  fetchArticleStart,
  fetchArticleSuccess,
} from "./article.actions";

export type ArticleState = {
  readonly id: "";
  readonly article: any;
  readonly isFetching: boolean;
  readonly error: Error | null;
};

export const ARTICLE_INITIAL_STATE: ArticleState = {
  id: "",
  article: null,
  isFetching: false,
  error: null,
};

export const articleReducer = (
  state = ARTICLE_INITIAL_STATE,
  action: AnyAction
): ArticleState => {
  if (fetchArticleStart.match(action)) {
    return { ...state, isFetching: true };
  }
  if (fetchArticleSuccess.match(action)) {
    return { ...state, article: action.payload, isFetching: false };
  }
  if (fetchArticleFailed.match(action)) {
    return { ...state, error: action.payload, isFetching: false };
  }
  return state;
};
