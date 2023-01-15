import axios from "axios";
import { News } from "../../store/news/news.types";

export const getNews = () =>
  axios.get<News[]>("https://api.spaceflightnewsapi.net/v3/articles?_limit=50");
