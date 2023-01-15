import { put, takeLatest, call, all } from "redux-saga/effects";
import axios from "axios";

import {
  fetchArticleSuccess,
  fetchArticleError,
} from "./article.actions";
import { IArticle, ArticleActionTypes } from "./article.types";

const getArticle = (id: string | number) =>
  axios.get<IArticle>(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);

function* fetchArticleAsync(action: any) {
  try {
    const { data } = yield call(getArticle, action.payload);
    yield put(fetchArticleSuccess(data));
  } catch (error: any) {
    yield put(fetchArticleError(error.message));
  }
}

function* fetchArticleStart() {
  yield takeLatest(ArticleActionTypes.FETCH_ARTICLE_START, fetchArticleAsync);
}

export function* articleSaga() {
  yield all([call(fetchArticleStart)]);
}
