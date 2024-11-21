import axios from "axios";
import { Article } from "../../store/article/article.types";
import { News } from "../../store/news/news.types";

export const getNews = () =>
  axios.get<News[]>("https://api.spaceflightnewsapi.net/v4/articles?_limit=50");

export const getArticle = (id: string | number) =>
  axios.get<Article>(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
