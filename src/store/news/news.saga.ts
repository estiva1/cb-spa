import { all, call, put, takeLatest } from "typed-redux-saga/macro"; //Babel Macro plugin

import { NEWS_ACTION_TYPES } from "./news.types";
import { fetchNewsSuccess, fetchNewsFailed } from "./news.actions";
import { getNews } from "../../utils/axios/axios.utils";

export function* fetchNewsAsync() {
  try {
    const { data } = yield call(getNews);
    yield put(fetchNewsSuccess(data));
  } catch (error) {
    yield put(fetchNewsFailed(error as Error));
  }
}

export function* onFetchNews() {
  yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_START, fetchNewsAsync);
}

export function* newsSaga() {
  yield all([call(onFetchNews)]);
}
