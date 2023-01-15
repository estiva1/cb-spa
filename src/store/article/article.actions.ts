import { ARTICLE_ACTION_TYPES, Article } from "./article.types";

import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FetchArticleStart =
  ActionWithPayload<ARTICLE_ACTION_TYPES.FETCH_ARTICLE_START, string | undefined>;

export type FetchArticleSuccess = ActionWithPayload<
  ARTICLE_ACTION_TYPES.FETCH_ARTICLE_SUCEES,
  Article
>;

export type FetchArticleFailed = ActionWithPayload<
  ARTICLE_ACTION_TYPES.FETCH_ARTICLE_FAILED,
  Error
>;

export const fetchArticleStart = withMatcher(
  (id: string | undefined): FetchArticleStart =>
    createAction(ARTICLE_ACTION_TYPES.FETCH_ARTICLE_START, id)
);

export const fetchArticleSuccess = withMatcher(
  (articleItem: Article): FetchArticleSuccess =>
    createAction(ARTICLE_ACTION_TYPES.FETCH_ARTICLE_SUCEES, articleItem)
);

export const fetchArticleFailed = withMatcher(
  (error: Error): FetchArticleFailed =>
    createAction(ARTICLE_ACTION_TYPES.FETCH_ARTICLE_FAILED, error)
);
