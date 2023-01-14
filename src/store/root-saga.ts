import { all, call } from "typed-redux-saga/macro";
import { newsSaga } from "./news/news.saga";
import { articleSaga } from "./article/article.saga";

export function* rootSaga() {
  yield all([call(newsSaga), call(articleSaga)]);
}
