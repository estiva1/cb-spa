import { AnyAction } from "redux";
import { News } from "./news.types";
import { fetchNewsFailed, fetchNewsStart, fetchNewsSuccess } from "./news.actions";

export type NewsState = {
  readonly news: News[];
  readonly isFetching: boolean;
  readonly error: Error | null;
};

export const NEWS_INITIAL_STATE: NewsState = {
  news: [],
  isFetching: false,
  error: null,
};

export const newsReducer = (state = NEWS_INITIAL_STATE, action: AnyAction): NewsState => {
  if (fetchNewsStart.match(action)) {
    return { ...state, isFetching: true };
  }
  if (fetchNewsSuccess.match(action)) {
    return { ...state, news: action.payload, isFetching: false };
  }
  if (fetchNewsFailed.match(action)) {
    return { ...state, error: action.payload, isFetching: false };
  }
  return state;
};
