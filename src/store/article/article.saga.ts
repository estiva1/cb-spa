import { all, call, put, takeLatest } from "typed-redux-saga/macro"; //Babel Macro plugin

import { ARTICLE_ACTION_TYPES } from "./article.types";
import { fetchArticleSuccess, fetchArticleFailed } from "./article.actions";
import { getArticle } from "../../utils/axios/axios.utils";

export function* fetchArticleAsync(action: any) {
  try {
    const { data } = yield call(getArticle, action.payload);
    yield put(fetchArticleSuccess(data));
  } catch (error) {
    yield put(fetchArticleFailed(error as Error));
  }
}

export function* fetchArticleStart() {
  yield takeLatest(ARTICLE_ACTION_TYPES.FETCH_ARTICLE_START, fetchArticleAsync);
}

export function* articleSaga() {
  yield all([call(fetchArticleStart)]);
}
