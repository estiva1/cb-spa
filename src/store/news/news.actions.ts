import { NEWS_ACTION_TYPES, News } from "./news.types";

import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FetchNewsStart = Action<NEWS_ACTION_TYPES.FETCH_NEWS_START>;

export type FetchNewsSuccess = ActionWithPayload<
  NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS,
  News[]
>;

export type FetchNewsFailed = ActionWithPayload<
  NEWS_ACTION_TYPES.FETCH_NEWS_FAILED,
  Error
>;

export const fetchNewsStart = withMatcher(
  (): FetchNewsStart => createAction(NEWS_ACTION_TYPES.FETCH_NEWS_START)
);

export const fetchNewsSuccess = withMatcher(
  (newsArray: News[]): FetchNewsSuccess =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS, newsArray)
);

export const fetchNewsFailed = withMatcher(
  (error: Error): FetchNewsFailed =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAILED, error)
);
