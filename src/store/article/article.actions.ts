import { IArticle, ArticleActionTypes } from "./article.types";

export const fetchArticleStart = (id: any) => ({
  type: ArticleActionTypes.FETCH_ARTICLE_START,
  payload: id,
});
export const fetchArticleSuccess = (article: IArticle) => ({
  type: ArticleActionTypes.FETCH_ARTICLE_SUCEES,
  payload: article,
});
export const fetchArticleError = (error: string | null) => ({
  type: ArticleActionTypes.FETCH_ARTICLE_ERROR,
  payload: error,
});
